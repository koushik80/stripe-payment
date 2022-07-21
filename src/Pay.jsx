import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Pay = () => {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <StripeCheckout name="devHuß">
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

export default Pay

