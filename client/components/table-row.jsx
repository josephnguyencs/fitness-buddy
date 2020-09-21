import React from 'react';
import UpdateAndDelete from './update-and-delete';

function TableRow() {
  return (
    <div className="container">
      <tbody>
        <tr>
          <td>push-ups</td>
          <UpdateAndDelete />
        </tr>
      </tbody>
    </div>
  );
}

export default TableRow;
