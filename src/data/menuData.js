// Menu data with authentic South Indian dishes
export const menuData = [
  // Breakfast Items (20 items)
  {
    id: 'b1',
    name: 'Traditional Dosa',
    category: 'breakfast',
    price: 80,
    description: 'Crispy fermented crepe served with coconut chutney and sambar',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Coconut', calories: 60, protein: 1, carbs: 2, fat: 6 }
    ],
    recipe: '1. Soak rice and urad dal separately for 4-6 hours. 2. Grind into smooth batter. 3. Ferment overnight. 4. Heat pan and spread batter thinly. 5. Cook until golden and crispy.'
  },
  {
    id: 'b2',
    name: 'Masala Dosa',
    category: 'breakfast',
    price: 120,
    description: 'Crispy dosa filled with spiced potato curry',
    image: 'https://images.pexels.com/photos/14737235/pexels-photo-14737235.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 }
    ],
    recipe: 'Same as traditional dosa with added spiced potato filling made with onions, turmeric, and curry leaves.'
  },
  {
    id: 'b3',
    name: 'Rava Dosa',
    category: 'breakfast',
    price: 100,
    description: 'Crispy semolina crepe with onions and spices',
    image: 'https://images.pexels.com/photos/12737659/pexels-photo-12737659.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Semolina', calories: 150, protein: 5, carbs: 30, fat: 1 },
      { name: 'Rice Flour', calories: 100, protein: 2, carbs: 22, fat: 0.5 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix semolina, rice flour, and spices. Add water to make thin batter. Cook on hot pan with ghee until crispy.'
  },
  {
    id: 'b4',
    name: 'Idli (4 pieces)',
    category: 'breakfast',
    price: 60,
    description: 'Soft steamed rice cakes served with chutney and sambar',
    image: 'https://images.pexels.com/photos/5619200/pexels-photo-5619200.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 }
    ],
    recipe: 'Steam fermented rice and urad dal batter in idli molds for 10-12 minutes until fluffy.'
  },
  {
    id: 'b5',
    name: 'Vada (3 pieces)',
    category: 'breakfast',
    price: 70,
    description: 'Crispy deep-fried lentil donuts with coconut chutney',
    image: 'https://images.pexels.com/photos/16092601/pexels-photo-16092601.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Grind soaked urad dal into fluffy batter. Add spices and deep fry in oil until golden brown.'
  },
  {
    id: 'b6',
    name: 'Upma',
    category: 'breakfast',
    price: 65,
    description: 'Savory semolina porridge with vegetables and spices',
    image: 'https://images.pexels.com/photos/8629877/pexels-photo-8629877.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Semolina', calories: 150, protein: 5, carbs: 30, fat: 1 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Roast semolina, sauté vegetables with spices, add water and cook until fluffy.'
  },
  {
    id: 'b7',
    name: 'Pesarattu',
    category: 'breakfast',
    price: 90,
    description: 'Green gram dosa with ginger and green chilies',
    image: 'https://images.pexels.com/photos/14737408/pexels-photo-14737408.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Green Gram', calories: 140, protein: 10, carbs: 20, fat: 1.5 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Green Chili', calories: 3, protein: 0.2, carbs: 0.7, fat: 0 }
    ],
    recipe: 'Grind soaked green gram with ginger and chilies. Make dosa on hot pan with oil.'
  },
  {
    id: 'b8',
    name: 'Uttapam',
    category: 'breakfast',
    price: 95,
    description: 'Thick pancake topped with onions, tomatoes, and chilies',
    image: 'https://images.pexels.com/photos/14737392/pexels-photo-14737392.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Tomato', calories: 15, protein: 0.8, carbs: 3, fat: 0.2 }
    ],
    recipe: 'Spread thick dosa batter, top with chopped vegetables, cook until bottom is golden.'
  },
  {
    id: 'b9',
    name: 'Pongal',
    category: 'breakfast',
    price: 75,
    description: 'Savory rice and lentil dish tempered with ghee and spices',
    image: 'https://images.pexels.com/photos/11756887/pexels-photo-11756887.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Moong Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Cook rice and moong dal together, temper with ghee, cumin, and black pepper.'
  },
  {
    id: 'b10',
    name: 'Appe/Paniyaram',
    category: 'breakfast',
    price: 80,
    description: 'Round dumplings made from dosa batter in special pan',
    image: 'https://images.pexels.com/photos/14516225/pexels-photo-14516225.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Mustard Seeds', calories: 5, protein: 0.3, carbs: 0.3, fat: 0.4 }
    ],
    recipe: 'Pour fermented batter into appe pan, cook until golden on all sides.'
  },
  {
    id: 'b11',
    name: 'Bonda',
    category: 'breakfast',
    price: 50,
    description: 'Deep-fried potato dumplings in gram flour batter',
    image: 'https://images.pexels.com/photos/12737647/pexels-photo-12737647.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Gram Flour', calories: 100, protein: 6, carbs: 16, fat: 2 },
      { name: 'Oil', calories: 120, protein: 0, carbs: 0, fat: 14 }
    ],
    recipe: 'Make spiced potato balls, dip in gram flour batter, deep fry until golden.'
  },
  {
    id: 'b12',
    name: 'Kanchipuram Idli',
    category: 'breakfast',
    price: 85,
    description: 'Spiced idli with ghee, curry leaves, and black pepper',
    image: 'https://images.pexels.com/photos/9609837/pexels-photo-9609837.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Steam spiced idli batter with ghee tempering, curry leaves, and pepper.'
  },
  {
    id: 'b13',
    name: 'Adai',
    category: 'breakfast',
    price: 90,
    description: 'Multi-lentil crepe with vegetables and spices',
    image: 'https://images.pexels.com/photos/14737396/pexels-photo-14737396.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Lentils', calories: 140, protein: 10, carbs: 20, fat: 1.5 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Grind mixed lentils with spices, add vegetables, make thick crepes.'
  },
  {
    id: 'b14',
    name: 'Rava Upma',
    category: 'breakfast',
    price: 70,
    description: 'Fine semolina cooked with vegetables and South Indian spices',
    image: 'https://images.pexels.com/photos/11756890/pexels-photo-11756890.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Fine Semolina', calories: 150, protein: 5, carbs: 30, fat: 1 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Roast fine semolina, sauté vegetables with spices, cook with water until fluffy.'
  },
  {
    id: 'b15',
    name: 'Methu Vada',
    category: 'breakfast',
    price: 75,
    description: 'Extra fluffy urad dal vada with perfect texture',
    image: 'https://images.pexels.com/photos/16092588/pexels-photo-16092588.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Pepper', calories: 3, protein: 0.1, carbs: 0.6, fat: 0 }
    ],
    recipe: 'Grind urad dal to extra fluffy batter, add spices, deep fry with hole in center.'
  },
  {
    id: 'b16',
    name: 'Coconut Chutney',
    category: 'breakfast',
    price: 30,
    description: 'Fresh coconut chutney with curry leaves tempering',
    image: 'https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coconut', calories: 60, protein: 1, carbs: 2, fat: 6 },
      { name: 'Green Chili', calories: 3, protein: 0.2, carbs: 0.7, fat: 0 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 }
    ],
    recipe: 'Grind coconut with green chilies and ginger, temper with mustard seeds and curry leaves.'
  },
  {
    id: 'b17',
    name: 'Sambar',
    category: 'breakfast',
    price: 40,
    description: 'Traditional lentil curry with vegetables and tamarind',
    image: 'https://images.pexels.com/photos/8629874/pexels-photo-8629874.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 }
    ],
    recipe: 'Cook toor dal, add vegetables, tamarind, and sambar powder. Temper with spices.'
  },
  {
    id: 'b18',
    name: 'Ghee Roast Dosa',
    category: 'breakfast',
    price: 140,
    description: 'Crispy dosa roasted with pure ghee',
    image: 'https://images.pexels.com/photos/14737255/pexels-photo-14737255.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ghee', calories: 80, protein: 0, carbs: 0, fat: 9 }
    ],
    recipe: 'Make dosa with extra ghee for crispy texture and rich flavor.'
  },
  {
    id: 'b19',
    name: 'Button Idli',
    category: 'breakfast',
    price: 65,
    description: 'Mini idlis perfect for kids, served with chutney',
    image: 'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 }
    ],
    recipe: 'Steam idli batter in small button-shaped molds for 8-10 minutes.'
  },
  {
    id: 'b20',
    name: 'Cheese Dosa',
    category: 'breakfast',
    price: 160,
    description: 'Modern twist on traditional dosa with melted cheese',
    image: 'https://images.pexels.com/photos/14737253/pexels-photo-14737253.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Cheese', calories: 100, protein: 7, carbs: 1, fat: 8 },
      { name: 'Butter', calories: 50, protein: 0, carbs: 0, fat: 6 }
    ],
    recipe: 'Make dosa, add grated cheese while hot, fold and serve immediately.'
  },

  // Lunch Items (20 items)
  {
    id: 'l1',
    name: 'South Indian Thali',
    category: 'lunch',
    price: 180,
    description: 'Complete meal with rice, sambar, rasam, curry, and accompaniments',
    image: 'https://images.pexels.com/photos/14737347/pexels-photo-14737347.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 4, carbs: 45, fat: 0.5 },
      { name: 'Sambar', calories: 80, protein: 4, carbs: 12, fat: 2 },
      { name: 'Rasam', calories: 40, protein: 2, carbs: 6, fat: 1 }
    ],
    recipe: 'Serve steamed rice with sambar, rasam, vegetable curry, pickle, and papad.'
  },
  {
    id: 'l2',
    name: 'Bisi Bele Bath',
    category: 'lunch',
    price: 120,
    description: 'Spicy rice and lentil dish with vegetables',
    image: 'https://images.pexels.com/photos/11756879/pexels-photo-11756879.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 }
    ],
    recipe: 'Cook rice and dal together, add vegetables and bisi bele bath powder, simmer well.'
  },
  {
    id: 'l3',
    name: 'Hyderabadi Biryani',
    category: 'lunch',
    price: 250,
    description: 'Fragrant basmati rice with spiced vegetables and saffron',
    image: 'https://images.pexels.com/photos/11237439/pexels-photo-11237439.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Basmati Rice', calories: 180, protein: 4, carbs: 38, fat: 0.5 },
      { name: 'Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Saffron', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Layer cooked rice with spiced vegetables, cook dum style with saffron milk.'
  },
  {
    id: 'l4',
    name: 'Curd Rice',
    category: 'lunch',
    price: 80,
    description: 'Comfort food with rice, yogurt, and South Indian tempering',
    image: 'https://images.pexels.com/photos/6646374/pexels-photo-6646374.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Mix cooked rice with yogurt, temper with mustard seeds, curry leaves, and ginger.'
  },
  {
    id: 'l5',
    name: 'Lemon Rice',
    category: 'lunch',
    price: 90,
    description: 'Tangy rice with lemon juice, peanuts, and curry leaves',
    image: 'https://images.pexels.com/photos/11756882/pexels-photo-11756882.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Lemon', calories: 10, protein: 0.2, carbs: 3, fat: 0.1 },
      { name: 'Peanuts', calories: 80, protein: 4, carbs: 3, fat: 7 }
    ],
    recipe: 'Temper cooked rice with mustard seeds, add lemon juice, peanuts, and curry leaves.'
  },
  {
    id: 'l6',
    name: 'Tomato Rice',
    category: 'lunch',
    price: 95,
    description: 'Flavorful rice cooked with tomatoes and South Indian spices',
    image: 'https://images.pexels.com/photos/14737342/pexels-photo-14737342.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Tomato', calories: 20, protein: 1, carbs: 4, fat: 0.2 },
      { name: 'Spices', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Cook rice with tomato puree, onions, and South Indian spice powder.'
  },
  {
    id: 'l7',
    name: 'Tamarind Rice',
    category: 'lunch',
    price: 85,
    description: 'Tangy rice with tamarind, jaggery, and peanuts',
    image: 'https://images.pexels.com/photos/11756884/pexels-photo-11756884.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Jaggery', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix cooked rice with tamarind paste, jaggery, and tempering.'
  },
  {
    id: 'l8',
    name: 'Coconut Rice',
    category: 'lunch',
    price: 100,
    description: 'Aromatic rice cooked with fresh coconut and curry leaves',
    image: 'https://images.pexels.com/photos/11756888/pexels-photo-11756888.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Coconut', calories: 80, protein: 1.5, carbs: 3, fat: 8 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Cook rice with grated coconut, temper with mustard seeds and curry leaves.'
  },
  {
    id: 'l9',
    name: 'Vegetable Pulao',
    category: 'lunch',
    price: 130,
    description: 'Fragrant rice with mixed vegetables and aromatic spices',
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Basmati Rice', calories: 150, protein: 3, carbs: 32, fat: 0.4 },
      { name: 'Mixed Vegetables', calories: 50, protein: 2, carbs: 10, fat: 0.3 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Cook rice with vegetables, whole spices, and ghee until fragrant.'
  },
  {
    id: 'l10',
    name: 'Rasam',
    category: 'lunch',
    price: 50,
    description: 'Traditional South Indian soup with tamarind and spices',
    image: 'https://images.pexels.com/photos/8629872/pexels-photo-8629872.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Tomato', calories: 15, protein: 0.8, carbs: 3, fat: 0.2 },
      { name: 'Rasam Powder', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Boil tamarind water with tomatoes, add rasam powder, and temper with spices.'
  },
  {
    id: 'l11',
    name: 'Spinach Dal',
    category: 'lunch',
    price: 80,
    description: 'Nutritious lentils cooked with fresh spinach',
    image: 'https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Spinach', calories: 20, protein: 2, carbs: 3, fat: 0.3 },
      { name: 'Turmeric', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Cook dal with spinach, turmeric, and spices until well combined.'
  },
  {
    id: 'l12',
    name: 'Brinjal Curry',
    category: 'lunch',
    price: 90,
    description: 'Spicy eggplant curry with South Indian flavors',
    image: 'https://images.pexels.com/photos/6829526/pexels-photo-6829526.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Brinjal', calories: 25, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Onion', calories: 25, protein: 0.7, carbs: 6, fat: 0 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Cook brinjal with onions, coconut, and South Indian spice paste.'
  },
  {
    id: 'l13',
    name: 'Okra Fry',
    category: 'lunch',
    price: 85,
    description: 'Crispy fried okra with onions and spices',
    image: 'https://images.pexels.com/photos/5560661/pexels-photo-5560661.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Okra', calories: 30, protein: 2, carbs: 7, fat: 0.1 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Oil', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Fry okra with onions until crispy, season with spices.'
  },
  {
    id: 'l14',
    name: 'Drumstick Sambar',
    category: 'lunch',
    price: 70,
    description: 'Traditional sambar with drumsticks and vegetables',
    image: 'https://images.pexels.com/photos/8629871/pexels-photo-8629871.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Drumstick', calories: 25, protein: 2, carbs: 4, fat: 0.2 },
      { name: 'Tamarind', calories: 10, protein: 0.2, carbs: 2.5, fat: 0.1 }
    ],
    recipe: 'Cook dal with drumsticks, add tamarind and sambar powder, temper well.'
  },
  {
    id: 'l15',
    name: 'Potato Curry',
    category: 'lunch',
    price: 75,
    description: 'Spiced potato curry with South Indian tempering',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Curry Powder', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Cook potatoes with onions and South Indian curry powder.'
  },
  {
    id: 'l16',
    name: 'Cabbage Poriyal',
    category: 'lunch',
    price: 65,
    description: 'Dry-roasted cabbage with coconut and curry leaves',
    image: 'https://images.pexels.com/photos/6646395/pexels-photo-6646395.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Cabbage', calories: 20, protein: 1, carbs: 5, fat: 0.1 },
      { name: 'Coconut', calories: 30, protein: 0.5, carbs: 1, fat: 3 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Stir-fry cabbage with coconut, curry leaves, and mustard seeds.'
  },
  {
    id: 'l17',
    name: 'Mixed Vegetable Curry',
    category: 'lunch',
    price: 95,
    description: 'Assorted vegetables in coconut-based curry',
    image: 'https://images.pexels.com/photos/5560747/pexels-photo-5560747.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Coconut Milk', calories: 50, protein: 1, carbs: 2, fat: 5 },
      { name: 'Spices', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Cook mixed vegetables in coconut milk with South Indian spices.'
  },
  {
    id: 'l18',
    name: 'Paruppu Usili',
    category: 'lunch',
    price: 80,
    description: 'Steamed vegetables with spiced dal mixture',
    image: 'https://images.pexels.com/photos/14737344/pexels-photo-14737344.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Toor Dal', calories: 80, protein: 5, carbs: 13, fat: 0.7 },
      { name: 'Green Beans', calories: 20, protein: 1, carbs: 5, fat: 0.1 },
      { name: 'Coconut', calories: 30, protein: 0.5, carbs: 1, fat: 3 }
    ],
    recipe: 'Steam vegetables, mix with coarse ground dal and coconut.'
  },
  {
    id: 'l19',
    name: 'Mor Kulambu',
    category: 'lunch',
    price: 70,
    description: 'Yogurt-based curry with vegetables and spices',
    image: 'https://images.pexels.com/photos/8629876/pexels-photo-8629876.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Coconut', calories: 25, protein: 0.4, carbs: 1, fat: 2.5 }
    ],
    recipe: 'Cook vegetables in spiced yogurt gravy with coconut paste.'
  },
  {
    id: 'l20',
    name: 'Avial',
    category: 'lunch',
    price: 85,
    description: 'Mixed vegetables in coconut and yogurt gravy',
    image: 'https://images.pexels.com/photos/5560742/pexels-photo-5560742.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 50, protein: 2, carbs: 10, fat: 0.3 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 },
      { name: 'Yogurt', calories: 30, protein: 1.5, carbs: 2, fat: 1.5 }
    ],
    recipe: 'Cook mixed vegetables with ground coconut and finish with yogurt.'
  },

  // Dinner Items (20 items)
  {
    id: 'd1',
    name: 'Special Dinner Thali',
    category: 'dinner',
    price: 220,
    description: 'Elaborate dinner with rice, multiple curries, bread, and dessert',
    image: 'https://images.pexels.com/photos/14737340/pexels-photo-14737340.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 4, carbs: 45, fat: 0.5 },
      { name: 'Multiple Curries', calories: 150, protein: 8, carbs: 20, fat: 5 },
      { name: 'Bread', calories: 100, protein: 3, carbs: 20, fat: 2 }
    ],
    recipe: 'Complete meal with rice, curries, dal, vegetables, bread, pickle, and sweet.'
  },
  {
    id: 'd2',
    name: 'Dosa Varieties Combo',
    category: 'dinner',
    price: 180,
    description: 'Combination of different dosas with accompaniments',
    image: 'https://images.pexels.com/photos/14737237/pexels-photo-14737237.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice Batter', calories: 160, protein: 3, carbs: 35, fat: 0.4 },
      { name: 'Various Fillings', calories: 80, protein: 3, carbs: 12, fat: 2 },
      { name: 'Chutneys', calories: 40, protein: 1, carbs: 6, fat: 2 }
    ],
    recipe: 'Serve variety of dosas like plain, masala, and rava with different chutneys.'
  },
  {
    id: 'd3',
    name: 'Appam with Stew',
    category: 'dinner',
    price: 150,
    description: 'Soft fermented rice pancakes with coconut vegetable stew',
    image: 'https://images.pexels.com/photos/14737413/pexels-photo-14737413.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 120, protein: 2, carbs: 26, fat: 0.3 },
      { name: 'Coconut Milk', calories: 80, protein: 1.5, carbs: 3, fat: 8 },
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 }
    ],
    recipe: 'Make soft appam with fermented rice batter, serve with coconut milk stew.'
  },
  {
    id: 'd4',
    name: 'Idiyappam with Curry',
    category: 'dinner',
    price: 130,
    description: 'Steamed rice noodles with flavorful vegetable curry',
    image: 'https://images.pexels.com/photos/14737416/pexels-photo-14737416.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice Flour', calories: 100, protein: 2, carbs: 22, fat: 0.5 },
      { name: 'Vegetable Curry', calories: 80, protein: 3, carbs: 12, fat: 3 },
      { name: 'Coconut', calories: 30, protein: 0.5, carbs: 1, fat: 3 }
    ],
    recipe: 'Steam rice flour noodles, serve with spiced vegetable curry.'
  },
  {
    id: 'd5',
    name: 'Puttu with Kadala Curry',
    category: 'dinner',
    price: 120,
    description: 'Steamed rice cake with black chickpea curry',
    image: 'https://images.pexels.com/photos/14737419/pexels-photo-14737419.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice Flour', calories: 100, protein: 2, carbs: 22, fat: 0.5 },
      { name: 'Black Chickpeas', calories: 120, protein: 8, carbs: 20, fat: 2 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Steam rice flour with coconut, serve with spiced black chickpea curry.'
  },
  {
    id: 'd6',
    name: 'Kothu Parotta',
    category: 'dinner',
    price: 140,
    description: 'Shredded parotta stir-fried with vegetables and spices',
    image: 'https://images.pexels.com/photos/14737320/pexels-photo-14737320.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Parotta', calories: 150, protein: 4, carbs: 30, fat: 3 },
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 },
      { name: 'Spices', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Shred parotta, stir-fry with vegetables, eggs, and South Indian spices.'
  },
  {
    id: 'd7',
    name: 'Paneer Dosa',
    category: 'dinner',
    price: 170,
    description: 'Dosa filled with spiced paneer and onions',
    image: 'https://images.pexels.com/photos/14737258/pexels-photo-14737258.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice Batter', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Paneer', calories: 100, protein: 8, carbs: 3, fat: 7 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 }
    ],
    recipe: 'Fill dosa with spiced paneer mixture and caramelized onions.'
  },
  {
    id: 'd8',
    name: 'Mushroom Biryani',
    category: 'dinner',
    price: 190,
    description: 'Aromatic rice with mushrooms and biryani spices',
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Basmati Rice', calories: 180, protein: 4, carbs: 38, fat: 0.5 },
      { name: 'Mushrooms', calories: 25, protein: 3, carbs: 4, fat: 0.3 },
      { name: 'Biryani Spices', calories: 20, protein: 1, carbs: 4, fat: 1 }
    ],
    recipe: 'Layer rice with spiced mushrooms, cook dum style with aromatic spices.'
  },
  {
    id: 'd9',
    name: 'Chettinad Curry',
    category: 'dinner',
    price: 160,
    description: 'Spicy South Indian curry with mixed vegetables',
    image: 'https://images.pexels.com/photos/5560739/pexels-photo-5560739.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Chettinad Spices', calories: 25, protein: 1, carbs: 5, fat: 2 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Cook vegetables with authentic Chettinad spice paste and coconut.'
  },
  {
    id: 'd10',
    name: 'Kerala Parotta',
    category: 'dinner',
    price: 60,
    description: 'Flaky layered bread perfect with curry',
    image: 'https://images.pexels.com/photos/5779195/pexels-photo-5779195.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Wheat Flour', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Oil', calories: 40, protein: 0, carbs: 0, fat: 4.5 },
      { name: 'Salt', calories: 0, protein: 0, carbs: 0, fat: 0 }
    ],
    recipe: 'Make layered dough, roll thin, cook on griddle until flaky and golden.'
  },
  {
    id: 'd11',
    name: 'Vegetable Korma',
    category: 'dinner',
    price: 110,
    description: 'Rich and creamy mixed vegetable curry',
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 70, protein: 3, carbs: 14, fat: 0.5 },
      { name: 'Coconut Milk', calories: 60, protein: 1, carbs: 3, fat: 6 },
      { name: 'Cashews', calories: 50, protein: 2, carbs: 3, fat: 4 }
    ],
    recipe: 'Cook vegetables in rich coconut and cashew gravy with aromatic spices.'
  },
  {
    id: 'd12',
    name: 'Pepper Rasam',
    category: 'dinner',
    price: 55,
    description: 'Spicy black pepper soup with South Indian flavors',
    image: 'https://images.pexels.com/photos/8629873/pexels-photo-8629873.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Black Pepper', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 },
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Boil tamarind water with pepper powder, temper with curry leaves.'
  },
  {
    id: 'd13',
    name: 'Vegetable Fried Rice',
    category: 'dinner',
    price: 125,
    description: 'Indo-Chinese style fried rice with vegetables',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 150, protein: 3, carbs: 32, fat: 0.4 },
      { name: 'Mixed Vegetables', calories: 50, protein: 2, carbs: 10, fat: 0.3 },
      { name: 'Soy Sauce', calories: 10, protein: 1, carbs: 1, fat: 0 }
    ],
    recipe: 'Stir-fry cooked rice with vegetables and Indo-Chinese sauces.'
  },
  {
    id: 'd14',
    name: 'Masala Vada',
    category: 'dinner',
    price: 80,
    description: 'Spicy lentil fritters perfect as dinner starter',
    image: 'https://images.pexels.com/photos/16092598/pexels-photo-16092598.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Chana Dal', calories: 120, protein: 8, carbs: 20, fat: 1.5 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Green Chili', calories: 5, protein: 0.3, carbs: 1, fat: 0 }
    ],
    recipe: 'Coarse grind chana dal with spices, onions, deep fry until crispy.'
  },
  {
    id: 'd15',
    name: 'Coconut Milk Rice',
    category: 'dinner',
    price: 105,
    description: 'Fragrant rice cooked in coconut milk with whole spices',
    image: 'https://images.pexels.com/photos/11756889/pexels-photo-11756889.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Coconut Milk', calories: 80, protein: 1.5, carbs: 3, fat: 8 },
      { name: 'Whole Spices', calories: 10, protein: 0.3, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Cook rice in coconut milk with cardamom, cinnamon, and bay leaves.'
  },
  {
    id: 'd16',
    name: 'Banana Leaf Meals',
    category: 'dinner',
    price: 200,
    description: 'Traditional meal served on banana leaf with multiple dishes',
    image: 'https://images.pexels.com/photos/14737348/pexels-photo-14737348.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 4, carbs: 45, fat: 0.5 },
      { name: 'Multiple Dishes', calories: 180, protein: 10, carbs: 25, fat: 6 },
      { name: 'Condiments', calories: 50, protein: 2, carbs: 8, fat: 2 }
    ],
    recipe: 'Serve complete meal on banana leaf with rice, curries, and accompaniments.'
  },
  {
    id: 'd17',
    name: 'Kara Chutney',
    category: 'dinner',
    price: 45,
    description: 'Spicy red chutney with chilies and tamarind',
    image: 'https://images.pexels.com/photos/6419123/pexels-photo-6419123.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Red Chilies', calories: 15, protein: 0.8, carbs: 3, fat: 0.2 },
      { name: 'Tamarind', calories: 10, protein: 0.2, carbs: 2.5, fat: 0.1 },
      { name: 'Garlic', calories: 8, protein: 0.4, carbs: 2, fat: 0 }
    ],
    recipe: 'Grind red chilies with tamarind, garlic, and salt. No tempering needed.'
  },
  {
    id: 'd18',
    name: 'Ghee Roast',
    category: 'dinner',
    price: 90,
    description: 'Vegetables roasted in pure ghee with spices',
    image: 'https://images.pexels.com/photos/6646392/pexels-photo-6646392.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 },
      { name: 'Ghee', calories: 60, protein: 0, carbs: 0, fat: 7 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Roast vegetables in ghee with aromatic spices until golden.'
  },
  {
    id: 'd19',
    name: 'Jeera Rice',
    category: 'dinner',
    price: 95,
    description: 'Fragrant cumin rice with whole spices',
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Basmati Rice', calories: 150, protein: 3, carbs: 32, fat: 0.4 },
      { name: 'Cumin Seeds', calories: 8, protein: 0.4, carbs: 1, fat: 0.5 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Cook rice with cumin seeds, whole spices, and ghee.'
  },
  {
    id: 'd20',
    name: 'Papad',
    category: 'dinner',
    price: 25,
    description: 'Crispy lentil wafers roasted or fried',
    image: 'https://images.pexels.com/photos/6646398/pexels-photo-6646398.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Urad Dal', calories: 80, protein: 6, carbs: 12, fat: 0.8 },
      { name: 'Spices', calories: 5, protein: 0.2, carbs: 1, fat: 0.2 }
    ],
    recipe: 'Roast or fry thin lentil wafers until crispy and golden.'
  },

  // Snacks (20 items)
  {
    id: 's1',
    name: 'Bhel Puri',
    category: 'snacks',
    price: 60,
    description: 'Crispy puffed rice with chutneys and vegetables',
    image: 'https://images.pexels.com/photos/8629866/pexels-photo-8629866.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Puffed Rice', calories: 60, protein: 1.5, carbs: 14, fat: 0.3 },
      { name: 'Chutneys', calories: 30, protein: 0.5, carbs: 7, fat: 1 },
      { name: 'Vegetables', calories: 15, protein: 0.5, carbs: 3, fat: 0.1 }
    ],
    recipe: 'Mix puffed rice with chutneys, onions, tomatoes, and sev.'
  },
  {
    id: 's2',
    name: 'Pani Puri',
    category: 'snacks',
    price: 50,
    description: 'Crispy hollow puris filled with spiced water',
    image: 'https://images.pexels.com/photos/11756871/pexels-photo-11756871.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Puris', calories: 50, protein: 2, carbs: 10, fat: 1 },
      { name: 'Spiced Water', calories: 10, protein: 0.2, carbs: 2, fat: 0 },
      { name: 'Potato', calories: 30, protein: 1, carbs: 7, fat: 0.1 }
    ],
    recipe: 'Fill crispy puris with spiced mint water, potato, and chutneys.'
  },
  {
    id: 's3',
    name: 'Samosa (2 pieces)',
    category: 'snacks',
    price: 40,
    description: 'Crispy triangular pastries with spiced potato filling',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Wheat Flour', calories: 80, protein: 2.5, carbs: 16, fat: 0.8 },
      { name: 'Potato', calories: 60, protein: 1.5, carbs: 14, fat: 0.1 },
      { name: 'Oil', calories: 100, protein: 0, carbs: 0, fat: 11 }
    ],
    recipe: 'Fill pastry with spiced potato mixture, seal and deep fry until golden.'
  },
  {
    id: 's4',
    name: 'Bajji Combo',
    category: 'snacks',
    price: 70,
    description: 'Mixed vegetable fritters in gram flour batter',
    image: 'https://images.pexels.com/photos/12737650/pexels-photo-12737650.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 },
      { name: 'Gram Flour', calories: 80, protein: 5, carbs: 12, fat: 1.5 },
      { name: 'Oil', calories: 80, protein: 0, carbs: 0, fat: 9 }
    ],
    recipe: 'Dip vegetables in spiced gram flour batter, deep fry until crispy.'
  },
  {
    id: 's5',
    name: 'Dahi Vada',
    category: 'snacks',
    price: 65,
    description: 'Soft lentil dumplings in seasoned yogurt',
    image: 'https://images.pexels.com/photos/16092602/pexels-photo-16092602.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Urad Dal', calories: 100, protein: 7, carbs: 14, fat: 0.8 },
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Chutneys', calories: 25, protein: 0.5, carbs: 5, fat: 1 }
    ],
    recipe: 'Soak fried vadas in water, serve with yogurt and chutneys.'
  },
  {
    id: 's6',
    name: 'Mirchi Bajji',
    category: 'snacks',
    price: 45,
    description: 'Stuffed green chili fritters with tangy filling',
    image: 'https://images.pexels.com/photos/12737652/pexels-photo-12737652.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Green Chilies', calories: 15, protein: 1, carbs: 3, fat: 0.1 },
      { name: 'Gram Flour', calories: 60, protein: 4, carbs: 9, fat: 1 },
      { name: 'Stuffing', calories: 30, protein: 1, carbs: 6, fat: 0.5 }
    ],
    recipe: 'Stuff chilies with spiced mixture, coat in batter, deep fry until golden.'
  },
  {
    id: 's7',
    name: 'Aloo Bonda',
    category: 'snacks',
    price: 55,
    description: 'Spiced potato balls coated in gram flour batter',
    image: 'https://images.pexels.com/photos/12737648/pexels-photo-12737648.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Gram Flour', calories: 70, protein: 4.5, carbs: 11, fat: 1.2 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Make spiced potato balls, dip in gram flour batter, deep fry.'
  },
  {
    id: 's8',
    name: 'Punugulu',
    category: 'snacks',
    price: 60,
    description: 'Round crispy snacks made from dosa batter',
    image: 'https://images.pexels.com/photos/14516228/pexels-photo-14516228.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Dosa Batter', calories: 80, protein: 2, carbs: 17, fat: 0.2 },
      { name: 'Onion', calories: 15, protein: 0.4, carbs: 3.5, fat: 0 },
      { name: 'Green Chilies', calories: 3, protein: 0.2, carbs: 0.7, fat: 0 }
    ],
    recipe: 'Mix dosa batter with onions and chilies, deep fry in small balls.'
  },
  {
    id: 's9',
    name: 'Mixture',
    category: 'snacks',
    price: 35,
    description: 'Crunchy South Indian snack mix with nuts and spices',
    image: 'https://images.pexels.com/photos/6646401/pexels-photo-6646401.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Sev', calories: 60, protein: 3, carbs: 8, fat: 2.5 },
      { name: 'Nuts', calories: 50, protein: 2, carbs: 3, fat: 4 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Mix fried sev, nuts, curry leaves, and spices. Store in airtight container.'
  },
  {
    id: 's10',
    name: 'Pav Bhaji',
    category: 'snacks',
    price: 80,
    description: 'Spiced vegetable curry served with buttered bread',
    image: 'https://images.pexels.com/photos/5619207/pexels-photo-5619207.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 80, protein: 3, carbs: 16, fat: 0.5 },
      { name: 'Pav Bread', calories: 120, protein: 4, carbs: 22, fat: 2 },
      { name: 'Butter', calories: 50, protein: 0, carbs: 0, fat: 6 }
    ],
    recipe: 'Mash vegetables with spices, serve with buttered and toasted pav.'
  },
  {
    id: 's11',
    name: 'Masala Puri',
    category: 'snacks',
    price: 65,
    description: 'Crispy puris topped with chutneys and vegetables',
    image: 'https://images.pexels.com/photos/11756872/pexels-photo-11756872.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Puris', calories: 70, protein: 2.5, carbs: 14, fat: 1.5 },
      { name: 'Chutneys', calories: 40, protein: 1, carbs: 8, fat: 1.5 },
      { name: 'Vegetables', calories: 20, protein: 1, carbs: 4, fat: 0.1 }
    ],
    recipe: 'Top crispy puris with various chutneys, onions, and tomatoes.'
  },
  {
    id: 's12',
    name: 'Chana Chat',
    category: 'snacks',
    price: 55,
    description: 'Spiced chickpea salad with onions and chutneys',
    image: 'https://images.pexels.com/photos/8629867/pexels-photo-8629867.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Chickpeas', calories: 100, protein: 6, carbs: 17, fat: 1.5 },
      { name: 'Onion', calories: 15, protein: 0.4, carbs: 3.5, fat: 0 },
      { name: 'Chutneys', calories: 25, protein: 0.5, carbs: 5, fat: 1 }
    ],
    recipe: 'Mix boiled chickpeas with onions, tomatoes, and tangy chutneys.'
  },
  {
    id: 's13',
    name: 'Egg Bonda',
    category: 'snacks',
    price: 70,
    description: 'Hard-boiled eggs coated in spiced gram flour batter',
    image: 'https://images.pexels.com/photos/12737645/pexels-photo-12737645.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Eggs', calories: 140, protein: 12, carbs: 1, fat: 10 },
      { name: 'Gram Flour', calories: 60, protein: 4, carbs: 9, fat: 1 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Coat hard-boiled eggs in spiced gram flour batter, deep fry until golden.'
  },
  {
    id: 's14',
    name: 'Kachori',
    category: 'snacks',
    price: 50,
    description: 'Flaky pastry filled with spiced lentil mixture',
    image: 'https://images.pexels.com/photos/2474660/pexels-photo-2474660.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Wheat Flour', calories: 80, protein: 2.5, carbs: 16, fat: 0.8 },
      { name: 'Lentil Filling', calories: 60, protein: 4, carbs: 10, fat: 1 },
      { name: 'Oil', calories: 80, protein: 0, carbs: 0, fat: 9 }
    ],
    recipe: 'Fill pastry with spiced lentil mixture, deep fry until puffed and golden.'
  },
  {
    id: 's15',
    name: 'Bread Pakoda',
    category: 'snacks',
    price: 45,
    description: 'Bread slices coated in spiced gram flour batter',
    image: 'https://images.pexels.com/photos/12737651/pexels-photo-12737651.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Bread', calories: 80, protein: 3, carbs: 15, fat: 1 },
      { name: 'Gram Flour', calories: 50, protein: 3, carbs: 8, fat: 1 },
      { name: 'Oil', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Dip bread slices in spiced gram flour batter, deep fry until crispy.'
  },
  {
    id: 's16',
    name: 'Banana Bajji',
    category: 'snacks',
    price: 40,
    description: 'Sweet banana slices in gram flour batter',
    image: 'https://images.pexels.com/photos/12737653/pexels-photo-12737653.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Banana', calories: 60, protein: 1, carbs: 15, fat: 0.2 },
      { name: 'Gram Flour', calories: 50, protein: 3, carbs: 8, fat: 1 },
      { name: 'Jaggery', calories: 15, protein: 0, carbs: 4, fat: 0 }
    ],
    recipe: 'Slice bananas, dip in sweet gram flour batter, deep fry until golden.'
  },
  {
    id: 's17',
    name: 'Gobi Manchurian',
    category: 'snacks',
    price: 75,
    description: 'Indo-Chinese cauliflower in tangy sauce',
    image: 'https://images.pexels.com/photos/5619202/pexels-photo-5619202.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Cauliflower', calories: 30, protein: 2, carbs: 6, fat: 0.3 },
      { name: 'Flour', calories: 50, protein: 2, carbs: 10, fat: 0.5 },
      { name: 'Sauce', calories: 25, protein: 1, carbs: 5, fat: 1 }
    ],
    recipe: 'Fry cauliflower florets in batter, toss in Indo-Chinese sauce.'
  },
  {
    id: 's18',
    name: 'Cutlet',
    category: 'snacks',
    price: 65,
    description: 'Spiced vegetable patties coated in breadcrumbs',
    image: 'https://images.pexels.com/photos/2474657/pexels-photo-2474657.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Breadcrumbs', calories: 40, protein: 2, carbs: 8, fat: 0.5 },
      { name: 'Oil', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Shape spiced vegetable mixture into patties, coat in breadcrumbs, shallow fry.'
  },
  {
    id: 's19',
    name: 'Paneer Pakoda',
    category: 'snacks',
    price: 85,
    description: 'Cottage cheese cubes in spiced gram flour batter',
    image: 'https://images.pexels.com/photos/12737654/pexels-photo-12737654.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Paneer', calories: 120, protein: 9, carbs: 3, fat: 8 },
      { name: 'Gram Flour', calories: 50, protein: 3, carbs: 8, fat: 1 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Cut paneer into cubes, coat in spiced batter, deep fry until golden.'
  },
  {
    id: 's20',
    name: 'Mysore Bonda',
    category: 'snacks',
    price: 55,
    description: 'Soft and spongy lentil dumplings from Mysore',
    image: 'https://images.pexels.com/photos/16092600/pexels-photo-16092600.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Urad Dal', calories: 90, protein: 6, carbs: 13, fat: 0.7 },
      { name: 'Ginger', calories: 3, protein: 0.1, carbs: 0.7, fat: 0 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Grind urad dal to fluffy batter with ginger, deep fry in small balls.'
  },

  // Beverages (20 items)
  {
    id: 'bv1',
    name: 'South Indian Filter Coffee',
    category: 'beverages',
    price: 35,
    description: 'Strong coffee brewed in traditional filter with milk',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coffee Powder', calories: 5, protein: 0.3, carbs: 1, fat: 0 },
      { name: 'Milk', calories: 60, protein: 3, carbs: 5, fat: 3 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 }
    ],
    recipe: 'Brew coffee in filter, mix with hot milk and sugar to taste.'
  },
  {
    id: 'bv2',
    name: 'Masala Chai',
    category: 'beverages',
    price: 30,
    description: 'Spiced tea with cardamom, ginger, and other aromatic spices',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Tea Leaves', calories: 2, protein: 0, carbs: 0, fat: 0 },
      { name: 'Milk', calories: 60, protein: 3, carbs: 5, fat: 3 },
      { name: 'Spices', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Boil tea with spices, add milk and sugar, simmer until aromatic.'
  },
  {
    id: 'bv3',
    name: 'Fresh Lime Water',
    category: 'beverages',
    price: 25,
    description: 'Refreshing drink with fresh lime juice and mint',
    image: 'https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Lime', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Sugar', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix fresh lime juice with water, sugar, and mint leaves.'
  },
  {
    id: 'bv4',
    name: 'Buttermilk',
    category: 'beverages',
    price: 30,
    description: 'Cooling yogurt drink with curry leaves and ginger',
    image: 'https://images.pexels.com/photos/6646375/pexels-photo-6646375.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Yogurt', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Spices', calories: 3, protein: 0.1, carbs: 0.5, fat: 0.1 }
    ],
    recipe: 'Whisk yogurt with water, add salt, ginger, and curry leaves.'
  },
  {
    id: 'bv5',
    name: 'Mango Lassi',
    category: 'beverages',
    price: 60,
    description: 'Creamy yogurt drink blended with sweet mango pulp',
    image: 'https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Mango Pulp', calories: 80, protein: 1, carbs: 20, fat: 0.3 },
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Sugar', calories: 30, protein: 0, carbs: 8, fat: 0 }
    ],
    recipe: 'Blend mango pulp with yogurt, sugar, and ice until smooth.'
  },
  {
    id: 'bv6',
    name: 'Rose Milk',
    category: 'beverages',
    price: 45,
    description: 'Sweet milk flavored with rose syrup',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Rose Syrup', calories: 50, protein: 0, carbs: 13, fat: 0 },
      { name: 'Sugar', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix chilled milk with rose syrup and sugar to taste.'
  },
  {
    id: 'bv7',
    name: 'Coconut Water',
    category: 'beverages',
    price: 40,
    description: 'Fresh coconut water straight from tender coconut',
    image: 'https://images.pexels.com/photos/1259808/pexels-photo-1259808.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coconut Water', calories: 45, protein: 2, carbs: 9, fat: 0.5 }
    ],
    recipe: 'Serve fresh coconut water chilled from tender coconut.'
  },
  {
    id: 'bv8',
    name: 'Jigarthanda',
    category: 'beverages',
    price: 70,
    description: 'Special drink with milk, ice cream, and almond gum',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Ice Cream', calories: 80, protein: 2, carbs: 12, fat: 4 },
      { name: 'Almond Gum', calories: 20, protein: 1, carbs: 3, fat: 1 }
    ],
    recipe: 'Layer milk with almond gum, top with ice cream and syrups.'
  },
  {
    id: 'bv9',
    name: 'Badam Milk',
    category: 'beverages',
    price: 55,
    description: 'Rich almond milk with cardamom and saffron',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Almonds', calories: 80, protein: 3, carbs: 3, fat: 7 },
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Saffron', calories: 2, protein: 0.1, carbs: 0.4, fat: 0.1 }
    ],
    recipe: 'Blend soaked almonds with milk, add cardamom and saffron.'
  },
  {
    id: 'bv10',
    name: 'Sugarcane Juice',
    category: 'beverages',
    price: 35,
    description: 'Fresh sugarcane juice with ginger and lime',
    image: 'https://images.pexels.com/photos/1259808/pexels-photo-1259808.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Sugarcane', calories: 100, protein: 0, carbs: 25, fat: 0 },
      { name: 'Ginger', calories: 2, protein: 0.1, carbs: 0.5, fat: 0 },
      { name: 'Lime', calories: 5, protein: 0.1, carbs: 1.5, fat: 0 }
    ],
    recipe: 'Extract fresh sugarcane juice, add ginger and lime juice.'
  },
  {
    id: 'bv11',
    name: 'Paneer Soda',
    category: 'beverages',
    price: 25,
    description: 'Refreshing lemon soda with rose water',
    image: 'https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Soda Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Lemon', calories: 10, protein: 0.2, carbs: 3, fat: 0.1 },
      { name: 'Rose Water', calories: 2, protein: 0, carbs: 0.5, fat: 0 }
    ],
    recipe: 'Mix soda water with lemon juice, rose water, and sugar.'
  },
  {
    id: 'bv12',
    name: 'Tender Coconut Shake',
    category: 'beverages',
    price: 65,
    description: 'Creamy shake made with tender coconut and milk',
    image: 'https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Tender Coconut', calories: 60, protein: 2.5, carbs: 12, fat: 0.5 },
      { name: 'Milk', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Ice Cream', calories: 40, protein: 1, carbs: 6, fat: 2 }
    ],
    recipe: 'Blend tender coconut meat and water with milk and ice cream.'
  },
  {
    id: 'bv13',
    name: 'Masala Milk',
    category: 'beverages',
    price: 50,
    description: 'Spiced milk with cardamom, nutmeg, and almonds',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Spices', calories: 8, protein: 0.3, carbs: 1.5, fat: 0.3 },
      { name: 'Almonds', calories: 30, protein: 1, carbs: 1, fat: 2.5 }
    ],
    recipe: 'Heat milk with cardamom, nutmeg, crushed almonds, and sugar.'
  },
  {
    id: 'bv14',
    name: 'Watermelon Juice',
    category: 'beverages',
    price: 40,
    description: 'Fresh watermelon juice with mint and black salt',
    image: 'https://images.pexels.com/photos/1259808/pexels-photo-1259808.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Watermelon', calories: 60, protein: 1, carbs: 15, fat: 0.2 },
      { name: 'Mint', calories: 2, protein: 0.1, carbs: 0.5, fat: 0 },
      { name: 'Black Salt', calories: 0, protein: 0, carbs: 0, fat: 0 }
    ],
    recipe: 'Blend watermelon with mint, strain, add black salt to taste.'
  },
  {
    id: 'bv15',
    name: 'Sweet Lassi',
    category: 'beverages',
    price: 45,
    description: 'Traditional sweet yogurt drink with cardamom',
    image: 'https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Yogurt', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Whisk yogurt with sugar, cardamom powder, and ice water.'
  },
  {
    id: 'bv16',
    name: 'Salt Lassi',
    category: 'beverages',
    price: 40,
    description: 'Savory yogurt drink with cumin and black salt',
    image: 'https://images.pexels.com/photos/6646375/pexels-photo-6646375.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Yogurt', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Cumin Powder', calories: 3, protein: 0.2, carbs: 0.4, fat: 0.2 },
      { name: 'Black Salt', calories: 0, protein: 0, carbs: 0, fat: 0 }
    ],
    recipe: 'Whisk yogurt with salt, cumin powder, and chilled water.'
  },
  {
    id: 'bv17',
    name: 'Lemon Tea',
    category: 'beverages',
    price: 25,
    description: 'Hot tea with fresh lemon juice and honey',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Tea', calories: 2, protein: 0, carbs: 0, fat: 0 },
      { name: 'Lemon', calories: 10, protein: 0.2, carbs: 3, fat: 0.1 },
      { name: 'Honey', calories: 30, protein: 0, carbs: 8, fat: 0 }
    ],
    recipe: 'Brew tea, add fresh lemon juice and honey to taste.'
  },
  {
    id: 'bv18',
    name: 'Ginger Tea',
    category: 'beverages',
    price: 30,
    description: 'Warming tea with fresh ginger and cardamom',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Tea', calories: 2, protein: 0, carbs: 0, fat: 0 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Boil tea with fresh ginger and cardamom, add milk and sugar.'
  },
  {
    id: 'bv19',
    name: 'Fresh Fruit Juice',
    category: 'beverages',
    price: 50,
    description: 'Seasonal fresh fruit juice of your choice',
    image: 'https://images.pexels.com/photos/1259808/pexels-photo-1259808.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Seasonal Fruits', calories: 80, protein: 1, carbs: 20, fat: 0.3 },
      { name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Sugar', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Blend fresh seasonal fruits with water, strain if needed, add sugar.'
  },
  {
    id: 'bv20',
    name: 'Iced Coffee',
    category: 'beverages',
    price: 55,
    description: 'Cold coffee with ice cream and chocolate syrup',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coffee', calories: 10, protein: 0.3, carbs: 2, fat: 0 },
      { name: 'Milk', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Ice Cream', calories: 60, protein: 2, carbs: 8, fat: 3 }
    ],
    recipe: 'Blend cold coffee with milk, ice cream, and chocolate syrup.'
  },

  // Desserts (20 items)
  {
    id: 'ds1',
    name: 'Gulab Jamun (2 pieces)',
    category: 'desserts',
    price: 60,
    description: 'Soft milk dumplings in rose-flavored sugar syrup',
    image: 'https://images.pexels.com/photos/8629859/pexels-photo-8629859.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk Powder', calories: 120, protein: 6, carbs: 12, fat: 6 },
      { name: 'Sugar Syrup', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Rose Water', calories: 2, protein: 0, carbs: 0.5, fat: 0 }
    ],
    recipe: 'Make dough with milk powder, form balls, deep fry, soak in sugar syrup.'
  },
  {
    id: 'ds2',
    name: 'Rasmalai (2 pieces)',
    category: 'desserts',
    price: 80,
    description: 'Cottage cheese discs in sweetened milk with cardamom',
    image: 'https://images.pexels.com/photos/8629858/pexels-photo-8629858.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Paneer', calories: 100, protein: 8, carbs: 3, fat: 7 },
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Boil paneer discs, simmer in sweetened milk with cardamom and nuts.'
  },
  {
    id: 'ds3',
    name: 'Payasam',
    category: 'desserts',
    price: 70,
    description: 'Traditional South Indian sweet pudding with rice and milk',
    image: 'https://images.pexels.com/photos/8629857/pexels-photo-8629857.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice', calories: 80, protein: 1.5, carbs: 18, fat: 0.2 },
      { name: 'Milk', calories: 150, protein: 8, carbs: 12, fat: 8 },
      { name: 'Jaggery', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Cook rice in milk until creamy, sweeten with jaggery, add cardamom and nuts.'
  },
  {
    id: 'ds4',
    name: 'Mysore Pak',
    category: 'desserts',
    price: 90,
    description: 'Rich gram flour sweet with ghee and sugar',
    image: 'https://images.pexels.com/photos/8629860/pexels-photo-8629860.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Gram Flour', calories: 100, protein: 6, carbs: 16, fat: 2 },
      { name: 'Ghee', calories: 120, protein: 0, carbs: 0, fat: 14 },
      { name: 'Sugar', calories: 100, protein: 0, carbs: 25, fat: 0 }
    ],
    recipe: 'Roast gram flour in ghee, add sugar syrup, cook until set.'
  },
  {
    id: 'ds5',
    name: 'Badusha',
    category: 'desserts',
    price: 50,
    description: 'Flaky pastry soaked in sugar syrup',
    image: 'https://images.pexels.com/photos/8629861/pexels-photo-8629861.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Wheat Flour', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Ghee', calories: 80, protein: 0, carbs: 0, fat: 9 },
      { name: 'Sugar Syrup', calories: 80, protein: 0, carbs: 20, fat: 0 }
    ],
    recipe: 'Make flaky pastry with ghee, deep fry, soak in sugar syrup.'
  },
  {
    id: 'ds6',
    name: 'Kesari Bath',
    category: 'desserts',
    price: 65,
    description: 'Semolina sweet pudding with saffron and nuts',
    image: 'https://images.pexels.com/photos/8629856/pexels-photo-8629856.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Semolina', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Saffron', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Roast semolina, cook with sugar syrup, add saffron and ghee.'
  },
  {
    id: 'ds7',
    name: 'Double Ka Meetha',
    category: 'desserts',
    price: 75,
    description: 'Hyderabadi bread pudding with milk and nuts',
    image: 'https://images.pexels.com/photos/8629862/pexels-photo-8629862.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Bread', calories: 100, protein: 4, carbs: 18, fat: 2 },
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Fry bread slices, layer with sweetened milk, garnish with nuts.'
  },
  {
    id: 'ds8',
    name: 'Coconut Barfi',
    category: 'desserts',
    price: 55,
    description: 'Sweet coconut fudge with cardamom',
    image: 'https://images.pexels.com/photos/8629863/pexels-photo-8629863.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coconut', calories: 120, protein: 2, carbs: 4, fat: 12 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Cardamom', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Cook grated coconut with sugar until thick, add cardamom, set in tray.'
  },
  {
    id: 'ds9',
    name: 'Laddu (2 pieces)',
    category: 'desserts',
    price: 45,
    description: 'Traditional gram flour balls with ghee and nuts',
    image: 'https://images.pexels.com/photos/8629864/pexels-photo-8629864.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Gram Flour', calories: 100, protein: 6, carbs: 16, fat: 2 },
      { name: 'Ghee', calories: 80, protein: 0, carbs: 0, fat: 9 },
      { name: 'Jaggery', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Roast gram flour in ghee, mix with powdered jaggery, form balls.'
  },
  {
    id: 'ds10',
    name: 'Kulfi',
    category: 'desserts',
    price: 40,
    description: 'Traditional Indian ice cream with cardamom and pistachios',
    image: 'https://images.pexels.com/photos/8629865/pexels-photo-8629865.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Reduce milk with sugar, add cardamom, freeze in kulfi molds.'
  },
  {
    id: 'ds11',
    name: 'Jalebi (4 pieces)',
    category: 'desserts',
    price: 50,
    description: 'Crispy spiral-shaped sweets in sugar syrup',
    image: 'https://images.pexels.com/photos/8629866/pexels-photo-8629866.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Wheat Flour', calories: 80, protein: 2.5, carbs: 16, fat: 0.8 },
      { name: 'Sugar Syrup', calories: 100, protein: 0, carbs: 25, fat: 0 },
      { name: 'Saffron', calories: 2, protein: 0.1, carbs: 0.4, fat: 0.1 }
    ],
    recipe: 'Make fermented batter, pipe spirals in hot oil, soak in saffron syrup.'
  },
  {
    id: 'ds12',
    name: 'Halwa',
    category: 'desserts',
    price: 70,
    description: 'Rich semolina pudding with ghee, sugar, and nuts',
    image: 'https://images.pexels.com/photos/8629867/pexels-photo-8629867.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Semolina', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Ghee', calories: 100, protein: 0, carbs: 0, fat: 11 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 }
    ],
    recipe: 'Roast semolina in ghee, add sugar syrup, cook until thick and glossy.'
  },
  {
    id: 'ds13',
    name: 'Carrot Halwa',
    category: 'desserts',
    price: 80,
    description: 'Sweet carrot pudding with milk, nuts, and cardamom',
    image: 'https://images.pexels.com/photos/8629868/pexels-photo-8629868.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Carrots', calories: 60, protein: 1, carbs: 14, fat: 0.3 },
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Cook grated carrots in milk, add sugar, reduce until thick.'
  },
  {
    id: 'ds14',
    name: 'Rabri',
    category: 'desserts',
    price: 75,
    description: 'Thickened sweetened milk with cardamom and nuts',
    image: 'https://images.pexels.com/photos/8629869/pexels-photo-8629869.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 180, protein: 9, carbs: 14, fat: 9 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Slowly reduce milk while stirring, sweeten with sugar, add cardamom.'
  },
  {
    id: 'ds15',
    name: 'Kaju Katli',
    category: 'desserts',
    price: 120,
    description: 'Diamond-shaped cashew fudge with silver leaf',
    image: 'https://images.pexels.com/photos/8629870/pexels-photo-8629870.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Cashews', calories: 150, protein: 5, carbs: 8, fat: 12 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Grind cashews, cook with sugar syrup, roll thin, cut into diamonds.'
  },
  {
    id: 'ds16',
    name: 'Ras Malai Ice Cream',
    category: 'desserts',
    price: 85,
    description: 'Frozen version of traditional rasmalai',
    image: 'https://images.pexels.com/photos/8629871/pexels-photo-8629871.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Cream', calories: 80, protein: 1, carbs: 2, fat: 8 },
      { name: 'Paneer', calories: 60, protein: 5, carbs: 2, fat: 4 }
    ],
    recipe: 'Churn reduced milk with cream and paneer pieces, freeze until set.'
  },
  {
    id: 'ds17',
    name: 'Pootharekulu (2 pieces)',
    category: 'desserts',
    price: 95,
    description: 'Paper-thin sweet crepes with jaggery and ghee',
    image: 'https://images.pexels.com/photos/8629872/pexels-photo-8629872.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Rice Starch', calories: 60, protein: 1, carbs: 14, fat: 0.1 },
      { name: 'Jaggery', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Ghee', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Make paper-thin crepes, fill with jaggery and ghee, roll carefully.'
  },
  {
    id: 'ds18',
    name: 'Malai Kulfi',
    category: 'desserts',
    price: 50,
    description: 'Creamy kulfi with extra milk solids',
    image: 'https://images.pexels.com/photos/8629873/pexels-photo-8629873.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Milk', calories: 140, protein: 7, carbs: 11, fat: 7 },
      { name: 'Cream', calories: 60, protein: 1, carbs: 2, fat: 6 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 }
    ],
    recipe: 'Reduce milk with cream, sweeten, add cardamom, freeze in kulfi molds.'
  },
  {
    id: 'ds19',
    name: 'Filter Coffee Ice Cream',
    category: 'desserts',
    price: 60,
    description: 'South Indian coffee flavored ice cream',
    image: 'https://images.pexels.com/photos/8629874/pexels-photo-8629874.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coffee Decoction', calories: 10, protein: 0.5, carbs: 2, fat: 0 },
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Cream', calories: 80, protein: 1, carbs: 2, fat: 8 }
    ],
    recipe: 'Churn strong coffee decoction with sweetened milk and cream.'
  },
  {
    id: 'ds20',
    name: 'Coconut Ice Cream',
    category: 'desserts',
    price: 55,
    description: 'Tropical coconut flavored ice cream with coconut pieces',
    image: 'https://images.pexels.com/photos/8629875/pexels-photo-8629875.jpeg?auto=compress&cs=tinysrgb&w=400',
    ingredients: [
      { name: 'Coconut Milk', calories: 100, protein: 2, carbs: 4, fat: 10 },
      { name: 'Milk', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Coconut Pieces', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Churn coconut milk with regular milk, add fresh coconut pieces.'
  }
];