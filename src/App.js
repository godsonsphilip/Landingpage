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
        style={{ backgroundImage: `url(${background})` }} // Set the background image here
      ></div>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
