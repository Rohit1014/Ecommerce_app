import { useAuth } from "../../context/auth";
import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function Private(){
    const [ok,setok]=useState(false)
    const [auth,setauth]=useAuth()


    useEffect(()=>{
        const authcheck=async()=>{
            const res=await axios.get("http://localhost:5000/api/vi/auth/user-auth")
            if(res.data.ok){
                setok(true)
            }
            else{
                setok(false)
            }

        }
        if(auth?.token){
            authcheck()
        }
        

    },[auth?.token])
    return ok? <Outlet /> :<Spinner/>

}