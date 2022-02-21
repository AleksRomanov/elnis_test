import React from 'react';
import JsonData from '../../utils/examp.json';

function DataJson() {
  const DisplayData = JsonData.map(
    (info) => {
      return (
        <tr>
          <td>{info.type}</td>
          <td>{info.name}</td>
          <td>{info.contents}</td>
          <td>{info.time}</td>
        </tr>
      )
    }
  )

  return (
    <div>
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Sr.NO</th>
          <th>Name</th>
          <th>Contents</th>
          <th>Time</th>
        </tr>
        </thead>
        <tbody>
        {DisplayData}
        </tbody>
      </table>
    </div>
  )
}

export default DataJson;
