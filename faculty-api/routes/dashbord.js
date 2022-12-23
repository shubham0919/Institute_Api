const express = require('express');

const facultyprofileController = require('../controllers/FacultyProfileController')

const route = express.Router();


route.post('/profile',facultyprofileController.profile)


module.exports = route