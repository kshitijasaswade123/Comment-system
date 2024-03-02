const mongoose = require('mongoose');
const commentModel = new mongoose.Schema({
    
    text:{
        type:String,
        required:true
    },
    post_id:{
        type:Number,
        required:true
    },
    author_id:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
   
})


module.exports = mongoose.model('commentModel', commentModel);