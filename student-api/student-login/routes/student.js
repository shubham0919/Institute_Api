const express = require('express');

const studentRegisterController = require('../controllers/studentRegisterController')

const route = express.Router();


route.post('/register',studentRegisterController.register)
route.delete('/deleted',studentRegisterController.deleted)
route.get('/viewstudent',studentRegisterController.viewstudent)
route.put('/updatestudent',studentRegisterController.updatestudent)


module.exports = route