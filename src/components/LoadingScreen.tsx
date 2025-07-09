
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <img 
            src="/public/assets/logo/load.png" 
            alt="VEXA Creative" 
            className="w-24 h-24 mx-auto animate-pulse-glow"
          />
          <div className="absolute inset-0 bg-vexa-gradient rounded-full opacity-20 animate-spin-slow"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-playfair font-bold vexa-gradient-text">VEXA Creative</h2>
          <p className="text-gray-600 font-inter">Your Digital Growth Partner</p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-vexa-purple rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-vexa-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-vexa-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
