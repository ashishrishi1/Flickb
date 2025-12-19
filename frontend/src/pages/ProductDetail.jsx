import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mockData';
import { Heart, Share2, MapPin, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { toast } from '../hooks/use-toast';

const ProductDetail = ({ isAuthenticated }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);

    // Check if favorited
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(parseInt(id)));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = isFavorited
      ? favorites.filter(fId => fId !== parseInt(id))
      : [...favorites, parseInt(id)];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorited(!isFavorited);
    toast({ title: isFavorited ? 'Removed from favorites' : 'Added to favorites' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.title,
        text: `Check out this product: ${product?.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: 'Link copied to clipboard!' });
    }
  };

  const handleChat = () => {
    if (!isAuthenticated) {
      toast({ title: 'Please login to chat with seller', variant: 'destructive' });
      return;
    }
    // In real app, this would initiate a chat
    toast({ title: 'Chat feature coming soon!' });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Product not found</div>;
  }

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-96 object-contain"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                        currentImageIndex === idx ? 'border-teal-500' : 'border-gray-200 hover:border-teal-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </Card>

            {/* Description */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Price & Actions */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{formatPrice(product.price)}</h1>
                  <h2 className="text-xl text-gray-700">{product.title}</h2>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggleFavorite}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart size={24} className={isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Share2 size={24} className="text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2" />
                  <span>Posted {product.postedAt}</span>
                </div>
              </div>

              <Button
                onClick={handleChat}
                className="w-full bg-[#FF8C00] hover:bg-[#FF7A00] text-white py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Chat with Seller
              </Button>
            </Card>

            {/* Seller Info */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Seller Information</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {product.seller.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-lg">{product.seller.name}</p>
                  <p className="text-sm text-gray-500">{product.seller.memberSince}</p>
                  {product.seller.verified && (
                    <span className="inline-block mt-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </div>
              <Link to="/messages">
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </Link>
            </Card>

            {/* Safety Tips */}
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <h3 className="text-lg font-bold mb-3 text-yellow-900">Safety Tips</h3>
              <ul className="space-y-2 text-sm text-yellow-800">
                <li>• Meet in a safe public place</li>
                <li>• Check the item before you buy</li>
                <li>• Pay only after collecting item</li>
                <li>• Don't share personal information</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;