const mongoose  = require('mongoose');

const Mentorschema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    usertype : {
        type : String,
    }
});

module.exports = Mentor = mongoose.model('mentorandrec',Mentorschema);