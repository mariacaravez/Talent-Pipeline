const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../application/backend/models/dbaccess.js');
const path = require('path');
const routes = require("../application/backend/routes/routes.js");


app.use('/', express.static(path.join(__dirname, 'frontend/app/build/')))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', routes);

// app.get("/index", (req, res) => {
//   console.log(path.join(__dirname, 'frontend/app/public/', 'index.html'));
//   res.sendFile(path.join(__dirname, 'frontend/app/build/', 'index.html'));
// })

// app.get("/search", (req, res) => {
// try {
//  const student = (student) => {
//    this.firstName = req.query.firstName;
//  	 this.middleName = req.query.middleName;
//  	 this.lastName = req.query.lastName;
//  	 this.major = req.query.major;
//  	 this.academicStanding = req.query.academicStanding;
//  	 this.graduationDate = req.query.graduationDate;
//  	 this.gender = req.query.gender;
//  	 this.age = req.query.age;
//  	 this.race = req.query.race;
//  	 this.veteran = req.query.veteran;
//  	 this.militaryCode = req.query.militaryCode;
//  	 this.ethnicity = req.query.ethnicity;
//  	 this.skills = req.query.skills;
//  };
//  console.log("Searching by: " + req.query.optionsValue);
//  if (req.query.textValue == "") {
//    db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID", (error, result) => {
//      if (error) {
//         //console.log("error: ", error);
//          res.sendStatus(500);
//        //result(null, err);
//        return;
//      }
//      //console.log("student: ", res);
//      res.send(result);
//     });
//  }
//  else if (req.query.optionsValue == "major") {
//   db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.major LIKE ?",["%" + req.query.textValue + "%"], (error, result) => {
//     if (error) {
//        //console.log("error: ", error);
//         res.sendStatus(500);
//       //result(null, err);
//       return;
//     }
//     //console.log("student: ", res);
//     res.send(result);
//    });
// }
// else if (req.query.optionsValue == "gradDate") {
//  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.gradDate LIKE ?",["%" + req.query.textValue + "%"], (error, result) => {
//    if (error) {
//       //console.log("error: ", error);
//        res.sendStatus(500);
//      //result(null, err);
//      return;
//    }
//    //console.log("student: ", res);
//    res.send(result);
//   });
// }
// else if (req.query.optionsValue == "standing") {
// db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND +ua.academicStanding LIKE ?",["%" + req.query.textValue + "%"], (error, result) => {
//   if (error) {
//      //console.log("error: ", error);
//       res.sendStatus(500);
//     //result(null, err);
//     return;
//   }
//   //console.log("student: ", res);
//   res.send(result);
//  });
// }
// else if (req.query.optionsValue == "site" || req.query.optionsValue == "*") {
// db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND (us.lastName LIKE ? OR us.middleName LIKE ? OR us.firstName LIKE ? OR ua.academicStanding LIKE ? OR ua.gradDate LIKE ? OR ua.major LIKE ?)",["%" + req.query.textValue + "%", "%" + req.query.textValue + "%", "%" + req.query.textValue + "%", "%" + req.query.textValue + "%", "%" + req.query.textValue + "%", "%" + req.query.textValue + "%"], (error, result) => {
//  if (error) {
//     //console.log("error: ", error);
//    res.sendStatus(500);
//    //result(null, err);
//    return;
//  }
//  //console.log("student: ", res);
//  res.send(result);
// });
// }
// } catch(err) {
//   console.log(err);
//   res.sendFile(path.join(__dirname, 'frontend/app/build/', 'index.html'));
// }
// })

// our server application is listening on port 6480
app.listen(6480, () => console.log('Server running on port 6480'));
