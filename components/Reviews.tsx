import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-4">What Our Guests Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-lg font-bold text-slate-700">4.8 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-coffee-100 p-8 rounded-3xl relative">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-coffee-300" />
              <div className="flex text-amber-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-coffee-200 rounded-full flex items-center justify-center text-coffee-700 font-bold">
                    {review.author[0]}
                </div>
                <div>
                    <p className="font-bold text-coffee-900 text-sm">{review.author}</p>
                    <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;