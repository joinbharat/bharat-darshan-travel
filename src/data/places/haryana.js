/**
 * HARYANA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Haryana Tourism Corporation & ASI
 * - Wildlife: Sultanpur National Park Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const HARYANA_PLACES = [
  // --- WILDLIFE & NATURE ---
  {
    id: 901,
    name: "Sultanpur National Park",
    slug: "sultanpur-national-park",
    state: "Haryana",
    category: "Wildlife",
    badge: "Birdwatcher's Paradise",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sultanpur_National_Park.jpg/800px-Sultanpur_National_Park.jpg",
    description: "A popular bird sanctuary located in Gurugram, hosting over 250 species of resident and migratory birds. It is a Ramsar Site and a favorite spot for winter birdwatching.",
    coordinates: { lat: 28.4614, lng: 76.8916 },

    essentials: {
      bestTime: "October to March (Migratory Season)",
      weather: "Cool/Foggy",
      timings: "07:00 AM - 04:30 PM (Closed on Tuesdays)",
      entryFee: {
        Indian: "₹5",
        Foreigner: "₹40",
        Camera: "₹25"
      }
    },

    transport: {
      nearestAirport: "Indira Gandhi Int'l Airport, Delhi (15 km)",
      nearestRailway: "Gurugram (15 km)",
      busConnectivity: "Accessible by cab/taxi from Gurugram or Delhi"
    },

    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/sultanpur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main walking trails are paved and flat, suitable for wheelchairs."
    },

    routePlan: [
      { time: "07:30 AM", activity: "Morning Birdwatching Walk" },
      { time: "10:00 AM", activity: "Visit Education Center" },
      { time: "11:30 AM", activity: "Photography from Watch Towers" }
    ],

    foodGuide: [
      { name: "Rosy Pelican Tourist Complex", type: "Govt Resort", specialty: "North Indian Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "SGT Hospital, Budhera"
    }
  },
  {
    id: 902,
    name: "Morni Hills",
    slug: "morni-hills",
    state: "Haryana",
    category: "Hill Stations",
    badge: "Only Hill Station of Haryana",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Morni_Hills_Panchkula.jpg/800px-Morni_Hills_Panchkula.jpg",
    description: "Located in the Panchkula district, Morni Hills is an offbeat destination in the Shivalik range. It is known for the Tikkar Taal lakes and lush green pine forests.",
    coordinates: { lat: 30.7078, lng: 77.0867 },

    essentials: {
      bestTime: "September to March",
      weather: "Pleasant/Cool",
      timings: "24 Hours (Boating: 9 AM - 6 PM)",
      entryFee: {
        Entry: "Free",
        Boating: "₹200-400",
        AdventurePark: "₹50"
      }
    },

    transport: {
      nearestAirport: "Chandigarh (45 km)",
      nearestRailway: "Chandigarh (40 km)",
      busConnectivity: "Haryana Roadways buses from Panchkula/Chandigarh"
    },

    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/morni"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Hilly terrain. Tikkar Taal banks are uneven."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Tikkar Taal Boating" },
      { time: "01:00 PM", activity: "Lunch at Mountain Quail Resort" },
      { time: "03:00 PM", activity: "Morni Fort Visit" }
    ],

    foodGuide: [
      { name: "Mountain Quail", type: "Govt Resort", specialty: "Butter Chicken", rating: 4.0 },
      { name: "Local Dhabas", type: "Highway", specialty: "Parathas", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "Civil Hospital Panchkula"
    }
  },
  {
    id: 903,
    name: "Damdama Lake",
    slug: "damdama-lake",
    state: "Haryana",
    category: "Nature",
    badge: "Adventure Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Damdama_Lake_Gurgaon.jpg/800px-Damdama_Lake_Gurgaon.jpg",
    description: "One of the biggest natural lakes in Haryana, located near the Aravalli Hills. It is a popular weekend getaway for adventure sports like rock climbing, boating, and camping.",
    coordinates: { lat: 28.3039, lng: 77.0700 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 06:00 PM",
      entryFee: {
        Entry: "Free",
        Boating: "₹200+",
        Activities: "Variable"
      }
    },

    transport: {
      nearestAirport: "Delhi (45 km)",
      nearestRailway: "Gurugram (25 km)",
      busConnectivity: "Best accessed by private car/taxi from Gurugram"
    },

    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/damdama"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Saras Resort areas are accessible. Lake banks can be muddy."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Boating/Kayaking" },
      { time: "12:00 PM", activity: "Adventure Activities (Zip line)" },
      { time: "02:00 PM", activity: "Lunch at Saras Tourist Complex" }
    ],

    foodGuide: [
      { name: "Saras Tourist Complex", type: "Govt Resort", specialty: "Snacks & Meals", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "Civil Hospital Sohna"
    }
  },

  // --- SPIRITUAL & HERITAGE ---
  {
    id: 904,
    name: "Brahma Sarovar",
    slug: "brahma-sarovar",
    state: "Haryana",
    category: "Spiritual",
    badge: "Asia's Largest Man-made Pond",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Brahma_Sarovar_Kurukshetra.jpg/800px-Brahma_Sarovar_Kurukshetra.jpg",
    description: "A colossal water tank in Kurukshetra, believed to be the place where Lord Brahma created the universe. It is the focal point of the International Gita Mahotsav and solar eclipse fairs.",
    coordinates: { lat: 29.9620, lng: 76.8335 },

    essentials: {
      bestTime: "Winter (Gita Jayanti in Dec)",
      weather: "Cool",
      timings: "24 Hours (Aarti at Sunset)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh (90 km)",
      nearestRailway: "Kurukshetra Junction (3 km)",
      busConnectivity: "Auto-rickshaws available from Pipli Bus Stand"
    },

    externalLinks: {
      officialBooking: "https://kurukshetra.gov.in/",
      googleMaps: "https://goo.gl/maps/brahmasarovar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The ghats are paved and wide. Ramps are available at main entry points."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Parikrama around Sarovar" },
      { time: "05:30 PM", activity: "Sunset Photography" },
      { time: "06:00 PM", activity: "Evening Maha Aarti" }
    ],

    foodGuide: [
      { name: "Neelkanth Yatri Niwas", type: "Pilgrim", specialty: "Pure Veg Thali", rating: 4.2 },
      { name: "Heritage Hotel", type: "City", specialty: "North Indian", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "LNJP Hospital Kurukshetra"
    }
  },
  {
    id: 905,
    name: "Sheikh Chilli's Tomb",
    slug: "sheikh-chillis-tomb",
    state: "Haryana",
    category: "Heritage",
    badge: "Taj Mahal of Haryana",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sheikh_Chilli%27s_Tomb.jpg/800px-Sheikh_Chilli%27s_Tomb.jpg",
    description: "A stunning Mughal-era mausoleum in Thanesar, built for the Sufi saint Sheikh Chehli. The complex includes a madrasa, beautiful gardens, and an archaeological museum.",
    coordinates: { lat: 29.9729, lng: 76.8211 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM (Closed Fridays)",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Chandigarh (95 km)",
      nearestRailway: "Kurukshetra Junction (5 km)",
      busConnectivity: "Local auto from Kurukshetra city center"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/sheikhchilli"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Garden level is accessible. The main tomb plinth requires climbing stairs."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Explore Tomb Architecture" },
      { time: "11:00 AM", activity: "Visit Archaeological Museum" },
      { time: "12:00 PM", activity: "Garden Walk" }
    ],

    foodGuide: [
      { name: "Hotel Kimaya", type: "City", specialty: "Multi-Cuisine", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "LNJP Hospital Kurukshetra"
    }
  },
  {
    id: 906,
    name: "Yadavindra Gardens (Pinjore)",
    slug: "pinjore-gardens",
    state: "Haryana",
    category: "Heritage",
    badge: "Mughal Gardens",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pinjore_Gardens.jpg/800px-Pinjore_Gardens.jpg",
    description: "A 17th-century Mughal garden located in Pinjore. Spread over seven terraces, it features fountains, arched balconies, and heritage structures like the Sheesh Mahal and Rang Mahal.",
    coordinates: { lat: 30.7963, lng: 76.9144 },

    essentials: {
      bestTime: "All Year (Mango Mela in July)",
      weather: "Pleasant",
      timings: "07:00 AM - 10:00 PM",
      entryFee: {
        Adult: "₹25",
        Child: "₹10"
      }
    },

    transport: {
      nearestAirport: "Chandigarh (25 km)",
      nearestRailway: "Kalka (5 km)",
      busConnectivity: "Located on Ambala-Shimla Highway, well connected"
    },

    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/pinjore"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Paved pathways available. However, moving between the 7 terraces requires using ramps/assistance."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Explore Sheesh Mahal" },
      { time: "05:30 PM", activity: "Garden Walk on Terraces" },
      { time: "07:00 PM", activity: "Fountain Light Show" }
    ],

    foodGuide: [
      { name: "Jal Mahal Restaurant", type: "Garden View", specialty: "North Indian", rating: 4.0 },
      { name: "Budanpur Dhaba", type: "Highway", specialty: "Dal Makhani", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "Civil Hospital Kalka"
    }
  },
  {
    id: 907,
    name: "Jyotisar",
    slug: "jyotisar",
    state: "Haryana",
    category: "Spiritual",
    badge: "Birthplace of Bhagavad Gita",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jyotisar_Kurukshetra.jpg/800px-Jyotisar_Kurukshetra.jpg",
    description: "The sacred site where Lord Krishna delivered the sermon of the Bhagavad Gita to Arjuna under a banyan tree. A marble chariot and a light & sound show are key attractions.",
    coordinates: { lat: 29.9602, lng: 76.7645 },

    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "06:00 AM - 09:00 PM (Light Show in Evening)",
      entryFee: {
        Entry: "Free",
        LightShow: "₹100 (Approx)"
      }
    },

    transport: {
      nearestAirport: "Chandigarh (95 km)",
      nearestRailway: "Kurukshetra (8 km)",
      busConnectivity: "On Pehowa road, accessible by auto/bus"
    },

    externalLinks: {
      officialBooking: "https://kurukshetra.gov.in/",
      googleMaps: "https://goo.gl/maps/jyotisar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat paved area around the holy banyan tree and sarovar."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Darshan of Holy Banyan Tree" },
      { time: "06:00 PM", activity: "Evening Aarti" },
      { time: "07:00 PM", activity: "Light & Sound Show (Virat Swaroop)" }
    ],

    foodGuide: [
      { name: "Jyotisar Cafeteria", type: "Basic", specialty: "Tea & Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "LNJP Hospital Kurukshetra"
    }
  },
  {
    id: 908,
    name: "Mata Mansa Devi Temple",
    slug: "mata-mansa-devi",
    state: "Haryana",
    category: "Spiritual",
    badge: "Shakti Peeth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mansa_Devi_Temple_Panchkula.jpg/800px-Mansa_Devi_Temple_Panchkula.jpg",
    description: "Located in the foothills of the Shivaliks in Panchkula, this temple is dedicated to Goddess Mansa Devi. It is a major pilgrimage center, especially during Navratri.",
    coordinates: { lat: 30.7243, lng: 76.8647 },

    essentials: {
      bestTime: "Navratri (Oct/April)",
      weather: "Pleasant",
      timings: "04:00 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh (15 km)",
      nearestRailway: "Chandigarh (6 km)",
      busConnectivity: "CTU and Haryana Roadways buses to temple gate"
    },

    externalLinks: {
      officialBooking: "https://mansadevi.org.in/",
      googleMaps: "https://goo.gl/maps/mansadevi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Lifts and ramps are available for accessing the main shrine."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Morning Darshan" },
      { time: "09:30 AM", activity: "Patiala Temple Visit" },
      { time: "10:30 AM", activity: "Yagyashala" }
    ],

    foodGuide: [
      { name: "Temple Bhandara", type: "Pilgrim", specialty: "Free Langar", rating: 5.0 },
      { name: "Local Sweet Shops", type: "City", specialty: "Prasad/Halwa", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "Alchemist Hospital Panchkula"
    }
  },

  // --- HERITAGE & FAIRS ---
  {
    id: 909,
    name: "Surajkund",
    slug: "surajkund",
    state: "Haryana",
    category: "Heritage",
    badge: "Ancient Sun Pool & Crafts Mela",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Surajkund_Faridabad.jpg/800px-Surajkund_Faridabad.jpg",
    description: "An ancient reservoir built in the 10th century by King Suraj Pal. It is globally famous for the annual 'Surajkund International Crafts Mela' held in February, showcasing art and culture.",
    coordinates: { lat: 28.4862, lng: 77.2804 },

    essentials: {
      bestTime: "February (Crafts Mela)",
      weather: "Cool/Sunny",
      timings: "Sunrise to Sunset (Mela timings: 10 AM - 7 PM)",
      entryFee: {
        Normal: "Free",
        MelaTicket: "₹120-180 (During Feb Fair)"
      }
    },

    transport: {
      nearestAirport: "Delhi (25 km)",
      nearestRailway: "Faridabad (12 km)",
      busConnectivity: "Metro (Violet Line - Badarpur Border) + Auto"
    },

    externalLinks: {
      officialBooking: "https://haryanatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/surajkund"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Mela grounds are wheelchair accessible with paved paths. The ancient reservoir steps are not."
    },

    routePlan: [
      { time: "10:30 AM", activity: "Explore Crafts Stalls (Feb)" },
      { time: "01:00 PM", activity: "Cultural Folk Dance Performance" },
      { time: "04:00 PM", activity: "Visit Ancient Reservoir" }
    ],

    foodGuide: [
      { name: "Mela Food Court", type: "Street", specialty: "Multi-State Cuisine", rating: 4.5 },
      { name: "Hermitage Hut", type: "Govt Resort", specialty: "Snacks", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "Asian Hospital Faridabad"
    }
  },
  {
    id: 910,
    name: "Panipat War Memorial (Kala Amb)",
    slug: "panipat-war-memorial",
    state: "Haryana",
    category: "Heritage",
    badge: "Site of Third Battle of Panipat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kala_Amb_Panipat.jpg/800px-Kala_Amb_Panipat.jpg",
    description: "Kala Amb marks the site of the Third Battle of Panipat (1761). It features a war memorial and a museum dedicated to the Maratha warriors and the history of the battles.",
    coordinates: { lat: 29.4208, lng: 77.0367 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Delhi (100 km)",
      nearestRailway: "Panipat Junction (8 km)",
      busConnectivity: "Auto/Taxi from Panipat city"
    },

    externalLinks: {
      officialBooking: "https://panipat.gov.in/",
      googleMaps: "https://goo.gl/maps/kalaamb"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The park and memorial area are flat and accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "War Memorial Park" },
      { time: "11:00 AM", activity: "Panipat Museum (In city)" },
      { time: "12:30 PM", activity: "Tomb of Bu Ali Shah Qalandar" }
    ],

    foodGuide: [
      { name: "Pachranga Pickle Stalls", type: "Specialty", specialty: "Famous Panipat Pickles", rating: 4.8 },
      { name: "Gold Plate", type: "City", specialty: "North Indian", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-200-0023",
      nearestHospital: "Civil Hospital Panipat"
    }
  }
]; 
 
