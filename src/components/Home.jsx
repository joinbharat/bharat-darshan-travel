import React, { useState, useEffect, useRef } from 'react';
import { PLACES, TOP_DESTINATIONS, ALL_PLACES } from '../data/places/index';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mountain, Palmtree, Castle, Sparkles, MapPin, ChevronRight, X, Map } from 'lucide-react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import localHeroBg from '../assets/bharatdarshannimage.jpeg'; 

// --- ROBUST LEVENSHTEIN DISTANCE ALGORITHM ---
const levenshtein = (a, b) => {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
  for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

// --- HELPER: STRICT Token-Based Fuzzy Match ---
const isFuzzyMatch = (text, query) => {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  // 1. Direct Match (Fastest & Most Accurate)
  if (lowerText.includes(lowerQuery)) return true;

  // 2. Fuzzy Match (Only if query is long enough)
  if (lowerQuery.length > 2) {
    // STRICTER THRESHOLD: 
    // For length <= 6 (e.g. "Jaipur"), max typos = 1. This blocks "Manipur" (dist 2).
    // For length > 6, max typos = 2.
    const maxDist = lowerQuery.length <= 6 ? 1 : 2;

    const words = lowerText.split(/[\s,.-]+/); 
    return words.some(word => {
       // Optimization: specific length check
       if (Math.abs(word.length - lowerQuery.length) > maxDist) return false;
       return levenshtein(word, lowerQuery) <= maxDist;
    });
  }
  return false;
};

export default function Home() {
  const [destinationInput, setDestinationInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(TOP_DESTINATIONS);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, setUser);
      return () => unsubscribe();
    } catch (error) { console.error(error); }
  }, []);

  // Click Outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- AUTOCOMPLETE LOGIC ---
  useEffect(() => {
    if (destinationInput.trim().length > 1) {
      const dataset = ALL_PLACES || PLACES; 
      
      const allStates = [...new Set(dataset.map(p => p.state))];
      const matchingStates = allStates.filter(s => isFuzzyMatch(s, destinationInput));

      const matchingPlaces = dataset.filter(p => {
        return isFuzzyMatch(p.name, destinationInput) || 
               isFuzzyMatch(p.state, destinationInput) ||
               isFuzzyMatch(p.description, destinationInput);
      });

      const combinedSuggestions = [
        ...matchingStates.slice(0, 2).map(s => ({ type: 'state', name: s, id: s })),
        ...matchingPlaces.slice(0, 4).map(p => ({ type: 'place', name: p.name, id: p.id, sub: p.state }))
      ];

      setSuggestions(combinedSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [destinationInput]);

  const allCategories = [...new Set(PLACES.map(p => p.category))];
  const categoriesList = [
    { id: 'Hill Stations', icon: Mountain, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'Heritage', icon: Castle, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'Spiritual', icon: Sparkles, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { id: 'Beaches', icon: Palmtree, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];

  const handleSearch = () => {
    setShowSuggestions(false);
    let results = ALL_PLACES || PLACES;

    if (destinationInput.trim()) {
      results = results.filter(place => {
        return isFuzzyMatch(place.name, destinationInput) ||
               isFuzzyMatch(place.state, destinationInput) ||
               isFuzzyMatch(place.description, destinationInput);
      });
    }

    if (selectedCategory) {
      results = results.filter(place => place.category === selectedCategory);
    }

    setFilteredPlaces(results);
    setTimeout(() => {
        const el = document.getElementById('results-section');
        if(el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSuggestionClick = (item) => {
    if (item.type === 'state') {
        setDestinationInput(item.name);
        setFilteredPlaces((ALL_PLACES || PLACES).filter(p => p.state === item.name));
        setShowSuggestions(false);
    } else {
        navigate(`/place/${item.id}`);
        window.scrollTo(0,0);
        setShowSuggestions(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const results = (ALL_PLACES || PLACES).filter(place => {
      const matchText = destinationInput ? 
          (isFuzzyMatch(place.name, destinationInput) || 
           isFuzzyMatch(place.state, destinationInput) || 
           isFuzzyMatch(place.description, destinationInput))
          : true;
      return matchText && place.category === category;
    });
    setFilteredPlaces(results);
    const el = document.getElementById('results-section');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20 md:pb-0">
      
      {/* --- HERO SECTION --- */}
      <div className="relative flex flex-col md:block">
        
        {/* 1. Background Image */}
        <div className="relative h-[65vh] md:h-[700px] w-full overflow-hidden bg-slate-900">
          <img 
            src={localHeroBg}
            alt="Bharat Darshan Hero" 
            className="w-full h-full object-cover animate-fade-in opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </div>

        {/* 2. Content Overlay (LAYOUT FIXED: justify-between to clear center logo) */}
        <div className="relative z-30 -mt-[60vh] md:mt-0 md:absolute md:inset-0 md:px-4 flex flex-col justify-between items-center h-[60vh] md:h-full pt-20 pb-16 pointer-events-none">
          
            {/* TOP: Title Section */}
            <div className="text-center px-4 animate-in slide-in-from-top-4 duration-700 pointer-events-auto">
              <span className="text-orange-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block">Incredible India</span>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight mb-4 drop-shadow-2xl">
                 Discover the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Soul of India</span>
              </h1>
            </div>

            {/* BOTTOM: Search Widget (Pushed down to frame the logo) */}
            <div className="w-full max-w-[95%] md:max-w-4xl bg-white p-2 md:p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 backdrop-blur-sm flex flex-col md:flex-row gap-2 relative pointer-events-auto" ref={searchRef}>
              
              {/* Destination Input */}
              <div className="flex-[1.5] bg-slate-50 md:bg-white rounded-2xl md:rounded-full px-6 py-4 flex items-center relative group transition-colors hover:bg-slate-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-100">
                <MapPin className="text-orange-500 mr-4 w-6 h-6 shrink-0" />
                <div className="flex flex-col items-start w-full relative">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Destination</span>
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-slate-900 font-bold text-base md:text-lg outline-none placeholder:text-slate-300 placeholder:font-medium"
                    placeholder="Search State, City or Place..."
                    value={destinationInput}
                    onChange={(e) => setDestinationInput(e.target.value)}
                    onFocus={() => destinationInput.length > 1 && setShowSuggestions(true)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                {destinationInput && (
                  <button onClick={() => setDestinationInput("")} className="text-slate-300 hover:text-slate-500 p-1"><X size={18} /></button>
                )}

                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 z-[100] text-left py-2">
                     <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50">Suggestions</div>
                     {suggestions.map((item, idx) => (
                       <div key={idx} onClick={() => handleSuggestionClick(item)} className="px-4 py-3 hover:bg-orange-50 cursor-pointer flex items-center gap-3 border-b border-slate-50 last:border-0 group">
                          {item.type === 'state' ? <Map className="w-5 h-5 text-slate-400" /> : <MapPin className="w-5 h-5 text-orange-400" />}
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-800 group-hover:text-orange-700">{item.name}</h4>
                            {item.sub && <span className="text-xs text-slate-500 block">{item.sub}</span>}
                          </div>
                          {item.type === 'place' && <ChevronRight size={16} className="text-slate-300 group-hover:text-orange-500" />}
                       </div>
                     ))}
                  </div>
                )}
              </div>

              <div className="hidden md:flex w-px bg-slate-200 my-4"></div>

              {/* Vibe Selector */}
              <div className="flex-1 bg-slate-50 md:bg-white rounded-2xl md:rounded-full px-6 py-4 flex items-center relative group hover:bg-slate-50 transition-colors">
                <Sparkles className="text-blue-500 mr-4 w-6 h-6 shrink-0" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Vibe</span>
                  <select 
                    className="w-full bg-transparent text-slate-900 font-bold text-base md:text-lg outline-none appearance-none cursor-pointer"
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
                className="bg-orange-600 active:scale-95 text-white p-4 md:px-12 rounded-2xl md:rounded-full font-bold text-lg shadow-lg hover:bg-orange-700 hover:shadow-orange-600/30 transition-all duration-300 flex justify-center items-center gap-2"
              >
                <Search size={22} strokeWidth={2.5} /> <span className="md:hidden">Search</span> 
              </button>
            </div>
        </div>
      </div>

      {/* --- CATEGORY PILLS --- */}
      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-20 mb-12">
        <div className="flex overflow-x-auto pb-4 md:grid md:grid-cols-4 gap-4 hide-scrollbar snap-x">
          {categoriesList.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => handleCategoryClick(cat.id)} 
              className={`min-w-[140px] md:min-w-0 snap-start bg-white p-4 md:p-6 rounded-2xl shadow-sm md:shadow-lg border border-slate-100 cursor-pointer flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 ${selectedCategory === cat.id ? 'ring-2 ring-orange-500 bg-orange-50' : ''}`}
            >
              <div className={`${cat.bg} p-3 md:p-4 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon className={`${cat.color} w-6 h-6 md:w-8 md:h-8`} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm md:text-lg">{cat.id}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- RESULTS SECTION --- */}
      <div id="results-section" className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-4">
          <div>
             <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">Explore</span>
             <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-1">
               {filteredPlaces === TOP_DESTINATIONS && !destinationInput ? "Popular Destinations" : "Search Results"}
             </h2>
          </div>
          <p className="text-slate-500 text-sm mt-2 md:mt-0 font-medium">
             Showing <span className="text-slate-900 font-bold">{filteredPlaces.length}</span> destinations
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map(place => (
              <Link to={`/place/${place.id}`} key={place.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col h-full cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                      <MapPin size={10} className="text-orange-500" /> {place.state}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-xs font-medium bg-orange-600 px-2 py-1 rounded-md">{place.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-1 group-hover:text-orange-600 transition-colors">{place.name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed font-medium">{place.description}</p>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <span>View Details</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all"><ChevronRight size={16} /></div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
               <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4"><Search className="text-slate-400" size={32} /></div>
               <h3 className="text-xl font-bold text-slate-800">No destinations found.</h3>
               <p className="text-slate-500 mt-2 max-w-md mx-auto">We couldn't find any places matching "{destinationInput}". Try checking for typos or search for a State instead.</p>
               <button onClick={() => {setDestinationInput(""); setSelectedCategory(""); setFilteredPlaces(TOP_DESTINATIONS);}} className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition">Clear Filters</button>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}