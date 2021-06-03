const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref:'learner'
    },
    project_name: {
        type: String,
        required: true
    },
    tech_skill:{
        type:String
    },
    project_description:{
        type: String
    },
    // feedback:{
    //     type: String
    // },
    feedback:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'learner'
            },
            text:{
                type: String,
                required:true
            },
            name:{
                type:String
            }
        }  
    ],
    project_rating:{
        type:String
    }
});

module.exports = Projectt = mongoose.model('project',PostSchema);