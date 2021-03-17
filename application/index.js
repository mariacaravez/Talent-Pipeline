const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../application/backend/models/dbaccess.js');
//const routes = require("../application/backend/routes/routes.js");

// app.use("/");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
/* TEST CODE */
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


//  app.get("/search", (req, res) => {
//   // console.log(placeholderJson);
//   console.log(req.query);
//
//   res.send(placeholderJson);
// })

 app.get("/search", (req, res) => {
   const student = (student) => {
     this.firstName = req.query.firstName;
   	 this.middleName = req.query.middleName;
   	 this.lastName = req.query.lastName;
   	 this.major = req.query.major;
   	 this.academicStanding = req.query.academicStanding;
   	 this.graduationDate = req.query.graduationDate;
   	 this.gender = req.query.gender;
   	 this.age = req.query.age;
   	 this.race = req.query.race;
   	 this.veteran = req.query.veteran;
   	 this.militaryCode = req.query.militaryCode;
   	 this.ethnicity = req.query.ethnicity;
   	 this.skills = req.query.skills;
   };
   console.log(req.query.optionsValue);
   if (req.query.textValue == "") {
     db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID", (error, result) => {
       if (error) {
          //console.log("error: ", error);
           res.sendStatus(500);
         //result(null, err);
         return;
       }
       //console.log("student: ", res);
       res.send(result);
      });
   }
   else if (req.query.optionsValue == "major") {
	  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.major = ?",[req.query.textValue], (error, result) => {
      if (error) {
         //console.log("error: ", error);
          res.sendStatus(500);
        //result(null, err);
        return;
      }
      //console.log("student: ", res);
      res.send(result);
     });
  }
  else if (req.query.optionsValue == "gradDate") {
   db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.gradDate = ?",[req.query.textValue], (error, result) => {
     if (error) {
        //console.log("error: ", error);
         res.sendStatus(500);
       //result(null, err);
       return;
     }
     //console.log("student: ", res);
     res.send(result);
    });
 }
 else if (req.query.optionsValue == "standing") {
   console.log("I'm in standing");
  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND +ua.academicStanding = ?",[req.query.textValue], (error, result) => {
    if (error) {
       //console.log("error: ", error);
        res.sendStatus(500);
      //result(null, err);
      return;
    }
    //console.log("student: ", res);
    res.send(result);
   });
}
else if (req.query.optionsValue == "site") {
 db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND (us.lastName = ? OR us.middleName = ? Or us.firstName = ?)",[req.query.textValue,req.query.textValue,req.query.textValue], (error, result) => {
   if (error) {
      //console.log("error: ", error);
     res.sendStatus(500);
     //result(null, err);
     return;
   }
   //console.log("student: ", res);
   res.send(result);
  });
}
})

/* ORIGINAL CODE */
app.use(express.static('frontend/static'));
//app.use(express.router);


// application landing - root page
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Milestone Application. The home for direct employment help" });
});

// make our server application use the routes in routes.js
//require("../application/backend/routes/routes.js")(app);


// our server application is listening on port 6480
app.listen(6480, () => console.log('Server running on port 6480'));
