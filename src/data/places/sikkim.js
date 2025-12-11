/**
 * SIKKIM_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Sikkim Tourism & Ecclesiastical Affairs Dept
 * - Permits: PAP (Protected Area Permit) is MANDATORY for Tsomgo, Nathu La, & North Sikkim.
 * - Transport: SNT (Sikkim Nationalised Transport) & Taxi Unions
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const SIKKIM_PLACES = [
  // --- NATURE & ADVENTURE (East Sikkim) ---
  {
    id: 2301,
    name: "Tsomgo Lake (Changu Lake)",
    slug: "tsomgo-lake",
    state: "Sikkim",
    category: "Nature",
    badge: "Glacial Lake at 12,313 ft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tsomgo_Lake_Sikkim.jpg/800px-Tsomgo_Lake_Sikkim.jpg",
    description: "A glacial lake that remains frozen during winter. It is revered by locals and reflects different colors with the changing seasons. The nearby Yak rides are a popular attraction.",
    coordinates: { lat: 27.3742, lng: 88.7633 },

    essentials: {
      bestTime: "March to May (Flowers) or Winter (Snow)",
      weather: "Freezing/Windy",
      timings: "08:00 AM - 03:00 PM (Start early from Gangtok)",
      entryFee: {
        Entry: "Permit Cost Included in Taxi",
        YakRide: "₹300-500",
        Permit: "PAP Mandatory (Apply 1 day prior)"
      }
    },

    transport: {
      nearestAirport: "Pakyong (35 km) or Bagdogra (150 km)",
      nearestRailway: "NJP (145 km)",
      busConnectivity: "Only accessible by reserved taxis/shared jeeps from Gangtok"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/tsomgo"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "High altitude and rocky terrain. Oxygen levels are lower here."
    },

    routePlan: [
      { time: "07:30 AM", activity: "Depart Gangtok (Permit Check)" },
      { time: "10:00 AM", activity: "Yak Ride at Lake" },
      { time: "12:00 PM", activity: "Baba Harbhajan Singh Mandir (Nearby)" }
    ],

    foodGuide: [
      { name: "Lake Stalls", type: "Basic", specialty: "Hot Maggi & Thukpa", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "Army Medical Camp (Emergency only)"
    }
  },
  {
    id: 2302,
    name: "Nathu La Pass",
    slug: "nathu-la-pass",
    state: "Sikkim",
    category: "Heritage",
    badge: "Indo-China Border",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Nathu_La_Pass.jpg/800px-Nathu_La_Pass.jpg",
    description: "One of the highest motorable roads in the world at 14,140 ft. It was part of the ancient Silk Route. Visitors can see the Chinese soldiers on the other side of the barbed wire.",
    coordinates: { lat: 27.3866, lng: 88.8309 },

    essentials: {
      bestTime: "April to June, Oct-Nov",
      weather: "Sub-Zero",
      timings: "08:00 AM - 01:30 PM (Closed Mon & Tue)",
      entryFee: {
        Entry: "Permit Cost Only",
        Permit: "PAP Mandatory (Apply 1 day prior)"
      }
    },

    transport: {
      nearestAirport: "Pakyong (60 km)",
      nearestRailway: "NJP (170 km)",
      busConnectivity: "Reserved SUV from Gangtok (Shared not usually allowed for Nathu La)"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/nathula"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing stairs to the memorial. Thin air makes it difficult for elderly."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Drive from Tsomgo Lake" },
      { time: "09:30 AM", activity: "Climb stairs to Border Gate" },
      { time: "10:30 AM", activity: "War Memorial Visit" }
    ],

    foodGuide: [
      { name: "Army Canteen", type: "Cafe", specialty: "Coffee & Momos", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "STNM Hospital Gangtok (56 km)"
    }
  },

  // --- SPIRITUAL & CULTURE (Gangtok/Rumtek) ---
  {
    id: 2303,
    name: "Rumtek Monastery",
    slug: "rumtek-monastery",
    state: "Sikkim",
    category: "Spiritual",
    badge: "Dharma Chakra Centre",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Rumtek_Monastery.jpg/800px-Rumtek_Monastery.jpg",
    description: "The largest monastery in Sikkim and the seat of the Kagyu sect of Buddhism. It houses rare Buddhist artifacts, the Golden Stupa, and offers commanding views of Gangtok.",
    coordinates: { lat: 27.3069, lng: 88.5574 },

    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Entry: "₹10",
        Foreigner: "Passport Check Mandatory"
      }
    },

    transport: {
      nearestAirport: "Pakyong (30 km)",
      nearestRailway: "NJP (110 km)",
      busConnectivity: "Taxi from Gangtok (24 km - 1 hour)"
    },

    externalLinks: {
      officialBooking: "https://sikkimeccl.gov.in/",
      googleMaps: "https://goo.gl/maps/rumtek"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires a steep uphill walk from the gate to the main monastery."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Main Prayer Hall" },
      { time: "03:00 PM", activity: "Golden Stupa Institute" },
      { time: "04:00 PM", activity: "Spinning Prayer Wheels" }
    ],

    foodGuide: [
      { name: "Monastery Cafe", type: "Basic", specialty: "Thukpa", rating: 4.0 },
      { name: "Shuffle Momos (Gangtok)", type: "City", specialty: "Variety Momos", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "Manipal Central Referral Hospital"
    }
  },
  {
    id: 2304,
    name: "MG Marg, Gangtok",
    slug: "mg-marg-gangtok",
    state: "Sikkim",
    category: "Leisure",
    badge: "Spit & Litter Free Zone",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MG_Marg_Gangtok_Night.jpg/800px-MG_Marg_Gangtok_Night.jpg",
    description: "The main promenade of Gangtok, lined with shops, cafes, and benches. It is India's first litter-free and spit-free zone, offering a European vibe with a Himalayan backdrop.",
    coordinates: { lat: 27.3314, lng: 88.6138 },

    essentials: {
      bestTime: "All Year (Evenings are best)",
      weather: "City/Breezy",
      timings: "08:00 AM - 09:00 PM (Shops close by 8)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Pakyong (27 km)",
      nearestRailway: "NJP (120 km)",
      busConnectivity: "Heart of the city. No vehicles allowed (Pedestrian only)."
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/mgmarg"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The entire marg is paved, flat, and extremely wheelchair friendly."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Shopping for Souvenirs" },
      { time: "06:00 PM", activity: "Coffee at Baker's Cafe" },
      { time: "07:30 PM", activity: "Dinner" }
    ],

    foodGuide: [
      { name: "The Coffee Shop", type: "Cafe", specialty: "Pizza & Coffee", rating: 4.5 },
      { name: "Nimtho", type: "Fine Dining", specialty: "Traditional Sikkimese Thali", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "STNM Hospital Gangtok"
    }
  },

  // --- NORTH SIKKIM (Adventure) ---
  {
    id: 2305,
    name: "Gurudongmar Lake",
    slug: "gurudongmar-lake",
    state: "Sikkim",
    category: "Nature",
    badge: "One of Highest Lakes (17,800 ft)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gurudongmar_Lake.jpg/800px-Gurudongmar_Lake.jpg",
    description: "A sacred lake for both Buddhists and Sikhs. Even in extreme winter, a part of the lake never freezes due to the belief that Guru Padmasambhava blessed it.",
    coordinates: { lat: 28.0258, lng: 88.7097 },

    essentials: {
      bestTime: "April to June, Oct-Nov",
      weather: "Extreme Cold/Low Oxygen",
      timings: "Reach by 09:00 AM (Windy later)",
      entryFee: {
        Entry: "Permit Included",
        Permit: "Strict North Sikkim Permit Required"
      }
    },

    transport: {
      nearestAirport: "Pakyong (180 km)",
      nearestRailway: "NJP (270 km)",
      busConnectivity: "Requires 2-day trip. Stay at Lachen, drive early morning."
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/gurudongmar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Extreme altitude. Children below 5 and elderly usually not allowed."
    },

    routePlan: [
      { time: "04:00 AM", activity: "Depart Lachen" },
      { time: "08:00 AM", activity: "Lake Visit (Max 30 mins)" },
      { time: "12:00 PM", activity: "Return to Lachen for Lunch" }
    ],

    foodGuide: [
      { name: "Lachen Homestays", type: "Home", specialty: "Rice, Dal & Sabzi", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "Army Medical Centre (Thangu)"
    }
  },
  {
    id: 2306,
    name: "Yumthang Valley",
    slug: "yumthang-valley",
    state: "Sikkim",
    category: "Nature",
    badge: "Valley of Flowers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Yumthang_Valley_Sikkim.jpg/800px-Yumthang_Valley_Sikkim.jpg",
    description: "Famous for the Shingba Rhododendron Sanctuary, where over 24 species of rhododendrons bloom from late February to mid-June. It also features hot springs.",
    coordinates: { lat: 27.8256, lng: 88.6961 },

    essentials: {
      bestTime: "March to May (Flowers)",
      weather: "Cold",
      timings: "06:00 AM - 04:00 PM",
      entryFee: {
        Permit: "Required (Lachung Permit)",
        ZeroPoint: "₹3000 (Extra per vehicle)"
      }
    },

    transport: {
      nearestAirport: "Pakyong (150 km)",
      nearestRailway: "NJP (230 km)",
      busConnectivity: "Base camp is Lachung village (25 km away)"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/yumthang"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Valley floor is grassy and uneven. Hot springs require crossing a bridge and walking."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Drive from Lachung" },
      { time: "09:00 AM", activity: "Rhododendron Walk" },
      { time: "11:00 AM", activity: "Zero Point (Optional Snow Point)" }
    ],

    foodGuide: [
      { name: "Valley Stalls", type: "Basic", specialty: "Momos & Coffee", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "Army Medical Centre"
    }
  },

  // --- WEST & SOUTH SIKKIM (Spiritual) ---
  {
    id: 2307,
    name: "Pelling Skywalk & Chenrezig",
    slug: "pelling-skywalk",
    state: "Sikkim",
    category: "Heritage",
    badge: "Glass Skywalk",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chenrezig_Statue_Pelling.jpg/800px-Chenrezig_Statue_Pelling.jpg",
    description: "Features a massive 137ft statue of Chenrezig (Avalokiteshvara) and India's first glass skywalk, offering thrilling views of the Himalayas and the statue.",
    coordinates: { lat: 27.2942, lng: 88.2237 },

    essentials: {
      bestTime: "October to May",
      weather: "Misty/Cool",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹50",
        Skywalk: "Included"
      }
    },

    transport: {
      nearestAirport: "Pakyong (110 km)",
      nearestRailway: "NJP (135 km)",
      busConnectivity: "Shared jeeps from Gangtok or Siliguri to Pelling"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/skywalk"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps and elevators make the Skywalk and the statue base accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Skywalk Experience" },
      { time: "10:30 AM", activity: "Prayer at Chenrezig Statue" },
      { time: "12:00 PM", activity: "Pemayangtse Monastery (Nearby)" }
    ],

    foodGuide: [
      { name: "Hotel Kabur", type: "View", specialty: "Tibetan Bread", rating: 4.4 },
      { name: "Lotus Bakery", type: "Bakery", specialty: "Cinnamon Rolls", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "District Hospital Gyalshing"
    }
  },
  {
    id: 2308,
    name: "Buddha Park (Ravangla)",
    slug: "buddha-park-ravangla",
    state: "Sikkim",
    category: "Spiritual",
    badge: "130 ft Buddha Statue",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Buddha_Park_Ravangla.jpg/800px-Buddha_Park_Ravangla.jpg",
    description: "Tathagata Tsal, or Buddha Park, features a colossal 130-foot copper statue of Buddha Shakyamuni. The park is beautifully landscaped with views of Mt. Kanchenjunga.",
    coordinates: { lat: 27.3056, lng: 88.3621 },

    essentials: {
      bestTime: "September to March",
      weather: "Cold",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹50",
        ShoeKeeping: "₹10"
      }
    },

    transport: {
      nearestAirport: "Pakyong (70 km)",
      nearestRailway: "NJP (120 km)",
      busConnectivity: "En route between Gangtok and Pelling"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/buddhapark"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Battery cars available. Paved paths lead to the statue base."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Park Walk & Photography" },
      { time: "03:30 PM", activity: "Inside the Statue (Museum)" },
      { time: "04:30 PM", activity: "Ralang Monastery (Nearby)" }
    ],

    foodGuide: [
      { name: "Park Cafeteria", type: "Basic", specialty: "Coffee & Snacks", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "PHC Ravangla"
    }
  },
  {
    id: 2309,
    name: "Char Dham (Siddheshwar Dham)",
    slug: "char-dham-namchi",
    state: "Sikkim",
    category: "Spiritual",
    badge: "Replica of 4 Dhams",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Char_Dham_Namchi_Sikkim.jpg/800px-Char_Dham_Namchi_Sikkim.jpg",
    description: "Located in Namchi, this complex features replicas of the Char Dham temples (Badrinath, Jagannath, Dwarka, Rameswaram) and a 108ft statue of Lord Shiva.",
    coordinates: { lat: 27.1668, lng: 88.3694 },

    essentials: {
      bestTime: "All Year",
      weather: "Pleasant",
      timings: "08:00 AM - 07:00 PM",
      entryFee: {
        Entry: "₹50",
        Parking: "₹50"
      }
    },

    transport: {
      nearestAirport: "Pakyong (75 km)",
      nearestRailway: "NJP (100 km)",
      busConnectivity: "Taxi from Gangtok (80 km) or Darjeeling (50 km)"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/chardham"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Very accessible with wide paved roads and ramps throughout the complex."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Shiva Statue Darshan" },
      { time: "11:00 AM", activity: "Visit 12 Jyotirlinga Replicas" },
      { time: "01:00 PM", activity: "Samdruptse Hill (Giant Guru Statue)" }
    ],

    foodGuide: [
      { name: "Yatri Niwas", type: "Vegetarian", specialty: "Veg Thali", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "District Hospital Namchi"
    }
  },
  {
    id: 2310,
    name: "Zuluk (Silk Route)",
    slug: "zuluk-silk-route",
    state: "Sikkim",
    category: "Adventure",
    badge: "96 Turns Zig-Zag Road",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Zuluk_Zig_Zag_Road.jpg/800px-Zuluk_Zig_Zag_Road.jpg",
    description: "A small village on the historic Old Silk Route. Famous for the Thambi View Point which offers a view of the 96 hair-pin bends of the road and Mt. Kanchenjunga.",
    coordinates: { lat: 27.2519, lng: 88.7847 },

    essentials: {
      bestTime: "August to September (Wildflowers) or Winter",
      weather: "Foggy/Cold",
      timings: "Sunrise for Kanchenjunga view",
      entryFee: {
        Entry: "Permit Cost",
        Permit: "East Sikkim Permit Mandatory"
      }
    },

    transport: {
      nearestAirport: "Pakyong (80 km)",
      nearestRailway: "NJP (160 km)",
      busConnectivity: "Requires private vehicle from Rongli (Permit Checkpost)"
    },

    externalLinks: {
      officialBooking: "https://sikkimtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/zuluk"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote winding roads. Viewing points are roadside but rough."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Sunrise at Thambi View Point" },
      { time: "07:00 AM", activity: "Visit Lungthung" },
      { time: "09:00 AM", activity: "Nathang Valley" }
    ],

    foodGuide: [
      { name: "Homestays Only", type: "Home", specialty: "Organic Local Food", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-9999",
      nearestHospital: "Military Clinic (Emergency)"
    }
  }
];