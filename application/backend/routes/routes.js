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

  // Retrieve all students; like search text and major or graduation date
  router.get('/search', controller.findStudents);
  
  
  // new student registration
  router.post('/newstudent', controller.newstudent);
  
  // search for job postings
  // router.get('/jobsearch', controller.findJob);

  // post a job
  router.post('/newjobpost', controller.postjob);

  module.exports = router;