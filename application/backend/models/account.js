const db = require("./dbaccess.js");

// constructor for user (student, headhunter, endorser) account
const UserAccount = function(acctValues) {
	this.username = acctValues.username;
	this.password = acctValues.password;
	this.email = acctValues.email;
};

UserAccount.create = (useracct, result) => {
  console.log(useracct);
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

module.exports =  UserAccount;