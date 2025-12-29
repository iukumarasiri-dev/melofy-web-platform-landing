import React from 'react';
import { Download, Globe } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-5xl mx-auto">
      
      {/* 1. Logo Circle (Fixed Size & File) */}
      <div className="mb-6 p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-white rounded-full p-1">
            <img 
                src="/logo.png" 
                alt="Melofy Logo" 
                className="w-16 h-16 rounded-full object-contain" 
            />
        </div>
      </div>
      
      {/* 2. Main Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
        Feel the rhythm. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">
          Store your sound.
        </span>
      </h1>
      
      {/* 3. Description */}
      <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
        The social network for your music taste. Connect with friends, 
        share your daily rotation, and discover your next obsession.
      </p>

      {/* 4. Action Buttons */}
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

    </section>
  );
};

export default Hero;