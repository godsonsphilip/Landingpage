import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import './App.css';
// import background from './assets/NITRR.png'; 

function App() {
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
