import Cookies from "universal-cookie";
import axios from "axios";
import {base_url} from "../index";

const cookies = new Cookies();

const COOKIE_AGE=31536000

export const getPendings=async ()=>{
    try{
        var res=await axios.get(`${base_url}/rider/cart/getAssignedCart`,{headers:{authorization:'Bearer '+cookies.get('rider_token')}})
        return res.data.items
        //return res.data.cart.cart_id
    }catch(e){
        return []
    }
}
