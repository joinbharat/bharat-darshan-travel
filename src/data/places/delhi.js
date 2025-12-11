/**
 * DELHI_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Delhi Tourism (DTTDC), ASI & Rashtrapati Bhavan Secretariat
 * - Akshardham: Official Trust Guidelines (Strict No-Electronics Policy)
 * - Metro Connectivity: DMRC (Delhi Metro Rail Corporation) Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const DELHI_PLACES = [
  // --- HERITAGE (UNESCO) ---
  {
    id: 3301,
    name: "Red Fort (Lal Qila)",
    slug: "red-fort-delhi",
    state: "Delhi",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Fort_India_2019.jpg/800px-Red_Fort_India_2019.jpg",
    description: "A massive red sandstone fort built by Shah Jahan in 1648. It represents the zenith of Mughal creativity and is the site where the Prime Minister hoists the flag on Independence Day.",
    coordinates: { lat: 28.6562, lng: 77.2410 },

    essentials: {
      bestTime: "October to March",
      weather: "Hot/Dusty (Summer)",
      timings: "09:30 AM - 04:30 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹50",
        Foreigner: "₹600",
        Museum: "Included"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (20 km)",
      nearestRailway: "Old Delhi Junction (2 km)",
      busConnectivity: "Metro: Lal Quila Station (Violet Line)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/redfort"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Battery-operated vehicles available from parking to Lahori Gate. Ramps available inside."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Lahori Gate Entry" },
      { time: "11:00 AM", activity: "Diwan-i-Aam & Diwan-i-Khas" },
      { time: "12:30 PM", activity: "Visit Freedom Fighter Museum" }
    ],

    foodGuide: [
      { name: "Karim's", type: "Iconic", specialty: "Mutton Korma", rating: 4.5 },
      { name: "Jalebi Wala", type: "Street", specialty: "Jalebi & Rabri", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Lok Nayak Hospital"
    }
  },
  {
    id: 3302,
    name: "Qutub Minar",
    slug: "qutub-minar",
    state: "Delhi",
    category: "Heritage",
    badge: "Tallest Brick Minaret",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Qutub_Minar_2011.jpg/800px-Qutub_Minar_2011.jpg",
    description: "A 73-meter tall tapering tower built in 1193. The complex also houses the Iron Pillar (famous for not rusting) and the Alai Darwaza, showcasing Indo-Islamic architecture.",
    coordinates: { lat: 28.5244, lng: 77.1855 },

    essentials: {
      bestTime: "Winter Afternoons",
      weather: "Sunny",
      timings: "07:00 AM - 05:00 PM (Light Show: 7 PM)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        LightShow: "₹50"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (12 km)",
      nearestRailway: "New Delhi Station (15 km)",
      busConnectivity: "Metro: Qutub Minar Station (Yellow Line)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/qutub"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The complex is mostly flat with paved paths. Ramps are installed at key points."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Minar Photography" },
      { time: "04:00 PM", activity: "Iron Pillar & Quwwat-ul-Islam Mosque" },
      { time: "06:30 PM", activity: "Sound & Light Show" }
    ],

    foodGuide: [
      { name: "Olive Bar & Kitchen", type: "Fine Dining", specialty: "Mediterranean", rating: 4.7 },
      { name: "Diggin", type: "Cafe", specialty: "Italian & Decor", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Fortis Vasant Kunj"
    }
  },
  {
    id: 3303,
    name: "Humayun's Tomb",
    slug: "humayuns-tomb",
    state: "Delhi",
    category: "Heritage",
    badge: "Precursor to Taj Mahal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Humayun%27s_Tomb_Front_View.jpg/800px-Humayun%27s_Tomb_Front_View.jpg",
    description: "Built in 1570, this UNESCO site was the first garden-tomb on the Indian subcontinent. Its Persian architecture and Charbagh garden layout inspired the Taj Mahal.",
    coordinates: { lat: 28.5933, lng: 77.2507 },

    essentials: {
      bestTime: "Morning/Evening (Golden Hour)",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        Museum: "Extra"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (18 km)",
      nearestRailway: "Hazrat Nizamuddin (2 km)",
      busConnectivity: "Metro: JLN Stadium (Violet Line) + Auto"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/humayun"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Extremely accessible with ramps to the main plinth. Wooden ramps available for stairs."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Main Mausoleum" },
      { time: "09:30 AM", activity: "Isa Khan's Tomb" },
      { time: "11:00 AM", activity: "Sunder Nursery (Next door)" }
    ],

    foodGuide: [
      { name: "Fabcafe by the Lake", type: "Organic", specialty: "Quinoa Biryani", rating: 4.4 },
      { name: "Gulati", type: "City (Pandara Rd)", specialty: "Butter Chicken", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "AIIMS Delhi"
    }
  },

  // --- ICONS & POLITICAL ---
  {
    id: 3304,
    name: "India Gate & Kartavya Path",
    slug: "india-gate",
    state: "Delhi",
    category: "Heritage",
    badge: "National War Memorial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/800px-India_Gate_in_New_Delhi_03-2016.jpg",
    description: "A 42m high war memorial dedicated to Indian soldiers. The newly renovated Kartavya Path (Central Vista) connects it to Rashtrapati Bhavan, offering a grand strolling experience.",
    coordinates: { lat: 28.6129, lng: 77.2295 },

    essentials: {
      bestTime: "Evening (Lighting)",
      weather: "Open/Breezy",
      timings: "24 Hours (Lights on at sunset)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "IGI Airport (15 km)",
      nearestRailway: "New Delhi (4 km)",
      busConnectivity: "Metro: Central Secretariat (Yellow/Violet Line)"
    },

    externalLinks: {
      officialBooking: "https://delhitourism.gov.in/",
      googleMaps: "https://goo.gl/maps/indiagate"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The entire Kartavya Path is paved, flat, and wheelchair friendly with accessible toilets."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Walk along Kartavya Path" },
      { time: "06:00 PM", activity: "Pay respects at War Memorial" },
      { time: "07:00 PM", activity: "Ice Cream & Photography" }
    ],

    foodGuide: [
      { name: "Andhra Bhavan", type: "Canteen", specialty: "Andhra Thali", rating: 4.5 },
      { name: "Pandara Road Market", type: "Hub", specialty: "North Indian", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Dr. RML Hospital"
    }
  },
  {
    id: 3305,
    name: "Rashtrapati Bhavan",
    slug: "rashtrapati-bhavan",
    state: "Delhi",
    category: "Heritage",
    badge: "President's Estate",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rashtrapati_Bhavan_New_Delhi.jpg/800px-Rashtrapati_Bhavan_New_Delhi.jpg",
    description: "The official residence of the President of India. A masterpiece of Lutyens' Delhi, it has 340 rooms and the famous Amrit Udyan (Mughal Gardens).",
    coordinates: { lat: 28.6143, lng: 77.1994 },

    essentials: {
      bestTime: "Feb-Mar (Garden Bloom) or All Year",
      weather: "High Security",
      timings: "09:30 AM - 04:30 PM (Closed Mon/Public Holidays)",
      entryFee: {
        Circuit1: "₹50 (Main Building)",
        Booking: "Online Mandatory (Few days in advance)"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (12 km)",
      nearestRailway: "New Delhi (5 km)",
      busConnectivity: "Metro: Central Secretariat (Gate 35 entry)"
    },

    externalLinks: {
      officialBooking: "https://visit.rashtrapatibhavan.gov.in/",
      googleMaps: "https://goo.gl/maps/rashtrapati"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible. Security is very strict; carry valid ID."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Security Check (Gate 35)" },
      { time: "10:30 AM", activity: "Durbar Hall & Ashoka Hall" },
      { time: "11:30 AM", activity: "Museum/Gardens (Seasonal)" }
    ],

    foodGuide: [
      { name: "No Food Inside", type: "Note", specialty: "Eat before entry", rating: 0.0 },
      { name: "Khan Market", type: "Nearby", specialty: "Cafes & Rolls", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Dr. RML Hospital"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 3306,
    name: "Akshardham Temple",
    slug: "akshardham-delhi",
    state: "Delhi",
    category: "Spiritual",
    badge: "World's Largest Hindu Temple Complex",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Akshardham_Temple_Delhi.jpg/800px-Akshardham_Temple_Delhi.jpg",
    description: "A modern architectural marvel built from pink sandstone and white marble. It features a boat ride (Sanskruti Vihar), a musical fountain, and the Sahaj Anand water show.",
    coordinates: { lat: 28.6127, lng: 77.2773 },

    essentials: {
      bestTime: "All Year (Weekdays preferred)",
      weather: "Open",
      timings: "10:00 AM - 08:00 PM (Closed Mondays)",
      entryFee: {
        Entry: "Free",
        Exhibitions: "₹250",
        WaterShow: "₹90",
        NoPhones: "Strictly Prohibited (Cloakroom available)"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (22 km)",
      nearestRailway: "Nizamuddin (5 km)",
      busConnectivity: "Metro: Akshardham Station (Blue Line)"
    },

    externalLinks: {
      officialBooking: "https://akshardham.com/",
      googleMaps: "https://goo.gl/maps/akshardham"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs available at entry (free/deposit). Lifts available for exhibitions."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Temple Darshan" },
      { time: "04:00 PM", activity: "Boat Ride & Exhibitions" },
      { time: "07:00 PM", activity: "Sahaj Anand Water Show" }
    ],

    foodGuide: [
      { name: "Premvati Food Court", type: "Temple Complex", specialty: "Pure Veg Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Lal Bahadur Shastri Hospital"
    }
  },
  {
    id: 3307,
    name: "Lotus Temple (Bahai House of Worship)",
    slug: "lotus-temple",
    state: "Delhi",
    category: "Spiritual",
    badge: "Symbol of Peace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lotus_Temple_New_Delhi.jpg/800px-Lotus_Temple_New_Delhi.jpg",
    description: "Notable for its flower-like shape, this Bahá'í House of Worship is open to all, regardless of religion. The marble structure invites silent meditation.",
    coordinates: { lat: 28.5535, lng: 77.2588 },

    essentials: {
      bestTime: "All Year",
      weather: "Peaceful",
      timings: "08:30 AM - 05:00 PM (Closed Mondays)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "IGI Airport (18 km)",
      nearestRailway: "Nizamuddin (5 km)",
      busConnectivity: "Metro: Kalkaji Mandir (Violet/Magenta Line)"
    },

    externalLinks: {
      officialBooking: "https://www.bahai.in/",
      googleMaps: "https://goo.gl/maps/lotus"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved path from gate to temple. However, it's a long walk (500m). Shoes must be removed."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Walk through Gardens" },
      { time: "09:30 AM", activity: "Silent Meditation in Hall" },
      { time: "10:30 AM", activity: "Visit Information Centre" }
    ],

    foodGuide: [
      { name: "Epicuria (Nehru Place)", type: "Hub", specialty: "Multi-Cuisine", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Apollo Hospital (Jasola)"
    }
  },
  {
    id: 3308,
    name: "Jama Masjid",
    slug: "jama-masjid-delhi",
    state: "Delhi",
    category: "Spiritual",
    badge: "Largest Mosque in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Jama_Masjid_Delhi.jpg/800px-Jama_Masjid_Delhi.jpg",
    description: "Built by Shah Jahan in 1656, it can hold 25,000 worshippers. The courtyard is immense, and climbing the southern minaret offers a stunning view of Old Delhi.",
    coordinates: { lat: 28.6507, lng: 77.2334 },

    essentials: {
      bestTime: "Morning (Non-prayer times)",
      weather: "Open Courtyard",
      timings: "07:00 AM - 12:00 PM, 01:30 PM - 06:30 PM",
      entryFee: {
        Entry: "Free",
        Camera: "₹300",
        Minaret: "₹100"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (22 km)",
      nearestRailway: "Old Delhi (1 km)",
      busConnectivity: "Metro: Jama Masjid (Violet Line)"
    },

    externalLinks: {
      officialBooking: "https://delhitourism.gov.in/",
      googleMaps: "https://goo.gl/maps/jamamasjid"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing 30+ steep stairs to reach the courtyard gate. Not accessible."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Mosque Courtyard" },
      { time: "09:00 AM", activity: "Climb Minaret (Tower)" },
      { time: "10:00 AM", activity: "Explore Chandni Chowk" }
    ],

    foodGuide: [
      { name: "Aslam Chicken", type: "Old Delhi", specialty: "Butter Chicken", rating: 4.3 },
      { name: "Qureshi Kabab", type: "Street", specialty: "Seekh Kabab", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "Lok Nayak Hospital"
    }
  },

  // --- NATURE & CULTURE ---
  {
    id: 3309,
    name: "Lodhi Gardens",
    slug: "lodhi-gardens",
    state: "Delhi",
    category: "Nature",
    badge: "Heritage Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bara_Gumbad_Lodi_Gardens.jpg/800px-Bara_Gumbad_Lodi_Gardens.jpg",
    description: "A favorite spot for morning walks and picnics, this park contains the tombs of the Sayyid and Lodhi rulers (15th century). The Bara Gumbad and Sikandar Lodi's tomb are architectural highlights.",
    coordinates: { lat: 28.5930, lng: 77.2205 },

    essentials: {
      bestTime: "Winter Mornings/Evenings",
      weather: "Green/Open",
      timings: "05:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "IGI Airport (15 km)",
      nearestRailway: "Nizamuddin (4 km)",
      busConnectivity: "Metro: Jor Bagh (Yellow Line)"
    },

    externalLinks: {
      officialBooking: "https://delhitourism.gov.in/",
      googleMaps: "https://goo.gl/maps/lodhi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved jogging tracks cover the entire park. Some monuments have steps."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Walk" },
      { time: "08:00 AM", activity: "Photography of Tombs" },
      { time: "09:00 AM", activity: "Breakfast at Khan Market" }
    ],

    foodGuide: [
      { name: "The Big Chill", type: "Khan Market", specialty: "Pasta & Desserts", rating: 4.7 },
      { name: "Khan Chacha", type: "Fast Food", specialty: "Mutton Rolls", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "AIIMS Delhi"
    }
  },
  {
    id: 3310,
    name: "Dilli Haat (INA)",
    slug: "dilli-haat-ina",
    state: "Delhi",
    category: "Leisure",
    badge: "Crafts & Food Bazaar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dilli_Haat_Entrance.jpg/800px-Dilli_Haat_Entrance.jpg",
    description: "An open-air food plaza and craft bazaar offering a microcosm of India. It features stalls from every state selling handicrafts and authentic regional cuisines.",
    coordinates: { lat: 28.5729, lng: 77.2074 },

    essentials: {
      bestTime: "Evening (Dinner)",
      weather: "Open Air",
      timings: "10:30 AM - 10:00 PM",
      entryFee: {
        Indian: "₹30",
        Foreigner: "₹100"
      }
    },

    transport: {
      nearestAirport: "IGI Airport (12 km)",
      nearestRailway: "New Delhi (8 km)",
      busConnectivity: "Metro: Dilli Haat - INA (Yellow/Pink Line)"
    },

    externalLinks: {
      officialBooking: "https://delhitourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dillihaat"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully paved with brick paths. Ramps available for food stalls."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Handicraft Shopping" },
      { time: "07:00 PM", activity: "Regional Food Tour (Momos to Dosas)" },
      { time: "09:00 PM", activity: "Cultural Performance (Occasional)" }
    ],

    foodGuide: [
      { name: "Nagaland Stall", type: "State Stall", specialty: "Pork Ribs & Momos", rating: 4.6 },
      { name: "Maharashtra Stall", type: "State Stall", specialty: "Vada Pav", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "1800-103-1111",
      nearestHospital: "AIIMS Delhi (Opposite)"
    }
  }
]; 
