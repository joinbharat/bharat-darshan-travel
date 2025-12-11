/**
 * NAGALAND_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Nagaland Tourism & Village Councils
 * - Permits: ILP (Inner Line Permit) is MANDATORY for all domestic tourists.
 * - Festivals: Hornbill Festival (Dec 1-10) Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const NAGALAND_PLACES = [
  // --- CULTURE & FESTIVALS ---
  {
    id: 1901,
    name: "Kisama Heritage Village",
    slug: "kisama-heritage-village",
    state: "Nagaland",
    category: "Heritage",
    badge: "Home of Hornbill Festival",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Naga_Heritage_Village_Kisama.jpg/800px-Naga_Heritage_Village_Kisama.jpg",
    description: "Built to showcase the distinct culture of all 16 Naga tribes in one place. It is the permanent venue for the famous Hornbill Festival held every December (1st-10th).",
    coordinates: { lat: 25.6167, lng: 94.1167 },

    essentials: {
      bestTime: "December 1-10 (Hornbill Festival)",
      weather: "Cool/Dry",
      timings: "09:00 AM - 05:00 PM (During Fest: 8 AM - 8 PM)",
      entryFee: {
        Daily: "₹20",
        FestivalPass: "₹50-100",
        Camera: "₹50"
      }
    },

    transport: {
      nearestAirport: "Dimapur (85 km)",
      nearestRailway: "Dimapur (85 km)",
      busConnectivity: "Taxis/Buses available from Kohima (12 km)"
    },

    externalLinks: {
      officialBooking: "https://hornbillfestival.com/",
      googleMaps: "https://goo.gl/maps/kisama"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main arena is paved and flat. However, individual tribal Morungs (huts) may have steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Tribal Morung Visits" },
      { time: "11:00 AM", activity: "Cultural Dance Performances" },
      { time: "01:00 PM", activity: "WWII Museum (Inside Complex)" }
    ],

    foodGuide: [
      { name: "Bamboo Pavilion", type: "Festival", specialty: "Smoked Pork with Akhuni", rating: 4.8 },
      { name: "Hortiscape", type: "Stall", specialty: "Naga Coffee & Rice Beer", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Naga Hospital Authority Kohima"
    }
  },
  {
    id: 1902,
    name: "Khonoma Green Village",
    slug: "khonoma-village",
    state: "Nagaland",
    category: "Heritage",
    badge: "Asia's First Green Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Khonoma_Village_Gate.jpg/800px-Khonoma_Village_Gate.jpg",
    description: "A 700-year-old Angami settlement that banned hunting and logging to create a unique conservation model. The village is fortified with traditional gates and offers stunning terrace paddy views.",
    coordinates: { lat: 25.6479, lng: 94.0224 },

    essentials: {
      bestTime: "September to March",
      weather: "Cold/Misty",
      timings: "08:00 AM - 04:00 PM",
      entryFee: {
        VillageEntry: "₹50",
        Guide: "₹500-1000 (Mandatory for history tour)"
      }
    },

    transport: {
      nearestAirport: "Dimapur (90 km)",
      nearestRailway: "Dimapur (90 km)",
      busConnectivity: "Taxi from Kohima (20 km - 1 hour)"
    },

    externalLinks: {
      officialBooking: "https://tourism.nagaland.gov.in/",
      googleMaps: "https://goo.gl/maps/khonoma"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep stone steps (Dzüdü) connect different levels of the village."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Village Walk & Kuda (Fort)" },
      { time: "11:30 AM", activity: "Semoma Fort Visit" },
      { time: "01:00 PM", activity: "Traditional Organic Lunch" }
    ],

    foodGuide: [
      { name: "Meru's Homestay", type: "Home", specialty: "Galho (Naga Khichdi)", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Zubza PHC"
    }
  },

  // --- HISTORY ---
  {
    id: 1903,
    name: "Kohima War Cemetery",
    slug: "kohima-war-cemetery",
    state: "Nagaland",
    category: "Heritage",
    badge: "Battle of Tennis Court",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kohima_War_Cemetery_Overview.jpg/800px-Kohima_War_Cemetery_Overview.jpg",
    description: "Maintained by the CWGC, this cemetery sits on Garrison Hill, the site of the bitter Battle of Kohima (WWII). It is famous for the 'Kohima Epitaph' carved on a memorial stone.",
    coordinates: { lat: 25.6747, lng: 94.1105 },

    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dimapur (74 km)",
      nearestRailway: "Dimapur (74 km)",
      busConnectivity: "Located in the heart of Kohima city, walkable from Phoolbari"
    },

    externalLinks: {
      officialBooking: "https://www.cwgc.org/",
      googleMaps: "https://goo.gl/maps/kohimacemetery"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Terraced grounds are connected by ramps and paved paths."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Walk through terraces" },
      { time: "03:30 PM", activity: "View the Tennis Court Marker" },
      { time: "04:30 PM", activity: "Sunset view of Kohima" }
    ],

    foodGuide: [
      { name: "Ozone Cafe", type: "Cafe", specialty: "Coffee & Axone Pork", rating: 4.4 },
      { name: "Dream Cafe", type: "View", specialty: "Naga Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Naga Hospital Kohima"
    }
  },

  // --- NATURE & TREKKING ---
  {
    id: 1904,
    name: "Dzukou Valley",
    slug: "dzukou-valley-nagaland",
    state: "Nagaland",
    category: "Nature",
    badge: "Valley of Flowers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dzukou_Valley_Nagaland.jpg/800px-Dzukou_Valley_Nagaland.jpg",
    description: "Situated at 2452m, this valley straddles the Nagaland-Manipur border. It is famous for its rolling dwarf bamboo forests and the Dzukou Lily that blooms in summer.",
    coordinates: { lat: 25.5714, lng: 94.0628 },

    essentials: {
      bestTime: "June-Sep (Flowers) or Winter (Frost)",
      weather: "Cold/Windy",
      timings: "Trek starts early (06:00 AM)",
      entryFee: {
        Entry: "₹100 (Indian)",
        Camera: "₹50",
        PlasticDeposit: "Refundable"
      }
    },

    transport: {
      nearestAirport: "Dimapur (90 km)",
      nearestRailway: "Dimapur (90 km)",
      busConnectivity: "Taxi from Kohima to Viswema or Jakhama (Starting points)"
    },

    externalLinks: {
      officialBooking: "https://tourism.nagaland.gov.in/",
      googleMaps: "https://goo.gl/maps/dzukou"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Trek involves a steep climb of 1-2 hours followed by a 2-3 hour flat walk. Not accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Start Trek from Viswema" },
      { time: "11:00 AM", activity: "Reach Guest House" },
      { time: "01:00 PM", activity: "Valley Walk & Cave Visit" }
    ],

    foodGuide: [
      { name: "Guest House Kitchen", type: "Basic", specialty: "Rice, Dal & Egg", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Jakhama Army Hospital"
    }
  },
  {
    id: 1905,
    name: "Japfu Peak",
    slug: "japfu-peak",
    state: "Nagaland",
    category: "Nature",
    badge: "Second Highest Peak",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Japfu_Peak_Rhododendron.jpg/800px-Japfu_Peak_Rhododendron.jpg",
    description: "The second highest peak in Nagaland (3048m), famous for housing the world's tallest Rhododendron tree (over 109 feet). It offers spectacular sunrise views.",
    coordinates: { lat: 25.6022, lng: 94.0655 },

    essentials: {
      bestTime: "October to April",
      weather: "Cold",
      timings: "Day Trek (Start by 4 AM for sunrise)",
      entryFee: {
        Guide: "₹1000-1500 (Mandatory)"
      }
    },

    transport: {
      nearestAirport: "Dimapur (95 km)",
      nearestRailway: "Dimapur (95 km)",
      busConnectivity: "Base camp is Kigwema village (15 km from Kohima)"
    },

    externalLinks: {
      officialBooking: "https://tourism.nagaland.gov.in/",
      googleMaps: "https://goo.gl/maps/japfu"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep and strenuous jungle trek."
    },

    routePlan: [
      { time: "03:00 AM", activity: "Start Night Trek" },
      { time: "06:00 AM", activity: "Sunrise from Peak" },
      { time: "09:00 AM", activity: "See Giant Rhododendron" }
    ],

    foodGuide: [
      { name: "Kigwema Homestays", type: "Home", specialty: "Naga Pork Curry", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Kohima"
    }
  },

  // --- TRIBAL CULTURE ---
  {
    id: 1906,
    name: "Longwa Village (Mon)",
    slug: "longwa-village",
    state: "Nagaland",
    category: "Heritage",
    badge: "Dual Citizenship Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Konyak_Naga_Longwa.jpg/800px-Konyak_Naga_Longwa.jpg",
    description: "Home to the Konyak tribe (former headhunters). The village uniquely straddles the India-Myanmar border; the Chief's (Angh) house lies half in India and half in Myanmar.",
    coordinates: { lat: 26.8375, lng: 95.1275 },

    essentials: {
      bestTime: "October to April",
      weather: "Rural/Warm",
      timings: "08:00 AM - 04:00 PM",
      entryFee: {
        Entry: "Free",
        GiftForAngh: "Customary (Tea/Sugar)"
      }
    },

    transport: {
      nearestAirport: "Dibrugarh (150 km) or Dimapur (280 km)",
      nearestRailway: "Bhojo (Assam) - 60 km",
      busConnectivity: "Sumo from Mon town (42 km)"
    },

    externalLinks: {
      officialBooking: "https://mon.nic.in/",
      googleMaps: "https://goo.gl/maps/longwa"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote location with rough roads. The Angh's house has raised wooden platforms."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Meet the Angh (Chief)" },
      { time: "11:30 AM", activity: "Step into Myanmar side" },
      { time: "01:00 PM", activity: "See Gunsmiths & Bead Workers" }
    ],

    foodGuide: [
      { name: "Longwa Tourist Lodge", type: "Govt", specialty: "Boiled Pork & Greens", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Civil Hospital Mon"
    }
  },
  {
    id: 1907,
    name: "Mokokchung",
    slug: "mokokchung",
    state: "Nagaland",
    category: "Heritage",
    badge: "Land of Ao Nagas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mokokchung_View.jpg/800px-Mokokchung_View.jpg",
    description: "The cultural capital of Nagaland and home to the Ao tribe. Known for its clean villages like Ungma and Longkhum, and the Moatsu festival celebrated in May.",
    coordinates: { lat: 26.3276, lng: 94.5262 },

    essentials: {
      bestTime: "October to May",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Jorhat (105 km)",
      nearestRailway: "Mariani (85 km)",
      busConnectivity: "Bus/Sumo from Kohima or Jorhat"
    },

    externalLinks: {
      officialBooking: "https://mokokchung.nic.in/",
      googleMaps: "https://goo.gl/maps/mokokchung"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Town area is hilly but paved. Tourist lodge is accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ungma Village (Oldest Ao Village)" },
      { time: "11:30 AM", activity: "Longkhum Village (Nature)" },
      { time: "03:00 PM", activity: "Mokokchung Park" }
    ],

    foodGuide: [
      { name: "Restaurant 7/11", type: "City", specialty: "Anishi (Yam Stew)", rating: 4.2 },
      { name: "Hills Cafe", type: "Casual", specialty: "Coffee & Cake", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Imkongliba Memorial Hospital"
    }
  },

  // --- HISTORY & NATURE ---
  {
    id: 1908,
    name: "Kachari Ruins",
    slug: "kachari-ruins",
    state: "Nagaland",
    category: "Heritage",
    badge: "Mushroom Monoliths",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kachari_Ruins_Dimapur.jpg/800px-Kachari_Ruins_Dimapur.jpg",
    description: "Located in Dimapur, these are the ruins of the 10th-century Kachari civilization. The site features unique mushroom-shaped megaliths believed to be chess pieces of the gods.",
    coordinates: { lat: 25.9128, lng: 93.7250 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 04:00 PM (Closed Sundays)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dimapur (4 km)",
      nearestRailway: "Dimapur (2 km)",
      busConnectivity: "Located in the city center (Super Market area)"
    },

    externalLinks: {
      officialBooking: "https://tourism.nagaland.gov.in/",
      googleMaps: "https://goo.gl/maps/kachariruins"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The park area containing the ruins is flat and grassy."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Walk among Monoliths" },
      { time: "11:00 AM", activity: "Photography" },
      { time: "12:00 PM", activity: "Shopping at Hong Kong Market" }
    ],

    foodGuide: [
      { name: "Ethnic Table", type: "City", specialty: "Smoked Pork with Bamboo Shoot", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Civil Hospital Dimapur"
    }
  },
  {
    id: 1909,
    name: "Dzuleke",
    slug: "dzuleke-eco-village",
    state: "Nagaland",
    category: "Nature",
    badge: "Eco-Tourism Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dzuleke_River.jpg/800px-Dzuleke_River.jpg",
    description: "A serene village famous for its community-based eco-tourism. The Dzuleke river flows underground here and re-emerges, and the area is home to the rare Blyth's Tragopan.",
    coordinates: { lat: 25.6200, lng: 93.9600 },

    essentials: {
      bestTime: "October to April",
      weather: "Cool",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        Homestay: "₹1500-2000"
      }
    },

    transport: {
      nearestAirport: "Dimapur (110 km)",
      nearestRailway: "Dimapur (110 km)",
      busConnectivity: "Taxi from Kohima (40 km) via Khonoma"
    },

    externalLinks: {
      officialBooking: "https://tourism.nagaland.gov.in/",
      googleMaps: "https://goo.gl/maps/dzuleke"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Rural terrain with unpaved paths."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Picnic by the River" },
      { time: "01:00 PM", activity: "Trout Fishing (Catch & Release)" },
      { time: "03:00 PM", activity: "Village Homestay Experience" }
    ],

    foodGuide: [
      { name: "Dzuleke Homestays", type: "Home", specialty: "Organic Vegetables & Red Rice", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Kohima (40 km)"
    }
  },
  {
    id: 1910,
    name: "Triple Falls",
    slug: "triple-falls-dimapur",
    state: "Nagaland",
    category: "Nature",
    badge: "Three-Tiered Waterfall",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Triple_Falls_Nagaland.jpg/800px-Triple_Falls_Nagaland.jpg",
    description: "Located in Seithekima village, these three glistening water streams cascade down from a height of 280 feet into a natural pool. It is a popular trekking and picnic spot.",
    coordinates: { lat: 25.8236, lng: 93.7788 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "08:00 AM - 04:00 PM",
      entryFee: { Entry: "₹20" }
    },

    transport: {
      nearestAirport: "Dimapur (18 km)",
      nearestRailway: "Dimapur (18 km)",
      busConnectivity: "Hire a taxi from Dimapur to Seithekima"
    },

    externalLinks: {
      officialBooking: "https://tourism.nagaland.gov.in/",
      googleMaps: "https://goo.gl/maps/triplefalls"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires a short trek from the village road to the falls."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Trek to Falls" },
      { time: "11:00 AM", activity: "Swimming & Picnic" },
      { time: "02:00 PM", activity: "Return to Dimapur" }
    ],

    foodGuide: [
      { name: "Niathu Resort", type: "Resort", specialty: "Naga Thali", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0370-2270107",
      nearestHospital: "Referral Hospital Dimapur"
    }
  }
]; 
