require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/routine', (req, res, next) => {
  const sql = `
  select "name", "description"
  from "exercise"
  `;
  db.query(sql)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/routine/:exerciseId', (req, res, next) => {
  const exerciseId = parseInt(req.params.exerciseId, 10);
  const sql = `

  `;
});

app.post('/api/routine', (req, res, next) => {
  const name = req.body.name;
  const desc = req.body.desc;
  if (name && desc) {
    const sql = `
  insert into "exercise" ("name", "description")
  values ($1, $2)
  returning *
  `;
    const params = [name, desc];
    db.query(sql, params)
      .then(result1 => {
        res.status(201).json(result1.rows[0]);
      })
      .catch(err => next(err));
  } else {
    res.status(500).json('invalid inputs');
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({
      error: err.message
    });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
