import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import { toast } from 'react-hot-toast'
import "./Style/Register.css"
import axois from 'axios'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [phone,setphone]=useState("")
    const [address,setaddress]=useState("")
    const [answer,setanswer]=useState("")

    const navigate=useNavigate()
    const RegisterUser = async (e) => {
      e.preventDefault();
      try {
          const res = await axois.post(
               `http://localhost:5000/api/vi/auth/register`,
              { name, email, password, phone, address,answer }
          );
          if (res.data.success) {
              console.log(res.data.message);
              navigate("/login");
              toast.success("REGISTER SUCCESSFULLY");          
            } 
              else {
              toast.error(res.data.message);
          }
      } catch (error) {
          toast.error("Something went wrong");
      }
  }
  
  return (
    <Layout title={"Register-Ecommerce"}>
    <div className='Register-form'>
        <h1>Register Here</h1>
    <form>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='Enter your Name' value={name} onChange={(e)=>{setname(e.target.value)}}  />
    
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder='Enter your Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
    
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder='Enter your Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
  </div>
  
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='Enter your phone'value={phone} onChange={(e)=>{setphone(e.target.value)}}  />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='Enter your Address' value={address} onChange={(e)=>{setaddress(e.target.value)}}  />
  </div> 
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='What is  your first childhood pet Name' value={answer} onChange={(e)=>{setanswer(e.target.value)}}  />
  </div> 
  <button type="submit" className="btn btn-primary"onClick={RegisterUser} >Submit</button>
</form>

    </div>
    </Layout>
  )
}
