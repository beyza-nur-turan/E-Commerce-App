const mongoose =require("mongoose")
const CouponSchema= mongoose.Schema(
    {
        code:{type:String , required: true},
        discountPercent:{type:Number , required:true}//indirim oranı
    },
    {timestamps:true}//bu kupon güncellenince tarihi bilgilerini arkaplanda verecek
)

const Coupon= mongoose.model("Coupon",CouponSchema)
module.exports = Coupon ;//common.js te export

