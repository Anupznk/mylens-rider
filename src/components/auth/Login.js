import React from 'react'
import {Button, Grid, TextField} from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {showToast} from "../../App";
import Cookies from 'universal-cookie';

const Login = props => {

    const cookies = new Cookies();

    const COOKIE_AGE = 31536000

    var [state, setState] = React.useState({
        phone: null,
        password: null,
    });
    const onTextChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        });
        console.log(event.target.value);
    };

    function logIn() {
        const phone = state.phone;
        const password = state.password;

        if (state.phone == "" || state.password == "" || state.phone == null || state.password == null) {
            showToast("Don't keep any of the fields empty")
        } else {
            // setLoading(true);
            axios.post(`http://localhost:8080/api/v1.0/merchant/auth/login`, {
                phone: phone,
                password: password,
                type: 'merchant'
            }).then(res => {

                showToast(" Logged in successfully");
                // setLoggedIn(true);
                cookies.set('auth', JSON.stringify(res.data), {path: '/', maxAge: COOKIE_AGE})
                console.log('login response ', res.data)

                // setUserInfo(res.data);

            }).catch(err => {
                // setLoading(false);
                console.log(err)
                showToast(" Login failed");
            })
        }
    }

    return (
        <div style={{backgroundColor: "#F3F4F8"}}>
            <Grid container spacing={1} padding={1}>

                <Grid item xs={12} md={12}>
                </Grid>

                <Grid item xs={1} md={3}></Grid>
                <Grid marginTop={4} marginBottom={3} item xs={10} md={6}>
                    <center>
                        <Card style={{
                            padding: '20px',
                            boxSizing: 'content-box',
                        }} elevation={0}>


                            <b><strong><Typography variant="h4" component="div">
                                Log in to continue
                            </Typography> </strong></b>
                            <br/>


                            <Grid item xs={0} md={4}></Grid>

                            <Grid item xs={12} md={12}>
                            </Grid>
                            <Grid item xs={0} md={4}>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField
                                    onChange={onTextChange}
                                    value={state.phone}
                                    style={{backgroundColor: "white"}}
                                    name="phone"
                                    fullWidth
                                    id="outlined-basic"
                                    label="Phone"
                                    variant="outlined"/>
                            </Grid>

                            <Grid item xs={0} md={4}></Grid>

                            <Grid item xs={0} md={4}></Grid>

                            <Grid item xs={12} md={12}>
                            </Grid>
                            <Grid item xs={0} md={4}>
                            </Grid>

                            <Grid paddingTop={2} item xs={12} md={4}>
                                <TextField
                                    onChange={onTextChange}
                                    value={state.password}
                                    style={{backgroundColor: "white"}}
                                    name="password"
                                    fullWidth
                                    id="outlined-basic"
                                    label="Password"
                                    type="password"
                                    variant="outlined"/>
                            </Grid>

                            <Grid item xs={0} md={4}></Grid>

                            <Grid item xs={0} md={4}></Grid>

                            <Grid paddingTop={3} item xs={12} md={4}>
                                <center>
                                    <Button
                                        onClick={logIn}
                                        variant="contained"
                                        id="showAllBooksBtn"
                                        disableElevation>
                                        Log in
                                    </Button>
                                </center>
                            </Grid>
                            <Grid item xs={0} md={4}></Grid>
                        </Card>
                    </center>
                </Grid>
                <Grid item xs={1} md={3}></Grid>


            </Grid>
        </div>
    )
}

export default Login
