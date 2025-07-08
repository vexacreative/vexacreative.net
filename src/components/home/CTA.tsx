
import React from 'react';
import { Palette, Star, Rocket } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const CTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimationWrapper>
          <div className="bg-vexa-gradient rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-vexa-purple/80 via-vexa-blue/70 to-vexa-cyan/80 opacity-90"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
                Let's take your brand to the next level
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to transform your digital presence? Our team is excited to bring your vision to life.
              </p>

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
            </div>

            {/* Enhanced Animated Stars */}
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 right-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-80" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-32 left-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-20 left-20 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-16 right-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-70" style={{ animationDelay: '5s' }}></div>
            <div className="absolute bottom-16 right-40 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-80" style={{ animationDelay: '6s' }}></div>
            <div className="absolute top-40 left-16 w-1 h-1 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '7s' }}></div>
            <div className="absolute bottom-40 left-40 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-70" style={{ animationDelay: '8s' }}></div>
            <div className="absolute top-24 right-12 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '9s' }}></div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default CTA;
