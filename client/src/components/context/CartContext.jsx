
import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.items.findIndex(
        (i) => i.id === action.payload.id && i.size === action.payload.size
      );
      if (existingIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id || item.size !== action.payload.size),
      };
    }
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, items: updatedItems };
    }
    case 'TOGGLE_CART': {
      return { ...state, isCartOpen: !state.isCartOpen };
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (item) => dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  const updateQuantity = (item) => dispatch({ type: 'UPDATE_QUANTITY', payload: item });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const totalAmount = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isCartOpen: state.isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartContext