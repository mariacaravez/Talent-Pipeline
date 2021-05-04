//
// this model contain the user model for Milestone Application
//

// get the db access
const db = require("./dbaccess.js");

// constructor for new user (student, headhunter, endorser)
const UserModel = function (objValues) {
  this.firstName = objValues.firstName;
  this.middleName = objValues.middleName;
  this.lastName = objValues.lastName;
  this.userTypeID = objValues.userTypeID;
  this.username = acctValues.username;
	this.password = acctValues.password;
	this.email = acctValues.email;
};

// create a new student record - registration
UserModel.create = (newuser, result) => {
  //console.log(newuser);
  db.promise().query("INSERT INTO user SET ?", newuser)
    .then(([results, fields]) => {
      console.log(results.insertId);
      return Promise.resolve(result);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = UserModel;