const express = require('express');
const session = require('express-session')

const app = express();

const port = 9005;

const passportJWt = require('./config/passport-jwt')

const passport = require('passport')

const db = require('./config/mongoose');
const sdb = require('./config/mongoose');

const cookie = require('cookie-parser')

app.use(session({
    secret : 'shubham',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*60
    }
}))

app.use(cookie())

app.use(passport.initialize())

app.use(passport.session())

app.use(express.urlencoded())

app.use('/',require('./routes'))

app.listen(port,(err) => {

    if(err) {
        console.log("Server not start");
        return false;
    }
    console.log(`Server start on http://localhost:${port}`);
})