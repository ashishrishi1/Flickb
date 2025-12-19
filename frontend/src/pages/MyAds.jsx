import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userAds } from '../mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Eye, Heart, Edit, Trash2, Plus } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const MyAds = ({ isAuthenticated }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      setAds(userAds);
    }
  }, [isAuthenticated]);

  const handleDelete = (id) => {
    setAds(ads.filter(ad => ad.id !== id));
    toast({ title: 'Ad deleted successfully' });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to view your ads</p>
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Ads</h1>
          <Link to="/post-ad">
            <Button className="bg-[#FF8C00] hover:bg-[#FF7A00] text-white">
              <Plus size={20} className="mr-2" />
              Post New Ad
            </Button>
          </Link>
        </div>

        {ads.length === 0 ? (
          <Card className="p-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">No ads yet</h2>
            <p className="text-gray-500 mb-6">Start selling by posting your first ad</p>
            <Link to="/post-ad">
              <Button className="bg-[#FF8C00] hover:bg-[#FF7A00]">
                <Plus size={20} className="mr-2" />
                Post Your First Ad
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {ads.map((ad) => (
              <Card key={ad.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-6">
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{ad.title}</h3>
                        <p className="text-2xl font-bold text-teal-600 mb-3">{formatPrice(ad.price)}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Eye size={16} />
                            <span>{ad.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart size={16} />
                            <span>{ad.favorites} favorites</span>
                          </div>
                          <span>•</span>
                          <span>{ad.postedAt}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          ad.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {ad.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="sm">
                      <Edit size={16} className="mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(ad.id)}
                      className="text-red-600 hover:text-red-700 hover:border-red-600"
                    >
                      <Trash2 size={16} className="mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAds;