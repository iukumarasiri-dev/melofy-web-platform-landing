import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* --- LEFT SIDE: Visual (Gradient Box) --- */}
        <div className="w-full md:w-1/2 relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            
            {/* The "Glass" Card */}
            <div className="relative bg-white/30 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-10 aspect-square flex flex-col items-center justify-center text-center">
                <span className="text-6xl mb-6">🎧</span>
                <h3 className="text-2xl font-bold text-gray-800">Music is Social</h3>
                <p className="text-gray-500 mt-2">No more private listening.</p>
            </div>
        </div>

        {/* --- RIGHT SIDE: The Story --- */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xs font-bold text-purple-600 tracking-widest uppercase mb-3">
            Our Mission
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Bringing the human touch back to music discovery.
          </h3>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            Algorithms are great, but they don't know *you*. Melofy connects you with the people who actually shape your taste—your friends, your idols, and your community.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    10k+
                </h4>
                <p className="text-gray-500 font-medium">Beta Users</p>
            </div>
            <div>
                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    2.5M
                </h4>
                <p className="text-gray-500 font-medium">Songs Shared</p>
            </div>
          </div>

          <Button variant="outline" onClick={() => console.log('Read more')}>
            Read Our Story
          </Button>
        </div>

      </div>
    </section>
  );
};

export default About;