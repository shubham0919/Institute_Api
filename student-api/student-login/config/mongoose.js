const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/addstudentdataApi');

const db = mongoose.connection;

db.on('error',(err) => {
    if(err){
        console.log('db not connect');
        return false;
    }
});

db.once('open',() =>{
    console.log('db connect successfully');
})

module.exports = db