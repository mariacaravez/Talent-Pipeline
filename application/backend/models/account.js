const db = require("./dbaccess.js");

// constructor for user (student, headhunter, endorser) account
const UserAccount = function(acctValues) {
	this.userID = acctValues.userID;
	this.username = acctValues.username;
	this.password = acctValues.password;
	this.email = acctValues.email;
};

UserAccount.create = (useracct, result) => {
    // create the user account record
    db.promise().query("INSERT INTO userAccounts SET ?", useracct)
    .then(([result, fields]) => {
       return Promise.resolve(result);
    })
    .catch((err) => Promise.reject(err));
};

// for user login
UserAccount.verify = (useracct, results) => {
    // console.log(useracct);
	db.promise().query("SELECT userAccID, email FROM userAccounts WHERE username = ? AND password = ?", [useracct.username, useracct.password])
    .then(([results, fields]) => {
          console.log(results);
          return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
};

// for password reset
UserAccount.resetpass = (useracct, results) => {

	return db.promise().query("UPDATE userAccounts SET password = ? WHERE username = ? AND userAccID = ?", [useracct.password, useracct.username, useracct.userID])
    .then(([results, fields]) => {
          // console.log(results);
          return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));	
};

module.exports =  UserAccount;