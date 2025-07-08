
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-galaxy opacity-20"></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-vexa-gradient py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Stay Updated with VEXA
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on digital marketing, brand growth, and creative trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-vexa-purple font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img 
                  src="/public/assets/logo.png" 
                  alt="VEXA Creative" 
                  className="w-12 h-12"
                />
                <span className="text-2xl font-playfair font-bold">VEXA Creative</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                We don't just create content. We build magnetic brands. VEXA Creative is your 
                creative partner in the digital era, helping brands grow and glow in the digital space.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/vexauae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-vexa-gradient p-3 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="mailto:hello@vexacreative.net"
                  className="bg-vexa-gradient p-3 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-vexa-cyan mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Dubai, UAE</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-vexa-cyan mt-1 flex-shrink-0" />
                  <a 
                    href="mailto:hello@vexacreative.net"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    hello@vexacreative.net
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Instagram className="w-5 h-5 text-vexa-cyan mt-1 flex-shrink-0" />
                  <a 
                    href="https://instagram.com/vexauae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    @vexauae
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VEXA Creative. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 sm:mt-0">
              Based in Dubai — trusted by brands worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
