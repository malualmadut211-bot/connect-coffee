import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden bg-coffee-100 rounded-[3rem] shadow-xl">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-8">Visit Us Today</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-coffee-200 p-3 rounded-full text-coffee-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-coffee-900 text-lg">Address</h3>
                  <p className="text-slate-600">VJ55+3FJ, Juba, South Sudan</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Connect+Coffee+Juba+South+Sudan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-coffee-600 font-medium text-sm mt-2 hover:underline"
                  >
                    Get Directions <Navigation className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-coffee-200 p-3 rounded-full text-coffee-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-coffee-900 text-lg">Opening Hours</h3>
                  <p className="text-slate-600">Open Daily</p>
                  <p className="text-slate-600">Closes at 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-coffee-200 p-3 rounded-full text-coffee-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-coffee-900 text-lg">Contact</h3>
                  <p className="text-slate-600">+211 910 389 999</p>
                  <a href="tel:0910389999" className="text-coffee-600 font-medium text-sm mt-2 hover:underline block">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-96 lg:h-auto min-h-[400px] w-full bg-slate-200 relative">
             <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Coffee Connect Location"
                src="https://maps.google.com/maps?q=VJ55%2B3FJ%2C+Juba%2C+South+Sudan&t=&z=15&ie=UTF8&iwloc=&output=embed">
             </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;