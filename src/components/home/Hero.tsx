
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../AnimationWrapper';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden galaxy-bg">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimationWrapper animation="fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
              Where Brands Come to 
              <span className="vexa-gradient-text block">Life</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              From bold visuals to digital campaigns — we help brands grow, connect, and stand out.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="vexa-btn text-lg flex items-center gap-2"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="flex items-center gap-3 text-white hover:text-vexa-cyan transition-colors group">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-vexa-cyan/20 transition-colors">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="text-lg font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>
        </AnimationWrapper>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-vexa-gradient rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-vexa-gradient-reverse rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-vexa-cyan/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
