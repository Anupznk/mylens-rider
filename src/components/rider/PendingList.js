import React from "react";
import RiderCard from "./RiderCard";

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
        <div>

            {pendingList.items?.map((singleItem) => (
                <RiderCard singleItem={singleItem} />
            ))}


        </div>
    )
}
export default PendingList