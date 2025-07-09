
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      content: "Vexa Creative has completely transformed our brand presence online. From content creation to digital marketing, their work is consistently creative, strategic, and results-driven. We've seen real growth in engagement and customer interest since working with them!",
      author: "Style Age Clinic",
      location: "Dubai",
      image: "assets/profile.png"
    },
    {
      content: "My content has never looked this professional. I feel like I finally have a brand identity.",
      author: "Personal Brand Coach",
      location: "Online",
      image: "assets/profile.png"
    },
    {
      content: "Working with Vexa Creative feels like having an in-house creative team. They deeply understand our vision and always deliver content that's fresh, on-brand, and visually stunning. Highly recommend for any brand looking to level up their social media!",
      author: "Amira K.",
      role: "Founder of Aesthé",
      image: "assets/profile.png"    },
    {
      content: "We chose Vexa because we needed more than just a social media agency—we needed a creative partner. They handled everything from website design to full digital campaigns, and the results exceeded our expectations!",
      author: "Saeed R.",
      role: "CEO of Root Wellness UAE",
      image: "assets/profile.png"    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it — hear from the brands we've helped transform.
            </p>
          </div>
        </AnimationWrapper>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gradient-to-r from-vexa-purple/20 via-vexa-blue/20 to-vexa-cyan/20 max-w-4xl mx-auto">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                        {testimonial.role && (
                          <div className="text-gray-600 text-xs">{testimonial.role}</div>
                        )}
                        {testimonial.location && (
                          <div className="text-gray-600 text-xs">{testimonial.location}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-vexa-purple scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
