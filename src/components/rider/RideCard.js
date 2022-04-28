import React from 'react'
import '../../assets/css/ride-card.css'
import CallIcon from '@mui/icons-material/Call';
import {Grid} from "@mui/material";



const RideCard = props => {

    // function dialCall () {
    //
    //     let phoneNumber = '';
    //
    //     if (Platform.OS === 'android') {
    //         phoneNumber = 'tel:${1234567890}';
    //     }
    //     else {
    //         phoneNumber = 'telprompt:${1234567890}';
    //     }
    //
    //     Linking.openURL(phoneNumber);
    // };


    const number = "tel: 01777706719"

    return (
        <div className="ride-card">
            <Grid container paddingLeft={2}>
                <Grid item xs={12}>
                    <h3>Location (Major field)</h3>
                    <h4>Buyer's Name</h4>
                </Grid>


                <a href={number}  >
                <div className="call-container" onClick={()=> {}}>

                    <CallIcon />
                    <div > &nbsp;&nbsp;&nbsp;&nbsp;0177770679 &nbsp;&nbsp;</div>

                </div>
                </a>


            </Grid>
        </div>
    )
}

export default RideCard