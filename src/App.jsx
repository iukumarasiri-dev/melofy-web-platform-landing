import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About';
import Download from './sections/Download';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-purple-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Download />
      </main>
      <Footer /> 
    </div>
  );
}

export default App;

