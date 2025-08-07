import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const Pricing = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // New pricing plans based on client's request
  const pricingPlans = [
    {
      name: 'Starter Package',
      price: '1,400',
      period: 'month',
      description: 'Fundamental social media management to kickstart your presence.',
      features: [
        '15 posts/month (Instagram + TikTok or FB)',
        'Basic content creation (images + short videos)',
        'Caption writing & hashtag research',
        'Monthly analytics report',
        '1 revision round per post'
      ],
      popular: false
    },
    {
      name: 'Growth Package',
      price: '2,300',
      period: 'month',
      description: 'Enhanced content creation and reach to boost your brand\'s growth.',
      features: [
        '18-23 posts/month',
        'Premium content design',
        'Reel creation (basic edits)',
        'Boosted ad setup (ad budget not included)'
      ],
      popular: true // Set as popular to maintain existing style
    },
    {
      name: 'Premium Package',
      price: '3,500',
      period: 'month',
      description: 'Comprehensive, hands-on management for full-scale digital presence.',
      features: [
        'Full content calendar planning',
        'Custom branding templates',
        'Paid ad management (Meta or Google Ads)',
        'Weekly analytics + strategy updates',
        'Priority support'
      ],
      popular: false
    }
  ];

  // Add-on services based on client's request
  const addOnServices = [
    {
      name: 'Website design\n\n',
      price: 'starting from AED 1,200',
    },
    {
      name: 'Logo & branding\nkit',
      price: 'from AED 1,200',
    },
    {
      name: 'Google Ads / Meta Ads setup & management',
      price: 'from AED 900/month',
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Choose Your Growth Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible plans designed to scale with your business growth.
            </p>
          </div>
        </AnimationWrapper>

        {/* Desktop Grid for Pricing Plans */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className={`bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative ${
                plan.popular 
                  ? 'ring-2 ring-vexa-purple scale-105 shadow-xl bg-gradient-to-br from-vexa-purple/5 via-vexa-blue/5 to-vexa-cyan/5' 
                  : 'hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-vexa-purple/5 hover:via-vexa-blue/5 hover:to-vexa-cyan/5'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-vexa-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-sm text-gray-500">Start from</span>
                  </div>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-2xl font-bold vexa-gradient-text">
                      AED {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1 text-sm">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-vexa-purple mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="mailto:hello@vexacreative.net"
                  className={`w-full mt-auto block text-center ${
                    plan.popular 
                      ? 'vexa-btn' 
                      : 'bg-gray-100 hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Mobile Carousel for Pricing Plans */}
        <div className="md:hidden px-4 mb-16">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent className="ml-0">
              {pricingPlans.map((plan, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 pt-6">
                    <div className={`bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative ${
                      plan.popular 
                        ? 'ring-2 ring-vexa-purple shadow-xl bg-gradient-to-br from-vexa-purple/5 via-vexa-blue/5 to-vexa-cyan/5' 
                        : ''
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                          <span className="bg-vexa-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6 pt-2">
                        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center mb-3">
                          <span className="text-sm text-gray-500">Start from</span>
                        </div>
                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-3xl font-bold vexa-gradient-text">
                            AED {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-gray-600 ml-2">/{plan.period}</span>
                          )}
                        </div>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>

                      <div className="space-y-4 flex-1 mb-6">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-vexa-purple mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a 
                        href="mailto:hello@vexacreative.net"
                        className={`w-full mt-auto block text-center ${
                          plan.popular 
                            ? 'vexa-btn' 
                            : 'bg-gray-100 hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Add-on Services Section */}
        <AnimationWrapper>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Customizable services to complement your marketing efforts.
            </p>
          </div>
        </AnimationWrapper>

        {/* Desktop Add-on Services */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8">
          {addOnServices.map((service, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 w-full sm:w-80 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-vexa-purple/5 hover:via-vexa-blue/5 hover:to-vexa-cyan/5 flex flex-col items-center justify-between">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2 whitespace-pre-wrap">
                    {service.name}
                  </h3>
                  <p className="text-xl font-bold vexa-gradient-text">
                    {service.price}
                  </p>
                </div>
                <a 
                  href="mailto:hello@vexacreative.net"
                  className="bg-gray-100 w-full block text-center hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </AnimationWrapper>
          ))}
        </div>
        
        {/* Mobile Carousel for Add-on Services */}
        <div className="md:hidden px-4">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent className="ml-0">
              {addOnServices.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 pt-6">
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative">
                      <div className="text-center mb-6 pt-2">
                        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2 whitespace-pre-wrap">
                          {service.name}
                        </h3>
                        <div className="flex items-baseline justify-center mb-3">
                          <p className="text-3xl font-bold vexa-gradient-text">
                            {service.price}
                          </p>
                        </div>
                      </div>
                      <a 
                        href="mailto:hello@vexacreative.net"
                        className="bg-gray-100 w-full mt-auto block text-center hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
