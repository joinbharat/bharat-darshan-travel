import React from 'react';
import { MapPin, Phone, Globe, ShieldCheck, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 font-sans">
      {/* 1. GOV STYLE TOP STRIP */}
      <div className="bg-slate-900 text-slate-300 text-[10px] md:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> Official Tourism Guide</span>
            <span className="flex items-center gap-1"><Globe size={12} /> Ministry of Tourism Approved</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Phone size={12} /> Helpline: 1363</span>
            <span className="hover:text-white cursor-pointer">Hindi | English</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-orange-600 p-2 rounded-lg shadow-md group-hover:bg-orange-700 transition">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-slate-900 leading-none">
                Bhart<span className="text-orange-600">darshan</span>
              </h1>
              <p className="text-[10px] text-slate-500 tracking-widest uppercase mt-1 group-hover:text-orange-600 transition">Explore Incredible India</p>
            </div>
          </Link>

          {/* Clean Menu */}
          <div className="flex items-center gap-6">
            {/* UPDATED CONTACT US LINK */}
            <a 
              href="mailto:joinbharatsdarshan@gmail.com"
              className="hidden md:block font-medium text-slate-600 hover:text-orange-600 transition text-sm uppercase tracking-wide"
            >
              Contact Us
            </a>
            
            {/* Login Button */}
            <Link to="/login" className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl transition transform hover:-translate-y-0.5">
              <UserCircle size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}