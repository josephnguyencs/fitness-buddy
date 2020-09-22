import React from 'react';

function DefaultListItem(props) {
  return (
    <tbody>
      <tr>
        <td className="col-2">Diamond Pushups</td>
        <a className="btn btn-success btn-secondary align-middles mt-1 mr-2" href="#" role="button">Add</a>
      </tr>
    </tbody>
  );
}

export default DefaultListItem;
