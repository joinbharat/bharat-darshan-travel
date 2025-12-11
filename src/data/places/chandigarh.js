/**
 * CHANDIGARH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Chandigarh Tourism & CITCO
 * - Heritage: Capitol Complex (UNESCO) Official Booking
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const CHANDIGARH_PLACES = [
  // --- ICONS & HERITAGE ---
  {
    id: 3101,
    name: "Rock Garden of Chandigarh",
    slug: "rock-garden",
    state: "Chandigarh",
    category: "Heritage",
    badge: "Best from Waste",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rock_Garden_Chandigarh_1.jpg/800px-Rock_Garden_Chandigarh_1.jpg",
    description: "A world-famous sculpture garden created by Nek Chand using industrial and home waste (bangles, ceramic, tiles). It is a maze of interlinked courtyards, waterfalls, and sculptures.",
    coordinates: { lat: 30.7525, lng: 76.8101 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "09:00 AM - 06:00 PM",
      entryFee: {
        Adult: "₹30",
        Child: "₹10"
      }
    },

    transport: {
      nearestAirport: "Shaheed Bhagat Singh Intl Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "CTU buses to Rock Garden stop (Sector 1)"
    },

    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rockgarden"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The garden has narrow passages, low doorways, and uneven steps. Not suitable for wheelchairs."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Phase 1 (Tile Mosaics)" },
      { time: "10:30 AM", activity: "Waterfall Area" },
      { time: "11:30 AM", activity: "Phase 3 (Open Theatre & Swings)" }
    ],

    foodGuide: [
      { name: "Inside Cafeteria", type: "Basic", specialty: "Ice Cream & Popcorn", rating: 3.5 },
      { name: "Sector 9 Market", type: "Nearby", specialty: "Bakery & Fast Food", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3102,
    name: "Capitol Complex",
    slug: "capitol-complex",
    state: "Chandigarh",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/The_Secretariat_Chandigarh.jpg/800px-The_Secretariat_Chandigarh.jpg",
    description: "Designed by Le Corbusier, this government compound houses the High Court, Secretariat, and Legislative Assembly. It is a masterpiece of modern architecture.",
    coordinates: { lat: 30.7588, lng: 76.8055 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Open",
      timings: "10:00 AM, 12:00 PM, 03:00 PM (Guided Tours)",
      entryFee: {
        Entry: "Free",
        Pass: "Mandatory (Apply at Tourist Center/Online)"
      }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (22 km)",
      nearestRailway: "Chandigarh Junction (10 km)",
      busConnectivity: "Accessible by cab/auto to the Tourist Information Center (Sector 1)"
    },

    externalLinks: {
      officialBooking: "http://capitolcomplex.chd.gov.in/",
      googleMaps: "https://goo.gl/maps/capitolcomplex"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wide concrete plazas and ramps are available throughout the complex."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Collect Tourist Pass" },
      { time: "10:00 AM", activity: "Guided Tour of Secretariat/Assembly" },
      { time: "11:30 AM", activity: "Open Hand Monument" }
    ],

    foodGuide: [
      { name: "Indian Coffee House (Sec 17)", type: "Heritage", specialty: "Filter Coffee", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "PGIMER Sector 12"
    }
  },
  {
    id: 3103,
    name: "Open Hand Monument",
    slug: "open-hand-monument",
    state: "Chandigarh",
    category: "Heritage",
    badge: "Symbol of Chandigarh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Open_Hand_Monument_Chandigarh.jpg/800px-Open_Hand_Monument_Chandigarh.jpg",
    description: "Designed by Le Corbusier, this 26-meter high rotating metal sculpture symbolizes 'the hand to give and the hand to take; peace and prosperity, and the unity of mankind'.",
    coordinates: { lat: 30.7608, lng: 76.8021 },

    essentials: {
      bestTime: "Morning or Evening",
      weather: "Open/Windy",
      timings: "10:00 AM - 05:00 PM",
      entryFee: { Entry: "Free (ID Proof required)" }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (22 km)",
      nearestRailway: "Chandigarh Junction (10 km)",
      busConnectivity: "Part of the Capitol Complex area"
    },

    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/openhand"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Located in a sunken ditch (Contemplation Pit) accessible via ramps."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Security Check" },
      { time: "04:30 PM", activity: "Photography & Sunset" },
      { time: "05:30 PM", activity: "Walk to Geometric Hill" }
    ],

    foodGuide: [
      { name: "Stu C (Student Centre)", type: "University", specialty: "Rajma Chawal", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },

  // --- NATURE & LAKES ---
  {
    id: 3104,
    name: "Sukhna Lake",
    slug: "sukhna-lake",
    state: "Chandigarh",
    category: "Nature",
    badge: "Rainfed Lake",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sukhna_Lake_Chandigarh.jpg/800px-Sukhna_Lake_Chandigarh.jpg",
    description: "A beautiful man-made reservoir at the foothills of the Himalayas (Shivalik hills). It is the venue for the Asian Rowing Championships and a favorite spot for morning joggers.",
    coordinates: { lat: 30.7421, lng: 76.8188 },

    essentials: {
      bestTime: "All Year (Evenings are lively)",
      weather: "Breezy",
      timings: "05:00 AM - 09:00 PM (Boating till 6 PM)",
      entryFee: {
        Entry: "Free",
        Boating: "₹200-400 (Paddle/Shikara)"
      }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (7 km)",
      busConnectivity: "CTU buses stop right at the lake entrance"
    },

    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/sukhna"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The promenade is wide, flat, and paved. Ramps available at entry. Accessible toilets present."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Boating" },
      { time: "06:00 PM", activity: "Walk along the Bund" },
      { time: "07:00 PM", activity: "Snacks at CITCO Cafeteria" }
    ],

    foodGuide: [
      { name: "CITCO Mermaid", type: "Lake View", specialty: "South Indian & Fast Food", rating: 4.2 },
      { name: "Stu C", type: "Nearby", specialty: "Cold Coffee", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3105,
    name: "Zakir Hussain Rose Garden",
    slug: "rose-garden-chandigarh",
    state: "Chandigarh",
    category: "Nature",
    badge: "Asia's Largest Rose Garden",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Rose_Garden_Chandigarh.jpg/800px-Rose_Garden_Chandigarh.jpg",
    description: "Spread over 30 acres in Sector 16, this garden features 1600 varieties of roses. The annual Rose Festival (Feb-Mar) is a major cultural event in the city.",
    coordinates: { lat: 30.7460, lng: 76.7839 },

    essentials: {
      bestTime: "February to March (Peak Bloom)",
      weather: "Sunny",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Located in Sector 16, well connected by bus/auto"
    },

    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rosegarden"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved pathways crisscross the entire garden. Terrain is flat."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Walk through Rose Beds" },
      { time: "05:30 PM", activity: "Musical Fountain (Evening)" },
      { time: "06:30 PM", activity: "Visit Sector 17 Plaza (Nearby)" }
    ],

    foodGuide: [
      { name: "Garg Chaat", type: "Sector 23", specialty: "Golgappe", rating: 4.5 },
      { name: "Hot Millions", type: "Sector 17", specialty: "Burgers & Shakes", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16 (Opposite)"
    }
  },
  {
    id: 3106,
    name: "Chandigarh Bird Park",
    slug: "chandigarh-bird-park",
    state: "Chandigarh",
    category: "Nature",
    badge: "Exotic Aviary",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chandigarh_Bird_Park_Entrance.jpg/800px-Chandigarh_Bird_Park_Entrance.jpg",
    description: "A newly established walk-through aviary located behind Sukhna Lake. It houses exotic birds like Macaws, Cockatoos, and Swans in a naturalistic habitat.",
    coordinates: { lat: 30.7450, lng: 76.8150 },

    essentials: {
      bestTime: "All Year",
      weather: "Outdoor",
      timings: "10:00 AM - 06:00 PM (Closed Mondays & Tuesdays)",
      entryFee: {
        Adult: "₹50",
        Child: "₹30"
      }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (7 km)",
      busConnectivity: "Located in Nagar Van (City Forest), near Sukhna Lake"
    },

    externalLinks: {
      officialBooking: "https://chandigarhforest.gov.in/",
      googleMaps: "https://goo.gl/maps/birdpark"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The aviary has smooth paved paths suitable for wheelchairs."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Walk through Small Aviary" },
      { time: "11:00 AM", activity: "Large Aviary (Aquatic Birds)" },
      { time: "12:00 PM", activity: "Exit to Sukhna Lake" }
    ],

    foodGuide: [
      { name: "Sukhna Lake Cafeteria", type: "Nearby", specialty: "Snacks", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },

  // --- MUSEUMS & CULTURE ---
  {
    id: 3107,
    name: "Government Museum and Art Gallery",
    slug: "govt-museum-chandigarh",
    state: "Chandigarh",
    category: "Heritage",
    badge: "Le Corbusier Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Government_Museum_and_Art_Gallery%2C_Chandigarh.jpg/800px-Government_Museum_and_Art_Gallery%2C_Chandigarh.jpg",
    description: "Designed by Le Corbusier, this museum houses a magnificent collection of Gandhara sculptures, Pahari miniature paintings, and contemporary Indian art.",
    coordinates: { lat: 30.7492, lng: 76.7906 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor/AC",
      timings: "10:00 AM - 04:30 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹10",
        Foreigner: "₹100",
        Camera: "₹5"
      }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (20 km)",
      nearestRailway: "Chandigarh Junction (8 km)",
      busConnectivity: "Located in Sector 10 (Cultural Complex)"
    },

    externalLinks: {
      officialBooking: "http://chdmuseum.gov.in/",
      googleMaps: "https://goo.gl/maps/govtmuseum"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps and elevators are available. The building design emphasizes accessibility."
    },

    routePlan: [
      { time: "11:00 AM", activity: "Gandhara Sculpture Gallery" },
      { time: "12:30 PM", activity: "Miniature Painting Section" },
      { time: "02:00 PM", activity: "Natural History Museum (Next door)" }
    ],

    foodGuide: [
      { name: "Willow Cafe", type: "Sector 10", specialty: "Continental & Kebabs", rating: 4.6 },
      { name: "Backpackers Cafe", type: "Cafe", specialty: "All Day Breakfast", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },
  {
    id: 3108,
    name: "Le Corbusier Centre",
    slug: "le-corbusier-centre",
    state: "Chandigarh",
    category: "Heritage",
    badge: "Birthplace of the City",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Le_Corbusier_Centre_Chandigarh.jpg/800px-Le_Corbusier_Centre_Chandigarh.jpg",
    description: "The old office of the Swiss-French architect Le Corbusier, now converted into a museum. It displays his sketches, letters, and the original plans for the city of Chandigarh.",
    coordinates: { lat: 30.7336, lng: 76.7972 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (18 km)",
      nearestRailway: "Chandigarh Junction (6 km)",
      busConnectivity: "Located in Sector 19, accessible by rickshaw"
    },

    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/lecorbusier"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Single-story building with flat access."
    },

    routePlan: [
      { time: "03:00 PM", activity: "View Original City Plans" },
      { time: "04:00 PM", activity: "Read Corbusier's Letters" },
      { time: "05:00 PM", activity: "Visit Pal Dhaba (Sector 28)" }
    ],

    foodGuide: [
      { name: "Pal Dhaba", type: "Legendary", specialty: "Butter Chicken & Naan", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMSH Sector 16"
    }
  },

  // --- LEISURE ---
  {
    id: 3109,
    name: "Elante Mall",
    slug: "elante-mall",
    state: "Chandigarh",
    category: "Leisure",
    badge: "Largest Mall in Region",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Elante_Mall_Chandigarh.jpg/800px-Elante_Mall_Chandigarh.jpg",
    description: "The go-to destination for shopping, dining, and entertainment in the Tricity area. It features premium brands, a large food court, and a multiplex.",
    coordinates: { lat: 30.7055, lng: 76.8013 },

    essentials: {
      bestTime: "All Year (AC)",
      weather: "Indoor",
      timings: "11:00 AM - 11:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (15 km)",
      nearestRailway: "Chandigarh Junction (4 km)",
      busConnectivity: "Located in Industrial Area Phase 1"
    },

    externalLinks: {
      officialBooking: "https://www.nexusmalls.com/",
      googleMaps: "https://goo.gl/maps/elante"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible with elevators, escalators, and disabled restrooms."
    },

    routePlan: [
      { time: "01:00 PM", activity: "Shopping" },
      { time: "04:00 PM", activity: "Movie or Gaming Zone" },
      { time: "08:00 PM", activity: "Dinner at Courtyard" }
    ],

    foodGuide: [
      { name: "Pirates of Grill", type: "Buffet", specialty: "Barbeque", rating: 4.5 },
      { name: "Brooklyn Central", type: "American", specialty: "Mac n Cheese", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "Government Medical College (GMCH 32)"
    }
  },
  {
    id: 3110,
    name: "Japanese Garden",
    slug: "japanese-garden-chandigarh",
    state: "Chandigarh",
    category: "Nature",
    badge: "Zen Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Japanese_Garden_Chandigarh.jpg/800px-Japanese_Garden_Chandigarh.jpg",
    description: "A beautifully landscaped garden in Sector 31 featuring Japanese architecture, pagodas, meditation huts, a Zen garden, and water bodies. It is connected by an underground tunnel.",
    coordinates: { lat: 30.7028, lng: 76.7865 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "05:00 AM - 11:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh Airport (15 km)",
      nearestRailway: "Chandigarh Junction (6 km)",
      busConnectivity: "Located in Sector 31"
    },

    externalLinks: {
      officialBooking: "http://chdtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/japanesegarden"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paths are paved. The tunnel connecting Phase 1 and 2 has ramps."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Pagoda Photography" },
      { time: "05:00 PM", activity: "Meditation in Zen Garden" },
      { time: "06:00 PM", activity: "Walk through Tunnel" }
    ],

    foodGuide: [
      { name: "Sector 31 Market", type: "Local", specialty: "Indian Sweets", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-2116",
      nearestHospital: "GMCH Sector 32"
    }
  }
]; 
 
