import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';



const KEY = require(process.env.REACT_APP_S_KEY);

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);


    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makerequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:3000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 3000,
                }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makerequest;
}, [stripeToken]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <StripeCheckout
                name="devHuß"
                image="https://i.im.ge/2022/07/22/FqdOSC.th.jpg"
                billingAddress
                shippingAddress
                description="Your total is 30€"
                amount={30000}
                token={onToken}
                stripeKey={KEY}

            >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}
            >
               Pay Now
            </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;

