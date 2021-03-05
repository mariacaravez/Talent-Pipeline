const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const store = require('./store');
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: '',
  password:'',
  database:''
});

app.get("/", (req, res) => {
  res.json(
    {
      "name": "John", "age":30, "car":null
    }
  );
});

app.listen(6480, () => console.log('Server running on port 6480'));
