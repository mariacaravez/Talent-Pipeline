/* DOUBLE CHECK ROUTE */
const db = require('../knex.js');

// Job Post constructor
const JobPost = (jobPost) => {
  this.description = jobPost.description;
  this.salary = jobPost.salary;
  this.company = jobPost.company;
};

// Retrieve all job postings (CORRECT jobPost KEYWORD TO MATCH DB)
JobPost.getAll = result => {
  db.query("SELECT * FROM jobPost" = (err, res) => {
    if(err) {
      console.log('ERROR: ', err);
      result(null, err);
    }
    else{
      console.log('jobPost:', res);
      result(null, res);
    }
  });
}

/* Potential CRUD functions */
// Retrieve by ID
// Retrieve by Salary







/************* TO IMPLEMENT LATER ****************/
// JobPost.createJobPost = (newJobPost, result) => {
//   db.query("INSERT INTO JobPosts set ?", newJobPost, (err, res) => {
//     if(err) {
//       console.log('ERROR: ', err);
//       result(err, null);
//     }
//     else{
//       console.log('Job Posting Created: ', { id: res.insertId, ...newCustomer});
//       result(null, {id: res.insertId, ...newCustomer});
//     }
//   });
// };