/**
 * GOA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: GTDC (Goa Tourism) & Archaeological Survey of India (ASI)
 * - Adventure: Dudhsagar Jeep Union & Water Sports Associations
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const GOA_PLACES = [
  // --- BEACHES ---
  {
    id: 701,
    name: "Calangute Beach",
    slug: "calangute-beach",
    state: "Goa",
    category: "Beaches",
    badge: "Queen of Beaches",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Calangute_Beach_Goa.jpg/800px-Calangute_Beach_Goa.jpg",
    description: "The largest and most popular beach in North Goa, known for its golden sands, buzzing shacks, and endless water sports options. It is the hub of Goa's tourist activity.",
    coordinates: { lat: 15.5494, lng: 73.7535 },

    essentials: {
      bestTime: "November to February",
      weather: "Sunny/Humid",
      timings: "24 Hours (Lifeguards: 7 AM - 6 PM)",
      entryFee: {
        Entry: "Free",
        Parasailing: "₹800-1000",
        JetSki: "₹400-600"
      }
    },

    transport: {
      nearestAirport: "Mopa (GOX) - 28 km or Dabolim (GOI) - 40 km",
      nearestRailway: "Thivim (18 km)",
      busConnectivity: "Frequent buses from Mapusa and Panaji"
    },

    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/calangute"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main beach access road is paved. Some beach shacks have ramps, but sand navigation requires assistance."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Water Sports (Parasailing)" },
      { time: "01:00 PM", activity: "Lunch at Beach Shack" },
      { time: "05:00 PM", activity: "Sunset Walk & Shopping" }
    ],

    foodGuide: [
      { name: "Souza Lobo", type: "Heritage", specialty: "Goan Fish Curry", rating: 4.4 },
      { name: "Pousada by the Beach", type: "Fine Dining", specialty: "Prawn Balchao", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Primary Health Centre, Candolim"
    }
  },
  {
    id: 702,
    name: "Palolem Beach",
    slug: "palolem-beach",
    state: "Goa",
    category: "Beaches",
    badge: "Scenic Crescent Bay",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Palolem_Beach_Panorama.jpg/800px-Palolem_Beach_Panorama.jpg",
    description: "A stunning crescent-shaped beach in South Goa, famous for its calm waters, silent noise parties, and dolphin-watching boat trips. It offers a more relaxed vibe than North Goa.",
    coordinates: { lat: 15.0100, lng: 74.0232 },

    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        DolphinTrip: "₹300-500",
        SilentDisco: "₹600-800"
      }
    },

    transport: {
      nearestAirport: "Dabolim (GOI) - 60 km",
      nearestRailway: "Canacona (2 km) or Madgaon (35 km)",
      busConnectivity: "Direct buses from Margao (Kadamba Bus Stand)"
    },

    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/palolem"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat access to the beach entrance. Coco-huts are generally ground level."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Dolphin Watching Boat Ride" },
      { time: "11:00 AM", activity: "Kayaking to Butterfly Beach" },
      { time: "07:00 PM", activity: "Silent Noise Headphone Party (Sat)" }
    ],

    foodGuide: [
      { name: "Dropadi", type: "Beachfront", specialty: "Seafood Platter", rating: 4.5 },
      { name: "Café Inn", type: "Cafe", specialty: "English Breakfast", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Community Health Centre, Canacona"
    }
  },

  // --- HERITAGE ---
  {
    id: 703,
    name: "Basilica of Bom Jesus",
    slug: "basilica-of-bom-jesus",
    state: "Goa",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Basilica_of_Bom_Jesus_Old_Goa.jpg/800px-Basilica_of_Bom_Jesus_Old_Goa.jpg",
    description: "Located in Old Goa, this 16th-century baroque church holds the mortal remains of St. Francis Xavier. It is a masterpiece of Jesuit architecture and India's first minor basilica.",
    coordinates: { lat: 15.5009, lng: 73.9116 },

    essentials: {
      bestTime: "All Year (Feast in Dec)",
      weather: "Indoor/Cool",
      timings: "09:00 AM - 06:30 PM (Mass timings differ)",
      entryFee: {
        Entry: "Free",
        Museum: "₹10",
        Guide: "₹200 (Optional)"
      }
    },

    transport: {
      nearestAirport: "Dabolim (25 km)",
      nearestRailway: "Karmali (3 km)",
      busConnectivity: "Frequent buses from Panaji Bus Stand (10 km)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/bomjesus"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps are available at the side entrance. Interior is spacious and flat."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Viewing the Casket of St. Francis" },
      { time: "10:30 AM", activity: "Se Cathedral (Opposite)" },
      { time: "12:00 PM", activity: "Museum of Christian Art" }
    ],

    foodGuide: [
      { name: "Ratnasagar", type: "Family", specialty: "Goan Thali", rating: 4.0 },
      { name: "Cafe Bhonsle (Panaji)", type: "Vegetarian", specialty: "Patal Bhaji", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Goa Medical College (GMC), Bambolim"
    }
  },
  {
    id: 704,
    name: "Fort Aguada",
    slug: "fort-aguada",
    state: "Goa",
    category: "Heritage",
    badge: "17th Century Portuguese Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Aguada_Fort_Light_House.jpg/800px-Aguada_Fort_Light_House.jpg",
    description: "Built in 1612 to guard against the Dutch, this fort stands on Sinquerim Beach. It features a four-storey lighthouse (one of Asia's oldest) and vast water reservoirs ('Agua' means water).",
    coordinates: { lat: 15.4922, lng: 73.7738 },

    essentials: {
      bestTime: "Winter",
      weather: "Sunny/Windy",
      timings: "09:30 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300",
        Video: "₹25"
      }
    },

    transport: {
      nearestAirport: "Dabolim (40 km)",
      nearestRailway: "Thivim (20 km)",
      busConnectivity: "Buses to Sinquerim, then 2km uphill walk or taxi"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/aguada"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Terrain is rocky and uneven. Steep climb to the upper fort area."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Explore Upper Fort & Lighthouse" },
      { time: "05:30 PM", activity: "Sunset over Arabian Sea" },
      { time: "06:30 PM", activity: "Walk down to Sinquerim Beach" }
    ],

    foodGuide: [
      { name: "Fisherman's Wharf", type: "Premium", specialty: "Prawn Curry Rice", rating: 4.4 },
      { name: "Cohiba", type: "Bar & Kitchen", specialty: "Fusion Tapas", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Primary Health Centre Candolim"
    }
  },

  // --- NATURE & ADVENTURE ---
  {
    id: 705,
    name: "Dudhsagar Waterfalls",
    slug: "dudhsagar-waterfalls",
    state: "Goa",
    category: "Nature",
    badge: "Sea of Milk",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dudhsagar_Falls_Train.jpg/800px-Dudhsagar_Falls_Train.jpg",
    description: "One of India's tallest waterfalls (310m), located on the Mandovi River. The white cascading water looks like milk, especially when a train passes on the bridge cutting through it.",
    coordinates: { lat: 15.3144, lng: 74.3143 },

    essentials: {
      bestTime: "October to April (Closed in Monsoon)",
      weather: "Forest/Humid",
      timings: "06:00 AM - 04:30 PM (Gate closes)",
      entryFee: {
        Jeep: "₹3500 (Group of 7)",
        LifeJacket: "₹40 (Mandatory)",
        Entry: "₹50"
      }
    },

    transport: {
      nearestAirport: "Dabolim (70 km)",
      nearestRailway: "Kulem (Base station)",
      busConnectivity: "Reach Kulem via train/taxi, then take official Jeep Safari"
    },

    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/dudhsagar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Rugged jeep track and rocky path to the waterfall pool. Not accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Jeep Safari Registration at Kulem" },
      { time: "07:30 AM", activity: "45-min Jungle Drive" },
      { time: "09:00 AM", activity: "Swim in Waterfall Pool" }
    ],

    foodGuide: [
      { name: "Dudhsagar Plantation", type: "Farm Stay", specialty: "Goan Buffet", rating: 4.5 },
      { name: "Local Kulem Dhabas", type: "Basic", specialty: "Breakfast/Omlet", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "PHC Molem"
    }
  },
  {
    id: 706,
    name: "Dr. Salim Ali Bird Sanctuary",
    slug: "salim-ali-bird-sanctuary",
    state: "Goa",
    category: "Nature",
    badge: "Mangrove Habitat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chor%C3%A3o_Island_Mangroves.jpg/800px-Chor%C3%A3o_Island_Mangroves.jpg",
    description: "Located on Chorao Island along the Mandovi River, this sanctuary is a paradise for birdwatchers. It protects a unique mangrove ecosystem and is home to kingfishers, eagles, and mudskippers.",
    coordinates: { lat: 15.5126, lng: 73.8569 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid/Shady",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Entry: "₹10 (Indian)",
        BoatRide: "₹900-1200 (Per Boat)"
      }
    },

    transport: {
      nearestAirport: "Dabolim (30 km)",
      nearestRailway: "Karmali (10 km)",
      busConnectivity: "Take Ribandar ferry from Panaji to Chorao Island"
    },

    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/salimali"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding boats from the jetty can be tricky. Some walkways inside are paved but narrow."
    },

    routePlan: [
      { time: "06:30 AM", activity: "Ferry Crossing to Chorao" },
      { time: "07:00 AM", activity: "Canoe Ride through Mangroves" },
      { time: "09:00 AM", activity: "Watch Tower Climb" }
    ],

    foodGuide: [
      { name: "Lazy Goose", type: "Riverside", specialty: "Crab Masala", rating: 4.4 },
      { name: "Local Bakeries", type: "Street", specialty: "Poi (Goan Bread)", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "GMC Bambolim"
    }
  },

  // --- SPIRITUAL & HERITAGE ---
  {
    id: 707,
    name: "Shanta Durga Temple",
    slug: "shanta-durga-temple",
    state: "Goa",
    category: "Spiritual",
    badge: "Indo-Portuguese Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Shanta_Durga_Temple_Kavlem.jpg/800px-Shanta_Durga_Temple_Kavlem.jpg",
    description: "Located in Kavlem, Ponda, this temple is dedicated to Goddess Shanta Durga, who mediated between Vishnu and Shiva. It features a unique blend of Pyramidal Shikharas and Portuguese-style windows.",
    coordinates: { lat: 15.3986, lng: 73.9782 },

    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "06:00 AM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dabolim (30 km)",
      nearestRailway: "Madgaon (18 km)",
      busConnectivity: "Regular buses from Ponda and Panaji"
    },

    externalLinks: {
      officialBooking: "http://www.shantadurga.org/",
      googleMaps: "https://goo.gl/maps/shantadurga"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The temple compound is spacious and paved. There are few steps to the main hall."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Morning Darshan" },
      { time: "10:00 AM", activity: "Explore Temple Tank" },
      { time: "11:00 AM", activity: "Mangueshi Temple (Nearby)" }
    ],

    foodGuide: [
      { name: "Padmavati Restaurant", type: "Pure Veg", specialty: "Bhaji Pao", rating: 4.1 },
      { name: "Spice Plantations", type: "Farm", specialty: "Goan Buffet", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Sub-District Hospital Ponda"
    }
  },
  {
    id: 708,
    name: "Se Cathedral",
    slug: "se-cathedral",
    state: "Goa",
    category: "Heritage",
    badge: "Largest Church in Asia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Se_Cathedral_Old_Goa.jpg/800px-Se_Cathedral_Old_Goa.jpg",
    description: "Dedicated to St. Catherine, this 16th-century cathedral is famous for its giant Golden Bell, the largest in Goa. Its Portuguese-Manueline architecture is grand and imposing.",
    coordinates: { lat: 15.5034, lng: 73.9126 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor/Cool",
      timings: "07:30 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dabolim (25 km)",
      nearestRailway: "Karmali (3 km)",
      busConnectivity: "Located in Old Goa complex, accessible by bus from Panaji"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/secathedral"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat entrance. Very spacious interior suitable for wheelchairs."
    },

    routePlan: [
      { time: "11:00 AM", activity: "Explore Main Altar" },
      { time: "11:30 AM", activity: "View the Golden Bell" },
      { time: "12:00 PM", activity: "Walk to Arch of Viceroy" }
    ],

    foodGuide: [
      { name: "Rasoda", type: "Thali", specialty: "Rajasthani/Goan", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "GMC Bambolim"
    }
  },

  // --- LEISURE ---
  {
    id: 709,
    name: "Fontainhas Latin Quarter",
    slug: "fontainhas-latin-quarter",
    state: "Goa",
    category: "Heritage",
    badge: "Europe in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Fontainhas_Street.jpg/800px-Fontainhas_Street.jpg",
    description: "The old Latin Quarter of Panaji, known for its narrow winding streets, brightly colored Portuguese houses, art galleries, and quaint bakeries. A UNESCO Heritage Zone.",
    coordinates: { lat: 15.4947, lng: 73.8298 },

    essentials: {
      bestTime: "Winter Mornings/Evenings",
      weather: "City",
      timings: "24 Hours (Shops close by 8 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dabolim (28 km)",
      nearestRailway: "Karmali (12 km)",
      busConnectivity: "Walking distance from Panaji KTC Bus Stand"
    },

    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/fontainhas"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Streets are paved but narrow. Some heritage cafes have steps."
    },

    routePlan: [
      { time: "04:30 PM", activity: "Heritage Walk Photography" },
      { time: "05:30 PM", activity: "Coffee at a Heritage Bakery" },
      { time: "06:30 PM", activity: "Visit Gitanjali Gallery" }
    ],

    foodGuide: [
      { name: "Viva Panjim", type: "Heritage", specialty: "Pork Vindaloo", rating: 4.5 },
      { name: "Confeitaria 31 De Janeiro", type: "Bakery", specialty: "Bebinca", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Manipal Hospital Panaji"
    }
  },
  {
    id: 710,
    name: "Anjuna Flea Market",
    slug: "anjuna-flea-market",
    state: "Goa",
    category: "Leisure",
    badge: "Hippie Legacy",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Anjuna_Beach_Market.jpg/800px-Anjuna_Beach_Market.jpg",
    description: "Started by hippies in the 60s, this Wednesday market is a chaotic, colorful mix of trinkets, clothes, spices, and live music, set right by the Anjuna Beach.",
    coordinates: { lat: 15.5794, lng: 73.7432 },

    essentials: {
      bestTime: "Wednesdays (Oct-Apr)",
      weather: "Sunny/Dusty",
      timings: "09:00 AM - 06:00 PM (Wednesdays Only)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Mopa (28 km)",
      nearestRailway: "Thivim (18 km)",
      busConnectivity: "Buses from Mapusa or Panaji to Anjuna"
    },

    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/anjuna"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The market ground is sandy, uneven, and crowded."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Shopping for Souvenirs" },
      { time: "01:00 PM", activity: "Lunch at Curlies (Beach Shack)" },
      { time: "04:00 PM", activity: "Sunset at Anjuna Beach" }
    ],

    foodGuide: [
      { name: "Curlies", type: "Shack", specialty: "Woodfired Pizza", rating: 4.1 },
      { name: "Burger Factory", type: "Modern", specialty: "Gourmet Burgers", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "St. Anthony's Hospital"
    }
  }
]; 
