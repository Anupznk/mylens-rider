import React from "react";
import OrderCard from "./merchant/OrderCard";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Home = props => {
    var navigate=useNavigate()

    return (
        <div>

            <Grid container spacing={1} padding={1}>
                <Grid textAlign="center" item xs={12} md={12}>
                    <Button onClick={()=>{navigate('/login')}}>
                        Log in
                    </Button>
                </Grid>
                <OrderCard/>
            </Grid>
        </div>
    )
}

export default Home
