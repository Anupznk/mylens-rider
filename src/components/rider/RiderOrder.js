import React from 'react'
import '../../assets/css/ride-card.css'
import CallIcon from '@mui/icons-material/Call';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Header from "../home/Header";
import {useNavigate} from "react-router-dom";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const RiderOrder = props => {

    const navigate = useNavigate()
    const number = "tel: 01777706719"

    const prodList = {
        items: [
            {
                id: "JW002",
                price: 1900,
            },
            {
                id: "JW001",
                price: 2900,
            },
            {
                id: "JW003",
                price: 900,
            },
            {
                id: "JW004",
                price: 1700,
            },
            {
                id: "JW005",
                price: 1900,
            },
            {
                id: "JW006",
                price: 1900,
            },


        ]

    }

    const [selectedProd, setselectedProd] = React.useState('');

    const handleChange = (event) => {
        setselectedProd(event.target.value);
    };

    function removeItem(id) {

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

                <div className="custom-hr"></div>
                <br/>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Product</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedProd}
                        label="Select Product"
                        onChange={handleChange}>

                        {prodList.items?.map((singleItem) => (
                            <MenuItem value={singleItem.id} onClick={()=>{
                                // todo: navigate to this product profile page
                            }}>
                                <Grid container>
                                    <Grid item xs={9}>
                                        {singleItem.id}
                                    </Grid>
                                    <Grid item xs={3}>
                                        BDT {singleItem.price}
                                    </Grid>
                                </Grid>

                            </MenuItem>
                        ))
                        }


                    </Select>
                </FormControl>

                <Grid container marginTop={3}>
                    <Grid item xs={9}>

                    </Grid>
                    <Grid item xs={3}><b>Price</b></Grid>
                </Grid>


                <Grid marginTop={2} marginLeft={.05} marginBottom={2}
                      container paddingBottom={1} spacing={2} paddingRight={2}>
                    {prodList.items?.map((singleItem) => (

                        <Grid container padding={1}>
                            <Grid item xs={9}>
                                <Grid container>
                                    <Grid item xs={2} onClick={() => {
                                        removeItem(singleItem.id)
                                    }}>

                                        <RemoveCircleOutlineIcon/>
                                    </Grid>

                                    <Grid item xs={10}>

                                        {singleItem.id}
                                    </Grid>
                                </Grid>


                            </Grid>

                            <Grid item xs={3}>
                                <div>BDT {singleItem.price}</div>
                            </Grid>


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
                                    // todo: go back to the card details page
                                }}
                                fullWidth size="small" color="success" disableElevation
                                variant="outlined">
                            Back
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
                                    // todo: navigate to checkout page
                                }}
                                fullWidth size="small" disableElevation
                                variant="contained">
                            Checkout
                        </Button>

                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default RiderOrder