import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Plus, Heart, Leaf } from 'lucide-react';
import { menuCategories, menuItems } from '../assets/assest/assests';


const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedSize, setSelectedSize] = useState({});
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    let filtered = menuItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchQuery]);

  const handleSizeSelect = (itemId, size) => {
    setSelectedSize(prev => ({
      ...prev,
      [itemId]: size
    }));
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  const getItemPrice = (item) => {
    const size = selectedSize[item.id] || 'medium';
    return item.price[size];
  };

  return (
    <section id="menu" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our delicious range of pizzas, sides, and beverages crafted with love and premium ingredients
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 animate-fade-in-up delay-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for pizzas, sides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-orange-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-300">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
            }`}
          >
            🍽️ All Items
          </button>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop';
                  }}
                />
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isVeg && (
                    <div className="bg-green-500 rounded-full p-2">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {item.isPopular && (
                    <div className="bg-orange-500 rounded-full px-3 py-1">
                      <span className="text-white text-xs font-bold">Popular</span>
                    </div>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 left-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors duration-300 ${
                      favorites.has(item.id) ? 'text-red-500 fill-red-500' : 'text-white'
                    }`}
                  />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center bg-black/50 rounded-full px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-white text-sm font-medium">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Size Selection */}
                <div className="flex gap-2 mb-4">
                  {Object.entries(item.price).map(([size]) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(item.id, size)}
                      className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                        (selectedSize[item.id] || 'medium') === size
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-400">
                      ₹{getItemPrice(item)}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍕</div>
            <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;