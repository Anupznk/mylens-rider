import React from "react";
import RiderCard from "./RiderCard";
import {Grid} from "@mui/material";

const PendingList = props => {

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
            {pendingList.items?.map((singleItem) => (
                <RiderCard singleItem={singleItem} />
            ))}

            </Grid>

        </Grid>
    )
}
export default PendingList