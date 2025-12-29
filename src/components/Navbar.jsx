import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-10">
      {/* Left Side: Logo */}
      <div className="flex items-center gap-2">
        <img 
            src="/logo.png" 
            alt="Melofy Logo" 
            className="w-6 h-6 object-contain" 
        />
        <span className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          MELOFY
        </span>
      </div>
      
      {/* Right Side: Links */}
      <div className="hidden md:flex gap-8 text-sm font-bold text-gray-600">
        <a href="#" className="hover:text-purple-600 transition">About</a>
        <a href="#" className="hover:text-purple-600 transition">Features</a>
        <button className="text-purple-600 hover:text-purple-700 transition">
            Web Player
        </button>
      </div>
    </nav>
  );
};

export default Navbar;