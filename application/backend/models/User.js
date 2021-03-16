/* DOUBLE CHECK ROUTE */
const db = require('../knex.js');

// User constructor
const User = (user) => {
  this.major = user.major;
  this.academicStanding = user.academicStanding;
  this.graduationDate = user.graduationDate;
};

// Retrieve all job postings (CORRECT user KEYWORD TO MATCH DB)
User.getAll = result => {
  db.query("SELECT * FROM user" = (err, res) => {
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