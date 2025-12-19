import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../mockData';
import ProductCard from '../components/ProductCard';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);

    const foundCategory = categories.find(c => c.id === parseInt(categoryId));
    setCategory(foundCategory);

    const filtered = products.filter(p => p.categoryId === parseInt(categoryId));
    setCategoryProducts(filtered);
  }, [categoryId]);

  const toggleFavorite = (productId) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">
            {category?.name || 'Category'}
          </h1>
          <p className="text-gray-600 mt-2">
            {categoryProducts.length} ads found
          </p>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavorite={toggleFavorite}
                isFavorited={favorites.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
