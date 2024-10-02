const mongoose=require("mongoose")
 const UserSchema=mongoose.Schema({
    name:{
       type:String,
       require:true,
       trim:true
},
email:{
    type:String,
    require:true,
    uique:true
},
password:{
    type:String,
    require:true,
},
phone:{
    type:String,
    require:true

},
address:{
    type:String,
    require:true

},
answer:{
    type:String,
    require:true
},
role:{
    type:Number,
    default:0
},
 },{Timestamp:true})

const userModel=mongoose.model("users",UserSchema)

module.exports=userModel