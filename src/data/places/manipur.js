/**
 * MANIPUR_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Manipur Tourism & Dept of Art and Culture
 * - Wildlife: Keibul Lamjao National Park Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const MANIPUR_PLACES = [
  // --- NATURE & WILDLIFE ---
  {
    id: 1601,
    name: "Loktak Lake & Sendra Island",
    slug: "loktak-lake",
    state: "Manipur",
    category: "Nature",
    badge: "Largest Freshwater Lake in NE India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Loktak_Lake_Manipur.jpg/800px-Loktak_Lake_Manipur.jpg",
    description: "Famous for its floating circular swamps called 'Phumdis'. It is the lifeline of Manipur and offers mesmerizing views from the Sendra Island tourist resort.",
    coordinates: { lat: 24.5557, lng: 93.8123 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 06:00 PM (Boating)",
      entryFee: {
        Entry: "Free",
        Boating: "₹500-1000 (Per boat)"
      }
    },

    transport: {
      nearestAirport: "Imphal (48 km)",
      nearestRailway: "Jiribam (220 km) or Dimapur (215 km)",
      busConnectivity: "Local buses/taxis from Imphal (Moirang route)"
    },

    externalLinks: {
      officialBooking: "https://manipurtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/loktak"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Sendra resort is on a hillock. Boat jetties are basic and not wheelchair accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Boat Ride to Phumdis" },
      { time: "12:00 PM", activity: "Lunch at Sendra Cottages" },
      { time: "03:00 PM", activity: "INA Martyr's Memorial Complex (Moirang)" }
    ],

    foodGuide: [
      { name: "Sendra Cottages Cafe", type: "Resort", specialty: "Local Fish Curry", rating: 4.3 },
      { name: "Moirang Market Stalls", type: "Street", specialty: "Bora (Pakora)", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "CHC Moirang"
    }
  },
  {
    id: 1602,
    name: "Keibul Lamjao National Park",
    slug: "keibul-lamjao-park",
    state: "Manipur",
    category: "Wildlife",
    badge: "World's Only Floating Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sangai_Deer_Keibul_Lamjao.jpg/800px-Sangai_Deer_Keibul_Lamjao.jpg",
    description: "The only floating national park in the world, located on Loktak Lake. It is the last natural habitat of the 'Sangai' (Brow-antlered deer), the dancing deer of Manipur.",
    coordinates: { lat: 24.4623, lng: 93.8329 },

    essentials: {
      bestTime: "October to April",
      weather: "Humid/Cool",
      timings: "06:00 AM - 10:00 AM (Best for Sighting)",
      entryFee: {
        Entry: "₹30 (Indian)",
        Camera: "₹50",
        Boat: "₹500 (Canoe)"
      }
    },

    transport: {
      nearestAirport: "Imphal (53 km)",
      nearestRailway: "Dimapur (220 km)",
      busConnectivity: "Taxi from Moirang town (5 km away)"
    },

    externalLinks: {
      officialBooking: "https://forest.manipur.gov.in/",
      googleMaps: "https://goo.gl/maps/keibul"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Watchtowers require climbing. Canoes are narrow and unstable."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Early Morning Canoe Safari" },
      { time: "08:30 AM", activity: "Watchtower Sighting of Sangai" },
      { time: "10:00 AM", activity: "Visit Park Interpretation Centre" }
    ],

    foodGuide: [
      { name: "Local Homestays", type: "Home", specialty: "Manipuri Thali (Eromba)", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "CHC Moirang"
    }
  },

  // --- HERITAGE & HISTORY ---
  {
    id: 1603,
    name: "Kangla Fort",
    slug: "kangla-fort",
    state: "Manipur",
    category: "Heritage",
    badge: "Ancient Seat of Power",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kangla_Gate_Imphal.jpg/800px-Kangla_Gate_Imphal.jpg",
    description: "The ancient capital of the Manipuri Kingdom. The complex houses royal palaces, temples, and the sacred 'Kangla Sha' (dragon-lion statues) which are the state emblem.",
    coordinates: { lat: 24.8080, lng: 93.9455 },

    essentials: {
      bestTime: "October to March",
      weather: "City",
      timings: "07:00 AM - 05:00 PM (Closed Wednesdays)",
      entryFee: {
        Indian: "₹20",
        Foreigner: "₹50",
        ErikshawCharge: "₹20"
      }
    },

    transport: {
      nearestAirport: "Imphal (8 km)",
      nearestRailway: "Dimapur (210 km)",
      busConnectivity: "Located in the heart of Imphal city"
    },

    externalLinks: {
      officialBooking: "https://manipurtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/kangla"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "E-rickshaws available inside the fort complex make it accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Kangla Sha & Main Gate" },
      { time: "10:30 AM", activity: "Govindaji Temple Ruins" },
      { time: "12:00 PM", activity: "General Slim's Cottage" }
    ],

    foodGuide: [
      { name: "Luxmi Kitchen", type: "City", specialty: "Manipuri Thali", rating: 4.5 },
      { name: "Classic Cafe", type: "Hotel", specialty: "Multi-Cuisine", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "RIMS Imphal"
    }
  },
  {
    id: 1604,
    name: "Imphal War Cemetery",
    slug: "imphal-war-cemetery",
    state: "Manipur",
    category: "Heritage",
    badge: "WWII Memorial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Imphal_War_Cemetery.jpg/800px-Imphal_War_Cemetery.jpg",
    description: "A serene and well-maintained cemetery managed by the Commonwealth War Graves Commission. It commemorates the soldiers who died in the Battle of Imphal during World War II.",
    coordinates: { lat: 24.8170, lng: 93.9490 },

    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM (Summer till 5 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Imphal (10 km)",
      nearestRailway: "Dimapur (210 km)",
      busConnectivity: "Accessible by auto/taxi from Imphal center"
    },

    externalLinks: {
      officialBooking: "https://www.cwgc.org/",
      googleMaps: "https://goo.gl/maps/imphalcemetery"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The grounds are flat, grassy, and meticulously maintained with paved paths."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Walk through the Memorial" },
      { time: "04:00 PM", activity: "Read Historical Plaques" },
      { time: "05:00 PM", activity: "Visit nearby Kangla Fort" }
    ],

    foodGuide: [
      { name: "Forage", type: "Cafe", specialty: "Organic Continental", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "JNIMS Hospital"
    }
  },

  // --- CULTURE & SHOPPING ---
  {
    id: 1605,
    name: "Ima Keithel (Mother's Market)",
    slug: "ima-keithel",
    state: "Manipur",
    category: "Heritage",
    badge: "World's Largest All-Women Market",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ima_Keithel_Market.jpg/800px-Ima_Keithel_Market.jpg",
    description: "A unique 500-year-old market run exclusively by women. Over 5000 'Imas' (mothers) sell everything from handloom shawls and fresh produce to traditional handicrafts.",
    coordinates: { lat: 24.8045, lng: 93.9378 },

    essentials: {
      bestTime: "All Year (Mornings are best)",
      weather: "Crowded",
      timings: "06:00 AM - 07:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Imphal (8 km)",
      nearestRailway: "Dimapur (210 km)",
      busConnectivity: "Central location in Imphal (Khwairamband Bazar)"
    },

    externalLinks: {
      officialBooking: "https://manipurtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/imakeithel"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main market buildings have ramps, but the aisles can be very crowded and narrow."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Traditional Breakfast at Market Stalls" },
      { time: "09:00 AM", activity: "Shopping for Phanek (Sarong)" },
      { time: "11:00 AM", activity: "Buying Local Spices & Ngari" }
    ],

    foodGuide: [
      { name: "Market Stalls", type: "Street", specialty: "Singju (Spicy Salad) & Chak-hao Kheer", rating: 4.7 },
      { name: "Hotel Imo", type: "City", specialty: "Authentic Manipuri", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "City Hospital Imphal"
    }
  },

  // --- NATURE & HILLS ---
  {
    id: 1606,
    name: "Dzukou Valley",
    slug: "dzukou-valley",
    state: "Manipur",
    category: "Nature",
    badge: "Valley of Flowers of NE",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dzukou_Valley_Landscape.jpg/800px-Dzukou_Valley_Landscape.jpg",
    description: "Located on the Manipur-Nagaland border, this valley is famous for its rolling hills, bamboo forests, and the endemic Dzukou Lily. It is a trekking paradise.",
    coordinates: { lat: 25.5714, lng: 94.0628 },

    essentials: {
      bestTime: "June to September (Flowers) or Winter",
      weather: "Cold/Trekking",
      timings: "Daylight Hours (Trek takes 5-6 hours)",
      entryFee: {
        Entry: "₹100 (Approx)",
        Guide: "₹1500+"
      }
    },

    transport: {
      nearestAirport: "Dimapur (74 km) or Imphal (100 km)",
      nearestRailway: "Dimapur (74 km)",
      busConnectivity: "Reach Mao Gate (Manipur side) or Viswema (Nagaland side) by taxi"
    },

    externalLinks: {
      officialBooking: "https://senapati.nic.in/",
      googleMaps: "https://goo.gl/maps/dzukou"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Strenuous trek involving steep climbs. Absolutely not wheelchair accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Start Trek from Mount Iso (Manipur side)" },
      { time: "12:00 PM", activity: "Valley Exploration & Photography" },
      { time: "04:00 PM", activity: "Camping in Guest House/Caves" }
    ],

    foodGuide: [
      { name: "Bring Your Own", type: "Self", specialty: "Instant Noodles/Tea", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "CHC Mao"
    }
  },
  {
    id: 1607,
    name: "Andro Heritage Village",
    slug: "andro-heritage-village",
    state: "Manipur",
    category: "Heritage",
    badge: "Ancient Pottery Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Andro_Village_Pottery.jpg/800px-Andro_Village_Pottery.jpg",
    description: "A small village known for its traditional coil pottery (made without a wheel) and the ancient Panam Ningthou Temple containing a sacred fire believed to be burning since ancient times.",
    coordinates: { lat: 24.8333, lng: 94.0500 },

    essentials: {
      bestTime: "October to March",
      weather: "Rural/Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "₹20" }
    },

    transport: {
      nearestAirport: "Imphal (25 km)",
      nearestRailway: "Dimapur (230 km)",
      busConnectivity: "Taxi or private car from Imphal"
    },

    externalLinks: {
      officialBooking: "https://manipurtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/andro"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Village paths are unpaved/muddy. Temple area has steps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Visit Mutua Museum (Cultural Dolls)" },
      { time: "11:30 AM", activity: "Panam Ningthou Temple (Sacred Fire)" },
      { time: "01:00 PM", activity: "Pottery Workshop Observation" }
    ],

    foodGuide: [
      { name: "Village Local Stalls", type: "Local", specialty: "Yu (Local Rice Wine)", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "JNIMS Imphal"
    }
  },
  {
    id: 1608,
    name: "Shree Govindajee Temple",
    slug: "shree-govindajee-temple",
    state: "Manipur",
    category: "Spiritual",
    badge: "Royal Vaishnavite Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Govindajee_Temple_Imphal.jpg/800px-Govindajee_Temple_Imphal.jpg",
    description: "The most important temple in Imphal, dedicated to Lord Krishna. It has two gold-plated domes and a large congregation hall. The morning and evening Aartis are very rhythmic and spiritual.",
    coordinates: { lat: 24.8025, lng: 93.9472 },

    essentials: {
      bestTime: "Holi (Yaoshang) & Janmashtami",
      weather: "City",
      timings: "05:00 AM - 12:00 PM, 04:00 PM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Imphal (8 km)",
      nearestRailway: "Dimapur (210 km)",
      busConnectivity: "Located near the Royal Palace, accessible by auto"
    },

    externalLinks: {
      officialBooking: "https://manipurtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/govindajee"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main courtyard is paved and accessible. Some steps to the inner sanctum."
    },

    routePlan: [
      { time: "04:30 PM", activity: "Visit Temple Grounds" },
      { time: "05:00 PM", activity: "Evening Aarti (Pung Cholom)" },
      { time: "06:30 PM", activity: "Shopping at nearby stalls" }
    ],

    foodGuide: [
      { name: "Govindajee Prasadam", type: "Temple", specialty: "Sweet Rice", rating: 4.8 },
      { name: "Big Chill", type: "Cafe", specialty: "Snacks", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "JNIMS Hospital"
    }
  },
  {
    id: 1609,
    name: "Singda Dam",
    slug: "singda-dam",
    state: "Manipur",
    category: "Nature",
    badge: "Highest Mud Dam in World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Singda_Dam_Reservoir.jpg/800px-Singda_Dam_Reservoir.jpg",
    description: "Located 16 km from Imphal at an altitude of 921 meters, this is the world's highest mud dam. The reservoir is a popular picnic spot surrounded by paddy fields and hills.",
    coordinates: { lat: 24.8762, lng: 93.8188 },

    essentials: {
      bestTime: "October to March",
      weather: "Cool/Breezy",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Imphal (25 km)",
      nearestRailway: "Dimapur (200 km)",
      busConnectivity: "Taxi/Private car from Imphal"
    },

    externalLinks: {
      officialBooking: "https://manipurtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/singda"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The dam road is paved and offers good views without climbing."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Drive from Imphal" },
      { time: "03:00 PM", activity: "Walk on the Dam" },
      { time: "04:30 PM", activity: "Sunset Picnic" }
    ],

    foodGuide: [
      { name: "Roadside Stalls", type: "Street", specialty: "Pineapple & Chilli", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "RIMS Imphal"
    }
  },
  {
    id: 1610,
    name: "Khongjom War Memorial",
    slug: "khongjom-war-memorial",
    state: "Manipur",
    category: "Heritage",
    badge: "Anglo-Manipur War Site",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Khongjom_War_Memorial_Complex.jpg/800px-Khongjom_War_Memorial_Complex.jpg",
    description: "Located on Kheba Hill, this complex commemorates the brave Manipuri soldiers, led by Major Paona Brajabashi, who fought against the British in 1891. It features the world's tallest sword statue.",
    coordinates: { lat: 24.5097, lng: 94.0202 },

    essentials: {
      bestTime: "April (Khongjom Day on 23rd)",
      weather: "Sunny/Open",
      timings: "08:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Imphal (36 km)",
      nearestRailway: "Dimapur (240 km)",
      busConnectivity: "On the Indo-Myanmar Highway (Thoubal District)"
    },

    externalLinks: {
      officialBooking: "https://thoubal.nic.in/",
      googleMaps: "https://goo.gl/maps/khongjom"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The complex is vast with wide paved pathways. Ramp access to the main memorial."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Pay Tribute at Memorial" },
      { time: "11:00 AM", activity: "View the Giant Sword" },
      { time: "12:00 PM", activity: "Lunch at Thoubal" }
    ],

    foodGuide: [
      { name: "Classic Hotel Thoubal", type: "Hotel", specialty: "Chinese & Indian", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0385-2443451",
      nearestHospital: "District Hospital Thoubal"
    }
  }
]; 
