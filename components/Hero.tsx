import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-coffee-50">
      
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-coffee-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold tracking-wide uppercase mb-6">
              <Star className="w-3 h-3 fill-orange-800" />
              #1 Coffee Shop in Juba
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-coffee-900 leading-tight mb-6">
              Great Coffee <br />
              <span className="text-coffee-600 italic">& Tea</span> in Juba
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experience the perfect blend of cozy atmosphere and premium beans. 
              Whether you're looking for a quiet spot to work, a place to gather 
              with friends, or just a great cup of coffee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#menu"
                className="group bg-coffee-700 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-coffee-800 transition-all hover:shadow-lg hover:shadow-coffee-700/30 flex items-center justify-center gap-2"
              >
                View Menu
                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a 
                href="tel:0910389999"
                className="bg-coffee-50 text-coffee-800 border-2 border-coffee-200 px-8 py-4 rounded-full font-medium text-lg hover:border-coffee-400 transition-all flex flex-col items-center justify-center leading-tight min-w-[180px]"
              >
                <span>Call Now</span>
                <span className="text-sm font-mono font-bold">0910 389 999</span>
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center md:justify-start gap-8">
              <div>
                <p className="text-3xl font-bold text-coffee-900">4.8</p>
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm text-slate-500">Google Rating</p>
              </div>
              <div className="w-px h-12 bg-coffee-200"></div>
              <div>
                <p className="text-3xl font-bold text-coffee-900">100%</p>
                <p className="text-sm text-slate-500">Natural</p>
              </div>
            </div>
          </motion.div>

          {/* Visual Content (Floating) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Main Cup Image */}
            <div className="relative z-20 mx-auto w-3/4 aspect-[3/4]">
                <img 
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"
                    alt="Delicious Coffee Cup"
                    className="object-cover w-full h-full rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out"
                />
                
                {/* Floating Tag */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-8 -left-8 bg-coffee-50 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30"
                >
                    <div className="bg-orange-100 p-2 rounded-full">
                        <span className="text-xl">🥐</span>
                    </div>
                    <div>
                        <p className="font-bold text-coffee-900">Quick Bites</p>
                        <p className="text-xs text-slate-500">Fresh Pastries</p>
                    </div>
                </motion.div>
            </div>

            {/* Coffee Splash/Decoration behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-coffee-200 to-transparent rounded-full opacity-20 -z-10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;