/**
 * ASSAM_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: ATDC (Assam Tourism Dev Corp) & Kaziranga/Manas Authorities
 * - Transport: Ferry services (IWT) & ASTC bus schedules
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const ASSAM_PLACES = [
  // --- WILDLIFE ---
  {
    id: 401,
    name: "Kaziranga National Park",
    slug: "kaziranga-national-park",
    state: "Assam",
    category: "Wildlife",
    badge: "Home of One-Horned Rhino",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rhinoceros_unicornis_in_Kaziranga_National_Park.jpg/800px-Rhinoceros_unicornis_in_Kaziranga_National_Park.jpg",
    description: "A UNESCO World Heritage Site hosting two-thirds of the world's great one-horned rhinoceroses. The vast expanse of tall elephant grass and marshland is also a Tiger Reserve.",
    coordinates: { lat: 26.5775, lng: 93.1711 },

    essentials: {
      bestTime: "November to April",
      weather: "Foggy Mornings/Pleasant",
      timings: "07:30 AM - 10:00 AM (Morning), 01:30 PM - 03:00 PM (Afternoon)",
      entryFee: {
        Indian: "₹100 (Entry) + ₹450 (Jeep Seat approx)",
        Foreigner: "₹650 (Entry) + Fees",
        ElephantSafari: "₹900-1200 (Per Person)"
      }
    },

    transport: {
      nearestAirport: "Jorhat (97 km) or Guwahati (217 km)",
      nearestRailway: "Furkating (75 km)",
      busConnectivity: "Frequent ASTC buses from Guwahati (ISBT) to Kohora (4-5 hours)"
    },

    externalLinks: {
      officialBooking: "https://kaziranga.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/kaziranga"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jeep safaris are high-clearance vehicles. Not wheelchair accessible. Orchid Park nearby is accessible."
    },

    routePlan: [
      { time: "05:30 AM", activity: "Elephant Safari (Central Range)" },
      { time: "09:00 AM", activity: "Orchid & Biodiversity Park" },
      { time: "02:00 PM", activity: "Jeep Safari (Western Range)" }
    ],

    foodGuide: [
      { name: "Pelican Resort", type: "Resort", specialty: "Assamese Thali", rating: 4.3 },
      { name: "Maihang Restaurant", type: "Local", specialty: "Duck Curry with Ash Gourd", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Civil Hospital, Bokakhat"
    }
  },
  {
    id: 402,
    name: "Manas National Park",
    slug: "manas-national-park",
    state: "Assam",
    category: "Wildlife",
    badge: "UNESCO Natural Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Manas_National_Park_Scenery.jpg/800px-Manas_National_Park_Scenery.jpg",
    description: "Located at the Himalayan foothills, Manas is famous for its Project Tiger reserve, elephant reserve, and biosphere reserve. It is known for its rare golden langurs and red pandas.",
    coordinates: { lat: 26.6594, lng: 91.0011 },

    essentials: {
      bestTime: "October to April",
      weather: "Sub-tropical",
      timings: "06:00 AM - 03:00 PM (Entry)",
      entryFee: {
        Indian: "₹100 (Entry)",
        JeepHire: "₹3000-4000 (Full Jeep)",
        Camera: "₹100"
      }
    },

    transport: {
      nearestAirport: "Guwahati (145 km)",
      nearestRailway: "Barpeta Road (22 km)",
      busConnectivity: "Travel to Barpeta Road via bus, then hire a taxi to Bansbari (Entry)"
    },

    externalLinks: {
      officialBooking: "https://manasnationalpark.co.in/",
      googleMaps: "https://goo.gl/maps/manas"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote jungle terrain. Lodges near the gate are accessible, but safaris are not."
    },

    routePlan: [
      { time: "06:30 AM", activity: "Jeep Safari to Mathanguri" },
      { time: "12:00 PM", activity: "Picnic by Manas River (Beki)" },
      { time: "04:00 PM", activity: "Visit Bodo Tribal Village" }
    ],

    foodGuide: [
      { name: "Florican Cottage", type: "Lodge", specialty: "Local Fish Curry", rating: 4.2 },
      { name: "Smiling Tusker", type: "Camp", specialty: "Bodo Cuisine", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Barpeta Civil Hospital"
    }
  },

  // --- SPIRITUAL & HERITAGE ---
  {
    id: 403,
    name: "Kamakhya Temple",
    slug: "kamakhya-temple",
    state: "Assam",
    category: "Spiritual",
    badge: "Oldest Shakti Peeth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kamakhya_Temple_Guwahati.jpg/800px-Kamakhya_Temple_Guwahati.jpg",
    description: "Perched on Nilachal Hill in Guwahati, this is one of the most revered Shakti Peethas in India. It is famous for the Ambubachi Mela and its unique Tantric traditions.",
    coordinates: { lat: 26.1664, lng: 91.7056 },

    essentials: {
      bestTime: "September to March",
      weather: "Humid",
      timings: "08:00 AM - 01:00 PM, 02:30 PM - 05:30 PM",
      entryFee: {
        GeneralQ: "Free",
        VIP: "₹501 (Direct Entry)",
        Defence: "Special Queue"
      }
    },

    transport: {
      nearestAirport: "Guwahati (20 km)",
      nearestRailway: "Kamakhya Junction (3 km)",
      busConnectivity: "ASTC electric buses run frequently from Guwahati station to the hill top"
    },

    externalLinks: {
      officialBooking: "https://www.maakamakhya.org/",
      googleMaps: "https://goo.gl/maps/kamakhya"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Significant steps to reach the main sanctum (Garbhagriha). The outer complex is paved but steep."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Queue for Darshan" },
      { time: "11:00 AM", activity: "Darshan & Parikrama" },
      { time: "12:30 PM", activity: "View of Guwahati City from Hill" }
    ],

    foodGuide: [
      { name: "Bhog (Temple)", type: "Prasad", specialty: "Khichdi & Labra", rating: 4.8 },
      { name: "Nilachal Dining", type: "Budget", specialty: "Veg Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Sanjeevani Hospital, Maligaon"
    }
  },
  {
    id: 404,
    name: "Rang Ghar",
    slug: "rang-ghar",
    state: "Assam",
    category: "Heritage",
    badge: "Asia's Oldest Amphitheatre",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rang_Ghar_Sivasagar.jpg/800px-Rang_Ghar_Sivasagar.jpg",
    description: "Located in Sivasagar, this two-storied royal sports pavilion was built by Ahom King Pramatta Singha in 1746. It is often referred to as the 'Colosseum of the East'.",
    coordinates: { lat: 26.9632, lng: 94.6288 },

    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300",
        Video: "₹25"
      }
    },

    transport: {
      nearestAirport: "Jorhat (60 km)",
      nearestRailway: "Sivasagar Town (3 km)",
      busConnectivity: "Auto-rickshaws available from Sivasagar bus stand"
    },

    externalLinks: {
      officialBooking: "https://archaeology.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/rangghar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The expansive lawns and ground floor approach are flat and accessible. Upper floor requires stairs."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Rang Ghar Visit" },
      { time: "11:30 AM", activity: "Talatal Ghar (Underground Palace)" },
      { time: "01:00 PM", activity: "Sivasagar Tank (Borpukhuri)" }
    ],

    foodGuide: [
      { name: "Kareng Restaurant", type: "City", specialty: "Pork with Bamboo Shoot", rating: 4.2 },
      { name: "Sky Chef", type: "Family", specialty: "Chinese & Indian", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Civil Hospital Sivasagar"
    }
  },
  {
    id: 405,
    name: "Majuli Island",
    slug: "majuli-island",
    state: "Assam",
    category: "Heritage",
    badge: "World's Largest River Island",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kamalabari_Satra_Majuli.jpg/800px-Kamalabari_Satra_Majuli.jpg",
    description: "A cultural hub in the Brahmaputra River, famous for its Vaishnavite Monasteries (Satras) and mask-making culture. It is currently vying for UNESCO World Heritage status.",
    coordinates: { lat: 26.9503, lng: 94.1036 },

    essentials: {
      bestTime: "October to March (Raas Festival in Nov)",
      weather: "River Breeze/Cool",
      timings: "Ferry: 7 AM - 3:30 PM (Strict timings)",
      entryFee: {
        Entry: "Free",
        Ferry: "₹15-30 (Passenger), ₹800+ (Car)",
        Museums: "₹20-50"
      }
    },

    transport: {
      nearestAirport: "Jorhat (20 km to Ghat)",
      nearestRailway: "Jorhat (20 km to Ghat)",
      busConnectivity: "Take ferry from Neamati Ghat (Jorhat) to Kamalabari Ghat (Majuli)"
    },

    externalLinks: {
      officialBooking: "https://iwtai.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/majuli"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding ferries can be challenging due to sandy banks and ramps. Satras are mostly ground level."
    },

    routePlan: [
      { time: "08:30 AM", activity: "Ferry Ride from Neamati Ghat" },
      { time: "10:30 AM", activity: "Auniati Satra (Museum)" },
      { time: "02:00 PM", activity: "Samaguri Satra (Mask Making)" }
    ],

    foodGuide: [
      { name: "Ural Restaurant", type: "Local", specialty: "Mishing Tribal Thali", rating: 4.4 },
      { name: "La Maison de Ananda", type: "Homestay", specialty: "Rice Beer & Fish", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Garamur Civil Hospital"
    }
  },

  // --- NATURE & SCENIC ---
  {
    id: 406,
    name: "Umananda Island",
    slug: "umananda-island",
    state: "Assam",
    category: "Nature",
    badge: "Smallest Inhabited River Island",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Umananda_Island_Guwahati.jpg/800px-Umananda_Island_Guwahati.jpg",
    description: "Located in the middle of the Brahmaputra river near Guwahati, this peacock-shaped island houses the Umananda Temple dedicated to Lord Shiva and is home to endangered Golden Langurs.",
    coordinates: { lat: 26.1925, lng: 91.7455 },

    essentials: {
      bestTime: "All Year (Avoid Monsoon)",
      weather: "Humid/Breezy",
      timings: "05:30 AM - 05:00 PM",
      entryFee: {
        Ferry: "₹20 (Govt), ₹100+ (Private)",
        Temple: "Free"
      }
    },

    transport: {
      nearestAirport: "Guwahati (25 km)",
      nearestRailway: "Guwahati Station (1.5 km)",
      busConnectivity: "Walkable from Fancy Bazar or Uzan Bazar Ghat"
    },

    externalLinks: {
      officialBooking: "https://tourism.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/umananda"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing about 100+ steep steps from the ghat to the temple. Not accessible."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Ferry from Uzan Bazar" },
      { time: "03:30 PM", activity: "Temple Darshan" },
      { time: "04:30 PM", activity: "Sunset view of Brahmaputra" }
    ],

    foodGuide: [
      { name: "Ghat Stalls", type: "Street", specialty: "Tea & Snacks", rating: 3.5 },
      { name: "Mangal Chandi", type: "City", specialty: "Fish Thali (In City)", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Mahendra Mohan Choudhury Hospital"
    }
  },
  {
    id: 407,
    name: "Haflong",
    slug: "haflong",
    state: "Assam",
    category: "Hill Stations",
    badge: "Scotland of Assam",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Haflong_Lake_View.jpg/800px-Haflong_Lake_View.jpg",
    description: "The only hill station in Assam, Haflong is known for its beautiful lake, rolling hills, and the historic Vistadome train ride through the Jatinga valley.",
    coordinates: { lat: 25.1726, lng: 93.0188 },

    essentials: {
      bestTime: "October to April",
      weather: "Cool/Misty",
      timings: "24 Hours",
      entryFee: {
        Lake: "Free",
        Boating: "₹50-100"
      }
    },

    transport: {
      nearestAirport: "Silchar (100 km) or Guwahati (330 km)",
      nearestRailway: "New Haflong (4 km)",
      busConnectivity: "Buses available from Silchar and Guwahati"
    },

    externalLinks: {
      officialBooking: "https://tourism.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/haflong"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Haflong Lake area has paved pathways. Station is accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Haflong Lake Boating" },
      { time: "11:00 AM", activity: "Hanging Bridge" },
      { time: "03:00 PM", activity: "Jatinga Bird Watching Point" }
    ],

    foodGuide: [
      { name: "Hangover Cafe", type: "Cafe", specialty: "Coffee & Momos", rating: 4.3 },
      { name: "Nh 54 Dhaba", type: "Highway", specialty: "Rice & Chicken", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Haflong Civil Hospital"
    }
  },
  {
    id: 408,
    name: "Nameri National Park",
    slug: "nameri-national-park",
    state: "Assam",
    category: "Nature",
    badge: "Adventure Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jia_Bhoroli_River_Nameri.jpg/800px-Jia_Bhoroli_River_Nameri.jpg",
    description: "Located at the foothills of the Eastern Himalayas, Nameri is famous for river rafting on the Jia Bhoroli river and birdwatching (home to the White Winged Wood Duck).",
    coordinates: { lat: 26.9318, lng: 92.8804 },

    essentials: {
      bestTime: "November to March",
      weather: "Cool/Forest",
      timings: "06:00 AM - 02:00 PM (Entry)",
      entryFee: {
        Entry: "₹50 (Indian)",
        Rafting: "₹1800-2500 (Per boat)",
        ForestGuard: "Mandatory"
      }
    },

    transport: {
      nearestAirport: "Tezpur (35 km)",
      nearestRailway: "Rangapara (25 km)",
      busConnectivity: "Taxi from Tezpur is the best option"
    },

    externalLinks: {
      officialBooking: "https://sonitpur.gov.in/",
      googleMaps: "https://goo.gl/maps/nameri"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Activities involve hiking and rafting. Eco-camps are grassy and uneven."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Jungle Trek (2-3 km)" },
      { time: "10:00 AM", activity: "River Rafting on Jia Bhoroli" },
      { time: "01:00 PM", activity: "Lunch at Eco Camp" }
    ],

    foodGuide: [
      { name: "Nameri Eco Camp", type: "Camp", specialty: "Fresh River Fish", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Tezpur Medical College (35 km)"
    }
  },
  {
    id: 409,
    name: "Pobitora Wildlife Sanctuary",
    slug: "pobitora-wildlife-sanctuary",
    state: "Assam",
    category: "Wildlife",
    badge: "Highest Rhino Density",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rhino_at_Pobitora.jpg/800px-Rhino_at_Pobitora.jpg",
    description: "Known as 'Mini Kaziranga', Pobitora holds the highest density of one-horned rhinos in the world. Being close to Guwahati, it is perfect for a quick day trip.",
    coordinates: { lat: 26.2486, lng: 92.0427 },

    essentials: {
      bestTime: "November to April",
      weather: "Dry/Sunny",
      timings: "06:30 AM - 03:00 PM",
      entryFee: {
        Entry: "₹50",
        JeepSafari: "₹1500-2000",
        ElephantSafari: "₹1000"
      }
    },

    transport: {
      nearestAirport: "Guwahati (50 km)",
      nearestRailway: "Guwahati (45 km)",
      busConnectivity: "Direct buses from Adabari Bus Stand, Guwahati (1.5 hours)"
    },

    externalLinks: {
      officialBooking: "https://tourism.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/pobitora"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Safari vehicles are not accessible. The viewing platform near the gate is accessible."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Drive from Guwahati" },
      { time: "09:00 AM", activity: "Jeep Safari" },
      { time: "12:00 PM", activity: "Mayong Black Magic Museum (Nearby)" }
    ],

    foodGuide: [
      { name: "Maibong Resort", type: "Resort", specialty: "Assamese Thali", rating: 4.2 },
      { name: "Grey Heron", type: "Restaurant", specialty: "Local Chicken", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Morigaon Civil Hospital"
    }
  },
  {
    id: 410,
    name: "Srimanta Sankaradeva Kalakshetra",
    slug: "srimanta-sankaradeva-kalakshetra",
    state: "Assam",
    category: "Heritage",
    badge: "Cultural Hub of Assam",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Srimanta_Sankaradev_Kalakshetra_Main_Entrance.jpg/800px-Srimanta_Sankaradev_Kalakshetra_Main_Entrance.jpg",
    description: "A grand cultural institution in Guwahati showcasing the life of Vaishnavite saint Srimanta Sankardev. It features museums, open-air theatres, and traditional artisan villages.",
    coordinates: { lat: 26.1287, lng: 91.8217 },

    essentials: {
      bestTime: "All Year",
      weather: "Comfortable",
      timings: "10:00 AM - 07:00 PM (Light Show in evening)",
      entryFee: {
        Adult: "₹30",
        Child: "₹10",
        Museum: "₹10"
      }
    },

    transport: {
      nearestAirport: "Guwahati (30 km)",
      nearestRailway: "Guwahati (10 km)",
      busConnectivity: "Located in Panjabari, well connected by city buses (Uber/Ola available)"
    },

    externalLinks: {
      officialBooking: "https://kalakshetra.assam.gov.in/",
      googleMaps: "https://goo.gl/maps/kalakshetra"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible with paved walkways, ramps, and battery-operated vehicles inside."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Museum of History" },
      { time: "04:30 PM", activity: "Walk through Artisan Village" },
      { time: "06:00 PM", activity: "Light & Sound Show" }
    ],

    foodGuide: [
      { name: "Kalakshetra Cafeteria", type: "Cafe", specialty: "Tea & Pitha", rating: 3.8 },
      { name: "Paradise", type: "City (Nearby)", specialty: "Parampara Thali", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-3939",
      nearestHospital: "Down Town Hospital (2 km)"
    }
  }
];