const mongoose =require("mongoose")
const SlideSchema= mongoose.Schema(
    {
        btnName:{type:String , },
        title:{type:String , },
        heading:{type:String , },
        img:[{type:String , required:true}]
    },
    {timestamps:true}//bu slider güncellenince tarihi bilgilerini arkaplanda verecek
)

const Slide= mongoose.model("Slide",SlideSchema)
module.exports = Slide ;//common.js te export

