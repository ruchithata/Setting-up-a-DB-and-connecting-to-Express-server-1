const express = require('express');
const { connectDB } = require('./db');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 8080;
const url = process.env.db_url;


app.listen(port, async() => {

  try{
    await connectDB(url);https://cloud.mongodb.com/v2/67a1d9cfe6abd035d3adc9c0#/metrics/replicaSet/67a1db69acae356cdc8819ca/explorer/Asap_project/asap/find9999
    console.log(`Server is running on port ${port}`);
  }
  catch(error){
    console.error(error);
  }
});


app.get('/', (req, res) => {    
    res.send('Hello World!');
});