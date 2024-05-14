const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    isPublished:{
        type:Boolean,
        require:true,
        default:false
    },
    author:{
        type:String,
        require:true,
        default:"Admin"
    },
    coverImage:{
        type:String,
        require:true
    }


},{
    timestamps:true
})

module.exports = mongoose.model("Blog", blogSchema)