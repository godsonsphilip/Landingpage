import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg w-full">
			<div className="container mx-auto flex flex-col items-center">
				{/* Logo / Brand */}
				<h1
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "3.5rem",
						fontWeight: "bold",
						background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
						WebkitBackgroundClip: "text",
						color: "black",
						// animation: "fadeIn 2s ease-out",
						textAlign: "center",
						margin: "20px 0", // Reset margin to avoid extra spacing
					}}
				>
					I-Cell Form Builder
				</h1>

				{/* Navigation Links */}
				<div className="button flex justify-center">
					{" "}
					{/* Center the buttons horizontally */}
					{/* Home Button */}
					<button
						style={{
							backgroundColor: "black",
							color: "#fff",
							border: "2px solid black", // Adding a border
							fontSize: "1.125rem", // Equivalent to text-lg
							cursor: "pointer",
							padding: "0.5rem 1rem", // Equivalent to py-2 px-4
							margin: "0.5rem",
              borderRadius: "0.375rem",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
							transition:
								"color 0.2s, border-color 0.2s, background-color 0.2s", // Adding transition for smooth effect
						}}
						onMouseEnter={(e) => {
							e.target.style.color = "black"; // Changing text color on hover
							e.target.style.backgroundColor = "lightblue"; // Change background on hover
							e.target.style.borderColor = "lightblue"; // Changing border color on hover
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#fff";
							e.target.style.backgroundColor = "black"; // Reset background
							e.target.style.borderColor = "black"; // Reset border color
						}}
					>
						Home
					</button>
					{/* Details Button */}
					<button
						style={{
							backgroundColor: "red",
							color: "#fff",
							border: "2px red", // Adding a border
							fontSize: "1.125rem", // Equivalent to text-lg
							cursor: "pointer",
							padding: "0.5rem 1rem", // Equivalent to py-2 px-4
							margin: "0.5rem",
              borderRadius: "0.375rem",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
							transition:
								"color 0.2s, border-color 0.2s, background-color 0.2s", // Adding transition for smooth effect
						}}
						onMouseEnter={(e) => {
							e.target.style.color = "wblack"; // Changing text color on hover
							e.target.style.backgroundColor = "Purple"; // Change background on hover
							e.target.style.borderColor = "Purple"; // Changing border color on hover
						}}
						onMouseLeave={(e) => {
							e.target.style.color = "#fff";
							e.target.style.backgroundColor = "red"; // Reset background
							e.target.style.borderColor = "red"; // Reset border color
						}}
					>
						Details
					</button>
					{/* Profile Button */}
					<button
						style={{
							backgroundColor:
								"linear-gradient(to right top, #98e2c6, #7adccf, #5ed6d8, #42d0e1, #26cae9)",
							color: "black",
							border: "none",
							fontSize: "1.125rem",
							cursor: "pointer",
							padding: "0.5rem 1rem",
							margin: "0.5rem",
							transition: "background 0.2s",
							borderRadius: "0.375rem",
							boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
						}}
						onMouseEnter={(e) => (e.target.style.color = "black")}
						onMouseLeave={(e) => (e.target.style.color = "black")}
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
						onMouseLeave={(e) =>
							(e.target.style.background =
								"linear-gradient(to right, #38a169, #4299e1)")
						}
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
						onMouseLeave={(e) =>
							(e.target.style.background =
								"linear-gradient(to right, #a855f7, #ec4899)")
						}
					>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
