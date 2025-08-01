import React, { useContext, useState } from 'react';
import { X, Plus, Minus, ShoppingCart, Trash2, Leaf } from 'lucide-react';
import CartContext from './context/CartContext';

export const CartSidebar = () => {
  const { 
    items, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalAmount 
  } = useContext(CartContext);

  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityUpdate = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item);
    } else {
      updateQuantity({ ...item, quantity: newQuantity });
    }
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  if (!isCartOpen) return null;

  return (
    <>
      
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={toggleCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-br from-gray-900 to-black border-l border-orange-500/30 z-50 transform transition-transform duration-300 ease-in-out overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-orange-500/30">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-bold text-white">Your Cart</h2>
            <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
              {items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-400 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop';
                      }}
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-white flex items-center gap-2">
                            {item.name}
                            {item.isVeg && <Leaf className="w-4 h-4 text-green-500" />}
                          </h4>
                          <p className="text-sm text-gray-400 capitalize">Size: {item.size}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityUpdate(item, item.quantity - 1)}
                            className="p-1 hover:bg-gray-700 rounded text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-white font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityUpdate(item, item.quantity + 1)}
                            className="p-1 hover:bg-gray-700 rounded text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-bold text-orange-400">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-orange-500/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-white">Total:</span>
              <span className="text-2xl font-bold text-orange-400">
                ₹{totalAmount.toFixed(2)}
              </span>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="w-full bg-gray-800 text-gray-300 py-2 rounded-xl font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal 
          onClose={() => setShowCheckout(false)}
          items={items}
          total={totalAmount}
        />
      )}
    </>
  );
};

