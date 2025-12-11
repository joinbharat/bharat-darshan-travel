import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PLACES } from '../data/places/index'; // Ensure this path is correct
import { 
  MapPin, Utensils, ArrowLeft, Navigation, Calendar, Info, 
  ShieldAlert, BadgeCheck, Train, Plane, Bus, ExternalLink, Accessibility 
} from 'lucide-react';

export default function PlaceDetails() {
  const { id } = useParams();
  const place = PLACES.find(p => p.id === parseInt(id));

  if (!place) return <div className="p-10 text-center text-slate-500">Place not found!</div>;

  const handleOpenMaps = () => {
    // Use coordinates if available, fallback to name query
    if (place.coordinates) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`, '_blank');
    } else {
        const query = encodeURIComponent(`${place.name}, ${place.state}`);
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* 1. PROFESSIONAL HEADER */}
      <div className="bg-slate-900 text-white py-4 px-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center">
           <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
            <ArrowLeft size={16} /> Return to Directory
           </Link>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <div className="relative h-[60vh] lg:h-[500px]">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
        {/* FIX MAINTAINED: pb-24 to prevent overlapping */}
        <div className="absolute bottom-0 left-0 px-6 pt-12 pb-24 md:pb-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-3">
             <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{place.category}</span>
             {place.badge && (
               <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                 <BadgeCheck size={14} /> {place.badge}
               </span>
             )}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{place.name}</h1>
          <p className="text-slate-300 text-lg flex items-center gap-2"><MapPin size={18} /> {place.state}, India</p>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Historical Overview */}
          <div className="bg-white p-8 rounded shadow-sm border-t-4 border-orange-600">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4 border-b pb-2">Overview & Significance</h2>
            <p className="text-slate-700 leading-relaxed text-lg text-justify">{place.description}</p>
            
            {/* Accessibility Note */}
            {place.accessibility && (
              <div className="mt-6 flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <Accessibility className="text-blue-600 min-w-[20px] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-blue-900 text-sm uppercase mb-1">Accessibility Note</h4>
                  <p className="text-blue-800 text-sm">{place.accessibility.notes}</p>
                </div>
              </div>
            )}
          </div>

          {/* Transport / How to Reach */}
          {place.transport && (
             <div className="bg-white p-8 rounded shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <MapPin className="text-green-600" /> How to Reach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                      <Plane className="text-slate-400 mb-2" size={24} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Nearest Airport</span>
                      <p className="text-slate-800 font-medium mt-1">{place.transport.nearestAirport}</p>
                   </div>
                   <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                      <Train className="text-slate-400 mb-2" size={24} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Nearest Railway</span>
                      <p className="text-slate-800 font-medium mt-1">{place.transport.nearestRailway}</p>
                   </div>
                   <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg">
                      <Bus className="text-slate-400 mb-2" size={24} />
                      <span className="text-xs font-bold text-slate-500 uppercase">Connectivity</span>
                      <p className="text-slate-800 font-medium mt-1 text-xs">{place.transport.busConnectivity}</p>
                   </div>
                </div>
             </div>
          )}

          {/* Official Route Timeline */}
          {place.routePlan && place.routePlan.length > 0 && (
          <div className="bg-white p-8 rounded shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Navigation className="text-blue-600" /> Recommended Itinerary
            </h2>
            <div className="space-y-0">
              {place.routePlan.map((step, index) => (
                <div key={index} className="flex gap-4 pb-8 border-l-2 border-slate-200 last:border-0 last:pb-0 relative ml-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-600 rounded-full border-2 border-white"></div>
                  <div className="mt-[-5px]">
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{step.time}</span>
                    <h4 className="text-lg font-bold text-slate-800">{step.activity}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t flex flex-col md:flex-row gap-4">
              <button onClick={handleOpenMaps} className="flex-1 bg-slate-900 text-white py-4 rounded font-bold hover:bg-slate-800 transition flex justify-center items-center gap-2">
                 <Navigation size={18} /> Navigate to Location
              </button>
              {place.externalLinks?.officialBooking && (
                <a href={place.externalLinks.officialBooking} target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-600 text-white py-4 rounded font-bold hover:bg-orange-700 transition flex justify-center items-center gap-2">
                  <ExternalLink size={18} /> Official Booking
                </a>
              )}
            </div>
          </div>
          )}
        </div>

        {/* RIGHT COLUMN: Essentials Sidebar */}
        <div className="space-y-6">
          
          {/* Visitor Essentials Card */}
          {place.essentials && (
          <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2">Visitor Essentials</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-2"><Calendar size={16} /> Best Time</span>
                <span className="font-bold text-slate-800 text-right">{place.essentials.bestTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 flex items-center gap-2"><Info size={16} /> Weather</span>
                <span className="font-bold text-slate-800 text-right">{place.essentials.weather}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-slate-500 flex items-center gap-2 mt-0.5">Timings</span>
                <span className="font-bold text-slate-800 text-right w-1/2">{place.essentials.timings}</span>
              </div>
            </div>

            {/* Dynamic Entry Fees */}
            <div className="mt-6 bg-slate-50 p-4 rounded border border-slate-100">
              <h4 className="font-bold text-xs uppercase text-slate-500 mb-3">Tariffs / Entry Fees</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {Object.entries(place.essentials.entryFee).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-slate-200 pb-1 last:border-0 last:pb-0">
                    <span className="text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-bold text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}

          {/* Food Guide */}
          {place.foodGuide && place.foodGuide.length > 0 && (
          <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
             <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
               <Utensils size={16} /> Verified Eateries
             </h3>
             <div className="space-y-4">
              {place.foodGuide.map((food, idx) => (
                <div key={idx} className="bg-orange-50 p-3 rounded border border-orange-100">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-slate-800">{food.name}</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-1 rounded font-bold">{food.rating} ★</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{food.type}</p>
                  <p className="text-xs font-medium text-orange-800 mt-1">Try: {food.specialty}</p>
                </div>
              ))}
             </div>
          </div>
          )}

          {/* Emergency Info Box */}
          {place.emergency && (
          <div className="bg-red-50 p-6 rounded border border-red-100">
            <h3 className="font-bold text-red-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldAlert size={16} /> Emergency SOS
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-red-700">
              <div>Police: <strong>{place.emergency.police}</strong></div>
              <div>Ambulance: <strong>{place.emergency.ambulance}</strong></div>
              <div className="col-span-2">Helpline: <strong>{place.emergency.touristHelpline}</strong></div>
              <div className="col-span-2 text-xs mt-1 border-t border-red-200 pt-2">
                 <span className="uppercase text-[10px] font-bold opacity-70">Nearest Hospital</span>
                 <br/>{place.emergency.nearestHospital}
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
    </div>
  );
}