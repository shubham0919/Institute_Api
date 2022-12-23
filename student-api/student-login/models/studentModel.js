const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    course : {
        type : String,
        required : true
    },
    fees : {
        type : Number,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    facultyid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'faculty'
    }
})

module.exports = mongoose.model('student',studentSchema);
