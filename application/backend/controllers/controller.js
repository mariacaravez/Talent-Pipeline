//
// the controller for Milestones Application
//

// student model hook
const StudentModel = require("../models/student.js");

// job posting model
const jobModel = require("../models/jobposting.js");

//
// student control
//

// student object
const student = (student) => {
  this.firstName = req.query.firstName;
  this.middleName = req.query.middleName;
  this.lastName = req.query.lastName;
  this.major = req.query.major;
  this.academicStanding = req.query.academicStanding;
  this.graduationDate = req.query.graduationDate;
  this.gender = req.query.gender;
  this.age = req.query.age;
  this.race = req.query.race;
  this.veteran = req.query.veteran;
  this.militaryCode = req.query.militaryCode;
  this.ethnicity = req.query.ethnicity;
  this.skills = req.query.skills;
};

//asyn was here
exports.findStudents = (req, res) => {
  //console.log("I'M IN CONTROLLER");
  StudentModel
    .find(student, req.query.textValue, req.query.optionsValue)
    .then((results) => {
      //console.log(results);
      res.send(results);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Some error occurred while retrieving students.",
        });
    });
};

// new student registration
exports.newstudent = (req, res) => {
	console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }


  // new student object for req data
  const stModel = new StudentModel({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    userTypeID: 1, //req.body.userTypeID,
    // major: req.body.major,
    // academicStanding: req.body.academicStanding,
    // graduationDate: req.body.graduationDate,
    // gender: req.query.gender,
    // age: req.query.age,
    // race: req.query.race,
    // veteran: req.query.veteran,
    // militaryCode: req.query.militaryCode,
    // ethnicity: req.query.ethnicity,
    // skills: req.query.skills,
  });

  // save the student data to the database
  StudentModel.create(stModel, (err, data) => {
		console.log(req.body);
    if (err)
      res
        .status(500)
        .send({
          message: err.message || "error occured while registering student.",
        });
    else res.send(data);
  });
};

//
// job search control
//

exports.findJob = (req, res) => {
  jobModel
    .find(req.query.jodID, req.query.jobdesc, req.query.optionValue)
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
  });

  // save the job posting
  jobModel
    .create(job_obj)
    .then(() => {
      res.send("job posted");
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || " error occured while posting this job.",
        });
    });
};
