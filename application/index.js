const express = require('express');
const app = express();

app.use( express.static('frontend/public'));

app.listen(6480, () => console.log('Server running on port 6480'));
