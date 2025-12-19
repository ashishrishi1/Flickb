import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../mockData';
import ProductCard from '../components/ProductCard';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const [favorites, setFavorites] = useState([]);
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (productId) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const getIconComponent = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_online-bazaar-89/artifacts/z3u1m5ig_Gemini_Generated_Image_sn5qd6sn5qd6sn5q.png" 
              alt="FlickB" 
              className="h-20 w-auto filter brightness-0 invert"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Find anything you need</h1>
          <p className="text-xl mb-6 text-center">Buy and sell products near you on India's trusted marketplace</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Browse Categories</h2>
          <Link to="/categories">
            <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
              View All <ChevronRight size={20} className="ml-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:border-teal-500 border-2 border-transparent transition-all duration-300 group"
            >
              <div className="text-teal-600 mb-3 group-hover:scale-110 transition-transform">
                {getIconComponent(category.icon)}
              </div>
              <h3 className="font-semibold text-sm text-center text-gray-800 mb-1">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.count}+ ads</p>
            </Link>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Ads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.filter(p => p.isFeatured).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavorite={toggleFavorite}
                isFavorited={favorites.includes(product.id)}
              />
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Fresh Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavorite={toggleFavorite}
                isFavorited={favorites.includes(product.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_online-bazaar-89/artifacts/z3u1m5ig_Gemini_Generated_Image_sn5qd6sn5qd6sn5q.png" 
                alt="FlickB" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400">India's trusted marketplace for buying and selling</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Categories</Link></li>
                <li><Link to="/post-ad" className="hover:text-blue-400 transition-colors">Post Ad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Flickb - A subsidiary of Homlivia Pvt. Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;