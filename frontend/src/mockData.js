// Mock data for FlickB marketplace

export const categories = [
  { id: 1, name: 'Mobiles', icon: 'Smartphone', count: 2847 },
  { id: 2, name: 'Vehicles', icon: 'Car', count: 1523 },
  { id: 3, name: 'Property', icon: 'Home', count: 895 },
  { id: 4, name: 'Electronics', icon: 'Laptop', count: 1456 },
  { id: 5, name: 'Furniture', icon: 'Sofa', count: 1134 },
  { id: 6, name: 'Fashion', icon: 'Shirt', count: 2201 },
  { id: 7, name: 'Books', icon: 'Book', count: 567 },
  { id: 8, name: 'Pets', icon: 'Cat', count: 389 },
];

export const products = [
  {
    id: 1,
    title: 'Apple iPhone 14 Pro 256GB - Space Black - Unlocked',
    price: 52000,
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3NjYwODIyNDN8MA&ixlib=rb-4.1.0&q=85',
    category: 'Mobiles',
    categoryId: 1,
    postedAt: '3 days ago',
    description: 'iPhone 14 Pro 256GB Space Black, unlocked, battery health 91%. Minor scuffs on frame. Includes original box, USB-C charger, case. iCloud removed, factory reset. Test before buying.',
    seller: {
      name: 'Rajesh Kumar',
      memberSince: 'Member since 2019',
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
    title: '2016 Honda Civic EX - 82k miles - Excellent Maintenance Records',
    price: 725000,
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85',
    category: 'Vehicles',
    categoryId: 2,
    postedAt: '1 week ago',
    description: '2016 Honda Civic EX, 82k miles, single owner, no accidents (inspection report available). 2.0L automatic, recently replaced front brakes and battery. Bluetooth, backup camera, new tires (2024). Clean title, maintenance receipts included.',
    seller: {
      name: 'Amit Verma',
      memberSince: 'Member since 2017',
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
    title: 'Sony A7 III Mirrorless Camera Body - 48k Shutter Count',
    price: 89000,
    location: 'Mumbai, Maharashtra',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    category: 'Electronics',
    categoryId: 4,
    postedAt: '5 days ago',
    description: 'Sony A7 III camera body, good condition, minor cosmetic wear, clean sensor. 48k shutter count. Includes body cap, battery, charger, original strap (no lens). Sensor professionally cleaned Dec 2024. Test autofocus and shutter in person.',
    seller: {
      name: 'Priya Singh',
      memberSince: 'Member since 2020',
      verified: true
    },
    images: [
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
    ]
  },
  {
    id: 4,
    title: 'Solid Oak Dining Table + 6 Chairs - Excellent Condition',
    price: 48000,
    location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85',
    category: 'Furniture',
    categoryId: 5,
    postedAt: '2 weeks ago',
    description: 'Solid oak dining table 72"x40" natural finish, 3 years old, no major scratches. Includes 6 upholstered chairs with removable covers. Pickup preferred (ground floor). Can deliver within 15km for ₹500 extra. 8 detailed photos available.',
    seller: {
      name: 'Sneha Mehta',
      memberSince: 'Member since 2018',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85'
    ]
  },
  {
    id: 5,
    title: 'IKEA MALM Queen Bed Frame + Mattress (2019)',
    price: 12000,
    location: 'Hyderabad, Telangana',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmdXJuaXR1cmV8ZW58MHx8fHwxNzY2MTM5MzgzfDA&ixlib=rb-4.1.0&q=85',
    category: 'Furniture',
    categoryId: 5,
    postedAt: '4 days ago',
    description: 'IKEA MALM Queen (60"x80") bed frame good condition, mattress fair (minor sag). Slatted base, 2 under-bed drawers included. Memory foam mattress 8" height with removable cover. Pickup from 2nd floor (bring help). Mattress hygiene protector recommended.',
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
    title: '2012 Toyota Tacoma TRD Off-Road - 150k Miles - Well-Maintained',
    price: 1350000,
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHx2ZWhpY2xlc3xlbnwwfHx8fDE3NjYxMzkzODh8MA&ixlib=rb-4.1.0&q=85',
    category: 'Vehicles',
    categoryId: 2,
    postedAt: '10 days ago',
    description: '2012 Toyota Tacoma TRD Off-Road, 150k miles. Solid frame with aftermarket suspension lift, skid plates, bed liner. No frame rust. Timing belt serviced at 120k, new rear shocks 2024. Clean title. Detailed undercarriage photos available, mechanic inspection welcome.',
    seller: {
      name: 'Rajesh Nair',
      memberSince: 'Member since 2016',
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