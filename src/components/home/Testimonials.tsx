
import React from 'react';
import { Star } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Vexa Creative has completely transformed our brand presence online. From content creation to digital marketing, their work is consistently creative, strategic, and results-driven. We've seen real growth in engagement and customer interest since working with them!",
      author: "Style Age Clinic",
      location: "Dubai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c449?w=150&h=150&fit=crop&crop=face"
    },
    {
      content: "My content has never looked this professional. I feel like I finally have a brand identity.",
      author: "Personal Brand Coach",
      location: "Online",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      content: "Working with Vexa Creative feels like having an in-house creative team. They deeply understand our vision and always deliver content that's fresh, on-brand, and visually stunning. Highly recommend for any brand looking to level up their social media!",
      author: "Amira K.",
      role: "Founder of Aesthé",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      content: "We chose Vexa because we needed more than just a social media agency—we needed a creative partner. They handled everything from website design to full digital campaigns, and the results exceeded our expectations!",
      author: "Saeed R.",
      role: "CEO of Root Wellness UAE",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-galaxy opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it — hear from the brands we've helped transform.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    {testimonial.role && (
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    )}
                    {testimonial.location && (
                      <div className="text-gray-600 text-sm">{testimonial.location}</div>
                    )}
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
