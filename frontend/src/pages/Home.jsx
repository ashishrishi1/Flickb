import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { categories } from '../mockData';
import ProductCard from '../components/ProductCard';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const [favorites, setFavorites] = useState([]);
  const [allProducts, setAllProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);

    const fetchAds = async () => {
      try {
        // This looks for your Python backend
        const response = await axios.get('http://localhost:8000/api/ads');
        setAllProducts(response.data);
      } catch (error) {
        console.error("No real ads found yet.");
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
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
      <div className="bg-[#3A77FF] text-white py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find anything you need</h1>
          <p className="text-xl">India's trusted marketplace</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`} className="bg-white rounded-lg p-6 flex flex-col items-center border hover:shadow-md transition-all">
              <div className="text-[#3A77FF] mb-3">{getIconComponent(category.icon)}</div>
              <h3 className="font-semibold text-sm">{category.name}</h3>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Fresh Recommendations</h2>
        {loading ? (
          <p className="text-center">Connecting to database...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.length > 0 ? (
              allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onFavorite={toggleFavorite}
                  isFavorited={favorites.includes(product.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 bg-white rounded-lg border">
                <p className="text-gray-500">The marketplace is empty.</p>
                <Link to="/post-ad" className="text-blue-600 font-bold">Post the first ad!</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
