import React from 'react';
import { Mail, Phone, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & Quote */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <MapPin className="text-white w-5 h-5" />
            </div>
            <h2 className="text-xl font-serif font-bold">
              Bhart<span className="text-orange-500">darshan</span>
            </h2>
          </div>
          <p className="text-slate-400 italic leading-relaxed">
            "Connecting the diverse threads of India into one beautiful journey. Explore the soul of our heritage."
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-orange-500 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Home</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Top Destinations</Link></li>
            <li><Link to="/login" className="hover:text-white transition hover:translate-x-1 inline-block">Login / Sign Up</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Us (Requested Details) */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-orange-500 uppercase tracking-wider text-sm">Contact Us</h3>
          <div className="flex flex-col gap-4 text-slate-300 text-sm">
            <a href="mailto:joinbharatdarshan@gmail.com" className="flex items-center gap-3 hover:text-white transition group">
              <div className="bg-slate-800 p-2 rounded-full group-hover:bg-orange-600 transition">
                <Mail size={16} />
              </div>
              joinbharatdarshan@gmail.com
            </a>
            <a href="tel:+919725885179" className="flex items-center gap-3 hover:text-white transition group">
              <div className="bg-slate-800 p-2 rounded-full group-hover:bg-orange-600 transition">
                <Phone size={16} />
              </div>
              +91 9725885179
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart size={12} className="text-red-500 fill-red-500" /> for Incredible India
        </p>
        <p className="mt-2">© 2025 Bhartdarshan. All rights reserved.</p>
      </div>
    </footer>
  );
}