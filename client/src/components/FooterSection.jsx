import React from 'react';
import { 
  Pizza, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const menuCategories = [
    { name: 'Vegetarian Pizzas', href: '#menu' },
    { name: 'Non-Veg Pizzas', href: '#menu' },
    { name: 'Specialty Pizzas', href: '#menu' },
    { name: 'Sides & Drinks', href: '#menu' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/rockerzpizza', 
      color: 'hover:text-blue-500',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/rockerzpizza', 
      color: 'hover:text-pink-500',
      label: 'Instagram'
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/rockerzpizza', 
      color: 'hover:text-blue-400',
      label: 'Twitter'
    },
    { 
      icon: Youtube, 
      href: 'https://youtube.com/rockerzpizza', 
      color: 'hover:text-red-500',
      label: 'YouTube'
    }
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      text: '+91 98765 43210', 
      href: 'tel:+919876543210',
      color: 'text-green-400'
    },
    { 
      icon: Mail, 
      text: 'hello@rockerzpizza.com', 
      href: 'mailto:hello@rockerzpizza.com',
      color: 'text-blue-400'
    },
    { 
      icon: MapPin, 
      text: 'Gurugram, Haryana, India', 
      href: 'https://maps.google.com',
      color: 'text-red-400'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '10:00 AM - 11:00 PM' },
    { day: 'Saturday - Sunday', time: '10:00 AM - 12:00 AM' },
    { day: 'Delivery Hours', time: '24/7 Available' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center group cursor-pointer mb-6" onClick={() => scrollToTop()}>
                <div className="relative">
                  <Pizza className="h-10 w-10 text-orange-500 transform transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-30 transform scale-0 group-hover:scale-150 transition-all duration-500 blur-lg"></div>
                </div>
                <div className="ml-3">
                  <h1 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    ROCKERZ
                  </h1>
                  <p className="text-sm text-orange-500 font-medium tracking-wider">
                    PIZZA
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Serving authentic Italian flavors with a modern twist since 2016. 
                Every pizza crafted with love, passion, and premium ingredients.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 group`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 group-hover:animate-pulse" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href.replace('#', ''))}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu Categories */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Our Menu
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </h3>
              <ul className="space-y-3">
                {menuCategories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={category.href}
                      onClick={(e) => handleSmoothScroll(e, 'menu')}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:translate-x-2 inline-block"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Get in Touch
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-4 mb-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
                    >
                      <Icon className={`w-5 h-5 mr-3 ${contact.color} group-hover:animate-pulse`} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {contact.text}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-orange-400 mr-2" />
                  <h4 className="text-white font-semibold">Working Hours</h4>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="text-orange-400 font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with <span className="text-orange-400">Rockerz</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new menu items, and special discounts!
            </p>
            
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-r-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© 2025 Rockerz Pizza. Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
              <span>in India. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;