const faculty = require('../models/facultyModel')
const nodemailer = require('nodemailer')

const jwt = require('jsonwebtoken')

const secret = 'shubham'

module.exports.login = (req,res) =>{
    faculty.findOne({email : req.body.email},(err,data) => {
        if(err){
            return res.json({'status' : '404','message' : 'Data not found'})
        }
        if(data){
            if(data.password == req.body.password){
                const token = jwt.sign(data.toJSON(),secret,{expiresIn : 1000*300})
                res.cookie('token',token)
                return res.json({'status' : '200','message' : 'Login Successfully','token' : token})
            }
            else{
                return res.json({'status' : '404','message' : 'Password not match'})
            }
        }
        else{
            return res.json({'status' : '404','message' : 'email not found'})

        }
    })
}

module.exports.index = (req,res) =>{
    return res.status(200).json({'status' : '200','message' : 'Wlcome to index file'})
}

module.exports.forgot = (req,res) => {

        faculty.findOne({email : req.body.email},(err,data) => {
            if(err){
                return res.json({'status' : '404','message' : 'Email not found'})
            }
            const otp = Math.floor(Math.random()*1000000)
            const mail = nodemailer.createTransport({service : 'gmail',auth : {
                user : 'sonwanes045@gmail.com' ,
                pass : 'trspvpgiwpyavzmp'
            }})
            const option = {
                from : 'sonwanes045@gmail.com',
                to : data.email,
                subject : 'Forgot Password',
                text : 'node mailer',
                html : `otp = ${otp}`
            }
            mail.sendMail(option,(err,data) => {
                if(err){
                return res.json({'status' : '404','message' : 'Email not send'})
                }
                return res.status(200).json({'status' : '200','message' : 'Pleas Check your Email'})

            })
            res.cookie('userotp',{data : data,otp : otp})
        })

}

module.exports.otp = (req,res) => {

        faculty.findOne({email : req.cookies.userotp.data.email},(err,data) => {
            if(err){
                return res.status(404).json({'status' : '404','message' : 'Email not found'})
                
            }
            console.log(data);
            if(data){
                if(req.cookies.userotp.otp == req.body.otp){
                    return res.status(200).json({'status' : '200','message' : 'otp Verified'})
                }
                else{
                    return res.status(404).json({'status' : '404','message' : 'otp not match'})
                }
            }
            else{
                return res.status(404).json({'status' : '404','message' : 'Email not Found'})
            }
        })

}

module.exports.chang =  (req,res) => {

        if(req.body.password == req.body.cpassword){
            faculty.findOneAndUpdate({email : req.cookies.userotp.data.email},{password : req.body.password},(err,data) => {
                if(err){
                return res.status(404).json({'status' : '404','message' : 'password not update'})
                }
                res.clearCookie('userotp');
                return res.status(200).json({'status' : '200','message' : 'password chang successfully'})
            })
        }
        else{
            return res.status(404).json({'status' : '404','message' : 'password not match'})
        }
  
}
