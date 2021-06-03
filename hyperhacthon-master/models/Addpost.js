const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref:'learner'
    },
    name: {
        type:String
    },
    post: {
        type: String,
        required: true
    },
    location:{
        type:String
    },
    about_company:{
        type: String
    },
    responsibility:{
        type:String
    },
    requirements:{
        type:String
    },
    applied:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref:'learner'
            }
        }
    ],
});

module.exports = Post = mongoose.model('post',PostSchema);