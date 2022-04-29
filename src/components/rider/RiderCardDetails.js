import React from 'react'
import '../../assets/css/ride-card.css'
import CallIcon from '@mui/icons-material/Call';
import {Button, Grid} from "@mui/material";
import dummyImg from "../../assets/images/dev/hehe_test.webp"
import Header from "../home/Header";
import SingleItem from "./SingleItem";
import {useNavigate} from "react-router-dom";

const RiderCardDetails = props => {

    const navigate = useNavigate()
    const number = "tel: 01777706719"

    const prodList = {
        items: [
            {
                id: "JW002",
                imgURL: {dummyImg}
            },

            {
                id: "JW001",
                imgURL: {dummyImg}
            },
            {
                id: "JW003",
                imgURL: {dummyImg}
            },
            {
                id: "JW004",
                imgURL: {dummyImg}
            },
            {
                id: "JW005",
                imgURL: {dummyImg}
            },
            {
                id: "JW006",
                imgURL: {dummyImg}
            },
            {
                id: "JW007",
                imgURL: {dummyImg}
            },
            {
                id: "JW008",
                imgURL: {dummyImg}
            },
        ]

    }

    return (
        <div>
            <Header bg={'#293341'}/>
            <br/><br/><br/>
            <Grid container padding={2}>
                <Grid item xs={12}>
                    <h3>Location (Detailed)</h3>
                    <h4>Buyer's Name</h4>
                </Grid>


                <a href={number}>
                    <div className="call-container" onClick={() => {
                    }}>

                        <CallIcon/>
                        <div> &nbsp;&nbsp;&nbsp;&nbsp;0177770679 &nbsp;&nbsp;</div>

                    </div>
                </a>

                <Grid className="prod-card-container" marginTop={2} marginLeft={.05} marginBottom={2}
                      container paddingBottom={1} spacing={2} paddingRight={2}>
                    {prodList.items?.map((singleItem) => (

                        <Grid item xs={6}>
                            <SingleItem product={singleItem}/>
                        </Grid>

                    ))}
                </Grid>

                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <Button style={{
                            borderRadius: ".75em",
                            padding: ".75em",
                            fontFamily: "Poppins",
                            borderWidth: "2px",
                            fontSize: "0.8em",
                            textTransform: "none",
                            color: "#485253",
                            height: "3em",
                            fontWeight: "bold",
                            borderColor: "#485253",
                        }}
                                onClick={() => {
                                    navigate('../')
                                }}
                                fullWidth size="small" color="success" disableElevation
                                variant="outlined">
                            Done
                        </Button>

                    </Grid>

                    <Grid item xs={6}>
                        <Button style={{

                            borderRadius: ".75em",
                            padding: ".75em",
                            fontFamily: "Poppins",
                            borderWidth: "2px",
                            fontSize: "0.8em",
                            textTransform: "none",
                            height: "3em",
                            fontWeight: "bold",
                            background: "#485253"
                        }}
                                onClick={() => {

                                    navigate('../order')
                                }}
                                fullWidth size="small" disableElevation
                                variant="contained">
                            Order
                        </Button>

                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default RiderCardDetails