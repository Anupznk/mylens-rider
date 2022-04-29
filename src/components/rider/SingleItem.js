import React from "react";
import {Grid} from "@mui/material";
import dummyImg from "../../assets/images/dev/hehe_test.webp"

const SingleItem = props => {
    return (
        <Grid container>
            <h4> Product ID: {props.product.id}</h4>
            <Grid item xs={12}>
                <img width="100%" src={dummyImg}/>
            </Grid>


        </Grid>
    )
}

export default SingleItem