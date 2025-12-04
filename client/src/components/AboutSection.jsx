import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, Heart, ChefHat, MapPin, Star, Zap } from 'lucide-react';
import ContactSection from './ContactSection';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasCounterStarted, setHasCounterStarted] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    pizzas: 0,
    years: 0,
    locations: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: 50000, suffix: '+', color: 'text-blue-400' },
    { icon: Award, label: 'Pizzas Delivered', value: 200000, suffix: '+', color: 'text-green-400' },
    { icon: Clock, label: 'Years of Experience', value: 8, suffix: '+', color: 'text-purple-400' },
    { icon: MapPin, label: 'Locations', value: 15, suffix: '+', color: 'text-orange-400' }
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Our master chefs bring authentic Italian flavors with modern techniques and passion for perfection.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Fresh Ingredients',
      description: 'We source the finest ingredients daily - from farm-fresh vegetables to premium imported cheeses.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Lightning-fast delivery within 25 minutes while maintaining the perfect temperature and taste.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Quality Promise',
      description: 'Every pizza is crafted with love and attention to detail. Your satisfaction is our top priority.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounterStarted) {
          setIsVisible(true);
          setHasCounterStarted(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounterStarted]);

  const startCounters = () => {
    stats.forEach((stat, index) => {
      let startValue = 0;
      const increment = stat.value / 50; 
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= stat.value) {
          startValue = stat.value;
          clearInterval(timer);
        }
        
        const counterKey = index === 0 ? 'customers' : index === 1 ? 'pizzas' : index === 2 ? 'years' : 'locations';
        setCounters(prev => ({
          ...prev,
          [counterKey]: Math.floor(startValue)
        }));
      }, 30); 
    });
  };

  const getCounterValue = (index) => {
    switch(index) {
      case 0: return counters.customers;
      case 1: return counters.pizzas;
      case 2: return counters.years;
      case 3: return counters.locations;
      default: return 0;
    }
  };

  return (
    <section id="about" ref={sectionRef} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Rockerz</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Where passion meets pizza! We've been serving authentic flavors and creating memorable experiences since 2016.
          </p>
        </div>

        
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Journey</span>
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Started as a small family business in 2016, Rockerz Pizza was born from a simple dream - to bring authentic Italian flavors to every home with a modern twist that rocks your taste buds.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                What began in a tiny kitchen has now grown into a beloved brand across multiple cities. Our secret? We never compromised on quality, freshness, or the love we put into every single pizza.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to serve over 50,000 happy customers with our signature pizzas, made with hand-picked ingredients and traditional recipes passed down through generations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-500/30">
                <span className="text-orange-400 font-semibold">🏆 Best Pizza 2023</span>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-500/30">
                <span className="text-orange-400 font-semibold">⭐ 4.9/5 Rating</span>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-500/30">
                <span className="text-orange-400 font-semibold">🚀 Fast Growing</span>
              </div>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
                alt="Pizza making process"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white text-xl font-bold mb-2">Crafted with Passion</h4>
                <p className="text-gray-200">Every pizza tells a story</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 animate-bounce">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 animate-pulse">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} group-hover:animate-bounce`} />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {getCounterValue(index).toLocaleString()}{stat.suffix}
                  </div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-orange-400">Rockerz?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:animate-pulse`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ContactSection/>
        
        {/* <div className={`text-center mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Rock Your Taste Buds?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the Rockerz difference today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="border-2 border-orange-500 text-orange-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:shadow-lg transform hover:scale-105 active:scale-95">
              📞 Contact Us
            </button>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;