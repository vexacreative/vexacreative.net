
import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We put our clients at the heart of everything we do, ensuring their success is our success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.'
    },
    {
      icon: Globe,
      title: 'Global Mindset',
      description: 'Based in Dubai but thinking globally, we understand diverse markets and cultures.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about creativity and helping brands tell their unique stories.'
    }
  ];

  const team = [
    {
      name: 'Sarah Ahmed',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c449?w=300&h=300&fit=crop&crop=face',
      description: 'Leading creative vision with 8+ years in brand strategy and visual storytelling.'
    },
    {
      name: 'Omar Hassan',
      role: 'Digital Marketing Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in performance marketing and data-driven campaign optimization.'
    },
    {
      name: 'Layla Mansouri',
      role: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Crafting compelling narratives that resonate with audiences across platforms.'
    },
    {
      name: 'Khalid Rahman',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Building cutting-edge web solutions with focus on user experience.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper>
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-white mb-6">
              About VEXA Creative
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are a passionate team of creatives, strategists, and digital experts based in Dubai, 
              dedicated to helping brands grow and glow in the digital space.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8">
                  Our Story
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Founded in the heart of Dubai, VEXA Creative was born from a simple belief: 
                    every brand has a unique story waiting to be told. We saw businesses struggling 
                    to stand out in the crowded digital landscape, and we knew we could help.
                  </p>
                  
                  <p>
                    What started as a small team of passionate creatives has grown into a full-service 
                    digital agency, but our core mission remains the same: to make brands unforgettable 
                    through clean, modern, and bold creative solutions.
                  </p>
                  
                  <p>
                    Today, we're proud to work with clients across the globe, from startups to 
                    established enterprises, helping them navigate the digital world with confidence 
                    and style.
                  </p>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-lg w-full"
                />
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-vexa-gradient rounded-full opacity-80 animate-float"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vexa-gradient-reverse rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50 galaxy-bg">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimationWrapper key={index} animation="fade-in">
                  <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="bg-vexa-gradient p-4 rounded-2xl w-fit mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The creative minds behind VEXA's success.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimationWrapper key={index} animation="fade-in">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 mx-auto rounded-3xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-vexa-gradient rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-vexa-purple font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-vexa-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-white mb-6">
                Why Choose VEXA?
              </h2>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Aesthetic-first, result-driven approach',
              'Clean & bold visual identity',
              'Young, global-minded creative team',
              'One-stop creative house',
              'Based in Dubai — working worldwide',
              'Proven track record with 120+ clients'
            ].map((point, index) => (
              <AnimationWrapper key={index} animation="fade-in">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">{point}</span>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
