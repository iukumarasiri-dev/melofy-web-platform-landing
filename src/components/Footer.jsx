import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
                {/* Reusing your logo logic or an icon if logo fails */}
                <img src="/logo.png" alt="Melofy" className="w-8 h-8 object-contain" />
                <span className="text-xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                    MELOFY
                </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Store your sound. Connect with friends. <br />
              The social network for music lovers.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-purple-600 transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Web Player</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Sound Vault</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-purple-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-purple-600 hover:border-purple-600 hover:shadow-md transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400 hover:shadow-md transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 hover:shadow-md transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Melofy. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with 💜 by Melofy Team</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;