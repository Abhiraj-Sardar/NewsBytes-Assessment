import React,{useState,useEffect} from 'react'
import "../Css/CoinLogo.css"
const CoinLogo = (props) => {
  return (
    <div className='img-container'>
      <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.id}.png`} />
    </div>
  )
}

export default CoinLogo
