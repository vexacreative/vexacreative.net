
import React from 'react';
import { ArrowRight, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimationWrapper from '../AnimationWrapper';

const CTA = () => {
  return (
    <section className="section-padding bg-vexa-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-galaxy opacity-30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimationWrapper>
          <h2 className="text-5xl font-playfair font-bold text-white mb-6">
            Let's take your brand to the next level
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Ready to transform your digital presence? Our team is excited to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/contact"
              className="bg-white text-vexa-purple font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@vexacreative.net"
                className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/vexauae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">🎨</div>
              <div className="font-semibold mb-1">Aesthetic-first</div>
              <div className="text-white/80 text-sm">Result-driven approach</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🌟</div>
              <div className="font-semibold mb-1">Clean & Bold</div>
              <div className="text-white/80 text-sm">Visually stunning designs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🚀</div>
              <div className="font-semibold mb-1">Global Team</div>
              <div className="text-white/80 text-sm">Working worldwide</div>
            </div>
          </div>
        </AnimationWrapper>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTA;
