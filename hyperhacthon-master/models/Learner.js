const mongoose  = require('mongoose');

const Learnerschema = new mongoose.Schema({
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

module.exports = Learner = mongoose.model('learner',Learnerschema);