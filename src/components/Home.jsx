import React, { useState } from 'react';
import { PLACES, TOP_DESTINATIONS } from '../data/places/index';
import { Link } from 'react-router-dom';
import { Search, Mountain, Palmtree, Castle, Sparkles, MapPin, Hotel } from 'lucide-react';

export default function Home() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(TOP_DESTINATIONS);

  // Extract unique lists
  const allStates = [...new Set(PLACES.map(p => p.state))];
  const allCategories = [...new Set(PLACES.map(p => p.category))];

  // Category Helper
  const categoriesList = [
    { id: 'Hill Stations', icon: Mountain, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'Heritage', icon: Castle, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'Spiritual', icon: Sparkles, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { id: 'Beaches', icon: Palmtree, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];

  const handleSearch = () => {
    const results = PLACES.filter(place => {
      const stateMatch = selectedState ? place.state === selectedState : true;
      const categoryMatch = selectedCategory ? place.category === selectedCategory : true;
      return stateMatch && categoryMatch;
    });
    setFilteredPlaces(results);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const results = PLACES.filter(place => {
      const stateMatch = selectedState ? place.state === selectedState : true;
      return (stateMatch && place.category === category);
    });
    setFilteredPlaces(results);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 md:pb-0">
      
      {/* --- HERO SECTION: SPIRITUAL THEME --- */}
      <div className="relative flex flex-col md:block">
        
        {/* 1. Background Image Area */}
        <div className="relative h-[45vh] md:h-[600px] w-full overflow-hidden">
  {/* NEW IMAGE: Majestic Kedarnath Temple (Spiritual Theme) */}
  <img 
    src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2000"
    alt="amer fort, jaipur" 
    className="w-full h-full object-cover animate-fade-in"
  />
  {/* Gradient Overlay for better text readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 md:bg-gradient-to-t md:from-white/90 md:via-white/40 md:to-transparent"></div>
</div>

        {/* 2. Content Card Area */}
        <div className="relative z-10 -mt-12 md:mt-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center px-0 md:px-4">
          
          <div className="bg-slate-50 rounded-t-[2.5rem] md:rounded-none md:bg-transparent min-h-[50vh] px-6 pt-8 pb-10 md:p-0 w-full md:max-w-5xl md:mx-auto md:text-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-none">
            
            {/* Title Section */}
            <div className="mb-8 text-left md:text-center">
              <span className="text-orange-600 font-bold tracking-wider text-xs uppercase mb-2 block md:hidden">Incredible India</span>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 leading-tight md:mb-6 md:drop-shadow-lg md:text-white md:shadow-black">
                <span className="md:hidden">Spiritual <br/> Journey</span>
                <span className="hidden md:block text-shadow">Discover the <br/><span className="text-orange-500 md:text-orange-400">Soul of India</span></span>
              </h1>
              <p className="hidden md:block text-xl text-slate-800 max-w-2xl mx-auto font-medium bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                Embark on a spiritual journey through ancient temples, sacred rivers, and timeless traditions.
              </p>
            </div>

            {/* SEARCH WIDGET */}
            <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-xl border border-slate-100 flex flex-col md:flex-row gap-2">
              
              {/* State Select */}
              <div className="flex-1 bg-slate-50 md:bg-white md:shadow-inner rounded-xl md:rounded-full px-4 py-3 flex items-center relative">
                <MapPin className="text-orange-600 mr-3 w-5 h-5" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination</span>
                  <select 
                    className="w-full bg-transparent text-slate-800 font-bold outline-none appearance-none text-sm md:text-base cursor-pointer"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">All States</option>
                    {allStates.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
              </div>

              <div className="hidden md:flex w-px bg-slate-200 my-2"></div>

              {/* Category Select */}
              <div className="flex-1 bg-slate-50 md:bg-white md:shadow-inner rounded-xl md:rounded-full px-4 py-3 flex items-center relative">
                <Sparkles className="text-blue-600 mr-3 w-5 h-5" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Vibe</span>
                  <select 
                    className="w-full bg-transparent text-slate-800 font-bold outline-none appearance-none text-sm md:text-base cursor-pointer"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Any Experience</option>
                    {allCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="bg-orange-600 active:scale-95 text-white p-4 md:px-10 md:py-4 rounded-xl md:rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition flex justify-center items-center gap-2"
              >
                <Search size={20} /> <span className="md:hidden">Find Places</span> <span className="hidden md:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CATEGORY PILLS --- */}
      <div className="max-w-7xl mx-auto px-4 md:-mt-16 relative z-20 mb-12">
        <h3 className="md:hidden text-lg font-bold text-slate-800 mb-4 px-2">Browse by Vibe</h3>
        <div className="flex overflow-x-auto pb-4 md:grid md:grid-cols-4 gap-4 hide-scrollbar snap-x">
          {categoriesList.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => handleCategoryClick(cat.id)}
              className={`min-w-[140px] md:min-w-0 snap-start bg-white p-4 md:p-6 rounded-2xl shadow-sm md:shadow-xl border border-slate-100 cursor-pointer flex flex-col items-center text-center group transition-all hover:-translate-y-1 ${selectedCategory === cat.id ? 'ring-2 ring-orange-500 bg-orange-50' : ''}`}
            >
              <div className={`${cat.bg} p-3 md:p-4 rounded-full mb-3`}>
                <cat.icon className={`${cat.color} w-5 h-5 md:w-6 md:h-6`} />
              </div>
              <h3 className="font-bold text-slate-700 text-sm md:text-base">{cat.id}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- RESULTS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex justify-between items-end mb-6 border-l-4 border-orange-600 pl-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              {filteredPlaces === TOP_DESTINATIONS ? "Sacred & Popular Journeys" : "Search Results"}
            </h2>
            <p className="text-slate-500 text-sm mt-1">Found {filteredPlaces.length} destinations</p>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPlaces.map(place => (
            <div key={place.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-500 border border-slate-100 group flex flex-col h-full">
              
              {/* Image Section */}
              <div className="h-56 overflow-hidden relative">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-slate-800 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-white/50 shadow-sm">
                    {place.state}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{place.name}</h3>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>)}
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed flex-grow">{place.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100">
                  <Link to={`/place/${place.id}`} className="flex items-center justify-center gap-1 text-slate-700 bg-slate-50 hover:bg-slate-100 py-2 rounded-lg text-xs font-bold transition">
                    View Details
                  </Link>
                  <a href="#" className="flex items-center justify-center gap-1 text-white bg-orange-600 hover:bg-orange-700 py-2 rounded-lg text-xs font-bold transition shadow-md shadow-orange-200">
                    <Hotel size={14} /> Book Stay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}