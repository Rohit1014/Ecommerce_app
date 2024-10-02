const mongoose=require("mongoose")
const ConectDB=async()=>{
  try {
    const connec=await mongoose.connect(process.env.MONGO_URL)
    console.log("CONNECTED TO MONGODB")
  } catch (error) {
    console.log(`error in mongodb ${error}`)
  }
}

module.exports=ConectDB