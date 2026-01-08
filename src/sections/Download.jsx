import React from 'react';
import { Apple, Play } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to tune in?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join the community today. Store your favorite tracks, find your music twin, 
          and experience the social side of sound.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* App Store Button */}
          <button className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-transform hover:-translate-y-1">
            <Apple size={24} fill="currentColor" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">Download on the</p>
              <p className="text-lg leading-none">App Store</p>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center justify-center gap-3 bg-transparent border border-gray-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-transform hover:-translate-y-1">
            <Play size={24} fill="currentColor" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">Get it on</p>
              <p className="text-lg leading-none">Google Play</p>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Download;
