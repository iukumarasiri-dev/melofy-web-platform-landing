import React from 'react';
import { Download, Globe } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-40 pb-20">
      
      {/* LAYER 1: The Video (Background) */}
      <div className="absolute top-16 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Optional: Tiny dark tint so text pops (Delete if you want 100% clear) */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* LAYER 2: The Content (Sits on top of video) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center px-6">
        
        {/* Logo */}
        <div className="mb-6 p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="bg-white rounded-full p-1">
              <img 
                  src="/logo.png" 
                  alt="Melofy Logo" 
                  className="w-16 h-16 rounded-full object-contain" 
              />
          </div>
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
          Feel the rhythm, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
            Store your sound
          </span>
        </h1>
        
        {/* Text Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed font-bold">
          The social network for your music taste. Build your personal sound vault, connect with friends, and discover music.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button variant="primary" onClick={() => alert("App Download coming soon!")}>
            <Download size={20} />
            Download App
          </Button>
          
          <Button variant="outline" onClick={() => console.log("Web player clicked")}>
            <Globe size={20} />
            Open Web Player
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;