import React from 'react'
import glass from "../../assets/images/glass2.png";
import {Grid} from "@mui/material";
import "../../assets/css/orderCard.css"
import prescription from "../../assets/images/prescription.png"

const SingleOrderItem = props => {
    return (
        <Grid container paddingTop={2} paddingBottom={1}>
            <Grid item xs={5} md={5}>
                <div><font size="28px"><b> Product ID: {props.singleItem.prodId}</b></font>
                    <div className="count">x{props.singleItem.count}</div>
                </div>
                <br/>
                <img className="order-img" src={glass} width="300px" alt="img"/>

                <div className="lensDetails">

                </div>
                <br/>
            </Grid>

            <Grid item xs={1} md={1}>
                <div className="vertical-bar">

                </div>
            </Grid>

            <Grid item xs={5} md={5}>
                <div><b>Lens Details</b></div>
                <div><font color="#258F67"> {props.singleItem.lensDetails}</font></div>

                <div><b>Prescription</b></div>

                <img className="prescription-img" src={prescription} width="400px"/>


            </Grid>

            <Grid item xs={1} md={1}>
                <div className="vertical-bar">

                </div>
            </Grid>


        </Grid>
    )
}

export default SingleOrderItem
