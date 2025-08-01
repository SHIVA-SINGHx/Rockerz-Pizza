import pizza1 from "./pizza1.jpg"
import pizza2 from "./pizza2.jpg"
import pizza3 from "./pizza3.jpg"
import pizza4 from "./pizza4.jpg"


export const images = {
pizza1,
pizza2,
pizza3,
pizza4
}

export const menuCategories = [
  {
    id: 'veg-pizzas',
    name: 'Vegetarian Pizzas',
    icon: '🥬',
    description: 'Fresh vegetables with authentic Italian flavors'
  },
  {
    id: 'non-veg-pizzas',
    name: 'Non-Vegetarian Pizzas',
    icon: '🍖',
    description: 'Premium meats with bold and spicy flavors'
  },
  {
    id: 'specialty-pizzas',
    name: 'Specialty Pizzas',
    icon: '⭐',
    description: 'Chef\'s special creations and signature pizzas'
  },
  {
    id: 'sides-drinks',
    name: 'Sides & Drinks',
    icon: '🍟',
    description: 'Perfect companions for your pizza experience'
  }
];

export const menuItems = [
  {
    id: 1,
    name: 'Margherita Classic',
    category: 'veg-pizzas',
    price: { small: 299, medium: 449, large: 599 },
    image: pizza1,
    description: 'Fresh tomato sauce, mozzarella cheese, basil leaves',
    isVeg: true,
    isPopular: true,
    rating: 4.8,
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil']
  },
  {
    id: 2,
    name: 'Chicken Tikka Masala',
    category: 'non-veg-pizzas',
    price: { small: 429, medium: 579, large: 729 },
    image: pizza2,
    description: 'Tender chicken tikka, masala sauce, onions, bell peppers',
    isVeg: false,
    isPopular: true,
    rating: 4.9,
    ingredients: ['Chicken Tikka', 'Masala Sauce', 'Onions', 'Bell Peppers']
  },
  {
    id: 3,
    name: 'Rockerz Signature',
    category: 'specialty-pizzas',
    price: { small: 549, medium: 699, large: 849 },
    image: pizza3,
    description: 'Chef\'s special blend with premium toppings and secret sauce',
    isVeg: false,
    isPopular: true,
    rating: 5.0,
    ingredients: ['Secret Sauce', 'Premium Cheese', 'Special Toppings']
  },
  {
    id: 4,
    name: 'Garlic Breadsticks',
    category: 'sides-drinks',
    price: { small: 149, medium: 149, large: 149 },
    image: pizza4,
    description: 'Crispy breadsticks with garlic butter and herbs',
    isVeg: true,
    isPopular: true,
    rating: 4.6,
    ingredients: ['Bread', 'Garlic Butter', 'Italian Herbs']
  }
];