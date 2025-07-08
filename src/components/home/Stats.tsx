
import React from 'react';
import AnimationWrapper from '../AnimationWrapper';

const Stats = () => {
  const stats = [
    { number: '120+', label: 'Happy Clients', icon: '😊' },
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '25+', label: 'Countries Reached', icon: '🌍' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-galaxy opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Trusted by Clients Across the Globe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to have worked with over 120+ clients across industries — from beauty and wellness to tech and lifestyle.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimationWrapper 
              key={index} 
              animation="fade-in"
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-playfair font-bold vexa-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper className="text-center mt-16">
          <p className="text-lg text-gray-700 font-medium">
            Based in Dubai — trusted by brands worldwide.
          </p>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Stats;
