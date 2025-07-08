
import React, { useState } from 'react';
import { Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Pricing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const packages = [
    {
      name: 'Starter',
      price: 'AED 2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with social media',
      features: [
        '12 posts per month',
        'Basic content creation',
        'Community management',
        'Monthly analytics report',
        'Email support'
      ],
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: 'AED 4,500',
      period: '/month',
      description: 'Ideal for growing brands that need comprehensive social media management',
      features: [
        '20 posts per month',
        'Premium content creation',
        'Stories & reels',
        'Community management',
        'Bi-weekly strategy calls',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'AED 8,500',
      period: '/month',
      description: 'Complete digital solution for established brands',
      features: [
        '30+ posts per month',
        'Full content production',
        'Multi-platform management',
        'Paid advertising campaigns',
        'Weekly strategy sessions',
        'Custom reporting',
        'Dedicated account manager',
        '24/7 support'
      ],
      popular: false,
      buttonText: 'Scale Up'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length);
  };

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-80"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Choose Your Growth Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start from as low as AED 2,500/month. Flexible packages designed to grow with your brand.
            </p>
          </div>
        </AnimationWrapper>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent bg-gradient-to-br from-white to-gray-50 ${
                pkg.popular ? 'ring-2 ring-vexa-purple transform scale-105 border-gradient-to-r from-vexa-purple via-vexa-blue to-vexa-cyan' : 'hover:border-gradient-to-r hover:from-vexa-purple/20 hover:via-vexa-blue/20 hover:to-vexa-cyan/20'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-vexa-gradient text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-2xl sm:text-3xl font-bold vexa-gradient-text">{pkg.price}</span>
                    <span className="text-gray-600 text-sm">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="bg-vexa-gradient p-0.5 rounded-full">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                  pkg.popular 
                    ? 'vexa-btn' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {pkg.buttonText}
                </button>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {packages.map((pkg, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent bg-gradient-to-br from-white to-gray-50 ${
                    pkg.popular ? 'ring-2 ring-vexa-purple border-gradient-to-r from-vexa-purple via-vexa-blue to-vexa-cyan' : 'hover:border-gradient-to-r hover:from-vexa-purple/20 hover:via-vexa-blue/20 hover:to-vexa-cyan/20'
                  }`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-vexa-gradient text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                        {pkg.name}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1 mb-3">
                        <span className="text-3xl font-bold vexa-gradient-text">{pkg.price}</span>
                        <span className="text-gray-600 text-sm">{pkg.period}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{pkg.description}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="bg-vexa-gradient p-0.5 rounded-full">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 px-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                      pkg.popular 
                        ? 'vexa-btn' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      {pkg.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-vexa-purple scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <AnimationWrapper className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We create bespoke packages for unique business needs.
          </p>
          <button className="vexa-btn">
            Let's Discuss Your Project
          </button>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Pricing;
