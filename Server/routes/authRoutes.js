const express=require("express")
const router=express.Router()
const {requireSignin,isAdmin}=require("../middleware/authMiddleware")
const {registerController,loginController,testing,forgetPasswordController}=require("../controllers/authController")

router.post("/register",registerController)

router.post("/login",loginController)

router.post("/test",requireSignin,isAdmin,testing)

router.get("/user-auth",requireSignin,(req,res)=>{
    res.status(200).send({ok:true})
})
router.get("/admin-auth",requireSignin,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
router.post("/forgot-password",forgetPasswordController)

module.exports=router