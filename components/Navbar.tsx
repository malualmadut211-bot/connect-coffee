import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { NAV_ITEMS } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-50/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="bg-coffee-600 text-white p-1.5 rounded-lg group-hover:bg-coffee-700 transition-colors">
                <Coffee className="w-6 h-6" />
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-coffee-900' : 'text-coffee-900'}`}>
              Connect Coffee
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-coffee-900 hover:text-coffee-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
                href="tel:0910389999"
                className="bg-coffee-600 text-white px-5 py-1.5 rounded-lg hover:bg-coffee-700 transition-all hover:scale-105 shadow-lg shadow-coffee-600/20 flex flex-col items-center justify-center leading-tight group"
            >
                <span className="font-bold text-sm uppercase tracking-wide">Order Now</span>
                <span className="text-xs font-mono opacity-90 group-hover:opacity-100">0910 389 999</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-coffee-800 hover:text-coffee-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-coffee-50 border-t border-coffee-100 absolute w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-coffee-900 hover:bg-coffee-100 hover:text-coffee-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:0910389999"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-coffee-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-coffee-700 flex flex-col items-center justify-center gap-1"
          >
            <span className="font-bold uppercase tracking-wide">Order Now</span>
            <span className="text-sm opacity-90">0910 389 999</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;