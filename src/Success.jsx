import React from 'react'

const Success = () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <button style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "teal",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}
      >Payment Successful

      </button>
    
    </div>
  );
};

export default Success;