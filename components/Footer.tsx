import React from 'react';
import { Coffee, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-coffee-900 p-1.5 rounded-lg">
                <Coffee className="w-6 h-6" />
              </div>
              <span className="font-serif font-bold text-2xl">Connect Coffee</span>
            </div>
            <p className="text-coffee-200 mb-6 max-w-sm">
              Your daily dose of comfort in Juba. Join us for great coffee, delicious bites, and a welcoming atmosphere.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1Hf19kxN6p/" target="_blank" rel="noopener noreferrer" className="text-coffee-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://www.tiktok.com/@connectcoffee_juba?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-coffee-300 hover:text-white transition-colors" aria-label="TikTok">
                {/* Custom TikTok Icon SVG to match Lucide style */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-music"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-coffee-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-coffee-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-coffee-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-coffee-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Mini */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">Contact Info</h4>
            <address className="text-coffee-200 not-italic space-y-4">
              <p>VJ55+3FJ, Juba, South Sudan</p>
              <p>+211 910 389 999</p>
              <p>Open Daily until 8:00 PM</p>
            </address>
          </div>
        </div>

        <div className="border-t border-coffee-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-coffee-400">
          <p>&copy; 2026 Connect Coffee. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Juba's Coffee Lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;