import React, { useState } from 'react';
import Navbar from './Navbar';
// IMPORT BOTH LISTS:
// Ensure your src/data/places/index.js exports these correctly
import { PLACES, TOP_DESTINATIONS } from '../data/places/index';
import { Link } from 'react-router-dom';
import { Search, Mountain, Palmtree, Castle, Sparkles, MapPin } from 'lucide-react';

export default function Home() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // DEFAULT VIEW: Show only the Top Destinations initially
  const [filteredPlaces, setFilteredPlaces] = useState(TOP_DESTINATIONS);

  // Extract unique states and categories for the dropdowns
  const allStates = [...new Set(PLACES.map(p => p.state))];
  const allCategories = [...new Set(PLACES.map(p => p.category))];

  const handleSearch = () => {
    // Search the FULL database (PLACES)
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
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* --- HERO SECTION: JAIPUR / KITES THEME --- */}
      <div className="relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image: Jaipur City Palace with Kites vibe */}
        {/* Note: If using a local image from assets, import it at the top and use src={yourImageVariable} */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2000&auto=format&fit=crop" 
            alt="Jaipur Palace and Kites" 
            className="w-full h-full object-cover"
          />
          
          {/* OVERLAY CHANGED: Light/White Frosted Gradient instead of Black */}
          {/* This makes the text readable against a bright image */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-5xl mt-10">
          
          {/* TITLE CHANGED: Dark Slate color + Extrabold for visibility against bright background */}
          <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-slate-900 mb-6 drop-shadow-sm tracking-tight">
            Discover the <br className="hidden md:block" />
            <span className="text-orange-600">Soul of India</span>
          </h1>
          
          {/* SUBTITLE CHANGED: Darker grey/slate font weight increased */}
          <p className="text-lg md:text-2xl text-slate-800 mb-10 max-w-2xl mx-auto font-medium drop-shadow-sm bg-white/30 backdrop-blur-sm p-2 rounded-xl">
            From the royal palaces of Rajasthan to the ghats of Varanasi, plan your perfect heritage journey.
          </p>
          
          {/* SEARCH BAR: Added stronger shadow and border for contrast */}
          <div className="bg-white/80 backdrop-blur-md p-3 rounded-[2rem] shadow-2xl max-w-4xl mx-auto border border-white flex flex-col md:flex-row gap-2">
            
            {/* Input 1: State */}
            <div className="flex-1 bg-white rounded-full px-6 py-4 flex items-center relative group shadow-inner">
              <MapPin className="text-orange-600 mr-3 w-5 h-5" />
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Where to?</span>
                <select 
                  className="w-full bg-transparent text-slate-800 font-bold outline-none appearance-none cursor-pointer text-lg"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">All India</option>
                  {allStates.map(state => <option key={state} value={state}>{state}</option>)}
                </select>
              </div>
            </div>

            {/* Input 2: Category */}
            <div className="flex-1 bg-white rounded-full px-6 py-4 flex items-center relative border-l md:border-l-0 border-slate-100 shadow-inner">
              <Sparkles className="text-blue-600 mr-3 w-5 h-5" />
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Experience</span>
                <select 
                  className="w-full bg-transparent text-slate-800 font-bold outline-none appearance-none cursor-pointer text-lg"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Experiences</option>
                  {allCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button 
              onClick={handleSearch}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Search size={22} /> <span className="hidden md:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div onClick={() => handleCategoryClick('Hill Stations')} className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col items-center text-center group border border-white/50 backdrop-blur-sm">
            <div className="bg-blue-50 p-4 rounded-full mb-3 group-hover:bg-blue-600 transition duration-300">
              <Mountain className="text-blue-600 w-6 h-6 group-hover:text-white transition" />
            </div>
            <h3 className="font-bold text-slate-700">Hill Stations</h3>
          </div>
          <div onClick={() => handleCategoryClick('Heritage')} className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col items-center text-center group border border-white/50 backdrop-blur-sm">
            <div className="bg-orange-50 p-4 rounded-full mb-3 group-hover:bg-orange-600 transition duration-300">
              <Castle className="text-orange-600 w-6 h-6 group-hover:text-white transition" />
            </div>
            <h3 className="font-bold text-slate-700">Heritage</h3>
          </div>
          <div onClick={() => handleCategoryClick('Spiritual')} className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col items-center text-center group border border-white/50 backdrop-blur-sm">
            <div className="bg-yellow-50 p-4 rounded-full mb-3 group-hover:bg-yellow-500 transition duration-300">
              <Sparkles className="text-yellow-600 w-6 h-6 group-hover:text-white transition" />
            </div>
            <h3 className="font-bold text-slate-700">Spiritual</h3>
          </div>
          <div onClick={() => handleCategoryClick('Beaches')} className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col items-center text-center group border border-white/50 backdrop-blur-sm">
            <div className="bg-cyan-50 p-4 rounded-full mb-3 group-hover:bg-cyan-600 transition duration-300">
              <Palmtree className="text-cyan-600 w-6 h-6 group-hover:text-white transition" />
            </div>
            <h3 className="font-bold text-slate-700">Beaches</h3>
          </div>
        </div>
      </div>

      {/* RESULTS GRID */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-l-4 border-orange-600 pl-4 flex items-center">
          {filteredPlaces === TOP_DESTINATIONS ? "Curated Collections" : "Search Results"}
        </h2>
        
        {filteredPlaces.length === 0 && (
           <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
             <p className="text-slate-400 text-lg">No places found matching your filters.</p>
             <button onClick={() => setFilteredPlaces(TOP_DESTINATIONS)} className="mt-4 text-orange-600 font-bold hover:underline">Clear Search</button>
           </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map(place => (
            <div key={place.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-500 border border-slate-100 cursor-pointer group">
              <div className="h-64 overflow-hidden relative">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-orange-300 text-xs font-bold px-2 py-1 bg-black/30 backdrop-blur rounded uppercase tracking-wider mb-2 inline-block border border-orange-300/30">
                    {place.state}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 shadow-black drop-shadow-md">{place.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">{place.description}</p>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div> {place.category}
                  </span>
                  <Link to={`/place/${place.id}`} className="text-orange-600 font-bold text-sm hover:bg-orange-50 px-3 py-1 rounded-lg transition flex items-center">
                    View Plan <span className="ml-1 text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}