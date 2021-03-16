//
// this module contain the student models for Milestone Application
//
​
// get the db access
const db = require('./dbaccess.js');
​
// student object
const student = (student) => {
     this.firstName = student.firstName;
	 this.middleName = student.middleName;
	 this.lastName = student.lastName;
	 this.major = student.major;
	 this.academicStanding = student.academicStanding;
	 this.graduationDate = student.graduationDate;
	 this.gender = student.gender;
	 this.age = student.age;
	 this.race = student.race;
	 this.veteran = student.veteran;
	 this.militaryCode = student.militaryCode;
	 this.ethnicity = student.ethnicity;
	 this.skills = student.skills;
};
​
// retrieve all students who match - textValue and have attribute optiotsvalue
student.findAll = result => {
  // option is major
  if (optionsValue = "Major") {
	  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.major = ?",[textValue], (err, res) => {
      if (err) {
         console.log("error: ", err);
        //result(null, err);
        return;
      }
​
      //console.log("student: ", res);
      result(null, res);
     });
  }
  
  // option is graduation date
    if (optionsValue = "graduationDate") {
	  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.gradDate = ?",[textValue], (err, res) => {
      if (err) {
         console.log("error: ", err);
        //result(null, err);
        return;
      }
​
      //console.log("student: ", res);
      result(null, res);
     });
  }
  
  // option academicstanding
    if (optionsValue = "academicStanding") {
	  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND ua.academicStanding = ?",[textValue], (err, res) => {
      if (err) {
         console.log("error: ", err);
        //result(null, err);
        return;
      }
​
      //console.log("student: ", res);
      result(null, res);
     });
  }
  
  // entire DB for say student name
    if (optionsValue = "site") {
	  db.query("SELECT * FROM user us, userAttributes ua WHERE us.userTypeID = 1 AND us.userID = ua.userID AND (us.lastName = ? OR us.middleName = ? Or us.firstName = ?)",[textValue, textValue, textValue], (err, res) => {
      if (err) {
         console.log("error: ", err);
        //result(null, err);
        return;
      }
​
      //console.log("student: ", res);
      result(null, res);
     });
  }
  
};