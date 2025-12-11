/**
 * HIMACHAL_PRADESH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: HPTDC & Dept of Tourism & Civil Aviation
 * - Permits: Rohtang Pass Permit (NGT) & Inner Line Permits (Spiti/Kinnaur)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const HIMACHAL_PRADESH_PLACES = [
  // --- HILL STATIONS & HERITAGE ---
  {
    id: 1001,
    name: "The Ridge & Mall Road, Shimla",
    slug: "shimla-ridge-mall-road",
    state: "Himachal Pradesh",
    category: "Heritage",
    badge: "Queen of Hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Shimla_Ridge_Church.jpg/800px-Shimla_Ridge_Church.jpg",
    description: "The heart of Shimla, featuring the neo-Gothic Christ Church and the Tudor-library style architecture. It is a pedestrian-only zone offering panoramic views of the Himalayas.",
    coordinates: { lat: 31.1048, lng: 77.1734 },

    essentials: {
      bestTime: "March to June, Dec-Jan (Snow)",
      weather: "Cool/Cold",
      timings: "24 Hours (Shops close by 9 PM)",
      entryFee: {
        Entry: "Free",
        Lift: "₹20 (Connects Cart Rd to Mall)",
        Church: "Free"
      }
    },

    transport: {
      nearestAirport: "Jubbarhatti (22 km)",
      nearestRailway: "Shimla Station (Toy Train - UNESCO Site)",
      busConnectivity: "ISBT Shimla to Lift (local bus/taxi)"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/shimla"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Ridge and Mall Road are flat and paved. The Tourism Lift makes the ascent from the main road accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Heritage Walk (Gaiety Theatre)" },
      { time: "05:30 PM", activity: "Sunset at The Ridge" },
      { time: "07:00 PM", activity: "Dinner at a Heritage Cafe" }
    ],

    foodGuide: [
      { name: "Wake & Bake", type: "Cafe", specialty: "Waffles & Coffee", rating: 4.5 },
      { name: "Sitaram & Sons", type: "Street", specialty: "Luchipuri (Since 1948)", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "IGMC Shimla"
    }
  },
  {
    id: 1002,
    name: "Manali (Hadimba Temple & Solang)",
    slug: "manali-hadimba-solang",
    state: "Himachal Pradesh",
    category: "Hill Stations",
    badge: "Valley of Gods",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hidimba_Devi_Temple_Manali.jpg/800px-Hidimba_Devi_Temple_Manali.jpg",
    description: "A high-altitude resort town famous for the 16th-century wooden Hadimba Devi Temple nestled in a cedar forest, and the adventure hub of Solang Valley.",
    coordinates: { lat: 32.2483, lng: 77.1806 },

    essentials: {
      bestTime: "October to June",
      weather: "Cold/Alpine",
      timings: "08:00 AM - 06:00 PM (Temple)",
      entryFee: {
        Temple: "Free",
        SolangActivities: "₹500-3000 (Paragliding/ATV)"
      }
    },

    transport: {
      nearestAirport: "Bhuntar (50 km)",
      nearestRailway: "Joginder Nagar (160 km)",
      busConnectivity: "Overnight Volvo buses from Delhi/Chandigarh"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/manali"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Hadimba temple has steps and uneven forest ground. Solang Valley is rocky."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Hadimba Temple Visit" },
      { time: "11:00 AM", activity: "Drive to Solang Valley" },
      { time: "01:00 PM", activity: "Adventure Sports (Paragliding)" }
    ],

    foodGuide: [
      { name: "Johnson's Cafe", type: "Fine Dining", specialty: "Trout Fish", rating: 4.4 },
      { name: "Café 1947", type: "Riverside", specialty: "Italian", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Manali"
    }
  },

  // --- ADVENTURE & NATURE ---
  {
    id: 1003,
    name: "Rohtang Pass",
    slug: "rohtang-pass",
    state: "Himachal Pradesh",
    category: "Nature",
    badge: "Snow Point (13,050 ft)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rohtang_Pass.jpg/800px-Rohtang_Pass.jpg",
    description: "A high mountain pass connecting Kullu Valley with Lahaul and Spiti. Famous for year-round snow availability and breathtaking panoramic views of the Pir Panjal range.",
    coordinates: { lat: 32.3716, lng: 77.2466 },

    essentials: {
      bestTime: "June to October (Closed in Winter)",
      weather: "Freezing",
      timings: "06:00 AM - 04:00 PM (Entry Restricted)",
      entryFee: {
        Permit: "₹550 (Mandatory NGT Permit for Vehicles)",
        CongestionCharge: "₹50"
      }
    },

    transport: {
      nearestAirport: "Bhuntar (100 km)",
      nearestRailway: "Joginder Nagar (200 km)",
      busConnectivity: "Electric Buses by HPTDC or Private Taxis from Manali (51 km)"
    },

    externalLinks: {
      officialBooking: "https://rohtangpermits.nic.in/",
      googleMaps: "https://goo.gl/maps/rohtang"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "High altitude, snowy, and slippery terrain. Not accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Start from Manali (Early to beat traffic)" },
      { time: "09:00 AM", activity: "Snow Activities at Pass" },
      { time: "01:00 PM", activity: "Return via Atal Tunnel (Sissu visit)" }
    ],

    foodGuide: [
      { name: "Roadside Maggi Points", type: "Stall", specialty: "Maggi & Chai", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Manali"
    }
  },
  {
    id: 1004,
    name: "Bir Billing",
    slug: "bir-billing",
    state: "Himachal Pradesh",
    category: "Adventure",
    badge: "World's 2nd Highest Paragliding Site",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bir_Billing_Paragliding.jpg/800px-Bir_Billing_Paragliding.jpg",
    description: "Bir is the landing site and Billing is the takeoff site. Known globally for hosting the Paragliding World Cup, it also offers beautiful Tibetan monasteries and cycling trails.",
    coordinates: { lat: 32.0436, lng: 76.7144 },

    essentials: {
      bestTime: "March-June & Oct-Nov",
      weather: "Pleasant",
      timings: "Daylight Hours for Flying",
      entryFee: {
        Entry: "Free",
        Paragliding: "₹2500-3000 (15-20 mins)"
      }
    },

    transport: {
      nearestAirport: "Gaggal (Dharamshala) - 67 km",
      nearestRailway: "Pathankot (140 km)",
      busConnectivity: "Buses to Baijnath, then taxi to Bir"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/birbilling"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Landing site in Bir is grassy and flat, viewable by wheelchair. Takeoff site (Billing) is hard to access."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Drive to Billing (Takeoff Point)" },
      { time: "10:00 AM", activity: "Paragliding Flight" },
      { time: "01:00 PM", activity: "Visit Palpung Sherabling Monastery" }
    ],

    foodGuide: [
      { name: "Avva's Cafe", type: "Cafe", specialty: "South Indian", rating: 4.6 },
      { name: "Garden Cafe", type: "Casual", specialty: "Pizza & Pasta", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Vivekananda Hospital Palampur"
    }
  },

  // --- SPIRITUAL & CULTURE ---
  {
    id: 1005,
    name: "McLeod Ganj (Tsuglagkhang)",
    slug: "mcleod-ganj",
    state: "Himachal Pradesh",
    category: "Spiritual",
    badge: "Little Lhasa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Namgyal_Monastery_Dharamshala.jpg/800px-Namgyal_Monastery_Dharamshala.jpg",
    description: "The residence of His Holiness the 14th Dalai Lama. It is a hub of Tibetan culture, Buddhism, and crafts, set against the majestic Dhauladhar range.",
    coordinates: { lat: 32.2426, lng: 76.3213 },

    essentials: {
      bestTime: "March to June",
      weather: "Cool/Rainy",
      timings: "05:00 AM - 08:00 PM (Temple)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Gaggal (18 km)",
      nearestRailway: "Pathankot (90 km)",
      busConnectivity: "Frequent buses from Dharamshala and Delhi"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/mcleodganj"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main temple complex (Tsuglagkhang) is accessible by wheelchair via ramps. Streets are steep."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Tsuglagkhang Complex & Museum" },
      { time: "12:00 PM", activity: "Bhagsunag Waterfall Trek" },
      { time: "04:00 PM", activity: "Shopping at Tibetan Market" }
    ],

    foodGuide: [
      { name: "Tibet Kitchen", type: "Local", specialty: "Momos & Thukpa", rating: 4.5 },
      { name: "Illiterati Cafe", type: "Book Cafe", specialty: "Coffee & Views", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Zonal Hospital Dharamshala"
    }
  },
  {
    id: 1006,
    name: "Spiti Valley (Key Monastery)",
    slug: "spiti-valley-key-monastery",
    state: "Himachal Pradesh",
    category: "Nature",
    badge: "The Middle Land",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Key_Monastery_Spiti_Valley.jpg/800px-Key_Monastery_Spiti_Valley.jpg",
    description: "A cold desert mountain valley famous for its stark landscapes and the 1000-year-old Key Monastery perched on a hilltop. It looks like a honeycomb of boxes.",
    coordinates: { lat: 32.2982, lng: 78.0108 },

    essentials: {
      bestTime: "June to September",
      weather: "Cold Desert",
      timings: "06:00 AM - 06:00 PM (Monastery)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Bhuntar (250 km)",
      nearestRailway: "Shimla (440 km)",
      busConnectivity: "HRTC bus from Manali or Shimla (Long arduous journey)"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/keymonastery"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Extremely difficult terrain. Monastery has steep steps and narrow passages."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Key Monastery Visit" },
      { time: "11:30 AM", activity: "Drive to Kibber Village" },
      { time: "02:00 PM", activity: "Chicham Bridge (Highest Bridge)" }
    ],

    foodGuide: [
      { name: "The Himalayan Cafe (Kaza)", type: "Cafe", specialty: "Seabuckthorn Tea", rating: 4.3 },
      { name: "Local Homestays", type: "Home", specialty: "Butter Tea & Tsampa", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "CHC Kaza"
    }
  },

  // --- NATURE & WILDLIFE ---
  {
    id: 1007,
    name: "Khajjiar",
    slug: "khajjiar",
    state: "Himachal Pradesh",
    category: "Nature",
    badge: "Mini Switzerland of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Khajjiar_Himachal_Pradesh.jpg/800px-Khajjiar_Himachal_Pradesh.jpg",
    description: "A small plateau with a small stream-fed lake in the middle, surrounded by meadows and forests. It bears a striking resemblance to Switzerland's topography.",
    coordinates: { lat: 32.5558, lng: 76.0656 },

    essentials: {
      bestTime: "March to June",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        Zorbing: "₹300",
        HorseRide: "₹500+"
      }
    },

    transport: {
      nearestAirport: "Gaggal (110 km)",
      nearestRailway: "Pathankot (95 km)",
      busConnectivity: "Taxi/Bus from Dalhousie (24 km)"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/khajjiar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The meadow periphery is accessible, but the grassy center is uneven."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Walk around Khajjiar Lake" },
      { time: "12:00 PM", activity: "Picnic on the Meadows" },
      { time: "02:00 PM", activity: "Visit Khajji Nag Temple" }
    ],

    foodGuide: [
      { name: "HPTDC Devdar", type: "Restaurant", specialty: "Buffet Lunch", rating: 4.0 },
      { name: "Street Vendors", type: "Stall", specialty: "Cotton Candy & Maggi", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Civil Hospital Dalhousie"
    }
  },
  {
    id: 1008,
    name: "Great Himalayan National Park",
    slug: "great-himalayan-national-park",
    state: "Himachal Pradesh",
    category: "Wildlife",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Great_Himalayan_National_Park_scenery.jpg/800px-Great_Himalayan_National_Park_scenery.jpg",
    description: "Located in the Kullu region, this park protects the pristine Western Himalayan flora and fauna, including the Blue Sheep, Snow Leopard, and Himalayan Tahr.",
    coordinates: { lat: 31.7431, lng: 77.3697 },

    essentials: {
      bestTime: "April to June, Oct-Nov",
      weather: "Alpine/Forest",
      timings: "Sunrise to Sunset",
      entryFee: {
        Indian: "₹100",
        Foreigner: "₹400",
        Camping: "Extra"
      }
    },

    transport: {
      nearestAirport: "Bhuntar (50 km)",
      nearestRailway: "Joginder Nagar (100 km)",
      busConnectivity: "Bus to Aut (Tunnel), then taxi to Gushaini (Entry point)"
    },

    externalLinks: {
      officialBooking: "https://www.greathimalayannationalpark.org/",
      googleMaps: "https://goo.gl/maps/ghnp"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Strictly a trekking destination. No vehicle access inside core zones."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Trek from Gushaini to Rolla" },
      { time: "01:00 PM", activity: "River Crossing & Birdwatching" },
      { time: "04:00 PM", activity: "Return to Ecozone Homestay" }
    ],

    foodGuide: [
      { name: "Raju's Cottage (Gushaini)", type: "Homestay", specialty: "Trout Fish", rating: 4.8 },
      { name: "Himalayan Trout House", type: "Lodge", specialty: "Grilled Trout", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Regional Hospital Kullu"
    }
  },
  {
    id: 1009,
    name: "Kasol & Manikaran",
    slug: "kasol-manikaran",
    state: "Himachal Pradesh",
    category: "Nature",
    badge: "Mini Israel & Hot Springs",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Manikaran_Sahib_Gurudwara.jpg/800px-Manikaran_Sahib_Gurudwara.jpg",
    description: "Kasol is a scenic hamlet on the Parvati River known for its backpacker vibe. Nearby Manikaran is famous for its Gurudwara and natural hot springs which are hot enough to cook rice.",
    coordinates: { lat: 32.0098, lng: 77.3149 },

    essentials: {
      bestTime: "March to June",
      weather: "Pleasant",
      timings: "24 Hours (Hot Springs: 6 AM - 10 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Bhuntar (30 km)",
      nearestRailway: "Pathankot (290 km)",
      busConnectivity: "Local buses from Bhuntar to Kasol/Manikaran"
    },

    externalLinks: {
      officialBooking: "https://himachaltourism.gov.in/",
      googleMaps: "https://goo.gl/maps/kasol"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Manikaran bridge and narrow lanes are crowded and not wheelchair friendly. Kasol paths are rocky."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Chalal Nature Trek (Kasol)" },
      { time: "12:00 PM", activity: "Manikaran Gurudwara Darshan" },
      { time: "01:00 PM", activity: "Hot Spring Bath" }
    ],

    foodGuide: [
      { name: "Evergreen Cafe", type: "Cafe", specialty: "Israeli Platter", rating: 4.5 },
      { name: "Moon Dance Cafe", type: "Bakery", specialty: "German Bakery Goods", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Regional Hospital Kullu"
    }
  },
  {
    id: 1010,
    name: "Masroor Rock Cut Temple",
    slug: "masroor-rock-cut-temple",
    state: "Himachal Pradesh",
    category: "Heritage",
    badge: "Ellora of the Himalayas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Masroor_Rock_Cut_Temple.jpg/800px-Masroor_Rock_Cut_Temple.jpg",
    description: "An 8th-century complex of rock-cut temples dedicated to Lord Shiva, Vishnu, and Devi. Carved out of a single monolithic rock, it offers stunning views of the Dhauladhar range reflected in its pond.",
    coordinates: { lat: 32.0883, lng: 76.1378 },

    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Gaggal (40 km)",
      nearestRailway: "Pathankot (85 km)",
      busConnectivity: "Taxi from Dharamshala or Kangra"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/masroor"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The complex involves stairs and rocky uneven surfaces. Not accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Temple Architecture Tour" },
      { time: "11:30 AM", activity: "Photography at Masroor Lake" },
      { time: "01:00 PM", activity: "Picnic Lunch" }
    ],

    foodGuide: [
      { name: "Local Dhabas", type: "Highway", specialty: "Kangri Dham (Traditional Meal)", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-8077",
      nearestHospital: "Tanda Medical College (30 km)"
    }
  }
];