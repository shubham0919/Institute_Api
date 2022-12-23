const express = require('express');

const registerController = require('../controllers/registerController')

const route = express.Router();


route.post('/register',registerController.register)


module.exports = route