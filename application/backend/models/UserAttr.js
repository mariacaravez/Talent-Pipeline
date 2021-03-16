/* DOUBLE CHECK ROUTE */
const db = require('../knex.js');

// UserAttr constructor
const UserAttr = function(userAttributes) {
  this.major = userAttributes.major;
  this.academicStanding = userAttributes.academicStanding;
  this.gradDate = userAttributes.gradDate;
};

// Creates a new userAttributes
UserAttr.create = (newUserAttr, result) => {
  db.query("INSERT INTO userAttributes SET ?", newUserAttr, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(err, null);
      return;
    }

    console.log("Created userAttributes: ", {userAttrID: res.insertId, ...newUserAttr});
    result(null, {userAttrID: res.insertId, ...newUserAttr});
  });
}

// Finds a user's attributes via userID **NOT BY userAttrID**
UserAttr.findById = (userId, result) => {
  db.query(`SELECT * FROM userAttributes WHERE userID = ${userId}`, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found user: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({kind: "not_found"}, null);
  });
}

// Retrieve all users (CORRECT userAttributes KEYWORD TO MATCH DB)
UserAttr.getAll = result => {
  db.query("SELECT * FROM userAttributes" = (err, res) => {
    if(err) {
      console.log('ERROR: ', err);
      result(null, err);
    }
    else{
      console.log('User:', res);
      result(null, res);
    }
  });
}

// Updates a user's attributes via userID **NOT BY userAttrID**
UserAttr.updateById = (id, user, result) => {
  db.query("UPDATE userAttributes SET gradDate = ?, academicStanding = ?, major = ? WHERE userID = ?",
  [user.gradDate, user.academicStanding, user.major, id], (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({kind: "not_found"}, null);
      return;
    }
    console.log("updated customer: ", {id: id, ...user});
    result(null, {id: id, ...user});
  });
}

// Removes a user's attributes via userID **NOT BY userAttrID**
UserAttr.remove = (id, result) => {
  db.query("DELETE FROM userAttributes WHERE userID = ?", id, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({kind: "not_found"}, null);
      return;
    }

    console.log("deleted customer with userID: ", id);
    result(null, res);
  });
}

module.exports = UserAttr;