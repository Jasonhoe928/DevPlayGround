const express = require('express');
const app = express();


//make request to api
//you will receive the data
//you will serve the data to the webpage
app.get('/', (req, res) => {
  res.json('lalalalaaaa');
});

app.listen(9000);