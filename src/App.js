import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import RotatingBall from "./RotatingBall"; // Import the RotatingBall component
import './App.css';

// Import the background image
import background from './assets/images/NITRR.png';

function App() {
  const [showRotatingBall, setShowRotatingBall] = useState(true); // State to control animation

  // Hide the rotating ball after a few seconds (3 seconds in this case)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRotatingBall(false); // Hide the rotating ball after 3 seconds
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showRotatingBall ? (  // If true, show the RotatingBall animation
        <RotatingBall />
      ) : (  // Else, show the rest of the app
        <>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${background})` }}
          ></div>

          {/* Spacing between components */}
          <div className="component-spacing">
            <Navbar />
          </div>

          <div className="component-spacing">
            <HeroSection />
          </div>

          <div className="component-spacing">
            <Features />
          </div>

          <div className="component-spacing">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
