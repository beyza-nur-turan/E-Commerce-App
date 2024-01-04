const mongoose =require("mongoose")
const OfficeInfoSchema= mongoose.Schema(
    {
        officeName:{type:String , required: true},
        officePhone:{type:String , required:true},
        officeMail:{type:String , required:true},
        officeOpenWeekday:{type:String , required:true},
        officeOpenWeekend:{type:String , required:true},
        officeAddress:{type:String,required:true}
    },
    {timestamps:true}//bu category güncellenince tarihi bilgilerini arkaplanda verecek
)

const OfficeInfo= mongoose.model("OfficeInfo",OfficeInfoSchema)
module.exports = OfficeInfo ;//common.js te export

