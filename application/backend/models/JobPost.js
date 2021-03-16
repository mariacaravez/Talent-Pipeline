const sql = require('./db.js');

// Job Post constructor
const JobPost = function(jobPost) {
  this.description = jobPost.description;
  this.salary = jobPost.salary;
  this.company = jobPost.company;
};

JobPost.createJobPost = function(newJobPost, result) {
  sql.query("INSERT INTO JobPosts set ?", newJobPost, function(err, res) {
    if(err) {
      console.log('ERROR: ', err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
