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

app.get('/api/routine/day/:dayId', (req, res, next) => {
  const dayId = req.params.dayId;
  const sql = `
  select "d"."name" as "day",
         "e"."name" as "exercise",
         "e"."description",
         "e"."exerciseId"
  from "day" as "d"
  join "dayExercise" using ("dayId")
  join "exercise" as "e" using ("exerciseId")
  where "dayId" = $1
  `;
  const params = [dayId];
  db.query(sql, params)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/routine/exercise/:exerciseId', (req, res, next) => {
  const exerciseId = parseInt(req.params.exerciseId, 10);
  if (!Number.isInteger(exerciseId) || exerciseId <= 0) {
    return res.status(400).json({
      error: 'exerciseId must be a positive integer'
    });
  }
  const sql = `
  select *
  from "exercise"
  where "exerciseId" = $1
  `;
  const params = [exerciseId];
  db.query(sql, params)
    .then(result => {
      const exercise = result.rows[0];
      if (exercise) {
        res.json(exercise);
      } else {
        res.status(500).json({
          error: `Can't find exercise with exerciseId ${exerciseId}`
        });
      }
    })
    .catch(err => next(err));
});

app.post('/api/routine', (req, res, next) => {
  const name = req.body.name;
  const desc = req.body.desc;
  const dayId = parseInt(req.body.dayId, 10);
  if (!Number.isInteger(dayId) || dayId <= 0) {
    return res.status(400).json({
      error: 'dayId must be a positive integer'
    });
  }
  if (name && desc && dayId) {
    const sql = `
  insert into "exercise" ("name", "description")
  values ($1, $2)
  returning "exerciseId"
  `;
    const params = [name, desc];
    db.query(sql, params)
      .then(result1 => {
        const exerciseId = result1.rows[0].exerciseId;
        const sql2 = `
        insert into "dayExercise" ("dayId", "exerciseId")
        values ($1, $2)
        returning *
        `;
        const params2 = [dayId, exerciseId];
        return db.query(sql2, params2)
          .then(result2 => {
            res.json(result2.rows[0]);
          });
      })
      .catch(err => next(err));
  } else if (!name) {
    res.status(400).json({ error: 'need a name' });
  } else if (!desc) {
    res.status(400).json({
      error: 'need a description'
    });
  }
});

app.delete('/api/routine', (req, res, next) => {
  const exerciseId = parseInt(req.body.exerciseId, 10);
  const dayId = parseInt(req.body.dayId, 10);
  if (!Number.isInteger(exerciseId) || exerciseId <= 0) {
    return res.status(400).json({
      error: 'exerciseId must be a positive integer'
    });
  }
  if (!Number.isInteger(dayId) || dayId <= 0) {
    return res.status(400).json({
      error: 'dayId must be a positive integer'
    });
  }
  const sql = `
  delete from "exercise"
  where "exerciseId" = $1 and "default" = $2
  returning *
  `;
  const params = [exerciseId, 'false'];
  db.query(sql, params)
    .then(result => {
      const exercise = result.rows[0];
      if (!exercise) {
        res.status(404).json({
          error: `Can't find exercise with exerciseId ${exerciseId}`
        });
      } else {
        const sql2 = `
        delete from "dayExercise"
        where "dayId" = $1 and "exerciseId" = $2
        returning *
        `;
        const params2 = [dayId, exerciseId];
        return db.query(sql2, params2)
          .then(result2 => {
            res.status(202).json(result2.rows[0]);
          });
      }
    })
    .catch(err => next(err));
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
