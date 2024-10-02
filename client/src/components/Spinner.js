import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

function Spinner({path="login"}) {
  const [time,settime]=useState(3)
  const navigate=useNavigate()
  const location=useLocation()
  useEffect(()=>{
    const interval=setInterval(()=>{
      settime((prevtime)=>--prevtime)
    },1000)
    time===0&&navigate(`/${path}`,{
      state:location.pathname
    })
    return ()=>clearInterval(interval)

  },[time,navigate,location,path])
  return (
<>
<div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
  <h1 className='Text-centre'>redirecting to you  in {time}sec</h1>
  <div className="spinner-border" role="status">
  </div>
</div>


</>
  )
}

export default Spinner