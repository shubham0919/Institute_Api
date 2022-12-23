const passport = require('passport')

const jwt = require('passport-jwt')

const faculty = require('../models/facultyModel')

const strategy = require('passport-jwt').Strategy

const extrect = require('passport-jwt').ExtractJwt

const secret = 'shubham'

const obj = {}

obj.jwtFromRequest = extrect.fromAuthHeaderAsBearerToken()

obj.secretOrKey = secret

passport.use(new strategy(obj,(user,done) => {
    faculty.findOne({id : user.id},(err,data) => {
        if(err){
            return done(null,false)
        }
        if(data){
            return done(null,user)
        }
        else{
            return done(null,false)
        }
    })
}))