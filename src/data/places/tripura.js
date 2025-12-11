/**
 * TRIPURA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Tripura Tourism Development Corp (TTDC) & ASI
 * - Wildlife: Sepahijala Zoological Park Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const TRIPURA_PLACES = [
  // --- HERITAGE & PALACES ---
  {
    id: 2601,
    name: "Ujjayanta Palace",
    slug: "ujjayanta-palace",
    state: "Tripura",
    category: "Heritage",
    badge: "State Museum of Tripura",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ujjayanta_Palace_Agartala.jpg/800px-Ujjayanta_Palace_Agartala.jpg",
    description: "A gleaming white palace built by Maharaja Radha Kishore Manikya in 1901. Formerly the royal residence and state assembly, it now houses the State Museum showcasing Northeast India's culture.",
    coordinates: { lat: 23.8315, lng: 91.2868 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm/Humid",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹20",
        Foreigner: "₹150",
        Camera: "₹50"
      }
    },

    transport: {
      nearestAirport: "Maharaja Bir Bikram Airport (10 km)",
      nearestRailway: "Agartala (5 km)",
      busConnectivity: "Located in the heart of Agartala city"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/ujjayanta"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The ground floor museum galleries and gardens are accessible via ramps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Palace Museum Tour" },
      { time: "12:00 PM", activity: "Musical Fountain Garden" },
      { time: "01:00 PM", activity: "Jagannath Bari (Temple in complex)" }
    ],

    foodGuide: [
      { name: "Momos & More", type: "Cafe", specialty: "Pork Momos", rating: 4.3 },
      { name: "Restaurant Rajdhani", type: "City", specialty: "Bengali Thali", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "GBP Hospital Agartala"
    }
  },
  {
    id: 2602,
    name: "Neermahal (Water Palace)",
    slug: "neermahal-palace",
    state: "Tripura",
    category: "Heritage",
    badge: "Lake Palace of East",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Neermahal_Agartala.jpg/800px-Neermahal_Agartala.jpg",
    description: "Built in the middle of Rudrasagar Lake in 1930, this architectural marvel blends Hindu and Islamic styles. It was the summer residence of the Manikya dynasty.",
    coordinates: { lat: 23.4944, lng: 91.3149 },

    essentials: {
      bestTime: "Winter (Migratory Birds) or Aug (Boat Race)",
      weather: "Breezy",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹30",
        BoatRide: "₹50 (Shared), ₹500 (Private)"
      }
    },

    transport: {
      nearestAirport: "Agartala (55 km)",
      nearestRailway: "Agartala (50 km)",
      busConnectivity: "Buses available to Melaghar, then walk/rickshaw to jetty"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/neermahal"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding the motorboats from the jetty requires balance and stepping down. Palace has stairs."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Boat Ride across Rudrasagar" },
      { time: "03:30 PM", activity: "Explore Palace Rooftop" },
      { time: "05:00 PM", activity: "Sunset view from boat" }
    ],

    foodGuide: [
      { name: "Sagar Mahal", type: "Govt Lodge", specialty: "Fish Curry", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Melaghar Sub-Divisional Hospital"
    }
  },
  {
    id: 2603,
    name: "Unakoti",
    slug: "unakoti-rock-carvings",
    state: "Tripura",
    category: "Heritage",
    badge: "Angkor Wat of Northeast",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Unakoti_Rock_Carvings.jpg/800px-Unakoti_Rock_Carvings.jpg",
    description: "A pilgrimage site featuring massive bas-relief rock carvings of Shiva and Ganesha dating back to the 7th-9th centuries. 'Unakoti' means 'one less than a crore'.",
    coordinates: { lat: 24.3167, lng: 92.0667 },

    essentials: {
      bestTime: "October to April (Ashokastami Festival in Apr)",
      weather: "Forest/Humid",
      timings: "06:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Agartala (180 km) or Silchar (150 km)",
      nearestRailway: "Kumarghat (20 km) or Dharmanagar (40 km)",
      busConnectivity: "Taxi from Kailashahar (10 km)"
    },

    externalLinks: {
      officialBooking: "https://unakoti.nic.in/",
      googleMaps: "https://goo.gl/maps/unakoti"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing hundreds of stone steps to see the main Unakotishwara Kal Bhairava carving."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Trek up to Shiva Head" },
      { time: "10:00 AM", activity: "Explore Ganesha Figures" },
      { time: "11:30 AM", activity: "Visit nearby Waterfall" }
    ],

    foodGuide: [
      { name: "Unakoti Cafeteria", type: "Basic", specialty: "Tea & Snacks", rating: 3.5 },
      { name: "Hotel City Pride (Kailashahar)", type: "City", specialty: "Indian", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Unakoti District Hospital"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 2604,
    name: "Tripura Sundari Temple",
    slug: "tripura-sundari-temple",
    state: "Tripura",
    category: "Spiritual",
    badge: "51 Shakti Peeth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tripura_Sundari_Temple_Udaipur.jpg/800px-Tripura_Sundari_Temple_Udaipur.jpg",
    description: "Located in Udaipur (the city of lakes), this temple dedicated to Goddess Kali (Tripureshwari) is one of the 51 Shakti Peethas. The structure resembles the back of a tortoise (Kurma).",
    coordinates: { lat: 23.5134, lng: 91.4984 },

    essentials: {
      bestTime: "All Year (Diwali is huge)",
      weather: "Warm",
      timings: "06:00 AM - 09:00 PM",
      entryFee: {
        Entry: "Free",
        VIP: "₹50 (Optional)"
      }
    },

    transport: {
      nearestAirport: "Agartala (55 km)",
      nearestRailway: "Udaipur Tripura (3 km)",
      busConnectivity: "Frequent trains and buses from Agartala"
    },

    externalLinks: {
      officialBooking: "https://gomati.nic.in/",
      googleMaps: "https://goo.gl/maps/tripurasundari"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The temple compound and the banks of Kalyan Sagar lake are paved and accessible."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Aarti" },
      { time: "09:00 AM", activity: "Feed Tortoises/Fish in Kalyan Sagar" },
      { time: "10:30 AM", activity: "Visit Bhubaneswari Temple (Nearby)" }
    ],

    foodGuide: [
      { name: "Matabari Peda Stalls", type: "Prasad", specialty: "Famous Peda", rating: 5.0 },
      { name: "Gunabati Yatri Niwas", type: "Govt", specialty: "Veg Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Gomati District Hospital"
    }
  },
  {
    id: 2605,
    name: "Kasba Kali Bari",
    slug: "kasba-kali-bari",
    state: "Tripura",
    category: "Spiritual",
    badge: "Border Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kasba_Kali_Bari_Kamalasagar.jpg/800px-Kasba_Kali_Bari_Kamalasagar.jpg",
    description: "Situated in Kamalasagar right on the India-Bangladesh border. The temple houses a 15th-century idol of Goddess Kali. The lake in front adds to the scenic beauty.",
    coordinates: { lat: 23.7644, lng: 91.1897 },

    essentials: {
      bestTime: "All Year (Tuesdays/Fridays)",
      weather: "Breezy",
      timings: "07:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Agartala (30 km)",
      nearestRailway: "Agartala (30 km)",
      busConnectivity: "Taxis/Autos from Agartala city"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/kasba"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Temple courtyard and lake promenade are flat."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Temple Darshan" },
      { time: "10:00 AM", activity: "View Bangladesh Border Fencing" },
      { time: "11:00 AM", activity: "Walk around Kamalasagar Lake" }
    ],

    foodGuide: [
      { name: "Comilla View", type: "Govt Lodge", specialty: "Snacks", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Bishalgarh Hospital"
    }
  },

  // --- WILDLIFE & NATURE ---
  {
    id: 2606,
    name: "Sepahijala Wildlife Sanctuary",
    slug: "sepahijala-wildlife-sanctuary",
    state: "Tripura",
    category: "Wildlife",
    badge: "Home of Spectacled Monkey",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Phayre%27s_Leaf_Monkey_Tripura.jpg/800px-Phayre%27s_Leaf_Monkey_Tripura.jpg",
    description: "A biodiversity hotspot housing a zoo, a botanical garden, and a lake. It is famous for the Clouded Leopard and the Phayre's Leaf Monkey (Spectacled Monkey).",
    coordinates: { lat: 23.6552, lng: 91.3323 },

    essentials: {
      bestTime: "October to March",
      weather: "Forest",
      timings: "09:00 AM - 04:00 PM (Closed Fridays)",
      entryFee: {
        Entry: "₹20",
        Camera: "₹50",
        Boating: "₹50"
      }
    },

    transport: {
      nearestAirport: "Agartala (25 km)",
      nearestRailway: "Bishalgarh (10 km)",
      busConnectivity: "Located on the Agartala-Udaipur highway"
    },

    externalLinks: {
      officialBooking: "https://forest.tripura.gov.in/",
      googleMaps: "https://goo.gl/maps/sepahijala"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The zoo section has paved pathways. Battery cars are sometimes available."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Zoo Visit (Clouded Leopard)" },
      { time: "11:30 AM", activity: "Boating in the Lake" },
      { time: "01:00 PM", activity: "Botanical Garden Walk" }
    ],

    foodGuide: [
      { name: "Abasar Cafeteria", type: "Zoo Cafe", specialty: "Tea & Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Bishalgarh Hospital"
    }
  },
  {
    id: 2607,
    name: "Chabimura (Devtamura)",
    slug: "chabimura-rock-carvings",
    state: "Tripura",
    category: "Nature",
    badge: "Amazon of Tripura",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chabimura_Rock_Carving.jpg/800px-Chabimura_Rock_Carving.jpg",
    description: "Famous for its panels of rock carvings on the steep mountain wall of the Kalajhari Hills, overlooking the Gomati River. The biggest idol is of 'Ma Durga' (Chakrakma).",
    coordinates: { lat: 23.4167, lng: 91.7333 },

    essentials: {
      bestTime: "October to March",
      weather: "River/Forest",
      timings: "08:00 AM - 04:00 PM (Boating)",
      entryFee: {
        Entry: "Free",
        Boat: "₹1500-2000 (Reserved Motorboat)"
      }
    },

    transport: {
      nearestAirport: "Agartala (80 km)",
      nearestRailway: "Udaipur (30 km)",
      busConnectivity: "Reach Amarpur by bus, then taxi to Chabimura ghat (8 km)"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/chabimura"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Accessing the boat from the river bank involves steep earthen steps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Boat Ride on Gomati" },
      { time: "11:00 AM", activity: "View Rock Carvings" },
      { time: "01:00 PM", activity: "Cave Entrance View" }
    ],

    foodGuide: [
      { name: "Amarpur Bazar", type: "Local", specialty: "Bengali Cuisine", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Amarpur Sub-Divisional Hospital"
    }
  },
  {
    id: 2608,
    name: "Jampui Hills",
    slug: "jampui-hills",
    state: "Tripura",
    category: "Hill Stations",
    badge: "Highest Peak in Tripura",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Jampui_Hills_Landscape.jpg/800px-Jampui_Hills_Landscape.jpg",
    description: "The highest hill range in the state, known for its pleasant climate, orange orchards, and the Betlingchhip Peak (3200 ft). It hosts the annual Orange Festival in November.",
    coordinates: { lat: 23.9722, lng: 92.2775 },

    essentials: {
      bestTime: "October to March (Orange Festival in Nov)",
      weather: "Cool/Misty",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Agartala (200 km)",
      nearestRailway: "Dharmanagar (70 km)",
      busConnectivity: "Buses from Agartala to Kanchanpur, then shared jeep"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/jampui"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Hilly terrain with slopes. Eden Tourist Lodge is partially accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise from Betlingchhip" },
      { time: "10:00 AM", activity: "Walk in Orange Orchards" },
      { time: "02:00 PM", activity: "Visit Mizo Villages (Vanghmun)" }
    ],

    foodGuide: [
      { name: "Eden Tourist Lodge", type: "Govt", specialty: "Chicken Curry", rating: 4.0 },
      { name: "Local Homestays", type: "Home", specialty: "Bamboo Shoot Curry", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Kanchanpur Hospital"
    }
  },
  {
    id: 2609,
    name: "Dumboor Lake",
    slug: "dumboor-lake",
    state: "Tripura",
    category: "Nature",
    badge: "Lake of 48 Islands",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dumboor_Lake_Tripura.jpg/800px-Dumboor_Lake_Tripura.jpg",
    description: "A massive water body covering 41 sq km, famous for having 48 islands. It is the source of the Gomati River and attracts many migratory birds in winter.",
    coordinates: { lat: 23.4133, lng: 91.8233 },

    essentials: {
      bestTime: "October to March (Poush Sankranti Fair in Jan)",
      weather: "Breezy",
      timings: "08:00 AM - 04:00 PM",
      entryFee: {
        Entry: "Free",
        Boating: "Negotiable with locals"
      }
    },

    transport: {
      nearestAirport: "Agartala (120 km)",
      nearestRailway: "Udaipur (75 km)",
      busConnectivity: "Located in Gandacherra subdivision, accessible by taxi"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dumboor"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote area with limited infrastructure. Boat access is difficult."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Boating to Narkel Kunja (Coconut Island)" },
      { time: "01:00 PM", activity: "Picnic on Island" },
      { time: "03:00 PM", activity: "Bird Watching" }
    ],

    foodGuide: [
      { name: "Narkel Kunja Canteen", type: "Island", specialty: "Fresh Fish Fry", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "Gandacherra Sub-Divisional Hospital"
    }
  },
  {
    id: 2610,
    name: "Heritage Park",
    slug: "heritage-park-agartala",
    state: "Tripura",
    category: "Leisure",
    badge: "Mini Tripura",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Heritage_Park_Agartala_Gate.jpg/800px-Heritage_Park_Agartala_Gate.jpg",
    description: "A beautiful park in Agartala featuring miniature replicas of all major monuments of Tripura (Unakoti, Neermahal, etc.), indigenous flora, and tribal hut models.",
    coordinates: { lat: 23.8566, lng: 91.2908 },

    essentials: {
      bestTime: "Evenings (All Year)",
      weather: "City",
      timings: "10:00 AM - 07:00 PM (Closed Tuesdays)",
      entryFee: {
        Adult: "₹20",
        Child: "₹10"
      }
    },

    transport: {
      nearestAirport: "Agartala (8 km)",
      nearestRailway: "Agartala (6 km)",
      busConnectivity: "Located in Kunjaban area, easily accessible by auto"
    },

    externalLinks: {
      officialBooking: "https://tripuratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/heritagepark"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved walking tracks cover the entire park."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Walk through Mini Tripura" },
      { time: "05:00 PM", activity: "Herbal Garden" },
      { time: "06:00 PM", activity: "Relax at Amphitheatre" }
    ],

    foodGuide: [
      { name: "Park Food Court", type: "Snack Bar", specialty: "Coffee & Momos", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0381-2325930",
      nearestHospital: "GBP Hospital"
    }
  }
]; 
