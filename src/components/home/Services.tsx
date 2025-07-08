
import React from 'react';
import { Instagram, Camera, Globe, TrendingUp } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: 'Social Media Management',
      description: 'We build and manage your brand\'s social media — with strategy, storytelling, and consistency.',
      features: [
        'Monthly content calendars',
        'Creative captions & brand voice',
        'Community engagement',
        'Insights & growth tracking'
      ],
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=400&fit=crop'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'We turn ideas into stunning visuals that connect with your audience and drive action.',
      features: [
        'Product photos & videos',
        'Reels, TikToks & UGC-style content',
        'Personal branding shoots',
        'Content days & visual planning'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop'
    },
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Your website is your digital HQ. Let\'s make it powerful and beautiful.',
      features: [
        'Company websites',
        'Portfolio & landing pages',
        'Mobile-first & responsive design',
        'Clean UI/UX'
      ],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'We bring the right message to the right audience — at the right time.',
      features: [
        'Instagram & TikTok Ads',
        'Google Ads & campaign strategy',
        'Funnel setup & email marketing',
        'Targeted reach & conversion'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop'
    }
  ];

  return (
    <section className="section-padding bg-gray-50 galaxy-bg">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you grow online through creative content and smart strategy.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimationWrapper key={index} animation="fade-in">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  <div className="flex flex-col lg:flex-row gap-6 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-vexa-gradient p-3 rounded-2xl">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-playfair font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 flex-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-vexa-gradient rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-vexa-purple/20 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
