//
// this module contain the student models for Milestone Application
//

// get the db access
const db = require("./dbaccess.js");

// constructor for new user (student, headhunter, endorser)
const StudentModel = function (objValues) {
  this.firstName = objValues.firstName;
  this.middleName = objValues.middleName;
  this.lastName = objValues.lastName;
  this.userTypeID = objValues.userTypeID;

};

// constructor for (ONLY) student user attributes
const StudentAttrib = function(attribValues) {
  this.major = attribValues.major;
  this.academicStanding = attribValues.academicStanding;
  this.graduationDate = attribValues.graduationDate;
  this.gender = attribValues.gender;
  this.age = attribValues.age;
  this.race = attribValues.race;
  this.veteran = attribValues.veteran;
  this.militaryCode = attribValues.militaryCode;
  this.ethnicity = attribValues.ethnicity;
  this.skills = attribValues.skills;
};

// constructor for user (student, headhunter, endorser) account
const userAccount = function(acctValues) {
	this.username = acctValues.username;
	this.password = acctValues.password;
	this.email = acctValues.email;
};

// const StudentModel = {};

/* PROMISES */
//async was here
// StudentModel.find = (student, textValue, optionsValue) => {
// // console.log("I'M IN STUDENT MODEL");
// let baseSQL = 'SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID';
// return db.promise().query(baseSQL)
// .then(([results, fields]) => {
// console.log(results);
// return Promise.resolve(results);
// })
// .catch((err) => Promise.reject(err));
// }
/* PROMISES END*/

// OLD: student.find(student) = result =>
// retrieve all students who match - textvalue and have attribute optiotsvalue
StudentModel.find = (student, textValue, optionsValue) => {

  try {
    if (textValue == "") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID"
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));

      // // old code
      // , (error, result) => {
      // if (error) {
      // //console.log("error: ", error);
      // res.sendStatus(500);
      // //result(null, err);
      // return (error);
      // }
      // //console.log("student: ", res);
      // return(result);
      // });
    } else if (optionsValue == "major") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.major LIKE ?",
          ["%" + textValue + "%"]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));

      // old code
      // , (error, result) => {
      // if (error) {
      // //console.log("error: ", error);
      // res.sendStatus(500);
      // //result(null, err);
      // return (error);
      // }
      // //console.log("student: ", res);
      // return(result);
      // });
    } else if (optionsValue == "gradDate") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.gradDate LIKE ?",
          ["%" + textValue + "%"]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));

      // old code
      // , (error, result) => {
      // if (error) {
      // //console.log("error: ", error);
      // res.sendStatus(500);
      // //result(null, err);
      // return (error);
      // }
      // //console.log("student: ", res);
      // return(result);
      // });
    } else if (optionsValue == "standing") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND +ua.academicStanding LIKE ?",
          ["%" + textValue + "%"]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));

      // old code
      // , (error, result) => {
      // if (error) {
      // //console.log("error: ", error);
      // res.sendStatus(500);
      // //result(null, err);
      // return (error);
      // }
      // //console.log("student: ", res);
      // return(result);
      // });
    } else if (optionsValue == "site" || optionsValue == "*") {
      return db
        .promise()
        .query(
          "SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND (us.lastName LIKE ? OR us.middleName LIKE ? OR us.firstName LIKE ? OR ua.academicStanding LIKE ? OR ua.gradDate LIKE ? OR ua.major LIKE ?)",
          [
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
            "%" + textValue + "%",
          ]
        )
        .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
        })
        .catch((err) => Promise.reject(err));

      // old code
      // , (error, result) => {
      // if (error) {
      // //console.log("error: ", error);
      // res.sendStatus(500);
      // //result(null, err);
      // return (error);
      // }
      // //console.log("student: ", res);
      // return(result);
      // });
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

// create a new student record - registration
StudentModel.create = (newuser, useracct, result) => {
  console.log(newuser);
  db.promise()
    .query("INSERT INTO user SET ?", newuser)
    .then(([results, fields]) => {
      console.log(results.insertId);
      // console.log(results);
	  
	  // add userID for the new user to the user account object
	  useracct = {userID: result.insertedId,...useracct};
      // return Promise.resolve(results);
    
      // create the user account record
      db.promise().query("INSERT INTO userAccounts SET ?", useracct)
       .then(([result, fields]) => {
       return Promise.resolve(result);
      })
       .catch((err) => Promise.reject(err));
    })
    .catch((err) => Promise.reject(err));
};

module.exports = StudentModel, userAccount, StudentAttrib;
