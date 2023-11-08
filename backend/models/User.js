const { timeStamp } = require("console")
const mongoose =require("mongoose")
const { stringify } = require("querystring")

const UserSchema=mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String, default:"user", enum:["user","admin"]},
    avatar:{type:String}
},
{timestamps:true}
);
const User=mongoose.model("User",UserSchema);
module.exports=User;