const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = 5000;
const apiKey = "6228ec7d-54e7-43a1-8428-5435a50df28f";

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

// // Endpoint to fetch cryptocurrency map
// app.get('/api/cryptocurrency/map', async (req, res) => {
//     const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map';
  
//     try {
//       const response = await fetch(url, {
//         headers: {
//           'X-CMC_PRO_API_KEY': apiKey,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       res.json(data); // Send JSON response containing the fetched data
  
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ error: 'Failed to fetch data' });
//     }
//   });
  
//  

/* Example in Node.js */
const axios = require('axios');

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=1', {
      headers: {
        'X-CMC_PRO_API_KEY': '6228ec7d-54e7-43a1-8428-5435a50df28f',
      },
    });
  } catch(ex) {
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
    
    app.get("/api/data",(req,res)=>{
        res.send(json);
    })
  }
});

app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });