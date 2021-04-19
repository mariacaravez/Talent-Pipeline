//
// this model contain the user model for Milestone Application
//

// get the db access
const db = require("./dbaccess.js");

// constructor for new user (student, headhunter, endorser)
const userModel = function (objValues) {
  this.firstName = objValues.firstName;
  this.middleName = objValues.middleName;
  this.lastName = objValues.lastName;
  this.userTypeID = objValues.userTypeID;
};

// create a new student record - registration
userModel.create = (newuser, result) => {
  console.log(newuser);
  db.promise().query("INSERT INTO user SET ?", newuser)
    .then(([results, fields]) => {
      console.log(results.insertId);
      // console.log(results);
       return Promise.resolve(result);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = userModel;