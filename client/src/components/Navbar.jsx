import React, { useState, useEffect } from 'react';
import { Menu, X, Pizza, ShoppingCart, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? ' backdrop-blur-lg shadow-2xl shadow-orange-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <Pizza className="h-8 w-8 md:h-10 md:w-10 text-orange-500 transform transition-all duration-500 group-hover:rotate-180 group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-500 rounded-full opacity-0 group-hover:opacity-30 transform scale-0 group-hover:scale-150 transition-all duration-500 blur-lg"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                ROCKERZ
              </h1>
              <p className="text-xs md:text-sm text-orange-500 font-medium tracking-wider transform transition-all duration-300 group-hover:tracking-widest">
                PIZZA
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative text-white hover:text-orange-400 p-2 rounded-lg transition-all duration-300 hover:bg-orange-500/20 group">
              <ShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                0
              </span>
            </button>
            
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 active:scale-95">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 p-2 rounded-lg transition-all duration-300 hover:bg-orange-500/20"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-black/95 backdrop-blur-lg rounded-b-2xl border-t border-orange-500/30">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-orange-400 hover:bg-orange-500/20 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : ''
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center justify-between pt-4 px-4 border-t border-orange-500/30">
              <button className="flex items-center text-white hover:text-orange-400 transition-colors duration-300">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart (3)
              </button>
              
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 active:scale-95">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;