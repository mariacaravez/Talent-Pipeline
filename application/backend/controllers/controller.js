//
// the controller for Milestones Application
//

// user model hook
const UserModel = require("../models/usermodel.js");

// user account hook
const UserAccount = require("../models/account.js");

// student model hook
const StudentModel = require("../models/student.js");

// job posting model hook
const JobModel = require("../models/jobposting.js");

//
// student control
//

// search student controls
exports.findStudents = (req, res) => {
  StudentModel.find(req.query.textValue, req.query.optionsValue)
    .then((results) => {
      //console.log(results);
      res.send(results);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving students.",
      });
    });
};

// new student profle
exports.newStudentProfile = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  console.log("CONTROLLER: About to create student object with: ", req.body);

  // student data object
  const student = new StudentModel({
    userID: req.body.profile.userID,
    major: req.body.profile.major,
    academicStanding: req.body.profile.academicStanding,
    graduationDate: req.body.profile.graduationDate,
    gender: req.body.profile.gender,
    age: req.body.profile.age,
    race: req.body.profile.race,
    veteran: req.body.profile.veteran,
    militaryCode: req.body.profile.militaryCode,
    ethnicity: req.body.profile.ethnicity,
    userskill: req.body.profile.userskill,
    skillRating: req.body.profile.skillRating,
    courseWork: req.body.profile.courseWork,
    courseWorkRating: req.body.profile.courseWorkRating,
    workTitle: req.body.profile.workTitle,
    workDescription: req.body.profile.workDescription,
    jobapps: req.body.profile.jobapps,
    resume: req.body.profile.resume,
  });
  console.log("After object creation in controller: ", student);

  // save profile data
  StudentModel.createProfile(student, (err, data) => {
    console.log("In Controller - going into studentModel: ", student);
    if (err) {
      res.status(500).send({
        message: err.message || "error occured while creating student profile.",
      });
    } else res.send(data);
  });

  // console.log("IN CONTROLLER.NEWSTUDENTPROFILE:", student);
};

// retrieve student profile for display
exports.findStudentProfile = (req, res) => {
  StudentModel.findProfile(req.query.userID, (err, data) => {
    if (err) {
      console.log("there was an error in findStudentProfile");
      res.status(500).send({
        message:
          err.message || "error occured while retrieving student profile.",
      });
    } else {
      console.log("In controller findStudentProfile: ", data);
      res.send(data);
      console.log("In controller after res.send: ", data);
    }
  });
  // StudentModel.findProfile(req.query.userID)
  //   .then((results) => {
  //     //console.log(results);
  //     res.send(results);
  //   })
  //   .catch((err) => {
  //     res
  //       .status(500)
  //       .send({
  //         message:
  //           err.message || "Some error occurred while retrieving student information.",
  //       });
  //   });
};

// save changes to student profile
exports.changeStudentProfile = (req, res) => {
  // populate student object with changed data
  const student = new StudentModel({
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
    // jobapps: req.body.jobapps,
    resume: req.body.resume,
  });

  // save updated data
  StudentModel.updateProfile(student, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "error occured while updating student profile.",
      });
    else res.send(data);
  });
};

//
// user control
//

// new user (student, headhunter, endorser) registration
exports.newuser = (req, res) => {
  // console.log("IN CONTROLLER NEWUSER FUNCTION BEFORE OBJECT CREATION")
  // console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
  }

  // new user object from req data
  const User = new UserModel({
    firstName: req.body.user.firstName,
    middleName: req.body.user.middleName,
    lastName: req.body.user.lastName,
    userTypeID: req.body.user.userTypeID,
    username: req.body.user.username,
    password: req.body.user.password,
    email: req.body.user.email,
  });
  console.log("CONTROLLER: About to Create User:", User);

  // save new user record
  UserModel.create(User, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "error occured while registering user.",
      });
    } else {
      console.log("CONTROLLER: userModel.create: ", data);
      res.send(data);
      //   console.log(data.insertID);
      //   console.log("Before user account is created")

      //   // user login account
      //   const acct = new UserAccount({
      //     userID: data.insertID,
      //     username: req.body.user.username,
      //     password: req.body.user.password,
      //     email: req.body.user.email,
      //   });

      //   // save user account record
      //   UserAccount.create(acct, (err, data) => {
      //     if (err)
      //       res.status(500).send({message: err.message || "error occured while saving user account."});
      //     else res.send(data);
      //   });
      //   console.log("After account created: USER ACCOUNT SHOULD PRINT NEXT");
      //   console.log(acct);
    }
  });
};

// user login
exports.userLogin = (req, res) => {
  const creds = new UserAccount({
    username: req.body.user.username,
    password: req.body.user.password,
  });
  // console.log(creds);

  // check for valid user
  UserAccount.verify(creds, (err, data) => {
    console.log("CONTROLLER - data: ", data);
    console.log("CONTROLLER - creds: ", creds);
    if (err)
      res
        .status(500)
        .send({ message: err.message || "Login failed; try again." });
    else res.send(data);
  });
};

// password reset
exports.passReset = (req, res) => {
  const newpass = new userAccount({
    userID: req.body.userID,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  // save new password
  UserAccount.resetpass(newpass)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "password reset failed." });
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
      res.status(500).send({
        message:
          err.message || " some error occured while retrieving job postings.",
      });
    });
};

// post a new job
exports.postjob = (req, res) => {
  console.log("CONTROLLER - request received: ", req);
  // validate request body
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  // create new jobposting object
  const job_obj = new JobpostObj({
    location: req.body.location,
    jobPostTitle: req.body.jobPostTitle,
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

  console.log("CONTROLLER - obj created: ", job_obj);

  // save the job posting
  JobModel.create(job_obj)
    .then(() => {
      res.send("job posted");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || " error occured while posting this job.",
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
      res.status(500).send({
        message:
          err.message ||
          " some error occured while retrieving user job postings.",
      });
    });
};
