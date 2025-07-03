
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  stock: number;
  sizes?: string[];
  colors?: string[];
  trending?: boolean;
  featured?: boolean;
}

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Beauty',
  'Books'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation and crystal-clear sound quality. Perfect for music lovers and professionals.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Premium sound quality',
      'Comfortable over-ear design'
    ],
    rating: 4.5,
    reviews: 128,
    stock: 15,
    trending: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone connectivity. Track your workouts and health metrics with precision.',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      '7-day battery life',
      'Sleep tracking'
    ],
    rating: 4.3,
    reviews: 89,
    stock: 8,
    colors: ['Black', 'Silver', 'Rose Gold'],
    trending: true
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=500&fit=crop'
    ],
    category: 'Clothing',
    description: 'Soft, comfortable, and stylish cotton t-shirt perfect for everyday wear. Made from 100% organic cotton.',
    features: [
      '100% organic cotton',
      'Comfortable fit',
      'Machine washable',
      'Durable construction',
      'Available in multiple colors'
    ],
    rating: 4.7,
    reviews: 203,
    stock: 25,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    featured: true
  },
  {
    id: '4',
    name: 'Laptop Computer',
    price: 899.99,
    originalPrice: 1099.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    description: 'High-performance laptop perfect for work, study, and entertainment. Features the latest processor and ample storage.',
    features: [
      'Intel Core i7 processor',
      '16GB RAM',
      '512GB SSD storage',
      '15.6" Full HD display',
      'All-day battery life'
    ],
    rating: 4.6,
    reviews: 67,
    stock: 5,
    featured: true
  },
  {
    id: '5',
    name: 'Indoor Plant Collection',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500&h=500&fit=crop'
    ],
    category: 'Home & Garden',
    description: 'Beautiful collection of indoor plants to brighten up your living space. Easy to care for and perfect for beginners.',
    features: [
      'Set of 3 plants',
      'Low maintenance',
      'Air purifying',
      'Includes care instructions',
      'Decorative pots included'
    ],
    rating: 4.8,
    reviews: 156,
    stock: 20,
    trending: true
  },
  {
    id: '6',
    name: 'Yoga Mat',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1506629905607-49417d683085?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1506629905607-49417d683085?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop'
    ],
    category: 'Sports',
    description: 'High-quality yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, or general fitness.',
    features: [
      'Non-slip surface',
      'Extra thick cushioning',
      'Eco-friendly materials',
      'Lightweight and portable',
      'Easy to clean'
    ],
    rating: 4.4,
    reviews: 94,
    stock: 30,
    colors: ['Purple', 'Blue', 'Pink', 'Green']
  },
  {
    id: '7',
    name: 'Skincare Set',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop'
    ],
    category: 'Beauty',
    description: 'Complete skincare routine with cleanser, moisturizer, and serum. Suitable for all skin types.',
    features: [
      'Complete 3-step routine',
      'All natural ingredients',
      'Suitable for all skin types',
      'Dermatologist tested',
      'Cruelty-free'
    ],
    rating: 4.9,
    reviews: 234,
    stock: 12
  },
  {
    id: '8',
    name: 'Programming Guide Book',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
    ],
    category: 'Books',
    description: 'Comprehensive guide to modern programming practices. Perfect for beginners and experienced developers.',
    features: [
      '500+ pages of content',
      'Practical examples',
      'Modern best practices',
      'Code samples included',
      'Author support community'
    ],
    rating: 4.2,
    reviews: 78,
    stock: 18
  }
];

export const featuredCategories = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    description: 'Latest gadgets and tech'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    description: 'Stylish apparel for everyone'
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    description: 'Beautiful home essentials'
  },
  {
    id: 'sports',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    description: 'Fitness and outdoor gear'
  }
];
