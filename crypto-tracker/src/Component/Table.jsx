import React from 'react'
import "../Css/Table.css"

const Table = () => {
  return (
    <div className='container-fluid table-container'>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th>Crypto Id</th>
            <th>Symbol</th>
            <th>Coin Name</th>
            <th>Price</th>
            <th>Net Rise/Fall 24h</th>
            <th>Net Rise/Fall 7d</th>
          </tr>
        </thead>
        <tbody className='text-center table-bg'>
        <tr>
            <td>Crypto Id</td>
            <td>Symbol</td>
            <td>Coin Name</td>
            <td>Price</td>
            <td>Net Rise/Fall 24h</td>
            <td>Net Rise/Fall 7d</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
