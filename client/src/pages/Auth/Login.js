import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { toast } from 'react-hot-toast'
import "./Style/Register.css"
import axois from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth'
export const Login = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [auth,setauth]=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const LoginUser = async (e) => {
      e.preventDefault();
      try {
          const res = await axois.post(
               `http://localhost:5000/api/vi/auth/login`,
              {email, password }
          );
          if (res.data.success) {
            setauth({
              ...auth,
              user:res.data.user,
              token:res.data.token
            })
             localStorage.setItem("auth",JSON.stringify(res.data))
              navigate(location.state||"/");
              toast.success("Login SUCCESSFULLY");          
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
            <h1>Login Here</h1>
        <form>
      
      <div className="mb-3">
        <input type="email" className="form-control" placeholder='Enter your Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
        
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder='Enter your Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
      </div>
      <button type="submit" className="btn btn-primary"onClick={()=>{navigate("/forgot-password")}} >Forgot password</button>

      
      <button type="submit" className="btn btn-primary"onClick={LoginUser} >Login</button>
    </form>
    
        </div>
        </Layout>
      )
    }


