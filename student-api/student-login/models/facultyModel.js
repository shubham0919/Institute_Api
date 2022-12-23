const mongoose = require("mongoose");

const faciltySchema = mongoose.Schema({

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
    designation : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('faculty',faciltySchema);
