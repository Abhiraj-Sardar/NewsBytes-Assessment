const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 5000;
const apiKey = "8c8421ff-15ca-416d-b4a9-61b9ded7b5e4";

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


var coinData;
var coinId;
var coin = [];
/* Example in Node.js */
const axios = require('axios');

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '8c8421ff-15ca-416d-b4a9-61b9ded7b5e4',
      },
    });
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    // console.log(json);
    resolve(json);


    app.get("/api/data", (req, res) => {
      res.send(json);
    })
  }

});




setTimeout(() => {
  console.log(coin);
}, 3000);
// 





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});