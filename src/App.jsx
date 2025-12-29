import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features'; // <--- Import this

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-purple-100">
      <Navbar />
      <main>
        <Hero />
        <Features /> {/* <--- Add this line */}
      </main>
    </div>
  );
}

export default App;