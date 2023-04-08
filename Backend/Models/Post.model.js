const mongoose=require("mongoose")

const PostSchema=new mongoose.Schema({

})

const PostModel=mongoose.model("Post",PostSchema)
module.exports={PostModel}