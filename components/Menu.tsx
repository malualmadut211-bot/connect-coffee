import React, { useState } from 'react';
import { FULL_MENU } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MenuCategory as MenuCategoryType } from '../types';

const MenuCategory: React.FC<{ category: MenuCategoryType; defaultOpen?: boolean }> = ({ category, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-coffee-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left group focus:outline-none select-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-2xl font-serif font-bold text-coffee-800 group-hover:text-coffee-600 transition-colors">
            {category.title}
          </h3>
          {category.note && (
            <span className="text-sm font-medium text-coffee-500 uppercase tracking-wider">
              {category.note}
            </span>
          )}
        </div>
        <div className={`text-coffee-400 group-hover:text-coffee-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           <ChevronDown className="w-6 h-6" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-medium text-coffee-900 text-lg group-hover:text-coffee-600 transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex-grow mx-4 border-b border-dotted border-coffee-300 relative -top-1"></div>
                    <span className="font-serif font-bold text-coffee-700 whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-coffee-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-100 rounded-bl-full -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-tr-full -z-10 opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">Our Menu</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Crafted with passion, served with love. Click on the categories below to explore our offerings.
            </p>
          </motion.div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-coffee-100">
           {FULL_MENU.map((category, index) => (
             <MenuCategory key={category.title} category={category} defaultOpen={index === 0} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;