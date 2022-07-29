const express = require('express');
const router = express.Router();
const userController = require('../controllers/userAttrController');
const jobPostController = require('../controllers/jobPostController');

router.get('/', (req, res) => {res.send('Welcome to Milestone!')});

// User related routes
router.get('/search-students', userAttrController.findAll);


// Route to search Students
// router.get('/search/user/:userType) // NOT SURE OF THIS EXAMPLE

// Route to search Job Postings
// router.get('/search/jobPost/:salary) // NOT SURE OF THIS EXAMPLE

module.exports = router;