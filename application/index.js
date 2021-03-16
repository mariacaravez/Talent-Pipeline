const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* TEST CODE */
app.use(cors());
app.use(express.json());

placeholderJson = [
  {
    id: 0,
    name: 'Bera Coskun',
    major: 'philsophy',
    academicStanding: 'Junior',
    graduationDate: '2022',
    imageName: 'bera.jpg'
  },
  {
    id: 1,
    name: 'Jeffrey Ye',
    major: 'computer science',
    academicStanding: 'Senior',
    graduationDate: '2021',
    imageName: 'jeffrey-cropped.jpg'    
  },
  {
    id: 1,
    name: 'Jeffrey Ye',
    major: 'computer science',
    academicStanding: 'Senior',
    graduationDate: '2021',
    imageName: 'jeffrey-cropped.jpg'    
  },
  {
    id: 1,
    name: 'Jeffrey Ye',
    major: 'computer science',
    academicStanding: 'Senior',
    graduationDate: '2021',
    imageName: 'jeffrey-cropped.jpg'    
  }
]


 app.get("/search", (req, res) => {
  // console.log(placeholderJson);
  console.log(req.query);

  res.send(placeholderJson);
})

/* ORIGINAL CODE */
app.use( express.static('frontend/static'));

app.listen(6480, () => console.log('Server running on port 6480'));