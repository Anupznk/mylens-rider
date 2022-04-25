import React from 'react'
import {Card, CardMedia, Grid} from "@mui/material";
import glass from "../../assets/images/glass2.png";
import "../../assets/css/orderCard.css"
import SingleOrderItem from "./SingleOrderItem";

const OrderCard = props => {
    const singleOrder = {
        items: [
            {
                prodId: "JW002",
                count: 3,
                image: "url",
                lensDetails: "Anti-Blue Lens with Power",
                prescriptionImg: "url"
            },
            {
                prodId: "JW001",
                count: 2,
                image: "url",
                lensDetails: "Lens with Power",
                prescriptionImg: "url"
            }
        ],
        billingDetails: {
            orderId: 202021,
            timeOfOrder: "10-2-22",
            name: "Anup",
            address: "Dhaka",
            contact: "010101010",
            amount: 200,
            deliveryCharge: 60
        }
    }
    return (

        <Grid container spacing={1} padding={1}>

            <Grid item xs={12} md={12}>

                <div className="order-container">

                    <Grid container>
                        <Grid item xs={8} md={8}>
                            {singleOrder.items?.map((singleItem) => (
                                <div>
                                <SingleOrderItem singleItem={singleItem} billingDetails={singleOrder.billingDetails}/>
                                    <div className="custom-hr"></div>

                                </div>
                            ))}
                        </Grid>




                        <Grid item xs={4} md={4}>
                            <div><b>Billing Details</b></div>
                            <div><font color="#258F67"><b>Order ID:</b></font> {singleOrder.billingDetails.orderId}</div>
                            <div><font color="#000"><b>Time of Order:</b></font> {singleOrder.billingDetails.timeOfOrder}</div>
                            <div><font color="#000"><b>Name:</b></font> {singleOrder.billingDetails.name}</div>
                            <div><font color="#000"><b>Address:</b></font> {singleOrder.billingDetails.address}</div>
                            <div><font color="#000"><b>Contact:</b></font> {singleOrder.billingDetails.contact}</div>

                            <div><font color="#000"><b>Amount:</b></font> <font
                                color="#258F67"> ৳ {singleOrder.billingDetails.amount}</font>
                                + Delivery Fee <font color="#258F67"> ৳ {singleOrder.billingDetails.deliveryCharge}</font>
                            </div>

                        </Grid>
                    </Grid>

                </div>
            </Grid>
        </Grid>

    )
}

export default OrderCard
