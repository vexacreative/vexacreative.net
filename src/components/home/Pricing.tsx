
import React from 'react';
import { Check, Star } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Pricing = () => {
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

  return (
    <section className="section-padding bg-gray-50 galaxy-bg">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              Choose Your Growth Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start from as low as AED 2,500/month. Flexible packages designed to grow with your brand.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-vexa-purple transform scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-vexa-gradient text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold vexa-gradient-text">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-vexa-gradient p-1 rounded-full">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
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

        <AnimationWrapper className="text-center mt-16">
          <p className="text-gray-600 mb-6">
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
