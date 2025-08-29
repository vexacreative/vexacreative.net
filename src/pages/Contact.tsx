import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // The WhatsApp number, ensure it includes the country code without any special characters
    const waNumber = '971585456399';

    // Construct the message from form data in English
    const message = `Hello, I'm interested in your services. Here are the details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || '-'}
Service: ${formData.service}
Message: ${formData.message}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Open the URL in a new window
    window.open(waUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Business Address',
      content: 'Dubai, United Arab Emirates',
      link: null, // No direct link for the address
      subcontent: 'Serving clients globally from the heart of the UAE'
    },
    {
      icon: Phone,
      title: 'WhatsApp / Phone',
      content: '+971 58 545 6399',
      // This link will open WhatsApp or a phone call depending on the device
      link: 'https://wa.me/971585456399'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@vexacreative.net',
      link: 'mailto:hello@vexacreative.net'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@vexauae',
      link: 'https://instagram.com/vexauae'
    }
  ];

  const businessHours = [
    { day: 'Monday – Friday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Saturday – Sunday', hours: 'Closed (by appointment only)' }
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
            // Corrected background image path
            backgroundImage: `url('/assets/contact.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your brand? Let's discuss how we can help you achieve your digital goals.
            </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8">
                  Let's Start Something Amazing
                </h2>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  {/* Button with a nice gradient and hover effect */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-xl text-white shadow-lg
                             bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors"
                  >
                    Send Message via WhatsApp
                    {/* SVG for WhatsApp icon, since 'lucide-react' does not have it */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white"
                    >
                      <path
                        d="M20.52 3.48A11.02 11.02 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.42 1.25 4.87L2 22l5.63-1.46A9.97 9.97 0 0 0 12 22c5.52 0 9.92-4.48 9.92-10 0-2.65-1.04-5.14-2.8-7.02zM12 20.21c-2.31 0-4.46-.8-6.18-2.22l-3.32.86.87-3.23a8.1 8.1 0 0 1-2.21-5.91c0-4.42 3.65-8 8.13-8 2.14 0 4.14.86 5.66 2.34a7.92 7.92 0 0 1 2.34 5.66c0 4.42-3.65 8-8.13 8zM17.51 14.22c-.22-.11-.96-.48-1.11-.53-.15-.05-.26-.08-.38.08-.12.16-.46.53-.56.64-.1.11-.2.12-.37.05-.18-.08-.75-.27-1.42-.83-.52-.44-.87-1.01-1.03-1.28-.16-.27 0-.25.11-.36.1-.11.22-.27.33-.42.11-.15.15-.26.11-.34-.05-.08-.18-.42-.32-.99-.15-.57-.3-.48-.42-.48-.12 0-.26-.02-.38-.02-.12 0-.32.04-.49.22-.17.18-.65.63-.65 1.54 0 .9.67 1.78.76 1.9.09.12 1.3 2.02 3.14 2.82 1.84.8 1.84.59 2.17.55.33-.04.96-.39 1.1-.76.14-.37.14-.68.1-.76-.04-.08-.14-.14-.29-.22z"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            

            {/* Contact Information & Hours */}
              <div className="lg:pl-8">
                <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-8 mb-12">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-gray-200 p-3 rounded-xl flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : '_self'}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="text-blue-600 hover:underline transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <span className="text-gray-600">
                              {info.content}
                              {info.subcontent && (
                                <>
                                  <br />
                                  <span className="text-sm text-gray-500">{info.subcontent}</span>
                                </>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Business Hours */}
                <div className="p-8 bg-gray-50 rounded-3xl">
                  <h4 className="font-playfair font-bold text-xl text-gray-900 mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between text-gray-700">
                        <span>{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <p className="text-xl text-gray-600">
                Find us at our office in the UAE.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-xl w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.425351218861!2d56.342550173592784!3d25.121306634773813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f8917d48f84b%3A0x219dd80091a144c0!2zQ3JlYXRpdmUgQ2l0eSBGdWphaXJhaCBNZWRpYSBGcmVlIFpvbmUg2YXYr9mK2YbZgNipINin2YTZgdis2YrZgNmA2LHYqSDZhNmE2KXYqNmA2K_Yp9i5IC0g2KfZhNmF2YbYt9mC2YDYqSDYp9mE2KXYudmE2KfZhdmK2YDYqSDYp9iE2K3ZgNix2Kk!5e0!3m2!1sid!2sid!4v1754567744622!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vexa Creative Location Map"
              ></iframe>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about working with VEXA Creative.
              </p>
            </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope. Social media management is ongoing, websites typically take 4-6 weeks, and content creation projects range from 1-3 weeks.'
              },
              {
                question: 'Do you work with clients outside the UAE?',
                answer: 'Absolutely! While we\'re based in Fujairah, we work with clients worldwide. We\'ve successfully managed projects across 25+ countries.'
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
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-playfair font-bold text-lg text-gray-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
