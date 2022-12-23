const student = require('../models/studentModel')

module.exports.register = (req,res) => {
    student.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        course : req.body.course,
        fees : req.body.fees,
        city : req.body.city,
        facultyid : req.body.facultyid
    },(err,data) =>{
        if(err){
            return res.json({'status' : '404','message' : 'Data not insert'})
        }
        return res.json({'status' : '200','message' : 'Data insert successfully', 'data' : data})
    })
}

module.exports.deleted = (req,res) => {
    let id = req.query.id;

    student.findByIdAndDelete(id,(err,data) => {
        if(err){
            return res.json({'status' : '404','message' : 'Data not Deleted'})
        }
        return res.json({'status' : '200','message' : 'Data Deleted successfully', 'data' : data})
    })
}

module.exports.viewstudent = (req,res) => {
    
    student.aggregate([
        {
            $lookup : {
                from : 'faculties',
                localField : 'facultyid',
                foreignField : "_id",
                as : 'studentRecord'
            }
        }
    ]).then(data => {
        return res.json({'status' : '200', 'data' : data})
    })
}

module.exports.updatestudent = (req,res) =>{
    let id = req.query.id
    student.findByIdAndUpdate(id,{
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        course : req.body.course,
        fees : req.body.fees,
        city : req.body.city
    },(err,data) => {
        if(err){
            return res.json({'status' : '404','message' : 'Data not update'})
        }
        return res.json({'status' : '200','message' : 'Data update successfully','data' : data})
    })
}