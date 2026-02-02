import React from 'react';
import { Star, Users, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side - Single Image */}
          <div className="w-full lg:w-1/2">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative"
             >
                 {/* Decorative element behind image */}
                 <div className="absolute inset-0 bg-coffee-200 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 -z-10"></div>
                 
                 <img 
                     src="https://github.com/malualmadut211-bot/ai-studio-media/blob/8c5d4f6f7ed0448a6630103073ed868b0d0ff3d2/about-image.jpg.png?raw=true" 
                     alt="Connect Coffee - About Us" 
                     className="w-full h-96 md:h-[32rem] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                 />
             </motion.div>
          </div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-8 leading-tight">
                Where Every Cup <br/> Tells a Story
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                    Nestled in the heart of Juba, <strong>Coffee Connect</strong> is more than just a café—it's a sanctuary for coffee lovers, food enthusiasts, and anyone seeking a cozy escape from the everyday hustle.
                </p>
                <p>
                    Since our doors opened, we've been committed to creating an Instagram-worthy space where great conversations flow as freely as our artisanal coffee. Our menu features everything from sizzling hot plates to delicate croissants, each dish crafted with care and passion.
                </p>
                <p>
                    With over <strong className="text-coffee-800">5k+ happy customers</strong> and a strong <strong className="text-coffee-800">4.8-star rating</strong>, our community of regulars keeps coming back for the warm ambiance, friendly service, and unforgettable flavors.
                </p>
            </div>

            <div className="mt-12 pt-8 border-t border-coffee-200 flex flex-wrap gap-12">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-4xl font-serif font-bold text-coffee-800">4.8</span>
                        <Star className="w-6 h-6 fill-orange-500 text-orange-500" />
                    </div>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Google Rating</span>
                </div>
                <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                        <span className="text-4xl font-serif font-bold text-coffee-800">5K+</span>
                        <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Happy Reviews</span>
                </div>
                 <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2">
                        <span className="text-4xl font-serif font-bold text-coffee-800">100+</span>
                        <Coffee className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Menu Items</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;