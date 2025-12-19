import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { Card } from './ui/card';

const ProductCard = ({ product, onFavorite, isFavorited }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#3A77FF]">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isFeatured && (
            <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              FEATURED
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4 bg-white">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-700 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <p className="text-2xl font-bold text-green-600">{formatPrice(product.price)}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onFavorite?.(product.id);
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Heart
              size={20}
              className={isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}
            />
          </button>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={16} className="mr-1 text-gray-400" />
          <span>{product.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{product.category}</span>
          <span>{product.postedAt}</span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;