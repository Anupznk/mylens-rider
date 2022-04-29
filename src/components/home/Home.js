import React, {useEffect, useState} from "react";

import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

import Header from "./Header";
import Cookies from "universal-cookie";
import axios from "axios";
import {base_url} from "../../index";
import {incomingCnt, setIncomingCnt, setLoading, setOutgoingCnt, showToast} from "../../App";
import RiderCard from "../rider/RiderCard";
import Tabs from "./Tabs";
import PendingList from "../rider/PendingList";
const cookies = new Cookies();
const Home = props => {
    var navigate=useNavigate()

    const [authCheck, setAuthCheck] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)


    useEffect(()=>{

        if(cookies.get('auth')==undefined || cookies.get('auth')==null){
            console.log('cookies', cookies.get('auth'))
            setAuthCheck(true)
            setLoggedIn(false)
            // navigate('/login')
            // todo: uncomment the above line
        } else {
            setAuthCheck(true)
            setLoggedIn(true)

        }
    },[])



    return (
        <div>

            <Header bg={'#293341'}/>


            <br/><br/><br/>
            <Tabs pendingRides={<Grid container spacing={1}>

                <PendingList/>
            </Grid>}/>


        </div>
    )
}

export default Home


