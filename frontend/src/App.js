import React, { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductDetail from "@/pages/ProductDetail";
import PostAd from "@/pages/PostAd";
import MyAds from "@/pages/MyAds";
import Messages from "@/pages/Messages";
import Favorites from "@/pages/Favorites";
import CategoryPage from "@/pages/CategoryPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('user');
    
    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/product/:id" element={<ProductDetail isAuthenticated={isAuthenticated} />} />
          <Route path="/post-ad" element={<PostAd isAuthenticated={isAuthenticated} />} />
          <Route path="/my-ads" element={<MyAds isAuthenticated={isAuthenticated} />} />
          <Route path="/messages" element={<Messages isAuthenticated={isAuthenticated} />} />
          <Route path="/favorites" element={<Favorites isAuthenticated={isAuthenticated} />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
