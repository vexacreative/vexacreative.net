
import React from 'react';
import { ArrowRight, Mail, Instagram, Palette, Star, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../AnimationWrapper';

const CTA = () => {
  return (
    <section className="section-padding bg-vexa-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vexa-purple/80 via-vexa-blue/70 to-vexa-cyan/80 opacity-90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimationWrapper>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
            Let's take your brand to the next level
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? Our team is excited to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="bg-white text-vexa-purple font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Let's Work Together
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@vexacreative.net"
                className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/vexauae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Palette className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Aesthetic-first</div>
              <div className="text-white/80 text-sm">Result-driven approach</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Clean & Bold</div>
              <div className="text-white/80 text-sm">Visually stunning designs</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="font-semibold mb-1">Global Team</div>
              <div className="text-white/80 text-sm">Working worldwide</div>
            </div>
          </div>
        </AnimationWrapper>
      </div>

      {/* Animated Stars */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-80" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 left-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default CTA;
