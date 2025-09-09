import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <AboutMeSection />
          <VideoSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;