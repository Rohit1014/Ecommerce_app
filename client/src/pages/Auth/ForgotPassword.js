import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { toast } from 'react-hot-toast'
import "./Style/Register.css"
import axois from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const [email,setemail]=useState("")
    const [newPassword,setpassword]=useState("")
    const [answer,setanswer]=useState("")
    const navigate=useNavigate()
    const LoginUser = async (e) => {
      e.preventDefault();
      try {
          const res = await axois.post(
               `http://localhost:5000/api/vi/auth/forgot-password`,
              {email, answer,newPassword }
          );
          if (res.data.success) {
            
              navigate("/login");
              toast.success(res.data.message);          
            } 
              else {
              toast.error(res.data.message);
          }
      } catch (error) {
          toast.error("Something went wrong");
      }
  }
  return (
    <Layout title={"Login-Ecommerce"}>
        <div className='Register-form'>
            <h1>Reset Here</h1>
        <form>
      
      <div className="mb-3">
        <input type="email" className="form-control" placeholder='Enter your Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
        
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder='Enter your first childhood pet Name' value={answer} onChange={(e)=>{setanswer(e.target.value)}} />
        
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder='Enter your New Password' value={newPassword} onChange={(e)=>{setpassword(e.target.value)}} />
      </div>
      

      
      <button type="submit" className="btn btn-primary"onClick={LoginUser} >Reset</button>
    </form>
    
        </div>
        </Layout>
  )
}

export default ForgotPassword