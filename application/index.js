const express = require('express');
const app = express();
const cors = require('cors');

// DB object currently in knex.js file

app.use(cors());
app.use(express.json());

placeholderJson = [
  {
    id: 0,
    name: 'Bera Coskun',
    major: 'philsophy'
  },
  {
    id: 1,
    name: 'Jeffrey Ye',
    major: 'computer science'
  }]
  

 app.get("/search", (req, res) => {
  console.log(placeholderJson);
  res.send(placeholderJson);
})

// app.use( express.static('frontend/static'));

/* Register Route */

/* Login Route */

/* Create Profile */
// app.post("/create", (req, res) =>{
//   const name = req.body.name;
// })

// /* Search Route */
// app.post("/search-job", (req, res) => {
//   const search = req.body.searchbox;
//   console.log(search);
//   //res.sendFile('index.html', {root: 'frontend/static/html'});
// })



/*
db.query{
  'INSERT INTO employees(name)
}
*/


app.listen(6480, () => console.log('Server running on port 6480'));
