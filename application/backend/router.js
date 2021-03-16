const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jobPostController = require('../controllers/jobPostController');

router.get('/', (req, res) => {res.send('Welcome to Milestone!')});




module.exports = router;