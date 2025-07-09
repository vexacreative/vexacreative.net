
import React from 'react';
import AnimationWrapper from '../AnimationWrapper';

const About = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-vexa-gradient rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimationWrapper animation="slide-in-left">
            <div>
              <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-8 leading-tight">
                We don't just create content.
                <br />
                <span className="vexa-gradient-text">We build magnetic brands.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  VEXA Creative is a full-service digital agency based in Dubai, dedicated to helping brands grow and glow in the digital space. We specialize in visual storytelling, digital strategy, and high-performing content.
                </p>
                
                <p>
                  Whether you're launching a new brand, building your online presence, or looking to scale your business — VEXA is your creative partner in this digital era.
                </p>
                
                <div className="pt-6">
                  <p className="font-semibold text-gray-900 mb-2">Our style? Clean. Modern. Bold.</p>
                  <p className="font-semibold text-gray-900">Our mission? To make your brand unforgettable.</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="slide-in-right">
            <div className="relative">
              <img
                src="assets/vexa.png"
                alt="Modern office space"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-vexa-gradient rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vexa-gradient-reverse rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
