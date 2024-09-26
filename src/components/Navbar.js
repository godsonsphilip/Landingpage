import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg w-full">
      <div className="container mx-auto flex flex-col items-center"> {/* Change to flex-col for vertical alignment */}
        {/* Logo / Brand */}
        <h1 className="text-white text-3xl font-bold tracking-wide text-center mb-4"> {/* Added text-center and margin */}
          I-Cell Form Builder
        </h1>

        {/* Navigation Links */}
        <div className="button flex justify-center"> {/* Center the buttons horizontally */}
          {/* Home Button */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "1.125rem", // Equivalent to text-lg
              cursor: "pointer",
              padding: "0.5rem 1rem", // Equivalent to py-2 px-4
              margin: "0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#gray-200")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            Home
          </button>

          {/* Details Button */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "1.125rem",
              cursor: "pointer",
              padding: "0.5rem 1rem",
              margin: "0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#gray-200")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            Details
          </button>

          {/* Profile Button */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "1.125rem",
              cursor: "pointer",
              padding: "0.5rem 1rem",
              margin: "0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#gray-200")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            Profile
          </button>

          {/* Sign In Button */}
          <button
            style={{
              background: "linear-gradient(to right, #38a169, #4299e1)", // Green to Blue gradient
              color: "#fff",
              border: "none",
              borderRadius: "0.375rem", // Equivalent to rounded-lg
              padding: "0.5rem 1rem",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "background 0.2s",
              margin: "0.5rem",
            }}
            onMouseEnter={(e) => (e.target.style.background = "orangered")}
            onMouseLeave={(e) => (e.target.style.background = "linear-gradient(to right, #38a169, #4299e1)")}
          >
            Sign In
          </button>

          {/* Sign Up Button */}
          <button
            style={{
              background: "linear-gradient(to right, #a855f7, #ec4899)", // Purple to Pink gradient
              color: "#fff",
              border: "none",
              borderRadius: "0.375rem",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "background 0.2s",
              margin: "0.5rem",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#d53f8c")}
            onMouseLeave={(e) => (e.target.style.background = "linear-gradient(to right, #a855f7, #ec4899)")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
