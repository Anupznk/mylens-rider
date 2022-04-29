import React from "react";
import RiderCard from "./RiderCard";
import {Grid} from "@mui/material";

const RiderHistoryList = props => {

    const historyList = {
        items: [
            {
                location: "Mirpur",
                name: "Anup",
                phone: "1234"
            },
            {
                location: "Dhanmondi",
                name: "Sheium",
                phone: "01521503669"
            },

        ]

    }

    return (
        <Grid container>

            <Grid item xs={12} marginRight={2} marginLeft={-2} marginTop={-2}>
            {historyList.items?.map((singleItem) => (
                <RiderCard singleItem={singleItem} />
            ))}

            </Grid>


        </Grid>
    )
}
export default RiderHistoryList