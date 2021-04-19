//
// the controller for Milestones Application
//

// user model hook
const UserModel = require("../models/usermodel.js");

// user account hook
const UserAccount = require("../models/account.js")

// student model hook
const StudentModel = require("../models/student.js");

// job posting model hook
const JobModel = require("../models/jobposting.js");



//
// student control
//

// search student controls
exports.findStudents = (req, res) => {
  //console.log("I'M IN CONTROLLER");
  StudentModel.find(req.query.textValue, req.query.optionsValue)
    .then((results) => {
      //console.log(results);
      res.send(results);
    })
    .catch((err) => {
      res.status(500).send({message: err.message || "Some error occurred while retrieving students."});
    });
};

// new student profle
exports.newStudentProfile = (req, res) => {
	
	if (!req.body) {
       res.status(400).send({ message: "Content can not be empty!" });
    }
	
	// student data object
	const student = new StudentAttrib ({
        userID: req.body.userID,
        major: req.body.major,
        academicStanding: req.body.academicStanding,
        graduationDate: req.body.graduationDate,
        gender: req.body.gender,
        age: req.body.age,
        race: req.body.race,
        veteran: req.body.veteran,
        militaryCode: req.body.militaryCode,
        ethnicity: req.body.ethnicity,
        skills: req.body.skills,
        courseWork: req.body.courseWork,
        workexp: req.body.workexp,
		jobapps: req,body.jobapps,
        resume: req.body.resume,
    });
	
	// save profile data
	StudentModel.createProfile(student, (err, data) => {
	   if (err)
          res.status(500).send({message: err.message || "error occured while creating student profile."});
       else {
          res.send(data);
	});
};

// retrieve student profile for display
exports.findStudentProfile = (req, res) => {
	StudentModel.findProfile(req.body.userID, (err, data) => {
	   if (err)
          res.status(500).send({message: err.message || "error occured while retrieving student profile."});
       else {
          res.send(data);
	});
};

// save changes to student profile
exports.changeStudentProfile = (req, res) => {
	// populate student object with changed data
	const student = new StudentAttrib ({
        userID: req.body.userID,
        major: req.body.major,
        academicStanding: req.body.academicStanding,
        graduationDate: req.body.graduationDate,
        gender: req.body.gender,
        age: req.body.age,
        race: req.body.race,
        veteran: req.body.veteran,
        militaryCode: req.body.militaryCode,
        ethnicity: req.body.ethnicity,
        skills: req.body.skills,
        courseWork: req.body.courseWork,
        workexp: req.body.workexp,
		jobapps: req,body.jobapps,
        resume: req.body.resume,
    });
	
	// save updated data
	StudentModel.updateProfile(student, (err, data) => {
	   if (err)
          res.status(500).send({message: err.message || "error occured while updating student profile."});
       else {
          res.send(data);
	});
};



//
// user control
//

// new user (student, headhunter, endorser) registration
exports.newuser = (req, res) => {
	console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  // new user object from req data
  const User = new userModel({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    userTypeID: req.body.userTypeID,
  });

  // save new user record
  userModel.create(User, (err, data) => {
      console.log(req.body);
      if (err)
         res.status(500).send({message: err.message || "error occured while registering user."});
      else {
         //res.send(data);

	     // user login account
         const acct = new userAccount({
			userID: data.insertID,
	        username: req.body.username,
	        password: req.body.password,
	        email: req.body.email,
         });
		 
		 // save user account record
		 UserAccount.create(acct, (err, data) => {
			 if (err)
                res.status(500).send({message: err.message || "error occured while saving user account."});
             else
                res.send(data);
		 });
	  }
  });
};


// user login
exports.userLogin = (req, res) => {
	const creds = new userAccount({
	        username: req.body.username,
	        password: req.body.password,
    });
	
	// check for valid user
	UserAccount.verify(creds, (err, data) => {
		if (err)
           res.status(500).send({message: err.message || "Login failed; try again."});
        else
           res.send(data);
	});
};


// password reset
exports.passReset = (req, res) => {
	const newpass = new userAccount({
       userID: req.insertID,
	   username: req.body.username,
	   password: req.body.password,
	   email: req.body.email,
    });
	
	// save new password
	UserAccount.resetpaas(newpass, (err, data) => {
		if (err)
           res.status(500).send({message: err.message || "password reset failed."});
        else
           res.send(data);
	});
};





//
// job control
//

// search job postings
exports.findJob = (req, res) => {

  JobModel.find(req.query.jobID, req.query.jobdesc, req.query.optionValue)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || " some error occured while retrieving job postings.",
        });
    });
};


// post a new job
exports.postjob = (req, res) => {
  // validate request body
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  // create new jobposting object
  const job_obj = new JobpostObj({
    location: req.body.location,
    salary: req.body.salary,
    company: req.body.company,
    description: req.body.description,
    jobPosterID: req.body.jobPosterID,
    workType: req.body.workType,
    gradRangeStart: req.body.gradRangeStart,
    gradRangeEnd: req.body.gradRangeEnd,
	coursework: req.body.coursework,
	skills: req.body.skills,
  });

  // save the job posting
  JobModel.create(job_obj)
    .then(() => {
      res.send("job posted");
    })
    .catch((err) => {
      res.status(500).send({message: err.message || " error occured while posting this job.",
        });
    });
};

// find user jobs
exports.myJobs = (req, res) => {
	JobModel.findMyJobs(req.body.userid)
	.then((results) => {
        res.send(results);
    })
    .catch((err) => {
      res.status(500).send({message: err.message || " some error occured while retrieving user job postings."});
    });
};
