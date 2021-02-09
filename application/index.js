const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HELLO!')
});

app.listen(6480, () => console.log('Server running on port 6480'));
