const express = require('express');
const app = express();
//const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* TEST CODE */
// app.use(cors());
// app.use(express.json());
// placeholderJson = [
//   {
//     id: 0,
//     name: 'Bera Coskun',
//     major: 'philsophy'
//   },
//   {
//     id: 1,
//     name: 'Jeffrey Ye',
//     major: 'computer science'
//   }]
  

//  app.get("/search", (req, res) => {
//   console.log(placeholderJson);
//   res.send(placeholderJson);
// })

/* ORIGINAL CODE */
//app.use( express.static('frontend/static'));

app.listen(6480, () => console.log('Server running on port 6480'));
