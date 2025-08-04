import React, { useState, useEffect } from 'react';
import { Star, Clock, Truck, Pizza } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "Fresh. Hot. Delicious.",
    "Made with Love & Passion",
    "Your Favorite Pizza Awaits"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  },);

  const floatingItems = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    emoji: ['🍕', '🧀', '🍅', '🌶️', '🫒'][i % 5],
    delay: i * 0.5,
    duration: 8 + (i % 3),
  }));

  const handleSmoothScroll = (e, targetId) => {
  e.preventDefault(); // Prevent default anchor behavior
  const targetSection = document.getElementById(targetId);
  
  if (targetSection) {
    const offsetTop = targetSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' 
    });
  }
};

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(251,146,60,0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(239,68,68,0.3)_0%,_transparent_50%)]"></div>
      </div>

      {floatingItems.map((item) => (
        <div
          key={item.id}
          className="absolute text-2xl opacity-20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Pizza Image */}
        <div className="relative mb-8">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/50 animate-spin-slow">
              <div className="w-full h-full bg-gradient-to-br from-yellow-600 via-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Pizza className="w-32 h-32 md:w-40 md:h-40 text-white animate-bounce" />
              </div>
              {/* Pizza Toppings */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-white rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
              ROCKERZ
            </span>
          </h1>
          
          <div className="h-16 md:h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-orange-300 font-medium transition-all duration-500 transform">
              {heroTexts[currentText]}
            </p>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Experience the perfect blend of authentic Italian flavors with a modern twist. 
            Every pizza is crafted with premium ingredients and served with love.
          </p>
        </div>

         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-500">
          <button 
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:from-orange-600 hover:to-red-600 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 active:scale-95 hover:-translate-y-1"
            onClick={(e) => handleSmoothScroll(e, 'menu')}
          >
            🍕 Order Now
          </button>
          
          <button 
            className="border-2 border-orange-500 text-orange-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:shadow-lg transform hover:scale-105 active:scale-95"
            onClick={(e) => handleSmoothScroll(e, 'menu')}
          >
            📋 View Menu
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-700">
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-500/30">
              <Star className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:animate-spin" />
              <h3 className="text-2xl font-bold text-white mb-2">4.9/5</h3>
              <p className="text-gray-300">Customer Rating</p>
            </div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-500/30">
              <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-2">25 Min</h3>
              <p className="text-gray-300">Delivery Time</p>
            </div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 backdrop-blur-sm border border-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500/30 hover:to-red-500/30">
              <Truck className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <p className="text-gray-300">Home Delivery</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;