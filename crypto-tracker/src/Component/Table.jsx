import React, { useEffect, useState } from 'react'
import "../Css/Table.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CoinLogo from './CoinLogo';

const Table = () => {
  const [jsonData, setJsonData] = useState([]);
  const [state, setState] = useState(0);

  const getApi = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJsonData(data["data"]);
      if (state === 0) {
        setState(1);
      }

      console.log(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getApi();
  }, [state]);

  return (
    <div className='container-fluid table-container'>
      <table className="container table">
        <thead className="text-center">
          <tr>
            <th>Crypto Id</th>
            <th>logo</th>
            <th>Symbol</th>
            <th>Coin Name</th>
            <th>Price</th>
            <th>Net Rise/Fall 24h</th>
            <th>Net Rise/Fall 7d</th>
          </tr>
        </thead>
        <tbody className='text-center table-dark'>
          {
            jsonData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    {
                      <CoinLogo id={item.id} />
                    }
                  </td>
                  <td style={
                    {
                      color: "yellow"
                    }
                  }>
                    {item.symbol}
                  </td>
                  <td >{item.name}</td>
                  <td>
                    {(((item.quote).USD).price).toFixed(2)}
                  </td>
                  <td style={
                    {
                      color: ((((item.quote).USD).percent_change_24h).toFixed(2) < 0) ? "red" : "rgb(21, 218, 21)"
                    }
                  }>
                    {
                      (((item.quote).USD).percent_change_24h).toFixed(2)
                    }
                  </td>
                  <td style={
                    {
                      color: ((((item.quote).USD).percent_change_1h).toFixed(2) < 0) ? "red" : "rgb(21, 218, 21)"
                    }
                  }>
                    {

                      (((item.quote).USD).percent_change_1h).toFixed(2)

                    }
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )

}

export default Table
