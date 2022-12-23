const express = require('express');

const route = express.Router();

route.use('/faculty',require('./faculty'))
route.use('/login',require('./login'))
route.use('/dashbord',require('./dashbord'))
route.use('/student',require('./student'))

module.exports = route