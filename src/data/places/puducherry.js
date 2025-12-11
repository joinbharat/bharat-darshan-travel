/**
 * PUDUCHERRY_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Puducherry Tourism (PTDC) & Chunnambar Boat House
 * - Auroville: Official Visitor Centre Guidelines (auroville.org)
 * - Ashram: Sri Aurobindo Ashram Trust rules
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const PUDUCHERRY_PLACES = [
  // --- SPIRITUAL & ICONIC ---
  {
    id: 3701,
    name: "Matrimandir (Auroville)",
    slug: "matrimandir-auroville",
    state: "Puducherry",
    category: "Spiritual",
    badge: "Soul of the City",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Matrimandir_Auroville_Pondicherry.jpg/800px-Matrimandir_Auroville_Pondicherry.jpg",
    description: "A golden metallic sphere in the center of Auroville, symbolizing the birth of a new consciousness. It is not a temple but a place for silent concentration.",
    coordinates: { lat: 12.0069, lng: 79.8105 },

    essentials: {
      bestTime: "All Year",
      weather: "Humid",
      timings: "09:00 AM - 04:00 PM (Viewing Point)",
      entryFee: {
        ViewingPoint: "Free",
        InnerChamber: "Free (Strict in-person booking 2 days prior)"
      }
    },

    transport: {
      nearestAirport: "Chennai (145 km) or Puducherry (8 km)",
      nearestRailway: "Puducherry (12 km)",
      busConnectivity: "Auto/Taxi from Pondicherry town (12 km)"
    },

    externalLinks: {
      officialBooking: "https://auroville.org/",
      googleMaps: "https://goo.gl/maps/matrimandir"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Shuttle bus available for elderly/disabled from Visitor Centre to Viewing Point. Walking path is shaded."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Visitor Centre Video Intro" },
      { time: "10:00 AM", activity: "Walk to Viewing Point" },
      { time: "12:00 PM", activity: "Lunch at Solar Kitchen" }
    ],

    foodGuide: [
      { name: "Solar Kitchen", type: "Community", specialty: "Organic Buffer", rating: 4.5 },
      { name: "Tanto Pizzeria", type: "Auroville", specialty: "Wood Fired Pizza", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "JIPMER Hospital"
    }
  },
  {
    id: 3702,
    name: "Sri Aurobindo Ashram",
    slug: "sri-aurobindo-ashram",
    state: "Puducherry",
    category: "Spiritual",
    badge: "Yoga & Peace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sri_Aurobindo_Ashram_Main_Building.jpg/800px-Sri_Aurobindo_Ashram_Main_Building.jpg",
    description: "Founded in 1926 by Sri Aurobindo and The Mother. The main building houses their marble Samadhi, where devotees meditate in absolute silence amidst floral decorations.",
    coordinates: { lat: 11.9368, lng: 79.8341 },

    essentials: {
      bestTime: "All Year",
      weather: "City",
      timings: "08:00 AM - 12:00 PM, 02:00 PM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Puducherry (6 km)",
      nearestRailway: "Puducherry (2 km)",
      busConnectivity: "Located in White Town, walkable from beach"
    },

    externalLinks: {
      officialBooking: "https://www.sriaurobindoashram.org/",
      googleMaps: "https://goo.gl/maps/ashram"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ground level Samadhi access is flat. Shoes must be removed outside."
    },

    routePlan: [
      { time: "08:30 AM", activity: "Meditation at Samadhi" },
      { time: "09:30 AM", activity: "Bookshop & Library" },
      { time: "10:30 AM", activity: "Manakula Vinayagar Temple (Next door)" }
    ],

    foodGuide: [
      { name: "Ashram Dining Hall", type: "Ashram", specialty: "Simple Vegetarian Meal", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Government General Hospital"
    }
  },

  // --- BEACHES & LEISURE ---
  {
    id: 3703,
    name: "Promenade Beach (Rock Beach)",
    slug: "promenade-beach",
    state: "Puducherry",
    category: "Beaches",
    badge: "French Riviera of the East",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Promenade_Beach_Pondicherry_Morning.jpg/800px-Promenade_Beach_Pondicherry_Morning.jpg",
    description: "A 1.2km long rocky beachfront lined with heritage buildings, the War Memorial, and the Gandhi Statue. Vehicles are banned in the evenings, making it perfect for walking.",
    coordinates: { lat: 11.9339, lng: 79.8359 },

    essentials: {
      bestTime: "Evening (Traffic Free)",
      weather: "Breezy",
      timings: "24 Hours (No swimming due to rocks)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Puducherry (6 km)",
      nearestRailway: "Puducherry (1 km)",
      busConnectivity: "Heart of the city (White Town)"
    },

    externalLinks: {
      officialBooking: "https://tourism.py.gov.in/",
      googleMaps: "https://goo.gl/maps/promenade"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wide paved promenade is fully wheelchair accessible."
    },

    routePlan: [
      { time: "05:30 PM", activity: "Walk from War Memorial to Park" },
      { time: "06:30 PM", activity: "Coffee at Le Cafe" },
      { time: "07:30 PM", activity: "Visit Gandhi Statue" }
    ],

    foodGuide: [
      { name: "Le Cafe", type: "24x7 Cafe", specialty: "Coffee by the Sea", rating: 4.3 },
      { name: "Villa Shanti", type: "Fine Dining", specialty: "French Cuisine", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Government General Hospital"
    }
  },
  {
    id: 3704,
    name: "Paradise Beach (Chunnambar)",
    slug: "paradise-beach",
    state: "Puducherry",
    category: "Beaches",
    badge: "Pristine Island Beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Paradise_Beach_Pondicherry.jpg/800px-Paradise_Beach_Pondicherry.jpg",
    description: "Accessible only by boat from Chunnambar Boat House, this isolated sandbar beach offers clean sands, shallow waters, and rain dance shacks. Ideal for swimming.",
    coordinates: { lat: 11.8824, lng: 79.8163 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Humid",
      timings: "09:00 AM - 05:00 PM (Last boat return)",
      entryFee: {
        Entry: "₹10",
        Boat: "₹300 (Round Trip)",
        Camera: "₹20"
      }
    },

    transport: {
      nearestAirport: "Puducherry (10 km)",
      nearestRailway: "Puducherry (8 km)",
      busConnectivity: "Bus/Auto to Chunnambar Boat House (Cuddalore Road)"
    },

    externalLinks: {
      officialBooking: "https://tourism.py.gov.in/",
      googleMaps: "https://goo.gl/maps/paradisebeach"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding the ferry requires stepping over gaps. Beach sand is soft."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Boat Ride from Chunnambar" },
      { time: "10:00 AM", activity: "Swimming & Rain Dance" },
      { time: "01:00 PM", activity: "Lunch at Beach Shack" }
    ],

    foodGuide: [
      { name: "Beach Shacks", type: "Basic", specialty: "Fried Rice & Fish", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Ariyankuppam PHC"
    }
  },
  {
    id: 3705,
    name: "Serenity Beach",
    slug: "serenity-beach",
    state: "Puducherry",
    category: "Beaches",
    badge: "Surfing Destination",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Serenity_Beach_Pondicherry.jpg/800px-Serenity_Beach_Pondicherry.jpg",
    description: "Located north of the town, this beach is famous for its rocky pier extending into the sea and its surf schools. It is a popular spot for sunrise photography.",
    coordinates: { lat: 11.9678, lng: 79.8398 },

    essentials: {
      bestTime: "Morning (Sunrise) or Late Afternoon",
      weather: "Breezy",
      timings: "Sunrise to 06:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Puducherry (5 km)",
      nearestRailway: "Puducherry (5 km)",
      busConnectivity: "Auto/Scooter rental recommended (ECR Road)"
    },

    externalLinks: {
      officialBooking: "https://tourism.py.gov.in/",
      googleMaps: "https://goo.gl/maps/serenity"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Access to the pier involves walking on large rocks. Beach access is sandy."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise on the Pier" },
      { time: "08:00 AM", activity: "Surf Lesson (Optional)" },
      { time: "09:30 AM", activity: "Breakfast at Theevu Plage" }
    ],

    foodGuide: [
      { name: "Theevu Plage", type: "Beachside", specialty: "Grilled Seafood", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "PIMS Hospital (Kalapet)"
    }
  },

  // --- HERITAGE & ARCHITECTURE ---
  {
    id: 3706,
    name: "White Town (French Quarter)",
    slug: "white-town",
    state: "Puducherry",
    category: "Heritage",
    badge: "Colonial Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pondicherry_French_Colony_Street.jpg/800px-Pondicherry_French_Colony_Street.jpg",
    description: "The French quarter of Pondicherry, characterized by mustard-yellow colonial villas, chic boutiques, and tree-lined streets with French names (Rue). Ideal for heritage walks.",
    coordinates: { lat: 11.9325, lng: 79.8335 },

    essentials: {
      bestTime: "Early Morning or Evening",
      weather: "City",
      timings: "24 Hours (Shops close by 9 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Puducherry (6 km)",
      nearestRailway: "Puducherry (1 km)",
      busConnectivity: "Best explored on foot or bicycle"
    },

    externalLinks: {
      officialBooking: "https://tourism.py.gov.in/",
      googleMaps: "https://goo.gl/maps/whitetown"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Streets are grid-patterned, flat, and paved. Most cafes have ramp access."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Heritage Walk (Dumas St, Romain Rolland St)" },
      { time: "05:30 PM", activity: "Visit French Consulate (Exterior)" },
      { time: "07:00 PM", activity: "Dinner at a Heritage Hotel" }
    ],

    foodGuide: [
      { name: "Coromandel Cafe", type: "Heritage", specialty: "Prawn Curry", rating: 4.7 },
      { name: "Baker Street", type: "Bakery", specialty: "Croissants & Quiche", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Govt General Hospital"
    }
  },
  {
    id: 3707,
    name: "Basilica of the Sacred Heart of Jesus",
    slug: "sacred-heart-basilica",
    state: "Puducherry",
    category: "Heritage",
    badge: "Gothic Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sacred_Heart_Church_Pondicherry.jpg/800px-Sacred_Heart_Church_Pondicherry.jpg",
    description: "A stunning example of Gothic revival architecture, featuring rare stained glass panels depicting the life of Christ. It is one of the most prominent landmarks in the city.",
    coordinates: { lat: 11.9264, lng: 79.8294 },

    essentials: {
      bestTime: "December (Christmas)",
      weather: "Indoor",
      timings: "06:00 AM - 06:00 PM (Mass timings vary)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Puducherry (7 km)",
      nearestRailway: "Puducherry (0.5 km)",
      busConnectivity: "Located on MG Road, near the railway station"
    },

    externalLinks: {
      officialBooking: "https://sacredheartbasilica.com/",
      googleMaps: "https://goo.gl/maps/sacredheart"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The church entrance has wide doors and ramps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "View Stained Glass Art" },
      { time: "10:30 AM", activity: "Silent Prayer" },
      { time: "11:00 AM", activity: "Visit Grotto outside" }
    ],

    foodGuide: [
      { name: "Surguru", type: "Vegetarian", specialty: "South Indian Thali", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Govt General Hospital"
    }
  },
  {
    id: 3708,
    name: "Puducherry Museum",
    slug: "puducherry-museum",
    state: "Puducherry",
    category: "Heritage",
    badge: "Arikamedu Artifacts",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pondicherry_Museum.jpg/800px-Pondicherry_Museum.jpg",
    description: "Housed in the former Law Building, this museum displays artifacts from the Roman trading settlement of Arikamedu, Chola bronzes, and French colonial furniture.",
    coordinates: { lat: 11.9345, lng: 79.8348 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "09:00 AM - 06:30 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹10",
        Foreigner: "₹50"
      }
    },

    transport: {
      nearestAirport: "Puducherry (6 km)",
      nearestRailway: "Puducherry (2 km)",
      busConnectivity: "Located near Raj Nivas in White Town"
    },

    externalLinks: {
      officialBooking: "https://art.py.gov.in/",
      googleMaps: "https://goo.gl/maps/museum"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ground floor galleries are accessible."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Stone Sculpture Gallery" },
      { time: "03:00 PM", activity: "French Colonial Section" },
      { time: "04:00 PM", activity: "Walk to Bharathi Park (Opposite)" }
    ],

    foodGuide: [
      { name: "Cafe des Arts", type: "Cafe", specialty: "Crepes & Baguettes", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Govt General Hospital"
    }
  },

  // --- NATURE ---
  {
    id: 3709,
    name: "Ousteri Lake (Ossudu)",
    slug: "ousteri-lake",
    state: "Puducherry",
    category: "Nature",
    badge: "Bird Sanctuary",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ousteri_Lake_Pondicherry.jpg/800px-Ousteri_Lake_Pondicherry.jpg",
    description: "A man-made lake recognized as an Important Bird Area (IBA) by IUCN. It is a haven for migratory birds and offers boat rides in a serene environment.",
    coordinates: { lat: 11.9475, lng: 79.7433 },

    essentials: {
      bestTime: "Nov to Feb (Birdwatching)",
      weather: "Breezy",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Entry: "Free",
        Boating: "₹200-300"
      }
    },

    transport: {
      nearestAirport: "Puducherry (10 km)",
      nearestRailway: "Puducherry (10 km)",
      busConnectivity: "10km from town on Vazhudavur Road (Taxi reqd)"
    },

    externalLinks: {
      officialBooking: "https://tourism.py.gov.in/",
      googleMaps: "https://goo.gl/maps/ousteri"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boat jetty area is unpaved."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Boat Ride" },
      { time: "05:00 PM", activity: "Bird Watching (Binoculars rec)" },
      { time: "06:00 PM", activity: "Sunset" }
    ],

    foodGuide: [
      { name: "Boat House Canteen", type: "Basic", specialty: "Snacks", rating: 3.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "IGMC & RI (Kathirkamam)"
    }
  },
  {
    id: 3710,
    name: "Manakula Vinayagar Temple",
    slug: "manakula-vinayagar",
    state: "Puducherry",
    category: "Spiritual",
    badge: "Golden Chariot",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Manakula_Vinayagar_Temple_Pondicherry.jpg/800px-Manakula_Vinayagar_Temple_Pondicherry.jpg",
    description: "An ancient temple dedicated to Ganesha, existing since before the French occupation. It is famous for its golden chariot and the temple elephant, Lakshmi, who blesses devotees.",
    coordinates: { lat: 11.9366, lng: 79.8346 },

    essentials: {
      bestTime: "All Year",
      weather: "City",
      timings: "05:45 AM - 12:30 PM, 04:00 PM - 09:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Puducherry (6 km)",
      nearestRailway: "Puducherry (2 km)",
      busConnectivity: "Located in White Town, near Ashram"
    },

    externalLinks: {
      officialBooking: "https://manakulavinayagartemple.com/",
      googleMaps: "https://goo.gl/maps/manakula"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat entrance from the road."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Darshan" },
      { time: "05:30 PM", activity: "See Golden Chariot" },
      { time: "06:00 PM", activity: "Elephant Blessing" }
    ],

    foodGuide: [
      { name: "Adyar Ananda Bhavan", type: "City", specialty: "Sweets & Dosa", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0413-2339497",
      nearestHospital: "Govt General Hospital"
    }
  }
];
