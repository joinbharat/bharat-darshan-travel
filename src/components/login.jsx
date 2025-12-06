import React from 'react';
import { auth, googleProvider } from '../firebaseConfig'; // Import your keys
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      // This function opens the Google pop-up
      await signInWithPopup(auth, googleProvider);
      // If successful, go back to Home
      navigate('/');
    } catch (error) {
      console.error("Login Failed:", error);
      alert("Login failed. Please check your internet connection.");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-900 overflow-hidden">
      
      {/* 1. Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=2000" 
          alt="Temple Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      </div>

      {/* 2. Glassmorphic Login Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center mx-4">
        
        {/* Logo Icon */}
        <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
          <MapPin className="text-white w-8 h-8" />
        </div>

        <h2 className="text-3xl font-serif font-bold text-white mb-2">Welcome Yatri</h2>
        <p className="text-slate-300 mb-8">Sign in to plan your spiritual journey and access exclusive guides.</p>

        {/* Google Button */}
        <button 
          onClick={handleGoogleLogin}
          className="w-full bg-white hover:bg-slate-50 text-slate-900 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg transform hover:-translate-y-1"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google" 
            className="w-6 h-6"
          />
          Continue with Google
        </button>

        <p className="text-xs text-slate-400 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

    </div>
  );
}