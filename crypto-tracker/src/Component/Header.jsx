import React from 'react'
import "../Css/Header.css"
import Advertisement from './Advertisement'
import Converter from './Converter'
const Header = () => {
    return (
        <div className='container header'>
            <div className="row">
                <div className="col-sm-3 converter">
                    <Converter/>
                </div>
                <div className="col-sm-9 latest-crypto">
                    <h2 style={{textAlign:'center',color:"#fff"}}>Trending BitCoins</h2>
                    <Advertisement/>
                </div>
            </div>
        </div>
    )
}

export default Header
