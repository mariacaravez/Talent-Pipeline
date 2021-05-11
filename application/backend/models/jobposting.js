// //
// // job posting model
// //

// get the db access
const db = require("./dbaccess.js");

// jobpost constructor
const JobModel = function (jobpost) {
  this.location = jobpost.location;
  this.jobPostTitle = jobpost.jobPostTitle;
  this.salary = jobpost.salary;
  this.company = jobpost.company;
  this.description = jobpost.description;
  this.jobPosterID = jobpost.jobPosterID;
  this.workType = jobpost.workType;
  this.gradRangeStart = jobpost.gradRangeStart;
  this.gradRangeEnd = jobpost.gradRangeEnd;
  this.coursework = jobpost.coursework;
  this.skills = jobpost.skills;
};

// find all job postings
JobModel.find = (jobDesc, results) => {
  try {
    if (jobDesc == "") {
      return db.promise().query(
        "SELECT * FROM jobPostings jp",
      ).then(([results, fields]) => {
        return Promise.resolve(results);
      }).catch((err) => Promise.reject(err));
    } else {
       return db.promise().query(
        "SELECT * from jobPostings jp, jobReqs jr where jp.description like ?",
        ["%" + jobDesc + "%"]
      ).then(([results, fields]) => {
        return Promise.resolve(results);
      })
      .catch((err) => Promise.reject(err));
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

// create a new job posting
JobModel.create = (newjob, result) => {
  console.log("JOB MODEL has: ", newjob);
  db.query(
    "INSERT INTO jobPostings (jobPostTitle, location, salary, description, workType, gradRangeStart, gradRangeEnd, company, jobPosterID) VALUES(?,?,?,?,?,?,?,?,?)",
    [
      newjob.jobPostTitle,
      newjob.location,
      newjob.salary,
      newjob.description,
      newjob.workType,
      newjob.gradRangeStart,
      newjob.gradRangeEnd,
      newjob.company,
      newjob.jobPosterID,
    ],
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      } else {
        console.log(res.insertId);

        // we need the jobpostingID for creation of job requirement records
        db.query(
          "INSERT INTO jobReqs (jobPostingID, coursework, skills) VALUES(?,?,?)",
          [res.insertId, newjob.coursework, newjob.skills],
          (err, res) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log(res.insertId);
              return;
            }
          }
        );
      }
    }
  );
};

// all jobs posted by session user
JobModel.findMyJobs = (userid, result) => {
  db.query(
    "SELECT * FROM jobPostings jp, jobReq jr WHERE jp.postID = jr.jobPostingID AND jobPosterID = ?",
    [userid],
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      } else {
        console.log(res);
        result(null, res);
        return;
      }
    }
  );
};

module.exports = JobModel;
