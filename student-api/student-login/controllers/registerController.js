const faculty = require('../models/facultyModel');

module.exports.register = (req,res) => {
    faculty.create({

        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        designation : req.body.designation,
        city : req.body.city
    },(err,data) =>{
        if(err){
            return res.json({'status' : '404','message' : 'Data not insert'})
        }
        return res.json({'status' : '200','message' : 'Data insert successfully', 'data' : data})
    })
}

