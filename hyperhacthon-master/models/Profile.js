const mongoose  = require('mongoose');

const Profileschema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'learner'
    },
    contact_number : {
        type : String,
    },
    github : {
        type : String,
    },
    education : {
        type : String,
    },
    experience : {
        type : String,
    },
    techstack : { 
        type : String,
    },
    location : {
        type : String,
    },
    lname : {
        type : String
    }
});

module.exports = Profile = mongoose.model('profile',Profileschema);