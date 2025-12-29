import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { categories } from '../mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Upload, X } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const PostAd = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: '',
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Login Required</h2>
          <p className="text-gray-600 mb-6">Please login to post an ad</p>
          <Button onClick={() => navigate('/login')} className="bg-[#FF8C00] hover:bg-[#FF7A00]">
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.price || !formData.category || !formData.location) {
      toast({ title: 'Please fill all required fields', variant: 'destructive' });
      return;
    }

    try {
      // This sends the data to your Python Backend
      const response = await axios.post('http://localhost:8000/api/ads', {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        location: formData.location
      });

      if (response.status === 200) {
        toast({ title: 'Ad posted to MongoDB successfully!' });
        navigate('/');
      }
    } catch (error) {
      console.error("Error saving ad:", error);
      toast({ title: 'Failed to save ad. Is backend running?', variant: 'destructive' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Post Your Ad (Live)</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select a category" /></SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="title">Ad Title *</Label>
              <Input id="title" placeholder="What are you selling?" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea id="description" placeholder="Describe it..." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={5} />
            </div>
            <div>
              <Label htmlFor="price">Price (₹) *</Label>
              <Input id="price" type="number" placeholder="Enter amount" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="location">Location *</Label>
              <Input id="location" placeholder="City, State" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            </div>
            <div className="pt-4">
              <Button type="submit" className="w-full bg-[#FF8C00] hover:bg-[#FF7A00] text-white py-6 text-lg font-semibold">
                Post Ad to Database
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PostAd;
