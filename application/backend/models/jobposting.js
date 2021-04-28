// //
// // job posting model
// //

// get the db access
const db = require('./dbaccess.js');

// jobpost constructor
const JobPostObj = function(jobpost) {
	this.location = jobpost.location;
	this.title = jobpost.title;
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
JobPostObj.find = (jobId, jobDesc) => {
  if (jobId == "" && jobDesc == "") {
     return db.promise().query("SELECT * FROM jobPostings jp, jobReq jr WHERE jp.postID = jr.jobPostingID")
	 .then(([results, fields]) => {
	    // console.log(results);
        return Promise.resolve(results);
     })
     .catch((err) => Promise.reject(err));
  }
  else {
     return db.promise().query("SELECT * from jobPostings jp, jobReqs jr where jp.postID = jr.jobPostingID AND jp.postID = ? or jp.description like ?", [jobId, "%"+jobDesc+"%"])
	 .then(([results, fields]) => {
	    // console.log(results);
        return Promise.resolve(results);
     })
     .catch((err) => Promise.reject(err));
  }
};

// // create a new job posting
JobPostObj.create = (newjob, result) => {
    db.promise().query("INSERT INTO jobPostings (title, location, salary, description, workType,gradRangeStar, gradRangeEnd, company, jobPosterID) VALUES(?,?,?,?)",
	                   [newjob.title, newjob.location, newjob.salary, newjob.description, newjob.workType, newjob.gradRangeStart, newjob.gradRangeEnd, newjob.company, newjob.jobPosterID])
	 .then(([results, fields]) => {
	    // console.log(results);
		// we need the jobpostingID for creation of job requirement records
        db.promise().query("INSERT INTO jpbReqs (jpbPostingID, coursework, skills) VALUES(?,?,?)", [results.insertedID, newjob.coursework, newjob.skills])
		.then(([jresults, fields]) => {
			results(...results, ...jresults)
		    //console.log(results);
		}) .catch((err) => Promise.reject(err));
        return Promise.resolve(results);
     })
     .catch((err) => Promise.reject(err));
};


// all jobs posted by session user
JobPostObj.findMyJobs = (userid) => {
    db.promise().query("SELECT * FROM jobPostings jp, jobReq jr WHERE jp.postID = jr.jobPostingID AND jobPosterID = ?", [userid])
	.then(([results, fields]) => {
	    // console.log(results);
        return Promise.resolve(results);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = JobPostObj;
