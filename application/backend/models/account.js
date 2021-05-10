const db = require("./dbaccess.js");

// constructor for user (student, headhunter, endorser) account
const UserAccount = function (acctValues) {
    this.userID = acctValues.userID;
    this.username = acctValues.username;
    this.password = acctValues.password;
    this.email = acctValues.email;
};

// this is no longer in use. keep for tracking
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
    //"SELECT userID, email FROM user WHERE username = ? AND password = ?"
    db.query("SELECT userID, email FROM user WHERE username = ? AND aes_decrypt('password', 'secret') = ?", [useracct.username, useracct.password], (err, res) => {
        if (err) {
            console.log(err);
            result(err, null);
            return;
        }
        else {
            console.log(res[0]);
            result(null, res[0]);
            return;
        }
    })
    //console.log(result);
    return;
};

// for password reset
UserAccount.resetpass = (useracct, results) => {
    db.query("UPDATE userAccounts SET password = ? WHERE username = ? AND userAccID = ?", [useracct.password, useracct.username, useracct.userID], (err, res) => {
        if (err) {
            console.log(err);
            results(err, null);
            return;
        }
        else {
            console.log(res);
            results(null, res);
            return;
        }
    })
};

module.exports = UserAccount;