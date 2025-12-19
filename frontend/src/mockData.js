// Mock data for OLX clone

export const categories = [
  { id: 1, name: 'Mobiles', icon: 'Smartphone', count: 1250 },
  { id: 2, name: 'Vehicles', icon: 'Car', count: 845 },
  { id: 3, name: 'Property', icon: 'Home', count: 320 },
  { id: 4, name: 'Electronics', icon: 'Laptop', count: 670 },
  { id: 5, name: 'Furniture', icon: 'Sofa', count: 420 },
  { id: 6, name: 'Fashion', icon: 'Shirt', count: 890 },
  { id: 7, name: 'Books', icon: 'Book', count: 210 },
  { id: 8, name: 'Pets', icon: 'Cat', count: 150 },
];

export const products = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max - Excellent Condition',
    price: 65000,
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85',
    category: 'Mobiles',
    categoryId: 1,
    postedAt: '2 hours ago',
    description: 'iPhone 13 Pro Max 256GB in Sierra Blue. Barely used, like new condition with all accessories and box.',
    seller: {
      name: 'Rahul Sharma',
      memberSince: 'Member since 2020',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85',
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85'
    ],
    isFeatured: true
  },
  {
    id: 2,
    title: 'Honda City 2019 - Top Model',
    price: 850000,
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85',
    category: 'Vehicles',
    categoryId: 2,
    postedAt: '5 hours ago',
    description: 'Honda City ZX model, petrol, 35000 km driven. First owner, well maintained.',
    seller: {
      name: 'Amit Kumar',
      memberSince: 'Member since 2018',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85'
    ],
    isFeatured: true
  },
  {
    id: 3,
    title: 'MacBook Pro 14 inch M1 Pro',
    price: 145000,
    location: 'Bangalore, Karnataka',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    category: 'Electronics',
    categoryId: 4,
    postedAt: '1 day ago',
    description: 'MacBook Pro 14-inch with M1 Pro chip, 16GB RAM, 512GB SSD. 6 months old with warranty.',
    seller: {
      name: 'Priya Desai',
      memberSince: 'Member since 2021',
      verified: true
    },
    images: [
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
    ]
  },
  {
    id: 4,
    title: 'Modern Yellow Accent Chair',
    price: 8500,
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85',
    category: 'Furniture',
    categoryId: 5,
    postedAt: '3 hours ago',
    description: 'Beautiful modern accent chair in yellow. Perfect condition, barely used.',
    seller: {
      name: 'Sneha Patel',
      memberSince: 'Member since 2022',
      verified: false
    },
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85'
    ]
  },
  {
    id: 5,
    title: 'Green Sofa Set - 3 Seater',
    price: 25000,
    location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85',
    category: 'Furniture',
    categoryId: 5,
    postedAt: '6 hours ago',
    description: 'Comfortable 3-seater sofa in green fabric. 1 year old, excellent condition.',
    seller: {
      name: 'Vikram Reddy',
      memberSince: 'Member since 2019',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85'
    ]
  },
  {
    id: 6,
    title: 'Jeep Wrangler 2020 - Adventure Ready',
    price: 4500000,
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85',
    category: 'Vehicles',
    categoryId: 2,
    postedAt: '1 day ago',
    description: 'Jeep Wrangler Unlimited Rubicon, 15000 km, diesel. Modified for off-roading.',
    seller: {
      name: 'Rajesh Nair',
      memberSince: 'Member since 2017',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85'
    ]
  },
  {
    id: 7,
    title: 'Wireless Headphones - Sony WH-1000XM4',
    price: 18000,
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85',
    category: 'Electronics',
    categoryId: 4,
    postedAt: '4 hours ago',
    description: 'Sony WH-1000XM4 noise cancelling headphones. 3 months old with warranty.',
    seller: {
      name: 'Arun Kumar',
      memberSince: 'Member since 2020',
      verified: false
    },
    images: [
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85'
    ]
  },
  {
    id: 8,
    title: 'Dining Table Set with 6 Chairs',
    price: 35000,
    location: 'Kolkata, West Bengal',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85',
    category: 'Furniture',
    categoryId: 5,
    postedAt: '2 days ago',
    description: 'Wooden dining table with 6 cushioned chairs. Solid teak wood construction.',
    seller: {
      name: 'Sanjay Ghosh',
      memberSince: 'Member since 2021',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85'
    ]
  }
];

export const userAds = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max - Excellent Condition',
    price: 65000,
    status: 'active',
    views: 234,
    favorites: 12,
    postedAt: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85'
  }
];

export const mockMessages = [
  {
    id: 1,
    productId: 2,
    productTitle: 'Honda City 2019 - Top Model',
    productImage: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85',
    otherUser: 'Amit Kumar',
    lastMessage: 'Is the car still available?',
    timestamp: '10 mins ago',
    unread: true,
    messages: [
      { sender: 'me', text: 'Hi, interested in the Honda City', time: '2:30 PM' },
      { sender: 'other', text: 'Yes, it is available. Would you like to see it?', time: '2:32 PM' },
      { sender: 'me', text: 'Yes please. When can I come for a test drive?', time: '2:35 PM' },
      { sender: 'other', text: 'Is the car still available?', time: '2:40 PM' }
    ]
  },
  {
    id: 2,
    productId: 4,
    productTitle: 'Modern Yellow Accent Chair',
    productImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85',
    otherUser: 'Sneha Patel',
    lastMessage: 'Thanks for your interest',
    timestamp: '2 hours ago',
    unread: false,
    messages: [
      { sender: 'me', text: 'Can you negotiate on the price?', time: '12:00 PM' },
      { sender: 'other', text: 'Thanks for your interest', time: '12:15 PM' }
    ]
  }
];