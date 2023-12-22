const mongoose=require("mongoose");

const ReviewSchema=mongoose.Schema(
    {
        text:{type:String},
        rating:{type:Number},
        user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}//user modeli ile ilişkilendirme kurup user id yi alıyor
    },
    {timestamps:true}
)

const BlogSchema=mongoose.Schema(
    {
        img: {type:String, required:true},
        reviews:[ReviewSchema],
        description: {type:String, required:true},
        title: {type:String, required:true},

    },
    {timestamps:true}
)
const Blog=mongoose.model("Blog",BlogSchema)
module.exports=Blog