import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home.jsx';
import PlaceDetails from './components/PlaceDetails.jsx';
import Login from './components/login.jsx'; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';

// --- ScrollToTop Component ---
// This listens to route changes and resets window scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      {/* 1. Add ScrollToTop inside BrowserRouter so it can access the location hook */}
      <ScrollToTop />
      
      {/* 2. Wrap everything in a flex container to handle layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;