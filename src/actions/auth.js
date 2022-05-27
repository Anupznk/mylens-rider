import axios from "axios";
import Cookies from "universal-cookie";
import {base_url} from "../index";
import {showToast} from "../App";
import {updateAuth} from "../components/Auth";
import {updateAuthHeader} from "../components/home/Header";

const cookies = new Cookies();

const COOKIE_AGE=31536000

export const checkAuth=()=>{
    if(cookies.get('rider_token')==undefined || cookies.get('rider_token')==null)
        return false
    else
        return true
}

export const login=async (phone,password)=>{
    try{
        var res=await axios.post(`${base_url}/rider/auth/login`, {
            phone: phone,
            password: password,
            type: 'rider'
        })
        cookies.set('rider_token', res.data.access_token, {path: '/', maxAge: COOKIE_AGE})
        return true
    }catch(e){
        console.log(e)
        return false
    }

}

export const logout=()=>{
    cookies.remove('rider_token',{ path: '/' })
    showToast('Logged out successfully')
    updateAuth()
    updateAuthHeader()
}



