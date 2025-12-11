/**
 * TAMIL_NADU_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: TTDC (Tamil Nadu Tourism) & HR&CE Department
 * - Heritage: ASI (Mahabalipuram/Thanjavur) & UNESCO Data
 * - Hill Stations: Ooty & Kodaikanal Municipality Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const TAMIL_NADU_PLACES = [
  // --- HERITAGE & TEMPLES ---
  {
    id: 2401,
    name: "Meenakshi Amman Temple",
    slug: "meenakshi-amman-temple",
    state: "Tamil Nadu",
    category: "Spiritual",
    badge: "Architectural Wonder",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Madurai_Meenakshi_Temple.jpg/800px-Madurai_Meenakshi_Temple.jpg",
    description: "Located in Madurai, this historic Hindu temple is dedicated to Meenakshi (Parvati) and Sundareswarar (Shiva). It is renowned for its towering gopurams (gateways) filled with thousands of colorful sculptures.",
    coordinates: { lat: 9.9195, lng: 78.1193 },

    essentials: {
      bestTime: "October to March (Chithirai Festival in Apr/May)",
      weather: "Hot/Humid",
      timings: "05:00 AM - 12:30 PM, 04:00 PM - 10:00 PM",
      entryFee: {
        General: "Free",
        SpecialDarshan: "₹50-100",
        Museum: "₹50"
      }
    },

    transport: {
      nearestAirport: "Madurai (12 km)",
      nearestRailway: "Madurai Junction (1.5 km)",
      busConnectivity: "Located in the city center, accessible by auto/bus"
    },

    externalLinks: {
      officialBooking: "https://www.maduraimeenakshi.org/",
      googleMaps: "https://goo.gl/maps/meenakshi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Battery cars operate around the temple streets. Wheelchairs available at entrance (North Tower)."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Darshan of Meenakshi & Sundareswarar" },
      { time: "09:00 AM", activity: "Thousand Pillar Hall (Museum)" },
      { time: "08:00 PM", activity: "Night Ceremony (Palliyarai Pooja)" }
    ],

    foodGuide: [
      { name: "Murugan Idli Shop", type: "City Legend", specialty: "Idli & Jigarthanda", rating: 4.6 },
      { name: "Sree Sabarees", type: "Vegetarian", specialty: "South Indian Thali", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Government Rajaji Hospital"
    }
  },
  {
    id: 2402,
    name: "Brihadeeswarar Temple (Thanjavur)",
    slug: "brihadeeswarar-temple",
    state: "Tamil Nadu",
    category: "Heritage",
    badge: "UNESCO Great Living Chola Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Brihadisvara_Temple_Thanjavur.jpg/800px-Brihadisvara_Temple_Thanjavur.jpg",
    description: "Built by Raja Raja Chola I in 1010 AD, this temple turned 1000 years old in 2010. Its 216 ft hollow vimana is one of the tallest in the world, built without binding material.",
    coordinates: { lat: 10.7828, lng: 79.1318 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:00 AM - 12:30 PM, 04:00 PM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Tiruchirappalli (55 km)",
      nearestRailway: "Thanjavur Junction (1 km)",
      busConnectivity: "Direct buses from Trichy and Chennai"
    },

    externalLinks: {
      officialBooking: "https://thanjavur.nic.in/",
      googleMaps: "https://goo.gl/maps/brihadeeswarar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The vast temple courtyard is paved. Ramps are available for the main shrine."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Architecture Walk" },
      { time: "05:30 PM", activity: "Nandi Mandapam" },
      { time: "06:30 PM", activity: "Sunset view of Vimana" }
    ],

    foodGuide: [
      { name: "Sathars", type: "City", specialty: "Non-Veg & Biryani", rating: 4.2 },
      { name: "Sri Venkata Lodge", type: "Vegetarian", specialty: "Meals", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Thanjavur Medical College"
    }
  },
  {
    id: 2403,
    name: "Mahabalipuram (Mamallapuram)",
    slug: "mahabalipuram-shore-temple",
    state: "Tamil Nadu",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Shore_Temple_Mahabalipuram.jpg/800px-Shore_Temple_Mahabalipuram.jpg",
    description: "An ancient port city of the Pallava dynasty, famous for its rock-cut temples. Key attractions include the Shore Temple, Pancha Rathas (Five Chariots), and the massive relief 'Descent of the Ganges'.",
    coordinates: { lat: 12.6208, lng: 80.1945 },

    essentials: {
      bestTime: "November to February",
      weather: "Coastal/Sunny",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        LightShow: "₹10 (Evening)"
      }
    },

    transport: {
      nearestAirport: "Chennai (55 km)",
      nearestRailway: "Chengalpattu (30 km)",
      busConnectivity: "Frequent buses from Chennai (CMBT/Thiruvanmiyur)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/mahabalipuram"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Most monuments are at ground level with sandy/grassy paths. Ramps available at Shore Temple."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Shore Temple Sunrise" },
      { time: "09:00 AM", activity: "Pancha Rathas" },
      { time: "11:00 AM", activity: "Butter Ball & Arjuna's Penance" }
    ],

    foodGuide: [
      { name: "Moonrakers", type: "Seafood", specialty: "Grilled Calamari", rating: 4.4 },
      { name: "Gecko Cafe", type: "Casual", specialty: "Breakfast", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Chettinad Health City"
    }
  },
  {
    id: 2404,
    name: "Ramanathaswamy Temple (Rameswaram)",
    slug: "rameswaram-temple",
    state: "Tamil Nadu",
    category: "Spiritual",
    badge: "Char Dham & Jyotirlinga",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rameswaram_Temple_Corridor.jpg/800px-Rameswaram_Temple_Corridor.jpg",
    description: "Located on Pamban Island, this temple features the longest corridor in the world (1212 pillars). It is one of the Char Dhams and holds immense significance in the Ramayana.",
    coordinates: { lat: 9.2881, lng: 79.3174 },

    essentials: {
      bestTime: "October to March",
      weather: "Coastal/Hot",
      timings: "05:00 AM - 01:00 PM, 03:00 PM - 09:00 PM",
      entryFee: {
        Entry: "Free",
        WellsBath: "₹25 (Official)"
      }
    },

    transport: {
      nearestAirport: "Madurai (175 km)",
      nearestRailway: "Rameswaram Station (2 km)",
      busConnectivity: "Direct buses from Madurai and Chennai"
    },

    externalLinks: {
      officialBooking: "https://rameswaram.tn.gov.in/",
      googleMaps: "https://goo.gl/maps/rameswaram"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs available at East Gate. The long corridors are flat."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Spatika Linga Darshan" },
      { time: "07:00 AM", activity: "Bath in Agni Theertham (Sea) & 22 Wells" },
      { time: "04:00 PM", activity: "Dhanushkodi Visit (Ghost Town)" }
    ],

    foodGuide: [
      { name: "Hotel Guru", type: "Vegetarian", specialty: "Meals", rating: 4.0 },
      { name: "Sri Saravana", type: "City", specialty: "Dosa", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Government Hospital Rameswaram"
    }
  },

  // --- HILL STATIONS ---
  {
    id: 2405,
    name: "Ooty (Udhagamandalam)",
    slug: "ooty-botanical-gardens",
    state: "Tamil Nadu",
    category: "Hill Stations",
    badge: "Queen of Hill Stations",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ooty_Lake_Boating.jpg/800px-Ooty_Lake_Boating.jpg",
    description: "Nestled in the Nilgiris, Ooty is famous for its Botanical Gardens, Ooty Lake, and the UNESCO heritage Nilgiri Mountain Railway (Toy Train).",
    coordinates: { lat: 11.4102, lng: 76.6950 },

    essentials: {
      bestTime: "April to June (Summer Festival)",
      weather: "Cool/Cold",
      timings: "Gardens: 07:00 AM - 06:30 PM",
      entryFee: {
        Garden: "₹30",
        Boating: "₹250+"
      }
    },

    transport: {
      nearestAirport: "Coimbatore (88 km)",
      nearestRailway: "Udhagamandalam (Ooty) - Narrow Gauge",
      busConnectivity: "Frequent buses from Coimbatore and Mysore"
    },

    externalLinks: {
      officialBooking: "https://tamilnadutourism.tn.gov.in/",
      googleMaps: "https://goo.gl/maps/ooty"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Botanical Garden lower lawns are accessible. Lake boat house has ramps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Government Botanical Garden" },
      { time: "11:30 AM", activity: "Ooty Lake Boating" },
      { time: "03:00 PM", activity: "Doddabetta Peak" }
    ],

    foodGuide: [
      { name: "Earl's Secret", type: "Heritage", specialty: "Continental", rating: 4.5 },
      { name: "Nahar's Sidewalk", type: "Cafe", specialty: "Wood Fire Pizza", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Government Head Quarters Hospital"
    }
  },
  {
    id: 2406,
    name: "Kodaikanal",
    slug: "kodaikanal-lake",
    state: "Tamil Nadu",
    category: "Hill Stations",
    badge: "Princess of Hill Stations",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kodaikanal_Lake_View.jpg/800px-Kodaikanal_Lake_View.jpg",
    description: "Centered around the star-shaped Kodai Lake, this hill station offers scenic spots like Coaker's Walk, Bryant Park, and the Pillar Rocks. It is known for its homemade chocolates.",
    coordinates: { lat: 10.2381, lng: 77.4892 },

    essentials: {
      bestTime: "September to May",
      weather: "Misty/Cool",
      timings: "24 Hours (Park: 9 AM - 6 PM)",
      entryFee: {
        Park: "₹30",
        Boating: "₹150-300"
      }
    },

    transport: {
      nearestAirport: "Madurai (120 km)",
      nearestRailway: "Kodai Road (80 km)",
      busConnectivity: "Buses from Madurai, Trichy, and Chennai"
    },

    externalLinks: {
      officialBooking: "https://tamilnadutourism.tn.gov.in/",
      googleMaps: "https://goo.gl/maps/kodaikanal"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Coaker's Walk and the Lake promenade are paved and wheelchair accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Coaker's Walk" },
      { time: "11:00 AM", activity: "Kodai Lake Boating/Cycling" },
      { time: "03:00 PM", activity: "Pillar Rocks & Guna Caves" }
    ],

    foodGuide: [
      { name: "Cloud Street", type: "Cafe", specialty: "Wood Fire Pizza", rating: 4.5 },
      { name: "Astoria Veg", type: "Family", specialty: "South Indian", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Van Allen Hospital"
    }
  },

  // --- NATURE & WILDLIFE ---
  {
    id: 2407,
    name: "Kanyakumari (Vivekananda Rock)",
    slug: "kanyakumari-vivekananda-rock",
    state: "Tamil Nadu",
    category: "Nature",
    badge: "Southernmost Tip of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vivekananda_Rock_Memorial_Kanyakumari.jpg/800px-Vivekananda_Rock_Memorial_Kanyakumari.jpg",
    description: "The confluence of the Bay of Bengal, Arabian Sea, and Indian Ocean. Famous for the Vivekananda Rock Memorial and Thiruvalluvar Statue located on rocky islands off the coast.",
    coordinates: { lat: 8.0780, lng: 77.5550 },

    essentials: {
      bestTime: "October to March",
      weather: "Windy/Humid",
      timings: "08:00 AM - 04:00 PM (Ferry Service)",
      entryFee: {
        Ferry: "₹50 (Normal), ₹200 (Special)",
        Memorial: "₹20"
      }
    },

    transport: {
      nearestAirport: "Trivandrum (90 km)",
      nearestRailway: "Kanyakumari (1 km)",
      busConnectivity: "Excellent bus network from all major TN/Kerala cities"
    },

    externalLinks: {
      officialBooking: "https://tamilnadutourism.tn.gov.in/",
      googleMaps: "https://goo.gl/maps/kanyakumari"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding the ferry and climbing onto the rock memorial involves steps. Not fully accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise at Triveni Sangam" },
      { time: "09:00 AM", activity: "Ferry to Vivekananda Rock" },
      { time: "05:30 PM", activity: "Sunset Point" }
    ],

    foodGuide: [
      { name: "The Ocean Heritage", type: "View", specialty: "Fish Fry", rating: 4.3 },
      { name: "Saravana Bhavan", type: "Vegetarian", specialty: "Dosa", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Kanyakumari Govt Hospital"
    }
  },
  {
    id: 2408,
    name: "Mudumalai National Park",
    slug: "mudumalai-tiger-reserve",
    state: "Tamil Nadu",
    category: "Wildlife",
    badge: "Tiger Reserve",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mudumalai_Elephant.jpg/800px-Mudumalai_Elephant.jpg",
    description: "Located in the Nilgiris, this park connects the Western and Eastern Ghats. It is a Tiger Reserve known for its elephants, Indian gaurs, and diverse bird life.",
    coordinates: { lat: 11.5623, lng: 76.5345 },

    essentials: {
      bestTime: "October to May",
      weather: "Forest",
      timings: "Safari: 07:00 AM - 10:00 AM, 03:00 PM - 06:00 PM",
      entryFee: {
        BusSafari: "₹340",
        JeepSafari: "₹4200 (Vehicle)",
        Entry: "₹30"
      }
    },

    transport: {
      nearestAirport: "Coimbatore (160 km)",
      nearestRailway: "Ooty (64 km)",
      busConnectivity: "Located on the Ooty-Mysore highway (Theppakadu)"
    },

    externalLinks: {
      officialBooking: "https://www.mudumulaitigerreserve.com/",
      googleMaps: "https://goo.gl/maps/mudumalai"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Safari vans and jeeps are high clearance vehicles. Not accessible."
    },

    routePlan: [
      { time: "06:30 AM", activity: "Morning Bus/Jeep Safari" },
      { time: "09:30 AM", activity: "Theppakadu Elephant Camp" },
      { time: "11:00 AM", activity: "Moyar River View" }
    ],

    foodGuide: [
      { name: "Log House Canteen", type: "Govt", specialty: "Meals", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Gudalur Govt Hospital"
    }
  },

  // --- SPIRITUAL & HERITAGE ---
  {
    id: 2409,
    name: "Arunachaleswarar Temple (Tiruvannamalai)",
    slug: "arunachaleswarar-temple",
    state: "Tamil Nadu",
    category: "Spiritual",
    badge: "Pancha Bhoota Stalam (Fire)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Annamalaiyar_Temple_Tiruvannamalai.jpg/800px-Annamalaiyar_Temple_Tiruvannamalai.jpg",
    description: "Dedicated to Lord Shiva as the element of Fire (Agni). The temple lies at the foot of the holy Arunachala Hill. It is one of the largest temple complexes in India (10 hectares).",
    coordinates: { lat: 12.2318, lng: 79.0677 },

    essentials: {
      bestTime: "Nov-Dec (Karthigai Deepam)",
      weather: "Warm",
      timings: "05:00 AM - 12:30 PM, 03:30 PM - 09:30 PM",
      entryFee: {
        General: "Free",
        Special: "₹50"
      }
    },

    transport: {
      nearestAirport: "Chennai (185 km)",
      nearestRailway: "Tiruvannamalai (2 km)",
      busConnectivity: "Direct buses from Chennai, Vellore, and Salem"
    },

    externalLinks: {
      officialBooking: "https://arunachaleswarartemple.tnhrce.in/",
      googleMaps: "https://goo.gl/maps/arunachala"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Outer prakarams are paved. Battery cars available for elderly."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Girivalam (Circumambulation of Hill)" },
      { time: "09:00 AM", activity: "Temple Darshan" },
      { time: "04:00 PM", activity: "Ramana Maharshi Ashram" }
    ],

    foodGuide: [
      { name: "Aakash Inn", type: "Vegetarian", specialty: "South Indian", rating: 4.2 },
      { name: "Sparsa", type: "Resort", specialty: "Organic Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Govt Medical College Tiruvannamalai"
    }
  },
  {
    id: 2410,
    name: "Chettinad Mansions (Karaikudi)",
    slug: "chettinad-karaikudi",
    state: "Tamil Nadu",
    category: "Heritage",
    badge: "Land of Heritage Homes",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chettinad_Mansion_Kanadukathan.jpg/800px-Chettinad_Mansion_Kanadukathan.jpg",
    description: "Famous for its fortress-like mansions built by the Chettiar community using Burmese teak, Italian marble, and Belgian glass. The region is also world-renowned for its spicy cuisine.",
    coordinates: { lat: 10.0766, lng: 78.7777 },

    essentials: {
      bestTime: "October to March",
      weather: "Hot/Dry",
      timings: "09:00 AM - 05:00 PM (Mansion Visits)",
      entryFee: {
        MansionEntry: "₹50-100 (Private homes)"
      }
    },

    transport: {
      nearestAirport: "Trichy (90 km)",
      nearestRailway: "Karaikudi Junction (2 km)",
      busConnectivity: "Buses from Trichy and Madurai"
    },

    externalLinks: {
      officialBooking: "https://tamilnadutourism.tn.gov.in/",
      googleMaps: "https://goo.gl/maps/chettinad"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Mansions have high thinnai (verandahs) and steps. Streets are accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Kanadukathan Palace View" },
      { time: "12:00 PM", activity: "Athangudi Tile Factory" },
      { time: "01:30 PM", activity: "Chettinad Feast" }
    ],

    foodGuide: [
      { name: "The Bangala", type: "Heritage", specialty: "Chettinad Feast (7-course)", rating: 4.8 },
      { name: "Priya Mess", type: "Local", specialty: "Chicken Chettinad", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-31111",
      nearestHospital: "Apollo Hospital Karaikudi"
    }
  }
]; 
