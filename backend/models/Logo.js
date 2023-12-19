const mongoose =require("mongoose")
const LogoSchema= mongoose.Schema(
    {
        img: [{type:String, required:true}],
    },
    {timestamps:true}
)

const Logo= mongoose.model("Logo",LogoSchema)
module.exports = Logo ;

