import React from 'react'
import "../Css/Advertisement.css"
const Advertisement = () => {
    return (
        <div className='card-container'>
            <div className="card" style={{width: "15rem"}}>
                <img className="card-img-top" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="Card image cap" />
                <br />
                <h5 className="card-title text-center">Ethereum</h5>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            
            <div className="card" style={{width: "15rem"}}>
                <img className="card-img-top" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Card image cap" />
                <br />
                <h5 className="card-title text-center">Bitcoin</h5>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{width: "15rem"}}>
                <img className="card-img-top" src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="Card image cap" />
                
                <br /><h5 className="card-title text-center">Litecoin</h5>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Advertisement
