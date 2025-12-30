import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import About from './sections/About'; // <--- Import it

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-purple-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About /> {/* <--- Add it here */}
      </main>
    </div>
  );
}

export default App;