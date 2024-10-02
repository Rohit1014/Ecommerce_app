const bcrypt=require("bcrypt")

const hashpassword=async(password)=>{
    try {
        const saultRound=5;
        const hashedpassword=await bcrypt.hash(password,saultRound)
        return hashedpassword
    } catch (error) {
        console.log(error)
    }

}
const comparePassword=async(password,hashedpassword)=>{
    return bcrypt.compare(password,hashedpassword)
}

module.exports={hashpassword,comparePassword}