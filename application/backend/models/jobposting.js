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
JobModel.find = (jobId, jobDesc, results) => {
  if (jobId == "" && jobDesc == "") {
    db.query(
      "SELECT * FROM jobPostings jp, jobReq jr WHERE jp.postID = jr.jobPostingID",
      (err, res) => {
        if (err) {
          console.log(err);
          results(err, null);
          return;
        } else {
          console.log(res);
          results(null, res);
          return;
        }
      }
    );
  } else {
    db.query(
      "SELECT * from jobPostings jp, jobReqs jr where jp.postID = jr.jobPostingID AND jp.postID = ? or jp.description like ?",
      [jobId, "%" + jobDesc + "%"],
      (err, res) => {
        if (err) {
          console.log(err);
          results(err, null);
          return;
        } else {
          console.log(res);
          results(null, res);
          return;
        }
      }
    );
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
