import axios from "axios";
import { useState,useContext,createContext,useEffect } from "react";

const Authcontext=createContext()

const Authprovider=({children})=>{
    const [auth,setauth]=useState({
        user:null,
        token:""
    })

    axios.defaults.headers.common['Authorization']=auth?.token
    useEffect(()=>{
        const data=localStorage.getItem("auth")
        if(data){
            const parsedata=JSON.parse(data)
            setauth({
                ...auth,
                user:parsedata.user,
                token:parsedata.token
            });
        }
    },[])
    return (
        <Authcontext.Provider value={[auth,setauth]}>
            {children}
        </Authcontext.Provider>
    )
}
const useAuth= () =>useContext(Authcontext)
export {useAuth,Authprovider}



