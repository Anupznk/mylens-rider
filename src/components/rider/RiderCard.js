import React from 'react'
import '../../assets/css/ride-card.css'
import CallIcon from '@mui/icons-material/Call';
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const RiderCard = props => {


    return (
        <div className="ride-card">
            <Grid container paddingLeft={2}>
                <Grid item xs={12}>
                    <h3>{props.singleItem.district}</h3>
                    <h4>{props.singleItem.location}</h4>
                    <h4>{props.singleItem.name}</h4>
                </Grid>

                <a href={"tel: " + props.singleItem.phone}>
                    <div className="call-container" onClick={() => {
                    }}>

                        <CallIcon/>
                        <div> &nbsp;{props.singleItem.phone} &nbsp;&nbsp;</div>

                    </div>
                </a>

                <div className="call-container" onClick={() => {
                }}>

                    <CalendarMonthIcon/>
                    <div>&nbsp;{props.singleItem.delivery_date.split('T')[0]}</div>

                </div>


            </Grid>
        </div>
    )
}

export default RiderCard