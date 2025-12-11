/**
 * KARNATAKA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Karnataka Tourism, ASI & Forest Department
 * - Hampi: UNESCO World Heritage Site Data
 * - Wildlife: Jungle Lodges & Resorts (JLR) Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const KARNATAKA_PLACES = [
  // --- HERITAGE ---
  {
    id: 1201,
    name: "Hampi Group of Monuments",
    slug: "hampi-monuments",
    state: "Karnataka",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hampi_virupaksha_temple.jpg/800px-Hampi_virupaksha_temple.jpg",
    description: "The capital of the Vijayanagara Empire, Hampi is an open-air museum of ancient temples, royal pavilions, and aqueducts set amidst a surreal boulder-strewn landscape.",
    coordinates: { lat: 15.3350, lng: 76.4600 },

    essentials: {
      bestTime: "October to March (Hampi Utsav in Jan/Feb)",
      weather: "Dry/Sunny",
      timings: "06:00 AM - 06:00 PM (Vittala Temple)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        GolfCart: "₹20 (To Vittala Temple)"
      }
    },

    transport: {
      nearestAirport: "Jindal Vijaynagar Airport, Vidyanagar (40 km)",
      nearestRailway: "Hospet Junction (13 km)",
      busConnectivity: "Frequent buses from Hospet to Hampi Bazaar"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/hampi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main temple complexes like Vittala and Virupaksha have level paths, but the rocky terrain elsewhere is challenging."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise at Matanga Hill" },
      { time: "09:00 AM", activity: "Virupaksha Temple" },
      { time: "04:00 PM", activity: "Vittala Temple & Stone Chariot" }
    ],

    foodGuide: [
      { name: "Mango Tree", type: "Cafe", specialty: "Thali & Ambience", rating: 4.5 },
      { name: "Laughing Buddha", type: "River View", specialty: "Continental", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "Government Hospital, Kamalapur"
    }
  },
  {
    id: 1202,
    name: "Mysore Palace",
    slug: "mysore-palace",
    state: "Karnataka",
    category: "Heritage",
    badge: "City of Palaces",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mysore_Palace_Morning.jpg/800px-Mysore_Palace_Morning.jpg",
    description: "The official residence of the Wadiyar dynasty, this Indo-Saracenic masterpiece is one of the most visited monuments in India, famous for its Sunday night illumination.",
    coordinates: { lat: 12.3051, lng: 76.6551 },

    essentials: {
      bestTime: "All Year (Dasara in Oct is spectacular)",
      weather: "Pleasant",
      timings: "10:00 AM - 05:30 PM (Illumination Sun 7-8 PM)",
      entryFee: {
        Adult: "₹100 (Indian)",
        Foreigner: "₹500",
        Student: "₹50"
      }
    },

    transport: {
      nearestAirport: "Mysore Airport (10 km) or Bangalore (170 km)",
      nearestRailway: "Mysore Junction (2 km)",
      busConnectivity: "City buses and autos from any part of Mysore"
    },

    externalLinks: {
      officialBooking: "https://www.mysorepalace.gov.in/",
      googleMaps: "https://goo.gl/maps/mysorepalace"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs available at the entrance. Lifts and ramps provide access to museum sections."
    },

    routePlan: [
      { time: "10:30 AM", activity: "Main Palace Tour" },
      { time: "12:30 PM", activity: "Residential Museum" },
      { time: "07:00 PM", activity: "Illumination (Sundays/Public Holidays)" }
    ],

    foodGuide: [
      { name: "Mylari Hotel", type: "Heritage", specialty: "Mylari Dosa", rating: 4.7 },
      { name: "RRR", type: "Biryani", specialty: "Andhra Style Biryani", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1077",
      nearestHospital: "K.R. Hospital Mysore"
    }
  },

  // --- HILL STATIONS & NATURE ---
  {
    id: 1203,
    name: "Coorg (Madikeri)",
    slug: "coorg-madikeri",
    state: "Karnataka",
    category: "Hill Stations",
    badge: "Scotland of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Raja%27s_Seat_Madikeri.jpg/800px-Raja%27s_Seat_Madikeri.jpg",
    description: "Famous for its coffee plantations, misty hills, and Kodava culture. Key attractions include Abbey Falls, Raja's Seat, and the Dubare Elephant Camp.",
    coordinates: { lat: 12.4244, lng: 75.7382 },

    essentials: {
      bestTime: "September to March",
      weather: "Cool/Misty",
      timings: "24 Hours (Specific timings for Falls/Camp)",
      entryFee: {
        ElephantCamp: "₹100",
        Bathing: "₹200",
        RajaSeat: "₹10"
      }
    },

    transport: {
      nearestAirport: "Kannur (90 km) or Mangalore (140 km)",
      nearestRailway: "Mysore (120 km)",
      busConnectivity: "KSRTC buses from Bangalore and Mysore"
    },

    externalLinks: {
      officialBooking: "https://karnatakatourism.org/",
      googleMaps: "https://goo.gl/maps/coorg"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Raja's Seat is accessible. Abbey Falls requires walking down steep steps (not accessible)."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Dubare Elephant Camp" },
      { time: "12:00 PM", activity: "Golden Temple (Bylakuppe)" },
      { time: "05:30 PM", activity: "Sunset at Raja's Seat" }
    ],

    foodGuide: [
      { name: "Coorg Cuisine", type: "Local", specialty: "Pandhi Curry (Pork)", rating: 4.5 },
      { name: "Big Cup Cafe", type: "Cafe", specialty: "Estate Coffee", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "District Hospital Madikeri"
    }
  },
  {
    id: 1204,
    name: "Jog Falls",
    slug: "jog-falls",
    state: "Karnataka",
    category: "Nature",
    badge: "Second Highest Plunge Waterfall",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Jog_falls_mar_2015.jpg/800px-Jog_falls_mar_2015.jpg",
    description: "Created by the Sharavathi River falling from a height of 253 meters in four distinct cascades: Raja, Rani, Rocket, and Roarer. The view is spectacular during the monsoon.",
    coordinates: { lat: 14.2295, lng: 74.8118 },

    essentials: {
      bestTime: "August to December (Monsoon is best)",
      weather: "Humid/Rainy",
      timings: "07:30 AM - 09:30 PM",
      entryFee: {
        Entry: "₹10",
        Parking: "₹50"
      }
    },

    transport: {
      nearestAirport: "Shivamogga (100 km) or Hubli (160 km)",
      nearestRailway: "Talguppa (14 km)",
      busConnectivity: "Direct buses from Shimoga and Sagar"
    },

    externalLinks: {
      officialBooking: "https://karnatakatourism.org/",
      googleMaps: "https://goo.gl/maps/jogfalls"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Viewpoints near the parking area are paved and wheelchair friendly. Steps to the bottom (1400+) are not."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Main Viewpoint Photography" },
      { time: "12:00 PM", activity: "Walk to Watkins Platform" },
      { time: "07:30 PM", activity: "Musical Fountain & Laser Show" }
    ],

    foodGuide: [
      { name: "Mayura Gerusoppa", type: "Govt Hotel", specialty: "South Indian Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "Government Hospital Sagar"
    }
  },
  {
    id: 1205,
    name: "Chikmagalur (Mullayanagiri)",
    slug: "chikmagalur",
    state: "Karnataka",
    category: "Hill Stations",
    badge: "Coffee Land of Karnataka",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mullayanagiri_Peak.jpg/800px-Mullayanagiri_Peak.jpg",
    description: "Home to the highest peak in Karnataka, Mullayanagiri. It is famous for lush coffee estates, trekking trails, and the Baba Budangiri shrine.",
    coordinates: { lat: 13.3153, lng: 75.7754 },

    essentials: {
      bestTime: "September to March",
      weather: "Cool/Misty",
      timings: "24 Hours (Trekking: 6 AM - 6 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Mangalore (150 km)",
      nearestRailway: "Kadur (40 km)",
      busConnectivity: "KSRTC buses from Bangalore to Chikmagalur town"
    },

    externalLinks: {
      officialBooking: "https://karnatakatourism.org/",
      googleMaps: "https://goo.gl/maps/chikmagalur"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Mullayanagiri peak requires climbing 400+ steps. Viewpoints are accessible by car up to a point."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Trek to Mullayanagiri Peak" },
      { time: "10:00 AM", activity: "Baba Budangiri Visit" },
      { time: "02:00 PM", activity: "Jhari Waterfalls (Jeep Ride)" }
    ],

    foodGuide: [
      { name: "Town Canteen", type: "Heritage", specialty: "Benne Dosa", rating: 4.6 },
      { name: "The Estate Cafe", type: "View", specialty: "Coffee & Snacks", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "District Hospital Chikmagalur"
    }
  },

  // --- WILDLIFE ---
  {
    id: 1206,
    name: "Bandipur National Park",
    slug: "bandipur-national-park",
    state: "Karnataka",
    category: "Wildlife",
    badge: "Tiger Reserve",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bandipur_Tiger_Reserve.jpg/800px-Bandipur_Tiger_Reserve.jpg",
    description: "Part of the Nilgiri Biosphere Reserve, Bandipur is one of India's premier Tiger Reserves. It is known for its high population of tigers, elephants, and Indian gaurs.",
    coordinates: { lat: 11.6616, lng: 76.6267 },

    essentials: {
      bestTime: "October to May",
      weather: "Forest",
      timings: "Safari: 06:15 AM - 09:00 AM, 03:30 PM - 06:00 PM",
      entryFee: {
        BusSafari: "₹350 (Indian)",
        JeepSafari: "₹3500+ (Exclusive)",
        Camera: "₹200"
      }
    },

    transport: {
      nearestAirport: "Mysore (80 km)",
      nearestRailway: "Mysore (80 km)",
      busConnectivity: "On the Mysore-Ooty highway. Buses stop at the reception center."
    },

    externalLinks: {
      officialBooking: "https://www.bandipurtigerreserve.in/",
      googleMaps: "https://goo.gl/maps/bandipur"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Safari buses/jeeps require climbing steps. The reception area is accessible."
    },

    routePlan: [
      { time: "06:15 AM", activity: "Morning Jungle Safari" },
      { time: "09:00 AM", activity: "Breakfast at Pugmarks" },
      { time: "11:00 AM", activity: "Himavad Gopalaswamy Betta (Nearby)" }
    ],

    foodGuide: [
      { name: "Pugmarks Restaurant", type: "Govt", specialty: "Buffet", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "Gundlupet Govt Hospital"
    }
  },
  {
    id: 1207,
    name: "Nagarhole National Park (Kabini)",
    slug: "nagarhole-national-park",
    state: "Karnataka",
    category: "Wildlife",
    badge: "Leopard & Black Panther",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nagarhole_Kabini_River.jpg/800px-Nagarhole_Kabini_River.jpg",
    description: "Famous for the Kabini river backwaters and high density of herbivores and carnivores. It is one of the best places in the world to spot the elusive Black Panther (Saya).",
    coordinates: { lat: 12.0315, lng: 76.1217 },

    essentials: {
      bestTime: "October to May",
      weather: "Forest/Humid",
      timings: "Safari: 06:00 AM - 09:00 AM, 03:00 PM - 06:00 PM",
      entryFee: {
        BusSafari: "₹350",
        BoatSafari: "₹2000+ (JLR Guests)",
        Entry: "₹250"
      }
    },

    transport: {
      nearestAirport: "Mysore (80 km)",
      nearestRailway: "Mysore (80 km)",
      busConnectivity: "Best accessed by taxi from Mysore or Coorg"
    },

    externalLinks: {
      officialBooking: "https://www.junglelodges.com/",
      googleMaps: "https://goo.gl/maps/nagarhole"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boat safaris can accommodate wheelchairs with assistance. Jeep safaris are difficult."
    },

    routePlan: [
      { time: "03:30 PM", activity: "Boat Safari on Kabini" },
      { time: "06:30 PM", activity: "Wildlife Documentary at Resort" },
      { time: "06:00 AM", activity: "Morning Jeep Safari" }
    ],

    foodGuide: [
      { name: "Kabini River Lodge", type: "JLR", specialty: "Buffet", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "HD Kote Hospital"
    }
  },

  // --- SPIRITUAL & BEACHES ---
  {
    id: 1208,
    name: "Murudeshwar Temple",
    slug: "murudeshwar-temple",
    state: "Karnataka",
    category: "Spiritual",
    badge: "Second Tallest Shiva Statue",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Murudeshwara_Temple_Complex.jpg/800px-Murudeshwara_Temple_Complex.jpg",
    description: "Located on the Kanduka Hill surrounded by the Arabian Sea on three sides. It features a towering 20-storied Gopuram (Raja Gopura) and a massive Shiva statue.",
    coordinates: { lat: 14.0942, lng: 74.4854 },

    essentials: {
      bestTime: "October to March",
      weather: "Coastal/Humid",
      timings: "06:00 AM - 01:00 PM, 03:00 PM - 08:30 PM",
      entryFee: {
        Entry: "Free",
        Lift: "₹10 (To top of Gopuram)"
      }
    },

    transport: {
      nearestAirport: "Mangalore (160 km)",
      nearestRailway: "Murudeshwar Station (2 km)",
      busConnectivity: "Direct buses from Bangalore and Mangalore"
    },

    externalLinks: {
      officialBooking: "https://karnatakatourism.org/",
      googleMaps: "https://goo.gl/maps/murudeshwar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Lift available for the Gopuram view. Temple complex is paved."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Temple Darshan" },
      { time: "09:00 AM", activity: "Gopuram Lift View" },
      { time: "10:30 AM", activity: "Murudeshwar Beach" }
    ],

    foodGuide: [
      { name: "Naveen Beach Restaurant", type: "View", specialty: "Sea View Lunch", rating: 4.1 },
      { name: "Kamat Upachar", type: "Highway", specialty: "South Indian", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "RNS Hospital Murudeshwar"
    }
  },
  {
    id: 1209,
    name: "Gokarna (Om Beach)",
    slug: "gokarna-om-beach",
    state: "Karnataka",
    category: "Beaches",
    badge: "Temple Town & Beaches",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Om_Beach_Gokarna.jpg/800px-Om_Beach_Gokarna.jpg",
    description: "A pilgrimage center famous for the Mahabaleshwar Temple (Atma Linga) and pristine beaches like Om Beach (shaped like the symbol Om), Kudle, and Paradise Beach.",
    coordinates: { lat: 14.5193, lng: 74.3168 },

    essentials: {
      bestTime: "October to March",
      weather: "Coastal",
      timings: "24 Hours (Temple: 6 AM - 12:30 PM, 5 PM - 8 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Goa (140 km)",
      nearestRailway: "Gokarna Road (10 km)",
      busConnectivity: "Buses from Bangalore and Mangalore"
    },

    externalLinks: {
      officialBooking: "https://karnatakatourism.org/",
      googleMaps: "https://goo.gl/maps/gokarna"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Beach access involves steps and rocky paths. Temple streets are narrow."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Mahabaleshwar Temple Darshan" },
      { time: "10:00 AM", activity: "Om Beach Water Sports" },
      { time: "04:00 PM", activity: "Trek to Kudle Beach for Sunset" }
    ],

    foodGuide: [
      { name: "Namaste Cafe", type: "Beach Shack", specialty: "Seafood & Nutella Pancakes", rating: 4.4 },
      { name: "Mantra Cafe", type: "View", specialty: "Breakfast", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "Primary Health Centre Gokarna"
    }
  },

  // --- HERITAGE ---
  {
    id: 1210,
    name: "Belur & Halebidu",
    slug: "belur-halebidu",
    state: "Karnataka",
    category: "Heritage",
    badge: "Hoysala Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chennakesava_Temple_Belur.jpg/800px-Chennakesava_Temple_Belur.jpg",
    description: "Twin towns known for their 12th-century Chennakeshava and Hoysaleswara temples. These UNESCO World Heritage sites are renowned for intricate stone carvings that look like sandalwood.",
    coordinates: { lat: 13.1623, lng: 75.8596 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "07:30 AM - 06:30 PM",
      entryFee: { Entry: "Free", Guide: "₹300 (Recommended)" }
    },

    transport: {
      nearestAirport: "Mangalore (150 km)",
      nearestRailway: "Hassan (35 km)",
      busConnectivity: "Regular buses from Hassan to Belur/Halebidu"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/belur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Temple courtyards are flat and paved. Some raised plinths have steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Belur Chennakeshava Temple" },
      { time: "12:00 PM", activity: "Drive to Halebidu (16 km)" },
      { time: "02:00 PM", activity: "Hoysaleswara Temple" }
    ],

    foodGuide: [
      { name: "Hotel Mayura Velapuri", type: "Govt", specialty: "South Indian Thali", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-2929",
      nearestHospital: "District Hospital Hassan"
    }
  }
]; 
