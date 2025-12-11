/**
 * MADHYA_PRADESH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: MP Tourism (MPT) & Archaeological Survey of India (ASI)
 * - Wildlife: Official Tiger Reserve Booking (mponline.gov.in)
 * - Spiritual: Mahakaleshwar Temple Management Committee
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const MADHYA_PRADESH_PLACES = [
  // --- WILDLIFE ---
  {
    id: 1401,
    name: "Kanha National Park",
    slug: "kanha-national-park",
    state: "Madhya Pradesh",
    category: "Wildlife",
    badge: "Inspiration for Jungle Book",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Barasingha_Kanha_National_Park.jpg/800px-Barasingha_Kanha_National_Park.jpg",
    description: "The largest national park in MP, famous for its significant population of Royal Bengal Tigers, Indian Leopards, and the hardground Barasingha (Swamp Deer), which was saved from extinction here.",
    coordinates: { lat: 22.3345, lng: 80.6115 },

    essentials: {
      bestTime: "October to June (Closed during Monsoon)",
      weather: "Forest/Cool",
      timings: "06:00 AM - 11:00 AM, 03:00 PM - 06:00 PM (Safari)",
      entryFee: {
        Permit: "₹2400 (Full Gypsy approx)",
        PerPerson: "₹600-800",
        Guide: "₹500 (Mandatory)"
      }
    },

    transport: {
      nearestAirport: "Jabalpur (160 km) or Raipur (250 km)",
      nearestRailway: "Gondia (145 km) or Jabalpur (160 km)",
      busConnectivity: "Direct buses from Mandla or Jabalpur to Kisli Gate"
    },

    externalLinks: {
      officialBooking: "https://forest.mponline.gov.in/",
      googleMaps: "https://goo.gl/maps/kanha"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Safari gypsies are high-clearance vehicles requiring climbing. Interpretation centers are accessible."
    },

    routePlan: [
      { time: "05:30 AM", activity: "Morning Safari (Kanha/Kisli Zone)" },
      { time: "11:30 AM", activity: "Visit Kanha Museum" },
      { time: "03:30 PM", activity: "Evening Safari (Mukki Zone)" }
    ],

    foodGuide: [
      { name: "MPT Baghira Jungle Resort", type: "MPT", specialty: "Indian Buffet", rating: 4.2 },
      { name: "Kanha Jungle Lodge", type: "Luxury", specialty: "Organic Farm Food", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Civil Hospital Mandla"
    }
  },
  {
    id: 1402,
    name: "Bandhavgarh National Park",
    slug: "bandhavgarh-national-park",
    state: "Madhya Pradesh",
    category: "Wildlife",
    badge: "Highest Tiger Density",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tiger_in_Bandhavgarh_National_Park.jpg/800px-Tiger_in_Bandhavgarh_National_Park.jpg",
    description: "Known for the highest density of Royal Bengal Tigers in the world. The park also features the ancient Bandhavgarh Fort (legend says Lord Rama gave it to his brother Lakshmana).",
    coordinates: { lat: 23.7225, lng: 81.0249 },

    essentials: {
      bestTime: "October to June",
      weather: "Dry/Hot",
      timings: "06:00 AM - 11:00 AM, 03:00 PM - 06:00 PM (Safari)",
      entryFee: {
        Permit: "₹2400 (Gypsy)",
        Guide: "₹500",
        FortVisit: "Permission Required"
      }
    },

    transport: {
      nearestAirport: "Jabalpur (190 km)",
      nearestRailway: "Umaria (35 km) or Katni (100 km)",
      busConnectivity: "Taxis available from Umaria station"
    },

    externalLinks: {
      officialBooking: "https://forest.mponline.gov.in/",
      googleMaps: "https://goo.gl/maps/bandhavgarh"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Rugged terrain. Safaris are not wheelchair friendly."
    },

    routePlan: [
      { time: "05:45 AM", activity: "Tala Zone Safari (Best for Tigers)" },
      { time: "11:00 AM", activity: "Shesh Shaiya (Reclining Vishnu)" },
      { time: "03:30 PM", activity: "Magadhi Zone Safari" }
    ],

    foodGuide: [
      { name: "MPT White Tiger Forest Lodge", type: "MPT", specialty: "North Indian", rating: 4.1 },
      { name: "Nature Heritage Resort", type: "Resort", specialty: "Continental", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "District Hospital Umaria"
    }
  },

  // --- HERITAGE ---
  {
    id: 1403,
    name: "Khajuraho Group of Monuments",
    slug: "khajuraho-temples",
    state: "Madhya Pradesh",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kandariya_Mahadeva_Temple_Khajuraho.jpg/800px-Kandariya_Mahadeva_Temple_Khajuraho.jpg",
    description: "Famous for their Nagara-style architecture and erotic sculptures, these temples were built by the Chandela dynasty between 950 and 1050 AD. The Kandariya Mahadeva Temple is the most spectacular.",
    coordinates: { lat: 24.8515, lng: 79.9215 },

    essentials: {
      bestTime: "October to March (Dance Festival in Feb)",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM (Light Show: 7 PM)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        LightShow: "₹250"
      }
    },

    transport: {
      nearestAirport: "Khajuraho Airport (HJR) - 5 km",
      nearestRailway: "Khajuraho Station (8 km)",
      busConnectivity: "Direct buses from Chhatarpur and Jhansi"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/khajuraho"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Western Group of Temples has paved pathways and ramps. Golf carts are available for rent."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Western Group of Temples (Main)" },
      { time: "12:00 PM", activity: "Eastern Group (Jain Temples)" },
      { time: "07:00 PM", activity: "Sound & Light Show" }
    ],

    foodGuide: [
      { name: "Raja Cafe", type: "Heritage View", specialty: "Wood Fired Pizza", rating: 4.5 },
      { name: "Badri Seth", type: "Local", specialty: "Bundelkhandi Thali", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Civil Hospital Khajuraho"
    }
  },
  {
    id: 1404,
    name: "Sanchi Stupa",
    slug: "sanchi-stupa",
    state: "Madhya Pradesh",
    category: "Heritage",
    badge: "Oldest Stone Structure in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sanchi_Stupa_from_Eastern_gate.jpg/800px-Sanchi_Stupa_from_Eastern_gate.jpg",
    description: "A UNESCO World Heritage site, the Great Stupa was commissioned by Emperor Ashoka in the 3rd century BCE. It is a pivotal monument in Buddhist history and architecture.",
    coordinates: { lat: 23.4873, lng: 77.7418 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:30 AM - 06:00 PM",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        AudioGuide: "Available"
      }
    },

    transport: {
      nearestAirport: "Bhopal (55 km)",
      nearestRailway: "Sanchi (1 km) or Vidisha (10 km)",
      busConnectivity: "Regular buses from Bhopal ISBT"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/sanchi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main stupa complex has a paved ramp leading to the upper circumambulation path (pradakshina patha)."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Great Stupa & Ashoka Pillar" },
      { time: "11:00 AM", activity: "Sanchi Archaeological Museum" },
      { time: "01:00 PM", activity: "Udayagiri Caves (Nearby)" }
    ],

    foodGuide: [
      { name: "MPT Gateway Retreat", type: "MPT", specialty: "Lunch Buffet", rating: 4.0 },
      { name: "Jaiswal Dhaba", type: "Highway", specialty: "Dal Bafla", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "District Hospital Vidisha"
    }
  },
  {
    id: 1405,
    name: "Gwalior Fort",
    slug: "gwalior-fort",
    state: "Madhya Pradesh",
    category: "Heritage",
    badge: "Gibraltar of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gwalior_Fort_Man_Singh_Palace.jpg/800px-Gwalior_Fort_Man_Singh_Palace.jpg",
    description: "A hill fort described by Mughal Emperor Babur as 'the pearl amongst fortresses in India'. It houses the stunning Man Singh Palace with its turquoise blue tiles.",
    coordinates: { lat: 26.2313, lng: 78.1695 },

    essentials: {
      bestTime: "October to March",
      weather: "Hot Summers",
      timings: "06:00 AM - 05:30 PM",
      entryFee: {
        Indian: "₹75 (Fort + Museum)",
        Foreigner: "₹250",
        LightShow: "₹100"
      }
    },

    transport: {
      nearestAirport: "Gwalior (10 km)",
      nearestRailway: "Gwalior Junction (4 km)",
      busConnectivity: "Auto/Cab accessible to the Urvai Gate"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/gwaliorfort"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Car access allowed up to the fort top via Urvai Gate. Palace interiors have steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Man Singh Palace" },
      { time: "10:30 AM", activity: "Saas Bahu Temple" },
      { time: "11:30 AM", activity: "Teli Ka Mandir" }
    ],

    foodGuide: [
      { name: "Indian Coffee House", type: "Near Fort", specialty: "Coffee & Dosa", rating: 4.2 },
      { name: "Kwality Restaurant", type: "City", specialty: "Mughlai", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "J A Hospital Gwalior"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 1406,
    name: "Mahakaleshwar Temple (Ujjain)",
    slug: "mahakaleshwar-ujjain",
    state: "Madhya Pradesh",
    category: "Spiritual",
    badge: "Jyotirlinga & Mahakal Corridor",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mahakaleshwar_Jyotirlinga_Temple.jpg/800px-Mahakaleshwar_Jyotirlinga_Temple.jpg",
    description: "One of the twelve Jyotirlingas, where the idol faces south (Dakshinamurti). The temple is famous for the Bhasma Aarti (ash ritual) and the newly developed Mahakal Lok corridor.",
    coordinates: { lat: 23.1827, lng: 75.7682 },

    essentials: {
      bestTime: "All Year (Mahashivratri is crowded)",
      weather: "Warm",
      timings: "04:00 AM - 11:00 PM (Bhasma Aarti: 4-6 AM)",
      entryFee: {
        General: "Free",
        SheeghraDarshan: "₹250",
        BhasmaAarti: "Online Booking Mandatory"
      }
    },

    transport: {
      nearestAirport: "Indore (55 km)",
      nearestRailway: "Ujjain Junction (2 km)",
      busConnectivity: "Frequent buses from Indore (1 hour)"
    },

    externalLinks: {
      officialBooking: "https://shrimahakaleshwar.com/",
      googleMaps: "https://goo.gl/maps/mahakal"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "E-carts available in Mahakal Lok. Wheelchair access to temple premises (Nandi Hall)."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Mahakal Lok Corridor Walk" },
      { time: "10:00 AM", activity: "Jyotirlinga Darshan" },
      { time: "12:00 PM", activity: "Kal Bhairav Temple (Alcohol Offering)" }
    ],

    foodGuide: [
      { name: "Shree Ganga", type: "Pure Veg", specialty: "Thali", rating: 4.1 },
      { name: "Tower Chowk Street Food", type: "Street", specialty: "Poha Jalebi", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Civil Hospital Ujjain"
    }
  },
  {
    id: 1407,
    name: "Omkareshwar",
    slug: "omkareshwar",
    state: "Madhya Pradesh",
    category: "Spiritual",
    badge: "Jyotirlinga on Om Island",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Omkareshwar_Temple_View.jpg/800px-Omkareshwar_Temple_View.jpg",
    description: "Located on an island (Mandhata) in the Narmada River shaped like the symbol 'Om'. It houses one of the 12 Jyotirlingas and is connected by two bridges.",
    coordinates: { lat: 22.2462, lng: 76.1488 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "05:00 AM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Indore (80 km)",
      nearestRailway: "Omkareshwar Road (12 km)",
      busConnectivity: "Buses available from Indore and Ujjain"
    },

    externalLinks: {
      officialBooking: "https://shriomkareshwar.org/",
      googleMaps: "https://goo.gl/maps/omkareshwar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires crossing a hanging bridge and climbing several steps. Crowded narrow lanes."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Darshan at Omkareshwar Temple" },
      { time: "10:00 AM", activity: "Parikrama around Island (Boat/Walk)" },
      { time: "12:00 PM", activity: "Mamleshwar Temple Visit" }
    ],

    foodGuide: [
      { name: "Narmada Resort", type: "MPT", specialty: "Veg Lunch", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Govt Hospital Omkareshwar"
    }
  },

  // --- NATURE & SCENIC ---
  {
    id: 1408,
    name: "Bhedaghat (Marble Rocks)",
    slug: "bhedaghat-marble-rocks",
    state: "Madhya Pradesh",
    category: "Nature",
    badge: "Grand Canyon of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Marble_Rocks_Bhedaghat.jpg/800px-Marble_Rocks_Bhedaghat.jpg",
    description: "A stunning gorge on the Narmada River where 100-foot high marble rocks change color in the sunlight. Features the Dhuandhar Falls (Smoke Cascade).",
    coordinates: { lat: 23.1312, lng: 79.8005 },

    essentials: {
      bestTime: "November to May (Boating closed in Monsoon)",
      weather: "Pleasant",
      timings: "07:00 AM - 08:00 PM (Night Boating on Full Moon)",
      entryFee: {
        Entry: "Free",
        Boating: "₹800 (Full Boat), ₹50 (Shared)",
        Ropeway: "₹100"
      }
    },

    transport: {
      nearestAirport: "Jabalpur (30 km)",
      nearestRailway: "Jabalpur (20 km)",
      busConnectivity: "City buses/Autos/Cabs from Jabalpur city"
    },

    externalLinks: {
      officialBooking: "https://www.mptourism.com/",
      googleMaps: "https://goo.gl/maps/bhedaghat"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Dhuandhar Falls viewpoint has a ropeway (partially accessible) and paved paths. Boat ghat has steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ropeway to Dhuandhar Falls View" },
      { time: "11:00 AM", activity: "Boat Ride in Marble Rocks" },
      { time: "01:00 PM", activity: "Chausath Yogini Temple" }
    ],

    foodGuide: [
      { name: "MPT Motel Marble Rocks", type: "View", specialty: "Lunch with View", rating: 4.1 },
      { name: "Indian Coffee House", type: "City", specialty: "South Indian", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Medical College Jabalpur"
    }
  },
  {
    id: 1409,
    name: "Pachmarhi",
    slug: "pachmarhi",
    state: "Madhya Pradesh",
    category: "Hill Stations",
    badge: "Queen of Satpura",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bee_Falls_Pachmarhi.jpg/800px-Bee_Falls_Pachmarhi.jpg",
    description: "The only hill station in MP, Pachmarhi is a biosphere reserve famous for its waterfalls (Bee Falls), caves (Pandav Caves), and sunset points like Dhoopgarh.",
    coordinates: { lat: 22.4674, lng: 78.4346 },

    essentials: {
      bestTime: "All Year",
      weather: "Cool/Misty",
      timings: "09:00 AM - 05:00 PM (Forest Entry)",
      entryFee: {
        Gypsy: "₹1500-2000 (Mandatory for sightseeing)",
        Museum: "₹50"
      }
    },

    transport: {
      nearestAirport: "Bhopal (200 km)",
      nearestRailway: "Pipariya (50 km)",
      busConnectivity: "Buses/Taxis from Pipariya to Pachmarhi"
    },

    externalLinks: {
      officialBooking: "https://www.mptourism.com/",
      googleMaps: "https://goo.gl/maps/pachmarhi"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Most points require walking on forest trails. Dhoopgarh is accessible by vehicle up to the top."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Pandav Caves & Bee Falls" },
      { time: "02:00 PM", activity: "Jata Shankar Cave" },
      { time: "05:30 PM", activity: "Sunset at Dhoopgarh (Highest Point)" }
    ],

    foodGuide: [
      { name: "Nandavan Restaurant", type: "Family", specialty: "Gujarati Thali", rating: 4.0 },
      { name: "MPT Satpura", type: "Heritage", specialty: "Dinner", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Civil Hospital Pachmarhi"
    }
  },

  // --- HERITAGE ---
  {
    id: 1410,
    name: "Orchha",
    slug: "orchha",
    state: "Madhya Pradesh",
    category: "Heritage",
    badge: "City of Palaces and Temples",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orchha_Chattris_Cenotaphs.jpg/800px-Orchha_Chattris_Cenotaphs.jpg",
    description: "A medieval town on the Betwa River frozen in time. Famous for the Jahangir Mahal, Ram Raja Temple (where Rama is worshipped as King), and the royal Chhatris (cenotaphs).",
    coordinates: { lat: 25.3503, lng: 78.6413 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM (Fort)",
      entryFee: {
        Indian: "₹10",
        Foreigner: "₹250",
        LightShow: "₹100"
      }
    },

    transport: {
      nearestAirport: "Gwalior (120 km)",
      nearestRailway: "Jhansi (15 km)",
      busConnectivity: "Auto-rickshaw or Taxi from Jhansi station"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/orchha"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Palaces have narrow stairs and multiple levels. Ram Raja Temple courtyard is accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Orchha Fort (Jahangir Mahal)" },
      { time: "12:00 PM", activity: "Ram Raja Temple Darshan" },
      { time: "05:00 PM", activity: "Sunset by the Chhatris (Betwa River)" }
    ],

    foodGuide: [
      { name: "Betwa Tarang", type: "View", specialty: "Rooftop Dinner", rating: 4.2 },
      { name: "Amar Mahal", type: "Heritage", specialty: "Royal Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7777",
      nearestHospital: "Medical College Jhansi (15 km)"
    }
  }
]; 
