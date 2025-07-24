import React from 'react';
import { Users, Award, Globe, Heart, Palette, Star, Rocket, Shield, Target, Zap } from 'lucide-react';
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
      description: 'We strive for excellence in every project, delivering quality.'
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
      name: 'Creative Director',
      role: '',
      image: 'assets/profile1.png',
      description: 'Leading creative vision with 8+ years in brand strategy and visual storytelling.'
    },
    {
      name: 'Digital Marketing Lead',
      role: '',
      image: 'assets/profile2.png',      
      description: 'Expert in performance marketing and data-driven campaign optimization.'
    },
    {
      name: 'Content Strategist',
      role: '',
      image: 'assets/profile3.png',
      description: 'Crafting compelling narratives that resonate with audiences across platforms.'
    },
    {
      name: 'Tech Lead',
      role: '',
      image: 'assets/profile4.png',      
      description: 'Building cutting-edge web solutions with focus on user experience.'
    }
  ];

  const whyChoosePoints = [
    { icon: Palette, text: 'Aesthetic-first, result-driven approach' },
    { icon: Star, text: 'Clean & bold visual identity' },
    { icon: Users, text: 'Young, global-minded creative team' },
    { icon: Shield, text: 'One-stop creative house' },
    { icon: Globe, text: 'Based in Dubai — working worldwide' },
    { icon: Target, text: 'Proven track record with 120+ clients' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/about.png')`
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
                  src="assets/image.png"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-vexa-purple/10 via-transparent to-vexa-cyan/10 rounded-3xl"></div>
                <div className="absolute -top-8 -left-8 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
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
      {/* <section className="section-padding bg-vexa-gradient">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-white mb-6">
                Why Choose VEXA?
              </h2>
            </div>
          </AnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <AnimationWrapper key={index} animation="fade-in">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg">{point.text}</span>
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
