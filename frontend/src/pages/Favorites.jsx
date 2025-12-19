import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../mockData';
import ProductCard from '../components/ProductCard';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Heart } from 'lucide-react';

const Favorites = ({ isAuthenticated }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(savedFavorites);
      setFavoriteProducts(products.filter(p => savedFavorites.includes(p.id)));
    }
  }, [isAuthenticated]);

  const toggleFavorite = (productId) => {
    const newFavorites = favorites.filter(id => id !== productId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavoriteProducts(products.filter(p => newFavorites.includes(p.id)));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to view your favorites</p>
          <Link to="/login">
            <Button className="bg-[#FF8C00] hover:bg-[#FF7A00]">Go to Login</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Favorites</h1>

        {favoriteProducts.length === 0 ? (
          <Card className="p-12 text-center">
            <Heart size={64} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">No favorites yet</h2>
            <p className="text-gray-500 mb-6">Start browsing and save items you like</p>
            <Link to="/">
              <Button className="bg-[#FF8C00] hover:bg-[#FF7A00]">Browse Products</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavorite={toggleFavorite}
                isFavorited={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;