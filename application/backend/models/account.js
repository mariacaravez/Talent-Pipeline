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
UserAccount.verify = (useracct, result) => {
    //console.log(useracct);
     db.query("SELECT userID, email FROM user WHERE username = ? AND password = ?", [useracct.username, useracct.password], (err, res) => {
         if(err) {
             console.log(err);
             result(err, null);
             return;
         }
         if(res.length){
             console.log(res[0]);
             result(null, res[0]);
             return;
         }
     })
// 	db.promise().query("SELECT userID, email FROM user WHERE username = ? AND password = ?", [useracct.username, useracct.password])
//     .then(([results, fields]) => {
//           console.log(results);
//         //   return Promise.resolve(results);
//     })
//     .catch((err) => Promise.reject(err));
console.log(result);
return;
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