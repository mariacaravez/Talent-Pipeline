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
  this.username = objValues.username;
	this.password = objValues.password;
	this.email = objValues.email;
};

// create a new student record - registration
UserModel.create = (newuser, result) => {
     //console.log(newuser);
     db.query("INSERT INTO user SET ?", newuser, (err, res) =>{
         if(err) {
              console.log(err);
              result(err, null);
              return;
         }
         else{
              console.log("Response from UserModel: ", res.insertId);
              result(null, res);
              return;
         }
        // console.log("From UserModel: ", res);
     })
     return;
};

module.exports = UserModel;