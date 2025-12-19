import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, MessageCircle, User, Plus, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-teal-600">OLX</div>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Find Cars, Mobile Phones and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-5 border-2 border-gray-200 focus:border-teal-500 rounded-md"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-600 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/messages" className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors">
                  <MessageCircle size={22} />
                  <span className="font-medium">Chat</span>
                </Link>
                <Link to="/favorites" className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors">
                  <Heart size={22} />
                  <span className="font-medium">Favorites</span>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-medium">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                    <span className="font-medium">{user?.name || 'User'}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border hidden group-hover:block">
                    <Link to="/my-ads" className="block px-4 py-3 hover:bg-gray-50 transition-colors">My Ads</Link>
                    <Link to="/profile" className="block px-4 py-3 hover:bg-gray-50 transition-colors">Profile</Link>
                    <button onClick={onLogout} className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-red-600">Logout</button>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="flex items-center space-x-1">
                  <User size={20} />
                  <span>Login</span>
                </Button>
              </Link>
            )}
            <Link to="/post-ad">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center space-x-2 px-6 py-5 rounded-full shadow-md hover:shadow-lg transition-all">
                <Plus size={20} />
                <span className="font-bold">SELL</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-5 border-2 border-gray-200 focus:border-teal-500 rounded-md"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          {isAuthenticated ? (
            <>
              <Link to="/messages" className="flex items-center space-x-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                <MessageCircle size={20} />
                <span>Chat</span>
              </Link>
              <Link to="/favorites" className="flex items-center space-x-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                <Heart size={20} />
                <span>Favorites</span>
              </Link>
              <Link to="/my-ads" className="flex items-center space-x-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                <User size={20} />
                <span>My Ads</span>
              </Link>
              <Link to="/post-ad" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  <Plus size={20} className="mr-2" />
                  SELL
                </Button>
              </Link>
              <button onClick={() => { onLogout(); setMobileMenuOpen(false); }} className="w-full text-left py-2 text-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  <User size={20} className="mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/post-ad" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  <Plus size={20} className="mr-2" />
                  SELL
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;