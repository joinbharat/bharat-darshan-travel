import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import PlaceDetails from './components/PlaceDetails.jsx';
import Login from './components/login.jsx'; 
import Footer from './components/footer.jsx'; // 1. Import Footer

function App() {
  return (
    <BrowserRouter>
      {/* 2. Wrap everything in a flex container to handle layout */}
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
        </Routes>
        
        {/* 3. Add Footer here so it appears on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;