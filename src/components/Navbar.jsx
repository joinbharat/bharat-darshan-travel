import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Globe, ShieldCheck, UserCircle, Menu, X, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow and reduce height when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 font-sans">
      
      {/* 1. GOV STYLE TOP STRIP */}
      {/* Made darker (slate-950) for a more premium/official look */}
      <div className="bg-slate-950 text-slate-400 text-[10px] md:text-xs py-1.5 px-4 transition-all duration-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-orange-500"/> Official Tourism Guide</span>
            <span className="hidden md:flex items-center gap-1.5"><Globe size={12} className="text-blue-500"/> Ministry of Tourism Approved</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors"><Phone size={12} /> Helpline: 1363</span>
            <span className="hover:text-white cursor-pointer transition-colors">Hindi | English</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      {/* Added dynamic padding transition for efficiency */}
      <nav className={`backdrop-blur-md border-b border-slate-200/50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white/80 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`bg-orange-600 rounded-lg shadow-md group-hover:bg-orange-700 transition-all duration-300 ${scrolled ? 'p-1.5' : 'p-2'}`}>
              <MapPin className={`text-white transition-all ${scrolled ? 'w-4 h-4' : 'w-5 h-5 md:w-6 md:h-6'}`} />
            </div>
            <div>
              <h1 className={`font-serif font-bold text-slate-900 leading-none transition-all ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
                Bhart<span className="text-orange-600">darshan</span>
              </h1>
              <p className="text-[9px] md:text-[10px] text-slate-500 tracking-widest uppercase mt-0.5 group-hover:text-orange-600 transition">Explore Incredible India</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Contact Link with Hover Effect */}
            <a href="mailto:joinbharatsdarshan@gmail.com" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
            </a>

            {/* Plan My Trip - Outlined Button for secondary CTA */}
            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 text-orange-700 text-sm font-bold hover:bg-orange-50 hover:border-orange-300 transition-all">
               <Map size={16} />
               Plan My Trip
            </a>
            
            {/* Login - Solid Button for primary CTA */}
            <Link to="/login" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <UserCircle size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl md:hidden flex flex-col p-4 gap-2 animate-in slide-in-from-top-2 z-40">
            <a href="#" className="p-3 rounded-lg hover:bg-orange-50 text-slate-700 font-medium flex items-center gap-3">
              <Map size={18} className="text-orange-500"/> Plan My Trip
            </a>
            <a href="mailto:joinbharatsdarshan@gmail.com" className="p-3 rounded-lg hover:bg-blue-50 text-slate-700 font-medium flex items-center gap-3">
              <Phone size={18} className="text-blue-500"/> Contact Us
            </a>
            <div className="h-px bg-slate-100 my-2"></div>
            <Link to="/login" onClick={() => setIsOpen(false)} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2">
              <UserCircle size={20} /> Login / Signup
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}