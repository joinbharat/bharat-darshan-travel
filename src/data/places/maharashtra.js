/**
 * MAHARASHTRA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: MTDC (Maharashtra Tourism) & ASI
 * - Wildlife: MyTadoba (Official Gov Portal)
 * - Spiritual: Shirdi Sansthan & Siddhivinayak Trust
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const MAHARASHTRA_PLACES = [
  // --- HERITAGE (UNESCO) ---
  {
    id: 1501,
    name: "Ajanta Caves",
    slug: "ajanta-caves",
    state: "Maharashtra",
    category: "Heritage",
    badge: "Masterpiece of Buddhist Art",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ajanta_Caves_75.JPG/800px-Ajanta_Caves_75.JPG",
    description: "A UNESCO World Heritage site featuring 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. Famous for their exquisite frescoes and sculptures.",
    coordinates: { lat: 20.5519, lng: 75.7033 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Warm",
      timings: "09:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        AmenityCharge: "₹20"
      }
    },

    transport: {
      nearestAirport: "Aurangabad (100 km)",
      nearestRailway: "Jalgaon (60 km) or Aurangabad (100 km)",
      busConnectivity: "MTDC buses run from Aurangabad. Shuttle bus from parking to caves."
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/ajanta"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing steep steps and ramps. Doli (Chair Palki) service available for elderly (₹1500-2000)."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Cave 1 & 2 (Paintings)" },
      { time: "11:30 AM", activity: "Cave 26 (Reclining Buddha)" },
      { time: "01:00 PM", activity: "Viewpoint Trek (Optional)" }
    ],

    foodGuide: [
      { name: "MTDC Restaurant", type: "Govt", specialty: "Indian Thali", rating: 3.5 },
      { name: "Shopping Plaza Stalls", type: "Basic", specialty: "Snacks", rating: 3.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Rural Hospital Fardapur"
    }
  },
  {
    id: 1502,
    name: "Ellora Caves",
    slug: "ellora-caves",
    state: "Maharashtra",
    category: "Heritage",
    badge: "Largest Monolithic Structure",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ellora_cave16_001.jpg/800px-Ellora_cave16_001.jpg",
    description: "A UNESCO World Heritage site known for the Kailasa Temple (Cave 16), the largest single monolithic rock excavation in the world. It features Buddhist, Hindu, and Jain caves.",
    coordinates: { lat: 20.0258, lng: 75.1780 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "06:00 AM - 06:00 PM (Closed Tuesdays)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        Bus: "₹20 (Internal)"
      }
    },

    transport: {
      nearestAirport: "Aurangabad (30 km)",
      nearestRailway: "Aurangabad (30 km)",
      busConnectivity: "Direct city buses and taxis from Aurangabad"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/ellora"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Kailasa Temple ground level is accessible via ramps. Upper levels and other caves have steps."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Cave 16 (Kailasa Temple)" },
      { time: "10:30 AM", activity: "Buddhist Caves (Cave 10)" },
      { time: "12:30 PM", activity: "Jain Caves (Bus Ride)" }
    ],

    foodGuide: [
      { name: "Kailash Restaurant", type: "Family", specialty: "Pure Veg", rating: 4.0 },
      { name: "Hiranya Resort", type: "Highway", specialty: "Maharashtrian", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Khultabad Rural Hospital"
    }
  },
  {
    id: 1503,
    name: "Gateway of India",
    slug: "gateway-of-india",
    state: "Maharashtra",
    category: "Heritage",
    badge: "Icon of Mumbai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/800px-Mumbai_03-2016_30_Gateway_of_India.jpg",
    description: "Built to commemorate the visit of King George V and Queen Mary in 1911. It overlooks the Arabian Sea and is the starting point for ferries to the Elephanta Caves.",
    coordinates: { lat: 18.9220, lng: 72.8347 },

    essentials: {
      bestTime: "November to February",
      weather: "Humid",
      timings: "24 Hours (Boats: 9 AM - 5 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Mumbai (CSMIA) - 25 km",
      nearestRailway: "Churchgate / CST (2-3 km)",
      busConnectivity: "Best buses and taxis available from anywhere in Mumbai"
    },

    externalLinks: {
      officialBooking: "https://maharashtratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/gateway"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The plaza is flat and paved. However, boarding boats requires assistance."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry to Elephanta Caves" },
      { time: "02:00 PM", activity: "Return & Taj Mahal Palace View" },
      { time: "04:00 PM", activity: "Colaba Causeway Shopping" }
    ],

    foodGuide: [
      { name: "Bademiya", type: "Street Legend", specialty: "Kebabs & Rolls", rating: 4.3 },
      { name: "Leopold Cafe", type: "Heritage", specialty: "Beer & Continental", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "St George Hospital"
    }
  },
  {
    id: 1504,
    name: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    slug: "csmt-mumbai",
    state: "Maharashtra",
    category: "Heritage",
    badge: "Victorian Gothic Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chhatrapati_Shivaji_Terminus_High_Res.jpg/800px-Chhatrapati_Shivaji_Terminus_High_Res.jpg",
    description: "A UNESCO World Heritage site and operational railway station. Designed by F.W. Stevens, it is an outstanding example of Victorian Gothic Revival architecture blended with Indian themes.",
    coordinates: { lat: 18.9401, lng: 72.8351 },

    essentials: {
      bestTime: "All Year (Night Illumination is best)",
      weather: "Humid",
      timings: "24 Hours (Museum: 2 PM - 5 PM)",
      entryFee: {
        Station: "Platform Ticket ₹10",
        Museum: "₹200"
      }
    },

    transport: {
      nearestAirport: "Mumbai (CSMIA) - 22 km",
      nearestRailway: "CSMT (It is the station)",
      busConnectivity: "Major hub for BEST buses"
    },

    externalLinks: {
      officialBooking: "https://erail.in/",
      googleMaps: "https://goo.gl/maps/csmt"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Station has ramps and lifts. Heritage museum access might be limited."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Railway Museum Tour" },
      { time: "06:00 PM", activity: "Photography of Exterior" },
      { time: "07:00 PM", activity: "Night Illumination View" }
    ],

    foodGuide: [
      { name: "Cannon Pav Bhaji", type: "Street", specialty: "Pav Bhaji", rating: 4.6 },
      { name: "Pancham Puriwala", type: "Heritage", specialty: "Puri Bhaji", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "St George Hospital (Opposite)"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 1505,
    name: "Shirdi Sai Baba Temple",
    slug: "shirdi-sai-baba",
    state: "Maharashtra",
    category: "Spiritual",
    badge: "Holy Shrine of Sai Baba",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Shirdi_Sai_Baba_Temple_Complex.jpg/800px-Shirdi_Sai_Baba_Temple_Complex.jpg",
    description: "The final resting place (Samadhi Mandir) of the 19th-century saint Sai Baba. Millions of devotees visit this town to seek blessings and experience the 'Shraddha & Saburi' philosophy.",
    coordinates: { lat: 19.7667, lng: 74.4764 },

    essentials: {
      bestTime: "All Year (Thursdays are crowded)",
      weather: "Dry",
      timings: "04:00 AM - 11:15 PM (Kakad Aarti: 4:30 AM)",
      entryFee: {
        General: "Free",
        PaidPass: "₹200 (Online Booking Recommended)"
      }
    },

    transport: {
      nearestAirport: "Shirdi Airport (SAG) - 14 km",
      nearestRailway: "Sainagar Shirdi (3 km)",
      busConnectivity: "Direct buses from Mumbai, Pune, and Nashik"
    },

    externalLinks: {
      officialBooking: "https://online.sai.org.in/",
      googleMaps: "https://goo.gl/maps/shirdi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Dedicated gate (Gate No. 5) for senior citizens and differently-abled. Wheelchairs available."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Samadhi Mandir Darshan" },
      { time: "08:00 AM", activity: "Dwarkamai & Chavadi" },
      { time: "12:00 PM", activity: "Prasadalaya (Mega Kitchen)" }
    ],

    foodGuide: [
      { name: "Prasadalaya", type: "Pilgrim", specialty: "Free Meal", rating: 4.9 },
      { name: "Ahilya Wada", type: "City", specialty: "Maharashtrian Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "02423-258500",
      nearestHospital: "Sainath Hospital"
    }
  },
  {
    id: 1506,
    name: "Siddhivinayak Temple",
    slug: "siddhivinayak-mumbai",
    state: "Maharashtra",
    category: "Spiritual",
    badge: "Navasacha Ganpati",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Siddhivinayak_Temple_Mumbai.jpg/800px-Siddhivinayak_Temple_Mumbai.jpg",
    description: "Located in Prabhadevi, Mumbai, this is one of the richest and most visited temples in India. The idol of Ganesha here has his trunk tilted to the right.",
    coordinates: { lat: 19.0169, lng: 72.8304 },

    essentials: {
      bestTime: "All Year (Tuesdays crowded)",
      weather: "Humid",
      timings: "05:30 AM - 10:00 PM",
      entryFee: {
        General: "Free",
        VIP: "₹50 (Online App)"
      }
    },

    transport: {
      nearestAirport: "Mumbai (12 km)",
      nearestRailway: "Dadar (2 km)",
      busConnectivity: "Accessible by taxi/bus from Dadar station"
    },

    externalLinks: {
      officialBooking: "https://www.siddhivinayak.org/",
      googleMaps: "https://goo.gl/maps/siddhivinayak"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Lifts available for elderly and disabled pilgrims. Separate queue."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Darshan" },
      { time: "09:00 AM", activity: "Visit Shivaji Park (Nearby)" },
      { time: "10:30 AM", activity: "Dadar Market Shopping" }
    ],

    foodGuide: [
      { name: "Aaswad", type: "Heritage", specialty: "Misal Pav", rating: 4.5 },
      { name: "Prakash Shakahari", type: "Local", specialty: "Sabudana Vada", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Hinduja Hospital"
    }
  },

  // --- HILL STATIONS ---
  {
    id: 1507,
    name: "Mahabaleshwar",
    slug: "mahabaleshwar",
    state: "Maharashtra",
    category: "Hill Stations",
    badge: "Land of Strawberries",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Venna_Lake_Mahabaleshwar.jpg/800px-Venna_Lake_Mahabaleshwar.jpg",
    description: "A popular hill station in the Western Ghats known for its strawberry farms, ancient temples, and stunning viewpoints like Arthur's Seat and Elephant's Head.",
    coordinates: { lat: 17.9217, lng: 73.6556 },

    essentials: {
      bestTime: "October to June (Strawberry Season: Dec-Feb)",
      weather: "Cool/Misty",
      timings: "24 Hours (Viewpoints: 6 AM - 6 PM)",
      entryFee: {
        PollutionTax: "₹20 (Per person)",
        VennaLakeBoating: "₹500+"
      }
    },

    transport: {
      nearestAirport: "Pune (120 km)",
      nearestRailway: "Pune (120 km) or Satara (50 km)",
      busConnectivity: "Direct MSRTC buses from Mumbai and Pune"
    },

    externalLinks: {
      officialBooking: "https://maharashtratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/mahabaleshwar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Venna Lake and Mapro Garden are flat. Viewpoints have rocky/uneven paths."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Arthur's Seat Viewpoint" },
      { time: "12:00 PM", activity: "Mapro Garden (Lunch & Shopping)" },
      { time: "04:00 PM", activity: "Venna Lake Boating" }
    ],

    foodGuide: [
      { name: "Mapro Garden", type: "Iconic", specialty: "Strawberry Cream & Pizza", rating: 4.7 },
      { name: "Bagicha Corner", type: "Casual", specialty: "Mulberry Cream", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Rural Hospital Mahabaleshwar"
    }
  },
  {
    id: 1508,
    name: "Lonavala & Khandala",
    slug: "lonavala-khandala",
    state: "Maharashtra",
    category: "Hill Stations",
    badge: "Monsoon Getaway",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lonavala_Bhushi_Dam.jpg/800px-Lonavala_Bhushi_Dam.jpg",
    description: "Twin hill stations located between Mumbai and Pune. Famous for the Bhushi Dam, Tiger Point, and the production of 'Chikki' (hard candy).",
    coordinates: { lat: 18.7515, lng: 73.4093 },

    essentials: {
      bestTime: "June to September (Monsoon)",
      weather: "Foggy/Rainy",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Pune (65 km) or Mumbai (80 km)",
      nearestRailway: "Lonavala Station (Local Trains)",
      busConnectivity: "Excellent connectivity via Mumbai-Pune Expressway"
    },

    externalLinks: {
      officialBooking: "https://maharashtratourism.gov.in/",
      googleMaps: "https://goo.gl/maps/lonavala"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Viewpoints and dam areas are slippery and uneven during monsoons."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Karla Caves (Ancient Buddhist)" },
      { time: "01:00 PM", activity: "Lunch at Sunny's Dhaba" },
      { time: "04:00 PM", activity: "Tiger Point (Sunset & Corn)" }
    ],

    foodGuide: [
      { name: "Maganlal Chikki", type: "Sweet Shop", specialty: "Lonavala Chikki", rating: 4.8 },
      { name: "German Bakery Wunderbar", type: "Cafe", specialty: "Pasta & Coffee", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Sanjivani Hospital"
    }
  },

  // --- WILDLIFE ---
  {
    id: 1509,
    name: "Tadoba Andhari Tiger Reserve",
    slug: "tadoba-tiger-reserve",
    state: "Maharashtra",
    category: "Wildlife",
    badge: "Jewel of Vidarbha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tadoba_Tiger.jpg/800px-Tadoba_Tiger.jpg",
    description: "Maharashtra's oldest and largest national park. It has one of the highest tiger populations in India, making sightings relatively frequent compared to other reserves.",
    coordinates: { lat: 20.2173, lng: 79.3034 },

    essentials: {
      bestTime: "October to June (Closed Tuesdays)",
      weather: "Dry/Hot",
      timings: "06:00 AM - 10:00 AM, 02:30 PM - 06:00 PM",
      entryFee: {
        Gypsy: "₹2500-3500 (Vehicle)",
        Entry: "₹1000-2000 (Permit)",
        Guide: "₹350"
      }
    },

    transport: {
      nearestAirport: "Nagpur (140 km)",
      nearestRailway: "Chandrapur (45 km)",
      busConnectivity: "Taxi from Chandrapur or Nagpur to Moharli Gate"
    },

    externalLinks: {
      officialBooking: "https://mytadoba.org/",
      googleMaps: "https://goo.gl/maps/tadoba"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Open Gypsies are high and require climbing. Not wheelchair accessible."
    },

    routePlan: [
      { time: "05:30 AM", activity: "Morning Safari (Moharli Zone)" },
      { time: "11:00 AM", activity: "Relax at Resort" },
      { time: "03:00 PM", activity: "Evening Safari (Agarzari Zone)" }
    ],

    foodGuide: [
      { name: "MTDC Resort", type: "Govt", specialty: "Varhadi Chicken", rating: 4.0 },
      { name: "Tigers' Heaven", type: "Resort", specialty: "Buffet", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Civil Hospital Chandrapur"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 1510,
    name: "Trimbakeshwar Temple",
    slug: "trimbakeshwar-nashik",
    state: "Maharashtra",
    category: "Spiritual",
    badge: "Source of Godavari River",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Trimbakeshwar_Temple_Nashik.jpg/800px-Trimbakeshwar_Temple_Nashik.jpg",
    description: "One of the 12 Jyotirlingas, located near Nashik. The Linga here has three faces symbolizing Brahma, Vishnu, and Shiva. It is also the origin of the Godavari river.",
    coordinates: { lat: 19.9323, lng: 73.5307 },

    essentials: {
      bestTime: "All Year (Monsoon is scenic)",
      weather: "Pleasant",
      timings: "05:30 AM - 09:00 PM",
      entryFee: {
        General: "Free",
        VIP: "₹200"
      }
    },

    transport: {
      nearestAirport: "Nashik (Ozar) - 50 km",
      nearestRailway: "Nashik Road (40 km)",
      busConnectivity: "Frequent city buses from Nashik CBS"
    },

    externalLinks: {
      officialBooking: "https://www.trimbakeshwartrust.com/",
      googleMaps: "https://goo.gl/maps/trimbakeshwar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Temple courtyard is paved but main sanctum entrance is narrow and crowded."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Darshan & Abhishekam" },
      { time: "10:00 AM", activity: "Kushavarta Kund" },
      { time: "12:00 PM", activity: "Drive to Brahmagiri Hills base" }
    ],

    foodGuide: [
      { name: "Ambika Bhojanalay", type: "Local", specialty: "Misal Pav", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-229-930",
      nearestHospital: "Sub-District Hospital Trimbak"
    }
  }
]; 
