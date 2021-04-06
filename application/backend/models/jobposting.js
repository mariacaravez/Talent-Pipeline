//
// job posting model
//

// get the db access
const db = require('./dbaccess.js');

// jobpost constructor
const JobpostObj = function(jobpost) {
	this.location = jobpost.location,
	this.salary = jobpost.salary,
	this.company = jobpost.company,
	this.description = jobpost.description,
	this.jobPosterID = jobpost.jobPosterID,
	this.workType = jobpost.workType,
	this.gradRangeStart = jobpost.gradRangeStart,
	this.gradRangeEnd = jobpost.gradRangeEnd
};

const jobpostingModel = {}

// find all job postings
jobpostingModel.find = (jobId, jobDesc) => {
  if (jobId == "" and jobDesc == "") {
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

// create a new job posting
jobpostingModel.create = (newjob, result) => {
    db.promise().query("INSERT INTO jobPostings SET ?", newjob)
	 .then(([results, fields]) => {
	    // console.log(results);
        return Promise.resolve(results);
		
		// we need the jobpostingID for creation of job requirement records
		//db.promise().query("INSERT INTO jobReq SET ?", newjob)
		//.then ( ([results, fields]) => {
		//    console.log(results);	
		}) .catch((err) => Promise.reject(err));
     })
     .catch((err) => Promise.reject(err));
 };
 