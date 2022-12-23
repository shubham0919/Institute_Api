const express = require('express');
const passport = require('passport')

const studentRegisterController = require('../controllers/studentRegisterController')

const route = express.Router();


route.post('/login',studentRegisterController.login)
route.get('/logout',studentRegisterController.logout)
route.get('/index',passport.authenticate('jwt',{session : false}),studentRegisterController.index)
route.post('/forgot',studentRegisterController.forgot)
route.post('/otp',studentRegisterController.otp)
route.post('/chang',studentRegisterController.chang)




module.exports = route