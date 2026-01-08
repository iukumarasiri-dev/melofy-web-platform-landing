import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Download", href: "#download" },
  ];

  return (
    // 'mx-4' creates the space on left/right
    // 'rounded-b-3xl' curves the bottom corners
    // 'shadow-purple-500/10' gives a subtle colored shadow
    <nav className="fixed top-0 left-0 right-0 z-50 mx-4 bg-white/90 backdrop-blur-md shadow-xl shadow-purple-600/50 rounded-b-3xl border border-t-0 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        
        {/* --- LEFT: Links (Tighter gap & Smaller text) --- */}
        <div className="flex items-center gap-5 justify-start">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        
        <div className="flex items-center justify-center gap-2 transform hover:scale-105 transition-transform cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Melofy Logo" 
              className="w-7 h-7 object-contain" 
            />
            <span className="text-lg font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              MELOFY
            </span>
        </div>

        {/* --- RIGHT: Actions --- */}
        <div className="flex items-center gap-3 justify-end">
          <button 
            onClick={() => navigate('/app')} 
            className="hidden md:block text-xs font-bold text-gray-500 hover:text-gray-900 transition"
          >
            Sign In
          </button>

          <button 
            onClick={() => navigate('/app')}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-gray-900 hover:bg-purple-600 transition-all shadow-md hover:shadow-purple-500/25"
          >
            Get started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

