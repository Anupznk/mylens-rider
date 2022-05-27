import React, {useEffect, useState} from "react";
import RiderCard from "./RiderCard";
import {Grid} from "@mui/material";
import {getPendings} from "../../actions/content";
import {setLoading} from "../Auth";

const PendingList = props => {

    const [list,setList]=useState(null)

    const fetchPendings=async ()=>{
        setLoading(true)
        var arr=await getPendings()
        setList(arr)
        console.log(arr)
        setLoading(false)
    }

    useEffect(()=>{
        fetchPendings()
    },[])

    const pendingList = {
        items: [
            {
                location: "Dhanmondi",
                name: "Sheium",
                phone: "01521503669"
            },

            {
                location: "Mirpur",
                name: "Anup",
                phone: "1234"
            },

            {
                location: "Azimpur",
                name: "Mehrab",
                phone: "1234"
            },
        ]

    }

    return (
        <Grid container>

            <Grid item xs={12} marginRight={2} marginLeft={-1} marginTop={-1}>
            {list?.map((singleItem) => (
                <RiderCard singleItem={singleItem} />
            ))}


            </Grid>

        </Grid>
    )
}
export default PendingList