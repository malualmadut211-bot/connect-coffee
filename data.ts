import { MenuCategory, Review, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const FULL_MENU: MenuCategory[] = [
  {
    title: "Breakfast & Brunch",
    items: [
      {
        name: "Classic French Toast",
        price: "$8.00",
        description: "A delightful plate of French toast with syrup, two sausages, baked beans, a fried egg, and berry fruits, served with a refreshing honey mustard salad."
      },
      {
        name: "Fruity Pancake",
        price: "$8.00",
        description: "Four pancakes with granola and seasonal fruits, topped with whipped cream and pancake syrup."
      },
      {
        name: "Spinach Omelette",
        price: "$8.00",
        description: "Mushroom, mozzarella cheese, and baby spinach omelette, garnished with black olives, avocado, tomatoes, and served with toasted bread."
      }
    ]
  },
  {
    title: "Waffles",
    items: [
      { name: "Fruity Waffle", price: "FULL – $10.00" },
      { name: "Strawberry Waffle", price: "HALF – $6.00 | FULL – $10.00" },
      { name: "Grape Waffle", price: "HALF – $6.00 | FULL – $10.00" },
      { name: "Mango Waffle", price: "HALF – $6.00 | FULL – $10.00" }
    ]
  },
  {
    title: "Panini & Sandwiches",
    items: [
      { name: "Grilled Chicken Panini", price: "$11.00" },
      { name: "Double Cheese Beef Panini", price: "$11.00" },
      { name: "Roasted Veg Panini", price: "$11.00" },
      { name: "Egg Mayo Sandwich", price: "$6.00" },
      { name: "Ham & Cheese Sandwich", price: "$7.00" },
      { name: "Chicken Curry Sandwich", price: "$6.00" },
      { name: "Club Sandwich", price: "$8.00" }
    ]
  },
  {
    title: "Salad & Wrap",
    items: [
      { name: "Thai Beef Salad", price: "$9.00" },
      { name: "Orange Chicken Salad", price: "$9.00" },
      { name: "Green Salad", price: "$9.00" },
      { name: "Fruity Salad", price: "$9.00" },
      { name: "Thai Beef Wrap", price: "$9.00" },
      { name: "Grilled Chicken Wrap", price: "$9.00" },
      { name: "Mozzarella & Avocado Wrap", price: "$9.00" }
    ]
  },
  {
    title: "Coffee",
    note: "(Hot / Iced)",
    items: [
      { name: "Espresso", price: "$2.00 / $3.00" },
      { name: "Espresso Macchiato", price: "$3.50 / $3.50" },
      { name: "Long Black", price: "$3.50 / $4.50" },
      { name: "Short Latte", price: "$3.50 / $4.50" },
      { name: "Café Latte", price: "$3.50 / $4.50" },
      { name: "Vanilla Latte", price: "$4.50 / $5.50" },
      { name: "Hazelnut Latte", price: "$4.50 / $5.50" },
      { name: "Café Mocha", price: "$5.50 / $6.50" },
      { name: "Caramel Macchiato", price: "$5.50 / $6.50" },
      { name: "Cappuccino", price: "$3.50 / $4.50" },
      { name: "Americano", price: "$3.50 / $4.50" },
      { name: "Café Kilimanjaro", price: "$4.50 / $5.50" },
      { name: "Hot Chocolate", price: "$3.50 / $4.50" }
    ]
  },
  {
    title: "More Coffee",
    note: "(Brew Methods)",
    items: [
      { name: "Chemex", price: "$3.50 / $4.50" },
      { name: "Aeropress", price: "$4.50 / $5.50" },
      { name: "French Press", price: "$3.50 / $4.50" },
      { name: "Hario V60", price: "$3.50 / $4.50" }
    ]
  },
  {
    title: "Tea",
    note: "(Hot / Iced)",
    items: [
      { name: "Mixed Tea", price: "$3.00 / $4.00" },
      { name: "Masala Tea", price: "$3.00 / $4.00" },
      { name: "Chamomile", price: "$3.00 / $4.00" },
      { name: "Rooibos", price: "$3.00 / $4.00" },
      { name: "Peppermint", price: "$3.00 / $4.00" },
      { name: "Black Tea", price: "$3.00 / $4.00" },
      { name: "Green Tea", price: "$3.00 / $4.00" },
      { name: "Lemon & Ginger", price: "$3.00 / $4.00" },
      { name: "Hot Milk", price: "$2.00" }
    ]
  },
  {
    title: "Shakes & Smoothies",
    items: [
      { name: "Espresso Milkshake", price: "$6.50" },
      { name: "Strawberry Milkshake", price: "$6.50" },
      { name: "Chocolate Milkshake", price: "$6.50" },
      { name: "Mango Milkshake", price: "$6.50" },
      { name: "Vanilla Milkshake", price: "$6.50" },
      { name: "Blueberry Milkshake", price: "$6.50" },
      { name: "Strawberry Smoothie", price: "$5.50" },
      { name: "Raspberry Smoothie", price: "$5.50" },
      { name: "Blueberry Smoothie", price: "$5.50" },
      { name: "Mango Smoothie", price: "$5.50" },
      { name: "Mango Passion Smoothie", price: "$5.50" },
      { name: "Mixed Fruit Smoothie", price: "$5.50" }
    ]
  },
  {
    title: "Fresh Juice & Slushes",
    items: [
      { name: "Apple Carrot Orange", price: "$6.50" },
      { name: "Grape Vitamin", price: "$4.50" },
      { name: "Orange Grapefruit Ade", price: "$5.50" },
      { name: "Grapefruit Ade", price: "$5.50" },
      { name: "Mixed Berry Slush", price: "$3.00" },
      { name: "Mango Slush", price: "$3.00" },
      { name: "Blueberry Slush", price: "$3.00" },
      { name: "Strawberry Slush", price: "$3.00" },
      { name: "Raspberry Slush", price: "$3.00" }
    ]
  },
  {
    title: "Ice Cream & Water",
    items: [
      { name: "Almond Strawberry Affogato", price: "$5.00" },
      { name: "Almond Chocolate Affogato", price: "$5.00" },
      { name: "Almond Vanilla Affogato", price: "$5.00" },
      { name: "Still Water 600ml", price: "$1.50" },
      { name: "Sparkling Water 450ml", price: "$2.00" }
    ]
  },
  {
    title: "Pastry",
    items: [
      { name: "Plain Croissant", price: "$3.00" },
      { name: "Chocolate Croissant", price: "$3.00" },
      { name: "Raspberry Croissant", price: "$3.00" },
      { name: "Hazelnut Croissant", price: "$3.00" },
      { name: "Almond Croissant", price: "$3.00" },
      { name: "Brownie", price: "$3.00" },
      { name: "Chocolate Brownie", price: "$3.00" },
      { name: "Plain Muffin", price: "$2.00" },
      { name: "Chocolate Muffin", price: "$3.00" },
      { name: "Cinnamon Roll", price: "$3.00" },
      { name: "Chicken & Leek Basket", price: "$4.00" },
      { name: "Coffee Bun", price: "$2.50" },
      { name: "Salt Bread", price: "$2.50" },
      { name: "Sweet Milk Bread", price: "$3.00" },
      { name: "Sweet Roll", price: "$3.00" },
      { name: "Sausage Roll", price: "$3.00" },
      { name: "Chicken Pie", price: "$3.00" },
      { name: "Chocolate Roll Cake", price: "$3.50" },
      { name: "Half Castella Cake", price: "$2.50" },
      { name: "Plain Baguette", price: "$2.00" },
      { name: "Madeleine (2 pcs)", price: "$2.00" },
      { name: "Tiramisu", price: "$3.50" }
    ]
  },
  {
    title: "Donuts",
    items: [
      { name: "Panacota Donut", price: "$3.00" },
      { name: "Sugar Donut", price: "$3.00" },
      { name: "Cookie Donut", price: "$3.00" },
      { name: "Vanilla Donut", price: "$3.00" },
      { name: "Nutty Cream Donut", price: "$3.00" },
      { name: "White Drizzle Donut", price: "$3.00" },
      { name: "Dark Drizzle Donut", price: "$3.00" }
    ]
  },
  {
    title: "Our Coffee Blends",
    note: "(Roasted Beans)",
    items: [
      { 
        name: "ROMEO", 
        price: "250g – $10.00 | 500g – $20.00 | 1kg – $50.00",
        description: "Smoky dark chocolate flavor with a nutty finish."
      },
      { 
        name: "JULIET", 
        price: "250g – $10.00 | 500g – $20.00 | 1kg – $50.00",
        description: "A fruity blend with floral notes that brightens your morning."
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Best coffee in Juba! The atmosphere is so cozy and the staff are incredibly friendly.',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    author: 'John D.',
    rating: 5,
    text: 'Perfect spot for working remotely. Fast wifi and the Avocado Toast is a must-try.',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Amina K.',
    rating: 4,
    text: 'Lovely place for tea with friends. Very clean and modern decor.',
    date: '2 months ago'
  },
  {
    id: 'r4',
    author: 'James K.',
    rating: 5,
    text: '“A hidden gem for coffee lovers.” The coffee here is consistently excellent, and the food menu is impressive. I especially loved the waffles and freshly brewed coffee. The atmosphere is warm and welcoming—perfect for relaxing or getting some work done.',
    date: '3 weeks ago'
  },
  {
    id: 'r5',
    author: 'Sarah M.',
    rating: 5,
    text: '“Great food, great service.” Everything we ordered was fresh and beautifully presented. The staff were friendly and attentive, and the service was fast. Definitely one of my favorite places to stop for breakfast or brunch.',
    date: '1 month ago'
  },
  {
    id: 'r6',
    author: 'Daniel R.',
    rating: 5,
    text: '“Quality you can taste.” From the first sip of coffee to the last bite of dessert, everything was top quality. You can tell they care about ingredients and consistency. Highly recommended!',
    date: '2 days ago'
  }
];