const express = require('express');

const route = express.Router();

route.use('/faculty',require('./faculty'))
route.use('/login',require('./login'))
route.use('/dashbord',require('./dashbord'))
route.use('/student',require('./student'))
route.use('/studentlogin',require('./studentLogin'))

module.exports = route