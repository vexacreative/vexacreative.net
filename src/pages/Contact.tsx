import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';
import DubaiMap from '../components/DubaiMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@vexacreative.net',
      link: 'mailto:hello@vexacreative.net'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Dubai, UAE',
      link: null
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@vexauae',
      link: 'https://instagram.com/vexauae'
    }
  ];

  const services = [
    'Social Media Management',
    'Content Creation',
    'Website Design & Development',
    'Digital Marketing',
    'Brand Strategy',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423746478780-de73e1b70aab?w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper>
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your brand? Let's discuss how we can help you achieve your digital goals.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimationWrapper animation="slide-in-left">
              <div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8">
                  Let's Start Something Amazing
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vexa-purple focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vexa-purple focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vexa-purple focus:border-transparent transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vexa-purple focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-vexa-purple focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="vexa-btn w-full flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </AnimationWrapper>

            {/* Contact Information */}
            <AnimationWrapper animation="slide-in-right">
              <div className="lg:pl-8">
                <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-vexa-gradient p-3 rounded-2xl">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : '_self'}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="text-vexa-purple hover:text-vexa-blue transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <span className="text-gray-600">{info.content}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-3xl">
                  <h4 className="font-playfair font-bold text-xl text-gray-900 mb-4">
                    Response Time
                  </h4>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <p className="text-sm text-gray-500">
                    For urgent matters, please reach out via Instagram DM for faster response.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Dubai Interactive Map */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Visit Us in Dubai
              </h2>
              <p className="text-xl text-gray-600">
                Located in the heart of Dubai's financial district.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-in">
            <DubaiMap />
          </AnimationWrapper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white galaxy-bg">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about working with VEXA Creative.
              </p>
            </div>
          </AnimationWrapper>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope. Social media management is ongoing, websites typically take 4-6 weeks, and content creation projects range from 1-3 weeks.'
              },
              {
                question: 'Do you work with clients outside Dubai?',
                answer: 'Absolutely! While we\'re based in Dubai, we work with clients worldwide. We\'ve successfully managed projects across 25+ countries.'
              },
              {
                question: 'What\'s your pricing structure?',
                answer: 'Our pricing varies by service and project scope. We offer transparent, fixed-price packages starting from AED 2,500/month for social media management.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer ongoing support and maintenance for all our services. Our team is always available to help you grow and evolve your digital presence.'
              }
            ].map((faq, index) => (
              <AnimationWrapper key={index} animation="fade-in">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-playfair font-bold text-lg text-gray-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
