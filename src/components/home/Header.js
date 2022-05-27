import React, {useEffect, useRef, useState} from 'react'
import {Grid} from "@mui/material";
import '../../assets/css/header.css'
import icon1 from '../../assets/images/production/icon.svg'
import icon2 from '../../assets/images/production/logo-v2.svg'
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {checkAuth, logout} from "../../actions/auth";


var updateAuthHeader

const Header = props => {



    const cookies = new Cookies();
    var navigate = useNavigate()

    var height = 55

    const [isLoggedIn, setIsLoggedIn] = useState(null)


    const [auth,setAuth]=useState(null)

    updateAuthHeader=()=>{
        setAuth(checkAuth())
    }

    useEffect(()=>{
        updateAuthHeader()
    },[])


    const authClick = () => {
        logout()
    }

    useEffect(() => {
        if (cookies.get('auth')) setIsLoggedIn(true)
        else setIsLoggedIn(false)

    }, [])



    return (
        <div className={'header-container'}>


            <div className={'header-desktop'}>
                <Grid container style={{backgroundColor: props.bg, height: `${height}px`, color: '#ffffff'}}>


                    <Grid item xs={4}>
                        <center style={{height: `${height}px`, display: 'flex', alignItems: 'center'}}>
                            <div onClick={() => {
                                navigate('/')
                            }} className={'header-icon-container'}>
                                {
                                    'home' in props ? (
                                        <img src={icon1} className={'header-icon'}/>
                                    ) : (
                                        <img src={icon2} className={'header-icon'}/>
                                    )
                                }
                            </div>
                        </center>
                    </Grid>

                    <Grid item xs={4}></Grid>

                    <Grid item xs={4}>
                        <div className={'header-right-wrapper'}>
                            <div className={'header-right-container'}>
                                <div className={'header-register-container'}>
                                    {
                                        auth!==null && auth?(
                                            <button onClick={authClick}>
                                                <div>
                                                    Logout
                                                </div>
                                            </button>
                                        ):(
                                            <div/>
                                        )
                                    }

                                </div>

                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>
            <div className={'header-mobile'} style={{backgroundColor: props.bg}}>
                <div onClick={() => {
                    navigate('/')
                }} className={'header-icon-container'}>
                    {
                        'home' in props ? (
                            <img src={icon1} className={'header-icon'}/>
                        ) : (
                            <img src={icon2} className={'header-icon'}/>
                        )
                    }
                </div>
                {/*<MenuIcon className={'header-ham-icon'}/>*/}
                <div className={'header-right-container'}>
                    <div className={'header-register-container'}>
                        <button onClick={authClick}>
                            {
                                isLoggedIn ? (
                                    <div>
                                        Logout
                                    </div>
                                ) : (
                                    <div>
                                        Login
                                    </div>
                                )
                            }
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header
export {updateAuthHeader}
