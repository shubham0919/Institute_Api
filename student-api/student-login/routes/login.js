const express = require('express');
const passport = require('passport');

const loginController = require('../controllers/LoginController')

const route = express.Router();

route.post('/login',loginController.login)
route.post('/forgot',loginController.forgot)
route.post('/otp',loginController.otp)
route.post('/chang',loginController.chang)
route.get('/index',passport.authenticate('jwt',{session : false}),loginController.index)


module.exports = route