//
// routes for the Milestone application
//
  const express = require('express');
  const controller = require("../controllers/controller.js");
  const router = express.Router()

  // Home page
  router.get('/', (req, res) => {

    console.log(path.join(__dirname, 'frontend/app/public/', 'index.html'));
    res.sendFile(path.join(__dirname, 'frontend/app/build/', 'index.html'));
  });


// ---- student

  // Retrieve all students; like search text and major or graduation date
  router.get('/search/student', controller.findStudents);
  
  // new student profile
  router.post('/newprofile', controller.newStudentProfile);
  
  // student edit's existing profile
  router.post('/editprofile', controller.changeStudentProfile);
  
  // retrieve student profile - dashboar
  router.get('/student/profile', controller.findStudentProfile);



// --- job postings

  // retrieve jobs
  router.get('/search/jobs', controller.findJob);

 // post a job
  router.post('/newjobpost', controller.postjob);

 // user jobs - headehunter dashboard
 router.get("/employer", controller.myJobs);


// --- user

  // new user registration
  router.post('/newuser', controller.newuser);
  
  // user login
  router.post('/login', controller.userLogin);
  
  // user password reset
  router.post('/passreset', controller.passReset);

 

  module.exports = router;
