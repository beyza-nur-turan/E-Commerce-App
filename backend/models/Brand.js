const mongoose =require("mongoose")
const BrandSchema= mongoose.Schema(
    {
        img:{type:String , required: true},
        
    },
    {timestamps:true}//bu kupon güncellenince tarihi bilgilerini arkaplanda verecek
)

const Brand= mongoose.model("Brand",BrandSchema)
module.exports = Brand ;//common.js te export

