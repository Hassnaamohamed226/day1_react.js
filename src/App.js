
import './App.css';
import React from "react";
import HeroSection from "./componets/HeroSection";
import AboutSection from "./componets/AboutSection";
import SkillsSection from "./componets/SkillsSection";
import PortfolioSection from "./componets/PortfolioSection";
import Footer from "./componets/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;
