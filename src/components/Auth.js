import React, {useEffect, useState} from 'react'
import {checkAuth} from "../actions/auth";
import Home from "./home/Home";
import Login from "./auth/Login";
import Header from "./home/Header";
import '../assets/css/auth.css'
import {CircularProgress} from "@mui/material";

var updateAuth
var setLoading

const Auth=props=>{

    const [auth,setAuth]=useState(null)

    const [loading,setLoad]=useState(false)

    setLoading=setLoad

    updateAuth=()=>{
        setAuth(checkAuth())
    }

    useEffect(()=>{
        updateAuth()
    },[])

    return(
        <div>
            {
                auth!==null && auth?(
                    <Header bg={'#293341'}/>
                ):(
                    <div/>
                )
            }
            {
                loading?(
                    <div className={'loader-container'}>
                        <CircularProgress/>
                    </div>
                ):(
                    <div/>
                )
            }
            {
                auth===null?(
                    <div/>
                ):(
                    auth?(
                        <Home/>
                    ):(
                        <Login/>
                    )
                )
            }
        </div>
    )
}

export default Auth
export {updateAuth,setLoading}