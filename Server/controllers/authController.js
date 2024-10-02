const { hashpassword, comparePassword } = require("../helpers/authHelper");
const userModel = require("../models/userModels");
const jwt=require("jsonwebtoken")

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;

    // Validate input fields
    if (!name || !email || !password || !phone || !address ||!answer) {
      return res.status(400).send({ message: "Please provide all details" });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered",
      });
    }

    // Hash the password
    const hashedPassword = await hashpassword(password);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer
    });

    // Save the user to the database
    await newUser.save();

    // Send success response
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      newUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in registering the user",
    });
  }
};
const loginController=async(req,res)=>{
  try {
    const {email,password}=req.body
    if(!email || !password){
      res.status(500).send({
        success:false,
        message:"please provide all details"
      })
    }
    const user=await userModel.findOne({email})
    if(!user){
      res.status(404).send({
        success:false,
        message:"email not found"
      })
    }
    const match=await comparePassword(password,user.password)
      if(!match){
        res.status(200).send({
          success:false,
          message:"invalid password"
        })
      }
    const token=await jwt.sign({_id:user._id},process.env.JWT_TOKEN,{
        expiresIn:"7days"
      })
      res.status(200).send({
        success:true,
        message:"user login sucessfully",
        user:{
          name:user.name,
          email:user.email,
          phone:user.phone,
          address:user.address,
          role:user.role
        },
        token
      })
      
        

      
    }
    
    
   catch (error) {
    res.status(500).send({error:"error in login"})
    
  }
}


const testing=(req,res)=>{
  res.send({result:"hello "})
}


const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    // Check if all required fields are provided
    if (!email || !answer || !newPassword) {
      return res.status(400).send({ message: "Please provide all required fields" });
    }

    // Check if user exists with the given email and answer
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Wrong email or answer",
      });
    }

    // Hash the new password
    const hashed = await hashpassword(newPassword);

    // Update the user's password
    await userModel.findByIdAndUpdate(user._id, { password: hashed });

    // Send success response
    return res.status(200).send({
      success: true,
      message: "Password changed successfully",
    });

  } catch (error) {
    // Log the error and send an error response
    console.log(error);
    return res.status(500).send({
      success: false,
      error: error,
      message: "Something went wrong",
    });
  }
};


module.exports = { registerController,loginController,testing,forgetPasswordController };
