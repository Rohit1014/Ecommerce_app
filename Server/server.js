const express=require("express")
const app=express()
const dotenv=require("dotenv")
const connectdb=require("./config/db")
const morgan=require("morgan")
const authRoutes=require("./routes/authRoutes")
const CategoryRoute=require("./routes/categoryRoutes")
const cors=require('cors')
dotenv.config()

const PORT=process.env.PORT ||5000
app.use(cors())
app.use(express.json())
app.use("/api/vi/auth",authRoutes)
app.use("/api/vi/auth",CategoryRoute)
connectdb()






app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})