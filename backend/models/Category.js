const mongoose =require("mongoose")
const CategorySchema= mongoose.Schema(
    {
        name:{type:String , required: true},
        img:{type:String , required:true}
    },
    {timestamps:true}//bu category güncellenince tarihi bilgilerini arkaplanda verecek
)

const Category= mongoose.model("Category",CategorySchema)
module.exports = Category ;//common.js te export

