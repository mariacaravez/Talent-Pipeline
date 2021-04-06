//
// this module contain the student models for Milestone Application
//

// get the db access
const db = require("./dbaccess.js");

// constructor
const StudentModel = function (objValues) {
  this.firstName = objValues.firstName;
  this.middleName = objValues.middleName;
  this.lastName = objValues.lastName;
  this.userTypeID = objValues.userTypeID;
  // this.major = objValues.major;
  // this.academicStanding = objValues.academicStanding;
  // this.graduationDate = objValues.graduationDate;
  // this.gender = objValues.gender;
  // this.age = objValues.age;
  // this.race = objValues.race;
  // this.veteran = objValues.veteran;
  // this.militaryCode = objValues.militaryCode;
  // this.ethnicity = objValues.ethnicity;
  // this.skills = objValues.skills;
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
          ["%" + student.major + "%"]
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
          ["%" + student.graduationDate + "%"]
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
          ["%" + student.academicStanding + "%"]
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
            "%" + student.lastName + "%",
            "%" + student.middleName + "%",
            "%" + student.firstName + "%",
            "%" + student.academicStanding + "%",
            "%" + student.graduationDate + "%",
            "%" + student.major + "%",
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
StudentModel.create = (newstudent, result) => {
  db.promise()
    .query("INSERT INTO user SET ?", newstudent)
    .then(([results, fields]) => {
      console.log(results.insertId);
      // console.log(results);
      return Promise.resolve(results);
      
      // we need to capture the usrID and use it to create tha user attribute record
      // db.promise().query("INSERT INTO userAttributes SET ?", newstudent)
      // .then(([result, fields]) => {
      // return Promise.resolve(result);
      // })
      // .catch((err) => Promise.reject(err));
    })
    .catch((err) => Promise.reject(err));

  // old code
  // , (err, resl) => {
  // if (err) {
  // console.log("error: ", err);
  // result(err, null);
  // return;
  // }

  // console.log("new student registered: ", {id: resl.userID, ...newstudent});
  // result(null, {id:resl.userID, ...newstudent});
  // });
};

module.exports = StudentModel;
