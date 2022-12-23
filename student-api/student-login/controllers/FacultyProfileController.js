
const faculty = require('../models/facultyModel')

module.exports.profile = (req,res) => {

        console.log(req.cookies);
        const token = req.cookies.token;


        const user = parseJWT(token);
        const updateFacultyDate = faculty.findByIdAndUpdate(user._id,{

            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
            designation : req.body.designation,
            city : req.body.city

        },(err,data) => {
            if(err){
                return res.json({'status' : '404','message' : 'Data not found'})
            }
        return res.json({'status' : '200','message' : 'Data update successfully', 'data' : data})
        })

}

function parseJWT(token){
    return JSON.parse(Buffer.from(token.split('.')[1],'base64').toString())
}