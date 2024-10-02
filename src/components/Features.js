import React from "react";

const Features = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "4rem auto" }}>
      <h2
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "3rem",
        }}
      >
        Features that Make Us Stand Out
      </h2>
      <div style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}>
        {/* Feature 1 - Drag-and-Drop Builder */}
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%", // Adjust box size as needed
            backgroundColor: "beige",
          }}
        >
          <h3 style={{ fontSize: "1.50rem", fontWeight: "600", marginBottom: "1rem" }}>
            Drag-and-Drop Builder
          </h3>
          <p style={{fontSize: "1.10rem", color: "black" }}>Easily create forms with a drag-and-drop interface.</p>
        </div>

        {/* Feature 2 - Customizable Templates */}
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%", // Adjust box size as needed
            backgroundColor: "beige",
          }}
        >
          <h3 style={{ fontSize: "1.50rem", fontWeight: "600", marginBottom: "1rem" }}>
            Customizable Templates
          </h3>
          <p style={{ fontSize: "1.10rem", color: "black" }}>Choose from a variety of pre-designed templates.</p>
        </div>

        {/* Feature 3 - Real-Time Responses */}
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "30%", // Adjust box size as needed
            backgroundColor: "beige",
          }}
        >
          <h3 style={{ fontSize: "1.50rem", fontWeight: "600", marginBottom: "1rem" }}>
            Real-Time Responses
          </h3>
          <p style={{ fontSize: "1.10rem", color: "black" }}>Receive responses instantly with real-time updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
