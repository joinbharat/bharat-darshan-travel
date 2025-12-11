/**
 * ANDHRA_PRADESH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: APTDC (Andhra Pradesh Tourism) & TTD (Tirumala Tirupati Devasthanams)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const ANDHRA_PRADESH_PLACES = [
  // --- SPIRITUAL ---
  {
    id: 101,
    name: "Tirumala Venkateswara Temple",
    slug: "tirumala-venkateswara-temple",
    state: "Andhra Pradesh",
    category: "Spiritual",
    badge: "Richest Temple in the World",
    // Source: Wikimedia Commons
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/800px-Tirumala_090615.jpg",
    description: "Perched on the Seshachalam Hills, this iconic temple dedicated to Lord Venkateswara attracts millions of pilgrims annually. It is a masterpiece of Dravidian architecture and a major center of Vaishnavism.",
    coordinates: { lat: 13.6833, lng: 79.3472 },

    essentials: {
      bestTime: "September to March",
      weather: "Tropical/Humid",
      timings: "02:30 AM - 01:30 AM (Almost 24x7)",
      entryFee: {
        SarvaDarshan: "Free",
        SpecialEntry: "₹300 (Online Booking Mandatory)",
        LadduPrasam: "₹50 (Extra)"
      }
    },

    transport: {
      nearestAirport: "Tirupati (40 km)",
      nearestRailway: "Tirupati Main (26 km)",
      busConnectivity: "APSRTC electric buses run every 2 minutes from Tirupati to Tirumala"
    },

    externalLinks: {
      officialBooking: "https://tirupatibalaji.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/tirumala"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Dedicated queues for differently-abled and senior citizens (Mahadwaram entry). Battery cars available."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Vaikuntam Queue Complex Entry" },
      { time: "11:00 AM", activity: "Darshan of Lord Venkateswara" },
      { time: "01:00 PM", activity: "Laddu Prasadam Counter" }
    ],

    foodGuide: [
      { name: "Annaprasadam Complex", type: "Pilgrim", specialty: "Free Meals (Unlimited)", rating: 4.9 },
      { name: "Hotel Bhimas (Tirupati)", type: "Mid-Range", specialty: "Andhra Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Aswini Hospital, Tirumala"
    }
  },
  {
    id: 102,
    name: "Srisailam",
    slug: "srisailam-temple",
    state: "Andhra Pradesh",
    category: "Spiritual",
    badge: "Jyotirlinga & Shakti Peetha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Srisailam_Temple_Gopuram.jpg/800px-Srisailam_Temple_Gopuram.jpg",
    description: "Located on the banks of the Krishna River in the Nallamala forest, Srisailam is unique for housing both a Jyotirlinga (Shiva) and a Shakti Peetha (Parvati) in the same complex.",
    coordinates: { lat: 16.0744, lng: 78.8687 },

    essentials: {
      bestTime: "October to February",
      weather: "Cool/Forest",
      timings: "04:30 AM - 03:30 PM, 06:00 PM - 10:00 PM",
      entryFee: {
        FreeDarshan: "Free",
        SheeghraDarshan: "₹150",
        Abhishekam: "₹1500+"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (213 km)",
      nearestRailway: "Markapur Road (85 km)",
      busConnectivity: "Direct buses from Hyderabad, Vijayawada, and Guntur"
    },

    externalLinks: {
      officialBooking: "https://www.srisailadevasthanam.org/",
      googleMaps: "https://goo.gl/maps/srisailam"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps available up to the main temple courtyard. Crowds can make navigation difficult."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Mallikarjuna Swamy Darshan" },
      { time: "09:00 AM", activity: "Patalganga Ropeway" },
      { time: "11:00 AM", activity: "Chenchu Lakshmi Tribal Museum" }
    ],

    foodGuide: [
      { name: "Devasthanam Canteen", type: "Budget", specialty: "Pulihora", rating: 4.0 },
      { name: "Haritha Hotel", type: "Mid-Range", specialty: "South Indian Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Govt Area Hospital, Srisailam"
    }
  },

  // --- NATURE & HILL STATIONS ---
  {
    id: 103,
    name: "Gandikota",
    slug: "gandikota",
    state: "Andhra Pradesh",
    category: "Nature",
    badge: "Grand Canyon of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gandikota_view_point.jpg/800px-Gandikota_view_point.jpg",
    description: "A hidden gem featuring a massive gorge formed by the Pennar River, resembling the Grand Canyon. The historic Gandikota Fort sits majestically on top of the gorge.",
    coordinates: { lat: 14.8149, lng: 78.2863 },

    essentials: {
      bestTime: "September to February",
      weather: "Arid/Rocky",
      timings: "Sunrise to Sunset (Fort is open)",
      entryFee: {
        Entry: "Free",
        Camping: "₹1500-2000 (Private Operators)"
      }
    },

    transport: {
      nearestAirport: "Kadapa (77 km)",
      nearestRailway: "Jammalamadugu (15 km)",
      busConnectivity: "Local APSRTC buses from Jammalamadugu"
    },

    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/gandikota"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Very rocky terrain. Reaching the viewpoint requires walking over boulders."
    },

    routePlan: [
      { time: "04:30 PM", activity: "Explore Ranganatha Swamy Temple" },
      { time: "05:30 PM", activity: "Sunset at the Gorge Viewpoint" },
      { time: "08:00 PM", activity: "Camping & Bonfire" }
    ],

    foodGuide: [
      { name: "Haritha Resort", type: "Basic", specialty: "Simple Andhra Meals", rating: 3.5 },
      { name: "Nirmala Restaurant", type: "Dhaba", specialty: "Spicy Chicken Curry", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "112",
      nearestHospital: "Govt Hospital Jammalamadugu"
    }
  },
  {
    id: 104,
    name: "Araku Valley",
    slug: "araku-valley",
    state: "Andhra Pradesh",
    category: "Hill Stations",
    badge: "Ooty of Andhra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Araku_Valley_View.JPG/800px-Araku_Valley_View.JPG",
    description: "A scenic hill station in the Eastern Ghats, famous for its coffee plantations and indigenous tribal culture. The Vistadome train journey to Araku is an attraction in itself.",
    coordinates: { lat: 18.3273, lng: 82.8775 },

    essentials: {
      bestTime: "September to March",
      weather: "Cool/Misty",
      timings: "24 Hours (Attractions have specific timings)",
      entryFee: {
        TribalMuseum: "₹40",
        PadmapuramGardens: "₹20"
      }
    },

    transport: {
      nearestAirport: "Visakhapatnam (115 km)",
      nearestRailway: "Araku Station (2 km)",
      busConnectivity: "Regular buses from Vizag"
    },

    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/araku"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Most gardens and the Tribal Museum ground floor are accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Tribal Museum & Coffee Museum" },
      { time: "01:00 PM", activity: "Lunch at Haritha Mayuri" },
      { time: "03:00 PM", activity: "Padmapuram Botanical Gardens" }
    ],

    foodGuide: [
      { name: "Araku Coffee House", type: "Cafe", specialty: "Organic Araku Coffee & Chocolates", rating: 4.7 },
      { name: "Vasundhara Restaurant", type: "Family", specialty: "Bamboo Chicken", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Area Hospital, Araku"
    }
  },
  {
    id: 105,
    name: "Borra Caves",
    slug: "borra-caves",
    state: "Andhra Pradesh",
    category: "Nature",
    badge: "Deepest Caves in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Borra_Caves_Vizag.jpg/800px-Borra_Caves_Vizag.jpg",
    description: "One of the largest and deepest caves in India, known for stunning stalactite and stalagmite formations. The caves are illuminated with colorful lights, creating a magical atmosphere.",
    coordinates: { lat: 18.2818, lng: 83.0396 },

    essentials: {
      bestTime: "November to March",
      weather: "Cool/Humid",
      timings: "10:00 AM - 05:00 PM (Lunch Break 1-2 PM)",
      entryFee: {
        Adult: "₹80",
        Child: "₹60",
        Camera: "₹100"
      }
    },

    transport: {
      nearestAirport: "Visakhapatnam (90 km)",
      nearestRailway: "Borra Guhalu (On site)",
      busConnectivity: "Buses available from Araku (30 km)"
    },

    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/borracaves"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing many stairs to enter and exit. Not suitable for wheelchairs or severe mobility issues."
    },

    routePlan: [
      { time: "10:30 AM", activity: "Hike down to Cave Entrance" },
      { time: "11:30 AM", activity: "Photography of Limestone Formations" },
      { time: "01:00 PM", activity: "Local Bamboo Chicken Lunch" }
    ],

    foodGuide: [
      { name: "AP Tourism Restaurant", type: "Basic", specialty: "Veg Meals", rating: 3.5 },
      { name: "Tribal Stalls", type: "Street", specialty: "Bamboo Chicken", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Area Hospital, Araku"
    }
  },

  // --- HERITAGE ---
  {
    id: 106,
    name: "Lepakshi",
    slug: "lepakshi",
    state: "Andhra Pradesh",
    category: "Heritage",
    badge: "Hanging Pillar Wonder",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Veerabhadra_Temple_Lepakshi.jpg/800px-Veerabhadra_Temple_Lepakshi.jpg",
    description: "Home to the 16th-century Veerabhadra Temple, a masterpiece of Vijayanagara style. Famous for its floating pillar that doesn't touch the ground and a massive monolithic Nandi bull.",
    coordinates: { lat: 13.8052, lng: 77.6136 },

    essentials: {
      bestTime: "October to February",
      weather: "Hot/Dry",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Entry: "Free",
        Guide: "₹200-300 (Recommended)"
      }
    },

    transport: {
      nearestAirport: "Bengaluru (100 km)",
      nearestRailway: "Hindupur (15 km)",
      busConnectivity: "Buses from Hindupur or Anantapur"
    },

    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/lepakshi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main temple courtyard is flat, but the inner sanctum has steps. The Nandi statue nearby is accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Visit Monolithic Nandi" },
      { time: "10:00 AM", activity: "Veerabhadra Temple & Hanging Pillar" },
      { time: "12:00 PM", activity: "Explore unfinished Kalyana Mandapam" }
    ],

    foodGuide: [
      { name: "Haritha Hotel", type: "Budget", specialty: "South Indian Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "112",
      nearestHospital: "Govt Hospital Hindupur"
    }
  },

  // --- BEACHES ---
  {
    id: 107,
    name: "Rushikonda Beach",
    slug: "rushikonda-beach",
    state: "Andhra Pradesh",
    category: "Beaches",
    badge: "Blue Flag Certified",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Rushikonda_Beach_Vizag.jpg/800px-Rushikonda_Beach_Vizag.jpg",
    description: "One of the cleanest beaches in India, certified with the Blue Flag tag. Known for its golden sands, clear waters, and water sports like surfing and jet skiing.",
    coordinates: { lat: 17.7816, lng: 83.3860 },

    essentials: {
      bestTime: "October to March",
      weather: "Coastal/Breezy",
      timings: "06:00 AM - 07:00 PM",
      entryFee: {
        Entry: "Free",
        SpeedBoat: "₹350",
        JetSki: "₹500"
      }
    },

    transport: {
      nearestAirport: "Visakhapatnam (25 km)",
      nearestRailway: "Visakhapatnam Junction (15 km)",
      busConnectivity: "City buses and cabs available from Vizag center"
    },

    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/rushikonda"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Blue Flag standards ensure wheelchair ramps and accessible restrooms are available."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Morning Walk & Sunrise" },
      { time: "10:00 AM", activity: "Water Sports (Jet Ski/Speed Boat)" },
      { time: "01:00 PM", activity: "Lunch at APTDC Haritha" }
    ],

    foodGuide: [
      { name: "Haritha Beach Resort", type: "View", specialty: "Sea Food", rating: 4.1 },
      { name: "The Park", type: "Luxury", specialty: "Continental", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "GITAM Hospital"
    }
  },
  {
    id: 108,
    name: "Undavalli Caves",
    slug: "undavalli-caves",
    state: "Andhra Pradesh",
    category: "Heritage",
    badge: "Monolithic Rock-Cut",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Undavalli_Caves.jpg/800px-Undavalli_Caves.jpg",
    description: "A fine example of Indian rock-cut architecture from the 4th-5th century AD. The main attraction is a colossal monolithic statue of Lord Vishnu in a reclining posture.",
    coordinates: { lat: 16.4962, lng: 80.5847 },

    essentials: {
      bestTime: "October to February",
      weather: "Warm",
      timings: "09:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹200",
        Video: "₹25"
      }
    },

    transport: {
      nearestAirport: "Vijayawada (35 km)",
      nearestRailway: "Vijayawada Junction (6 km)",
      busConnectivity: "Auto or Taxi from Vijayawada city center"
    },

    externalLinks: {
      officialBooking: "https://tourism.ap.gov.in/",
      googleMaps: "https://goo.gl/maps/undavalli"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep steps to reach the upper levels where the main Vishnu statue is located."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Architecture Photography" },
      { time: "10:00 AM", activity: "Main Vishnu Shrine Level" },
      { time: "11:30 AM", activity: "Prakasam Barrage View" }
    ],

    foodGuide: [
      { name: "Sweet Magic", type: "City", specialty: "Andhra Biryani", rating: 4.3 },
      { name: "Babai Hotel", type: "Heritage", specialty: "Idli Sambar", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4141",
      nearestHospital: "Manipal Hospital, Vijayawada"
    }
  }
]; 
