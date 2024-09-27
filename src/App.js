import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import './App.css';

// Import the background image
import background from './assets/images/NITRR.png';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
