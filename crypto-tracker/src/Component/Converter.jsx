import React from 'react'
import "../Css/Converter.css"
import { useEffect } from 'react'
import { useState } from 'react'
const Converter = () => {
    const [value,setValue]= useState(0);
    const [result,setResult]=useState("0");
    const conversion = async (from,to,value) => {
        try {
          const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const ans=(value*data[`${to}`]).toFixed(2)
        //   console.log(ans);
        
        setResult(ans);
         
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }

    
      const apiCall=(e)=>{
        e.preventDefault();
        const to=e.target.to.value;
        const from=e.target.from.value;
        const value=e.target.value.value;
        conversion(from,to,value);
      }

    return (
        <>
            <h3 className='text-center'>Crypto Converter</h3>
            <form onSubmit={apiCall}>
            <div className="from">
                <div className="from-input">
                    <select name="from" id="">
                    <option className='text-center' value="BTC">BTC</option>
                    <option className='text-center' value="ETH">ETH</option>
                    <option className='text-center' value="USDT">USDT</option>
                    <option className='text-center' value="BNB">BNB</option>
                    <option className='text-center' value="TON">TON</option>
                    <option className='text-center' value="ADA">ADA</option>
                    <option className='text-center' value="SHIB">SHIB</option>
                    <option className='text-center' value="LEO">LEO</option>
                        <option className='text-center' value="ETC">ETC</option>
                        <option className='text-center' value="LTH">LTH</option>
                    </select>
                </div>
                <div className="from-label">
                    FROM
                </div>
            </div>

            <div className="value">
                <div className="value-input">
                    <input type="text" name='value' value={value} onChange={(e)=>{setValue(e.target.value)}} />
                </div>
                <div className="value-label">
                    VALUE
                </div>
            </div>

            <div className="to">
                <div className="to-input">
                    <select name="to" id="">
                    <option className='text-center' value="BTC">BTC</option>
                    <option className='text-center' value="ETH">ETH</option>
                    <option className='text-center' value="USDT">USDT</option>
                    <option className='text-center' value="BNB">BNB</option>
                    <option className='text-center' value="TON">TON</option>
                    <option className='text-center' value="ADA">ADA</option>
                    <option className='text-center' value="SHIB">SHIB</option>
                    <option className='text-center' value="LEO">LEO</option>
                    <option className='text-center' value="ETC">ETC</option>
                    <option className='text-center' value="LTH">LTH</option>
                    </select>
                </div>
                <div className="to-label">
                    TO
                </div>
            </div>

            <div className="result">
                {
                    result
                }
            </div>

            <button className='calc-btn' type='submit' >CALCULATE</button>
            </form>
        </>
    )
}

export default Converter
