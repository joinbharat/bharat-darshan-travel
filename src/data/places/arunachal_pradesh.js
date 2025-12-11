/**
 * ARUNACHAL_PRADESH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Arunachal Tourism & Dept of Forests
 * - Permits: ILP (Inner Line Permit) is MANDATORY for all tourists.
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const ARUNACHAL_PRADESH_PLACES = [
  // --- HERITAGE & SPIRITUAL ---
  {
    id: 301,
    name: "Tawang Monastery",
    slug: "tawang-monastery",
    state: "Arunachal Pradesh",
    category: "Spiritual",
    badge: "Largest Monastery in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tawang_Monastery_Arunachal_Pradesh.jpg/800px-Tawang_Monastery_Arunachal_Pradesh.jpg",
    description: "Founded in 1680, this is the second-largest monastery in the world after Lhasa. Perched at 10,000 feet, it houses a 28-foot high Golden Buddha and vast library of ancient scriptures.",
    coordinates: { lat: 27.5862, lng: 91.8664 },

    essentials: {
      bestTime: "March to June, September to October",
      weather: "Cold/Alpine",
      timings: "07:00 AM - 07:00 PM",
      entryFee: {
        Entry: "Free",
        Museum: "₹20",
        Permit: "ILP Required for entry into state"
      }
    },

    transport: {
      nearestAirport: "Tezpur (320 km) or Guwahati (440 km)",
      nearestRailway: "Tezpur (320 km)",
      busConnectivity: "Shared Sumos/Taxis from Tezpur or Guwahati (12-14 hr journey)"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/tawang"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep steps to main prayer hall. High altitude may affect those with respiratory issues."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Morning Prayer at Dukhang" },
      { time: "10:00 AM", activity: "Library & Museum Visit" },
      { time: "02:00 PM", activity: "Tawang War Memorial (Nearby)" }
    ],

    foodGuide: [
      { name: "Dragon Restaurant", type: "Local", specialty: "Thukpa & Momos", rating: 4.4 },
      { name: "Orange Restaurant", type: "City", specialty: "Butter Tea", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "District Hospital Tawang"
    }
  },
  {
    id: 302,
    name: "Bomdila Monastery",
    slug: "bomdila-monastery",
    state: "Arunachal Pradesh",
    category: "Spiritual",
    badge: "GRL Monastery",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bomdila_Monastery.jpg/800px-Bomdila_Monastery.jpg",
    description: "A prominent centre of the Mahayana school of Buddhism. The monastery offers panoramic views of the Himalayan landscape and apple orchards of the West Kameng district.",
    coordinates: { lat: 27.2645, lng: 92.4159 },

    essentials: {
      bestTime: "April to October",
      weather: "Cool/Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Entry: "Free",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Tezpur (150 km)",
      nearestRailway: "Bhalukpong (100 km)",
      busConnectivity: "Direct buses/sumos available from Tezpur"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/bomdila"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main courtyard is accessible by car. Ramps available for ground level."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Visit Upper Gompa" },
      { time: "11:00 AM", activity: "Viewpoint Photography" },
      { time: "01:00 PM", activity: "Local Craft Center" }
    ],

    foodGuide: [
      { name: "Sikim Restaurant", type: "Budget", specialty: "Pork Ribs", rating: 4.0 },
      { name: "Tsepal Yangjom", type: "Hotel", specialty: "Indian & Chinese", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "District Hospital Bomdila"
    }
  },

  // --- NATURE & ADVENTURE ---
  {
    id: 303,
    name: "Sela Pass",
    slug: "sela-pass",
    state: "Arunachal Pradesh",
    category: "Nature",
    badge: "Gateway to Tawang",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sela_Pass_Tawang.jpg/800px-Sela_Pass_Tawang.jpg",
    description: "Located at 13,700 feet, Sela Pass connects Tawang to the rest of India. It is famous for the frozen Sela Lake and snow-covered landscapes almost year-round.",
    coordinates: { lat: 27.5033, lng: 92.1039 },

    essentials: {
      bestTime: "March to May, Oct to Nov",
      weather: "Freezing/Snow",
      timings: "Daylight Hours Only (Avoid afternoon travel due to fog)",
      entryFee: {
        Entry: "Free",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Tezpur (240 km)",
      nearestRailway: "Bhalukpong (180 km)",
      busConnectivity: "Stopover on the Bomdila-Tawang route (Private Sumos)"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/selapass"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "High altitude viewing point. Not wheelchair accessible due to snow and rough terrain."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Photo Stop at Sela Gate" },
      { time: "10:30 AM", activity: "Walk near Sela Lake" },
      { time: "11:30 AM", activity: "Tea at Army Canteen" }
    ],

    foodGuide: [
      { name: "Army Canteen", type: "Cafe", specialty: "Hot Maggi & Tea", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "Army Medical Center (Emergency only)"
    }
  },
  {
    id: 304,
    name: "Ziro Valley",
    slug: "ziro-valley",
    state: "Arunachal Pradesh",
    category: "Nature",
    badge: "UNESCO Tentative List",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ziro_Valley.jpg/800px-Ziro_Valley.jpg",
    description: "Home to the Apatani tribe, Ziro is famous for its unique paddy-cum-fish cultivation and the annual Ziro Music Festival. The valley is a lush green landscape of pine hills and rice fields.",
    coordinates: { lat: 27.6186, lng: 93.8329 },

    essentials: {
      bestTime: "March to October (Sept for Music Fest)",
      weather: "Mild/Pleasant",
      timings: "24 Hours (Village Visits: 8 AM - 5 PM)",
      entryFee: {
        Entry: "Free",
        FestivalTicket: "₹2500+ (During ZFM)",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Hollongi/Itanagar (110 km) or Lilabari (120 km)",
      nearestRailway: "Naharlagun (100 km)",
      busConnectivity: "Daily Tata Sumo service from Itanagar/Naharlagun"
    },

    externalLinks: {
      officialBooking: "https://zirofestival.com/",
      googleMaps: "https://goo.gl/maps/ziro"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Village paths are uneven and muddy. Major viewpoints require light trekking."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Hong Village Walk (Apatani Culture)" },
      { time: "12:00 PM", activity: "Tarin Fish Farm" },
      { time: "04:00 PM", activity: "Sunset at Kile Pakho" }
    ],

    foodGuide: [
      { name: "A&C Kitchen", type: "Local", specialty: "Pike Pila (Pickle) & Smoked Meat", rating: 4.3 },
      { name: "Ziro Palace", type: "Hotel", specialty: "Chicken Boil", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "Gyati Takka General Hospital"
    }
  },
  {
    id: 305,
    name: "Namdapha National Park",
    slug: "namdapha-national-park",
    state: "Arunachal Pradesh",
    category: "Wildlife",
    badge: "Biodiversity Hotspot",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Namdapha_Rainforest.jpg/800px-Namdapha_Rainforest.jpg",
    description: "India's easternmost tiger reserve and a biodiversity hotspot. It is the only park in the world to harbour four feline species: Tiger, Leopard, Snow Leopard, and Clouded Leopard.",
    coordinates: { lat: 27.4933, lng: 96.3860 },

    essentials: {
      bestTime: "November to March",
      weather: "Humid/Sub-tropical",
      timings: "06:00 AM - 05:00 PM",
      entryFee: {
        Indian: "₹50",
        Foreigner: "₹350",
        Camera: "₹100",
        Permit: "ILP + Forest Permit Required"
      }
    },

    transport: {
      nearestAirport: "Dibrugarh (160 km)",
      nearestRailway: "Tinsukia (140 km)",
      busConnectivity: "Buses to Miao (Gateway town) from Tinsukia/Dibrugarh"
    },

    externalLinks: {
      officialBooking: "https://namdaphatigerreserve.org/",
      googleMaps: "https://goo.gl/maps/namdapha"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Strictly a trekking destination. No vehicle safaris inside the core area."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Entry from Miao Checkpost" },
      { time: "09:00 AM", activity: "Deban Forest Camp (Birdwatching)" },
      { time: "02:00 PM", activity: "Boat Ride on Noa-Dihing River" }
    ],

    foodGuide: [
      { name: "Namdapha Jungle Camp", type: "Lodge", specialty: "Basic Assamese Meals", rating: 4.2 },
      { name: "Eco Tourist Lodge", type: "Budget", specialty: "Rice & Dal", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "Civil Hospital Miao"
    }
  },

  // --- OFFBEAT & SCENIC ---
  {
    id: 306,
    name: "Mechuka Valley",
    slug: "mechuka-valley",
    state: "Arunachal Pradesh",
    category: "Hill Stations",
    badge: "Switzerland of the East",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Menchukha_Valley.jpg/800px-Menchukha_Valley.jpg",
    description: "A stunning valley near the Indo-China border, known for its medicinal hot springs, the 400-year-old Samten Yongcha Monastery, and the Yargyap Chu river.",
    coordinates: { lat: 28.5979, lng: 94.1306 },

    essentials: {
      bestTime: "October to April",
      weather: "Cold/Windy",
      timings: "24 Hours (Avoid night driving)",
      entryFee: {
        Entry: "Free",
        Permit: "ILP Required (Check strict border norms)"
      }
    },

    transport: {
      nearestAirport: "Lilabari (380 km) or Pasighat (300 km)",
      nearestRailway: "Silapathar (330 km)",
      busConnectivity: "Shared Sumos from Aalo (West Siang HQ) - 6 to 8 hours"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/mechuka"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote location with limited infrastructure. Terrain is grassy and uneven."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Samten Yongcha Monastery" },
      { time: "11:00 AM", activity: "Gurudwara Taposthan" },
      { time: "03:00 PM", activity: "Hanging Bridge Walk" }
    ],

    foodGuide: [
      { name: "Gayboo's Traditional Homestay", type: "Local", specialty: "Millet Wine & Dried Meat", rating: 4.6 },
      { name: "Almost Heritage", type: "Cafe", specialty: "Coffee & Pancakes", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "CHC Mechuka"
    }
  },
  {
    id: 307,
    name: "Pasighat",
    slug: "pasighat",
    state: "Arunachal Pradesh",
    category: "Nature",
    badge: "Oldest Town of Arunachal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Siang_River_Pasighat.jpg/800px-Siang_River_Pasighat.jpg",
    description: "Located on the banks of the mighty Siang River (which becomes the Brahmaputra), Pasighat is the gateway to the Abor Hills and a hub for white water rafting adventures.",
    coordinates: { lat: 28.0619, lng: 95.3260 },

    essentials: {
      bestTime: "October to April",
      weather: "Tropical",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        Rafting: "₹1500-3000 (Seasonal)",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Pasighat Airport (IXT) - Limited flights",
      nearestRailway: "Murkongselek (30 km)",
      busConnectivity: "Well connected to Guwahati and Itanagar via ferry/bridge"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/pasighat"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Town area is accessible. River banks are sandy and rocky."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Kekar Monying (Historical Site)" },
      { time: "12:00 PM", activity: "Siang River Bank Picnic" },
      { time: "03:00 PM", activity: "Daying Ering Wildlife Sanctuary" }
    ],

    foodGuide: [
      { name: "Sirang Hub", type: "Family", specialty: "Fish Curry", rating: 4.1 },
      { name: "Hotel Pane", type: "City", specialty: "Indian Thali", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "Bakin Pertin General Hospital"
    }
  },
  {
    id: 308,
    name: "Itanagar (Ita Fort)",
    slug: "itanagar-ita-fort",
    state: "Arunachal Pradesh",
    category: "Heritage",
    badge: "Fort of Bricks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ita_Fort_Entrance.jpg/800px-Ita_Fort_Entrance.jpg",
    description: "The capital city is named after the Ita Fort (Fort of Bricks), built in the 14th century. It also houses the stunning Ganga Lake (Gyakar Sinyi) and the Jawaharlal Nehru State Museum.",
    coordinates: { lat: 27.0844, lng: 93.6053 },

    essentials: {
      bestTime: "October to April",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM (Fort/Museum)",
      entryFee: {
        Fort: "₹20",
        Museum: "₹10",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Donyi Polo Airport, Hollongi (25 km)",
      nearestRailway: "Naharlagun (15 km)",
      busConnectivity: "Overnight super luxury buses from Guwahati (9 hours)"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/itanagar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Museum and Fort grounds are partially accessible. Ganga Lake has steps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Jawaharlal Nehru State Museum" },
      { time: "12:00 PM", activity: "Ita Fort Ruins" },
      { time: "03:00 PM", activity: "Boating at Ganga Lake" }
    ],

    foodGuide: [
      { name: "Poong Nest", type: "Local", specialty: "Bamboo Shoot Fry", rating: 4.2 },
      { name: "ABC Restaurant", type: "City", specialty: "Biryani & Chinese", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "Ramakrishna Mission Hospital"
    }
  },
  {
    id: 309,
    name: "Dirang",
    slug: "dirang",
    state: "Arunachal Pradesh",
    category: "Hill Stations",
    badge: "Hot Water Springs",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Dirang_Valley.jpg/800px-Dirang_Valley.jpg",
    description: "A picturesque stopover on the way to Tawang. Dirang is famous for its hot water springs believed to have medicinal properties, the Dirang Dzong (fort), and apple orchards.",
    coordinates: { lat: 27.3592, lng: 92.2467 },

    essentials: {
      bestTime: "March to October",
      weather: "Mild",
      timings: "24 Hours (Springs best in morning)",
      entryFee: {
        Entry: "Free",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Tezpur (195 km)",
      nearestRailway: "Bhalukpong (135 km)",
      busConnectivity: "Shared taxis from Bomdila (40 km)"
    },

    externalLinks: {
      officialBooking: "https://arunachaltourism.com/",
      googleMaps: "https://goo.gl/maps/dirang"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Access to hot springs involves descending stairs/rocks. River bank is uneven."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Dip in Hot Water Springs" },
      { time: "10:30 AM", activity: "Dirang Dzong Visit" },
      { time: "02:00 PM", activity: "National Yak Research Centre" }
    ],

    foodGuide: [
      { name: "Hotel Pemaling", type: "Hotel", specialty: "Local Thali", rating: 4.1 },
      { name: "Dharma Coffee House", type: "Cafe", specialty: "Coffee & Snacks", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "CHC Dirang"
    }
  },
  {
    id: 310,
    name: "Pakke Tiger Reserve",
    slug: "pakke-tiger-reserve",
    state: "Arunachal Pradesh",
    category: "Wildlife",
    badge: "Hornbill Haven",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Great_Hornbill_Pakke.jpg/800px-Great_Hornbill_Pakke.jpg",
    description: "A haven for hornbills and tigers, Pakke (Pakhui) is known for its successful community-based conservation. It offers jungle safaris and birdwatching opportunities in the foothills.",
    coordinates: { lat: 26.9634, lng: 92.8647 },

    essentials: {
      bestTime: "November to April",
      weather: "Sub-tropical",
      timings: "06:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹50 (Indian)",
        Jeep: "₹1500+",
        Permit: "ILP + Forest Permit Required"
      }
    },

    transport: {
      nearestAirport: "Tezpur (50 km)",
      nearestRailway: "Soibari (36 km)",
      busConnectivity: "Accessible via Seijosa town from Assam border"
    },

    externalLinks: {
      officialBooking: "https://pakketigerreserve.org/",
      googleMaps: "https://goo.gl/maps/pakke"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jungle terrain. Safari vehicles are high-clearance jeeps/gypsies."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Early Morning Birdwatching (Hornbills)" },
      { time: "09:00 AM", activity: "Tipi Orchidarium (En route)" },
      { time: "03:00 PM", activity: "Jeep Safari" }
    ],

    foodGuide: [
      { name: "Jungle Camp Seijosa", type: "Lodge", specialty: "Homestyle Meals", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3311",
      nearestHospital: "Civil Hospital Seijosa"
    }
  }
]; 
