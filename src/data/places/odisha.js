/**
 * ODISHA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Odisha Tourism Development Corporation (OTDC) & ASI
 * - Chilika: Chilika Development Authority (Boat Association Rates)
 * - Temples: Jagannath Temple Administration & Lingaraj Temple Trust
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const ODISHA_PLACES = [
  // --- HERITAGE & SPIRITUAL ---
  {
    id: 2001,
    name: "Konark Sun Temple",
    slug: "konark-sun-temple",
    state: "Odisha",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konark_Sun_Temple_-_Main_Entrance.jpg/800px-Konark_Sun_Temple_-_Main_Entrance.jpg",
    description: "A 13th-century architectural marvel designed as a colossal chariot of the Sun God Surya, with 24 giant stone wheels and 7 horses. It is famous for its intricate stone carvings.",
    coordinates: { lat: 19.8876, lng: 86.0945 },

    essentials: {
      bestTime: "October to March (Konark Dance Festival in Dec)",
      weather: "Sunny/Coastal",
      timings: "06:00 AM - 08:00 PM (Light Show: 6:30 PM & 7:30 PM)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        LightShow: "₹50"
      }
    },

    transport: {
      nearestAirport: "Bhubaneswar (65 km)",
      nearestRailway: "Puri (35 km)",
      busConnectivity: "Regular OTDC and local buses from Puri and Bhubaneswar"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/konark"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main complex has paved pathways and ramps. Wheelchairs are available at the entrance."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Temple Architecture Tour" },
      { time: "10:00 AM", activity: "Chandrabhaga Beach (3 km away)" },
      { time: "06:30 PM", activity: "Sound & Light Show" }
    ],

    foodGuide: [
      { name: "Kamat Restaurant", type: "Family", specialty: "South Indian Thali", rating: 4.0 },
      { name: "Panthanivas", type: "OTDC", specialty: "Odia Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "Konark PHC"
    }
  },
  {
    id: 2002,
    name: "Jagannath Temple, Puri",
    slug: "jagannath-temple-puri",
    state: "Odisha",
    category: "Spiritual",
    badge: "Char Dham Pilgrimage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jagannath_Temple_Puri.jpg/800px-Jagannath_Temple_Puri.jpg",
    description: "One of the four holiest pilgrimage sites (Char Dham) for Hindus, dedicated to Lord Jagannath. It is famous for its annual Ratha Yatra (Chariot Festival) and the Mahaprasad (holy food).",
    coordinates: { lat: 19.8049, lng: 85.8179 },

    essentials: {
      bestTime: "All Year (Ratha Yatra in June/July)",
      weather: "Coastal/Humid",
      timings: "05:00 AM - 11:00 PM (Strict security & dress code)",
      entryFee: {
        Entry: "Free",
        PhoneDeposit: "Free (Phones banned inside)"
      }
    },

    transport: {
      nearestAirport: "Bhubaneswar (60 km)",
      nearestRailway: "Puri (2 km)",
      busConnectivity: "Located in the heart of Puri, accessible by rickshaw/auto"
    },

    externalLinks: {
      officialBooking: "https://shreejagannatha.in/",
      googleMaps: "https://goo.gl/maps/jagannathpuri"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs available for entering the outer complex. Ramps are provided at North Gate (Hastidwara)."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Morning Darshan" },
      { time: "08:00 AM", activity: "Ananda Bazar (Mahaprasad)" },
      { time: "10:00 AM", activity: "Visit Gundicha Temple" }
    ],

    foodGuide: [
      { name: "Ananda Bazar", type: "Temple", specialty: "Mahaprasad (Abhada)", rating: 5.0 },
      { name: "Chung Wah", type: "City", specialty: "Chinese", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "District Headquarters Hospital Puri"
    }
  },
  {
    id: 2003,
    name: "Lingaraj Temple",
    slug: "lingaraj-temple",
    state: "Odisha",
    category: "Spiritual",
    badge: "Kalinga Architecture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lingaraj_Temple_Bhubaneswar.jpg/800px-Lingaraj_Temple_Bhubaneswar.jpg",
    description: "The largest and oldest temple in Bhubaneswar, dedicated to Lord Shiva (Harihara). Its 180-foot central tower dominates the city skyline and is a masterpiece of Kalinga architecture.",
    coordinates: { lat: 20.2392, lng: 85.8333 },

    essentials: {
      bestTime: "October to March (Mahashivratri)",
      weather: "Warm",
      timings: "06:00 AM - 09:00 PM (Non-Hindus view from platform)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Bhubaneswar (4 km)",
      nearestRailway: "Bhubaneswar (5 km)",
      busConnectivity: "Mo Bus service connects to the Old Town area"
    },

    externalLinks: {
      officialBooking: "https://odishatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/lingaraj"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "High thresholds and steps. Viewing platform outside for non-Hindus is accessible by road."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Temple Darshan" },
      { time: "09:00 AM", activity: "Bindu Sagar Lake Walk" },
      { time: "10:30 AM", activity: "Mukteshwar Temple (Nearby)" }
    ],

    foodGuide: [
      { name: "Odisha Hotel", type: "Authentic", specialty: "Pakhala & Mutton", rating: 4.5 },
      { name: "Truptee", type: "Family", specialty: "Veg Thali", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "Capital Hospital Bhubaneswar"
    }
  },

  // --- NATURE & WILDLIFE ---
  {
    id: 2004,
    name: "Chilika Lake (Mangalajodi)",
    slug: "chilika-lake-mangalajodi",
    state: "Odisha",
    category: "Wildlife",
    badge: "Birdwatcher's Paradise",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chilika_Lake_Birds.jpg/800px-Chilika_Lake_Birds.jpg",
    description: "Asia's largest brackish water lagoon. Mangalajodi is a wetland area of Chilika famous for hosting lakhs of migratory birds in winter. It is a prime example of community-based ecotourism.",
    coordinates: { lat: 19.9234, lng: 85.4267 },

    essentials: {
      bestTime: "November to February (Migratory Birds)",
      weather: "Pleasant",
      timings: "06:00 AM - 05:00 PM (Boating)",
      entryFee: {
        Boat: "₹1200-1500 (3 hours, Guide included)",
        Entry: "Free"
      }
    },

    transport: {
      nearestAirport: "Bhubaneswar (70 km)",
      nearestRailway: "Kalupada Ghat (5 km) or Balugaon",
      busConnectivity: "Taxi from Bhubaneswar is recommended"
    },

    externalLinks: {
      officialBooking: "https://mangalajodiecotourism.com/",
      googleMaps: "https://goo.gl/maps/mangalajodi"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Country boats are narrow and require stepping down from muddy banks."
    },

    routePlan: [
      { time: "06:30 AM", activity: "Sunrise Birdwatching Boat Ride" },
      { time: "10:00 AM", activity: "Village Walk" },
      { time: "12:00 PM", activity: "Local Odia Lunch" }
    ],

    foodGuide: [
      { name: "Godwit Eco Cottage", type: "Resort", specialty: "Crab Curry", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "CHC Tangi"
    }
  },
  {
    id: 2005,
    name: "Simlipal National Park",
    slug: "simlipal-national-park",
    state: "Odisha",
    category: "Wildlife",
    badge: "Tiger Reserve & Waterfalls",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Barehipani_Falls_Simlipal.jpg/800px-Barehipani_Falls_Simlipal.jpg",
    description: "A vast tiger reserve in the Mayurbhanj district, known for its dense Sal forests, melanistic tigers, and waterfalls like Barehipani (India's 2nd highest) and Joranda.",
    coordinates: { lat: 21.9304, lng: 86.3475 },

    essentials: {
      bestTime: "November to June (Closed in Monsoon)",
      weather: "Forest/Cool",
      timings: "06:00 AM - 09:00 AM (Entry)",
      entryFee: {
        Indian: "₹100",
        Vehicle: "₹500",
        Guide: "₹300"
      }
    },

    transport: {
      nearestAirport: "Kolkata (240 km) or Bhubaneswar (270 km)",
      nearestRailway: "Baripada (60 km)",
      busConnectivity: "Entry via Pithabata or Jashipur gates (Private SUV required)"
    },

    externalLinks: {
      officialBooking: "https://www.similipal.org/",
      googleMaps: "https://goo.gl/maps/simlipal"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Rough forest terrain. Waterfalls are viewed from distance or via trekking."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Jungle Safari Start" },
      { time: "10:00 AM", activity: "Barehipani Waterfall View" },
      { time: "01:00 PM", activity: "Joranda Waterfall" }
    ],

    foodGuide: [
      { name: "Aranya Nivas", type: "OTDC", specialty: "Simple Meals", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "District Hospital Baripada"
    }
  },
  {
    id: 2006,
    name: "Bhitarkanika National Park",
    slug: "bhitarkanika-national-park",
    state: "Odisha",
    category: "Wildlife",
    badge: "Giant Saltwater Crocodiles",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bhitarkanika_Mangroves.jpg/800px-Bhitarkanika_Mangroves.jpg",
    description: "Known as the 'Amazon of the East', this park has the second-largest mangrove ecosystem in India. It is famous for giant saltwater crocodiles and white crocodiles.",
    coordinates: { lat: 20.7302, lng: 86.8770 },

    essentials: {
      bestTime: "October to February",
      weather: "Humid",
      timings: "07:00 AM - 05:00 PM (Boat entry)",
      entryFee: {
        Entry: "₹40",
        Boat: "₹3000-4000 (Private full boat)"
      }
    },

    transport: {
      nearestAirport: "Bhubaneswar (145 km)",
      nearestRailway: "Bhadrak (60 km)",
      busConnectivity: "Drive to Khola or Gupti Gate to board boats"
    },

    externalLinks: {
      officialBooking: "https://www.bhitarkanika.org/",
      googleMaps: "https://goo.gl/maps/bhitarkanika"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires boarding boats. Forest pathways are uneven."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Boat Safari from Khola" },
      { time: "10:00 AM", activity: "Crocodile Breeding Centre" },
      { time: "12:00 PM", activity: "Jungle Walk" }
    ],

    foodGuide: [
      { name: "Estuarine Village Resort", type: "Resort", specialty: "Crab & Prawns", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "CHC Rajnagar"
    }
  },

  // --- BEACHES & CAVES ---
  {
    id: 2007,
    name: "Puri Beach",
    slug: "puri-beach",
    state: "Odisha",
    category: "Beaches",
    badge: "Golden Sands",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Puri_Beach_Morning.jpg/800px-Puri_Beach_Morning.jpg",
    description: "A golden sand beach on the Bay of Bengal, famous for its turbulent waves, sand art by Sudarsan Pattnaik, and the annual Beach Festival. It is a sacred bathing spot for pilgrims.",
    coordinates: { lat: 19.7983, lng: 85.8249 },

    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "24 Hours (Swimming recommended 6 AM - 6 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Bhubaneswar (60 km)",
      nearestRailway: "Puri (2 km)",
      busConnectivity: "Auto/Rickshaw from anywhere in Puri"
    },

    externalLinks: {
      officialBooking: "https://odishatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/puribeach"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Marine Drive promenade is paved and accessible. Sand access is difficult."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise & Morning Walk" },
      { time: "04:00 PM", activity: "Camel/Horse Ride" },
      { time: "06:00 PM", activity: "Visit Sand Art Park" }
    ],

    foodGuide: [
      { name: "Wildgrass", type: "Garden", specialty: "Seafood Thali", rating: 4.5 },
      { name: "Pink House", type: "Beach Shack", specialty: "Prawn Curry", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "Puri District Hospital"
    }
  },
  {
    id: 2008,
    name: "Udayagiri & Khandagiri Caves",
    slug: "udayagiri-khandagiri-caves",
    state: "Odisha",
    category: "Heritage",
    badge: "Jain Rock-Cut Shelters",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Udayagiri_Caves_Bhubaneswar.jpg/800px-Udayagiri_Caves_Bhubaneswar.jpg",
    description: "Ancient rock-cut caves built for Jain monks in the 1st century BC by King Kharavela. Udayagiri (Sunrise Hill) has 18 caves and Khandagiri (Broken Hill) has 15.",
    coordinates: { lat: 20.2632, lng: 85.7860 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "09:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Bhubaneswar (6 km)",
      nearestRailway: "Bhubaneswar (8 km)",
      busConnectivity: "City buses (Mo Bus) drop at the cave entrance"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/caves"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing stairs to reach the caves. Lower garden area is flat."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Udayagiri Caves (Rani Gumpha)" },
      { time: "11:00 AM", activity: "Khandagiri Caves (Jain Temple on top)" },
      { time: "01:00 PM", activity: "Lunch in Bhubaneswar" }
    ],

    foodGuide: [
      { name: "Dalma", type: "Authentic", specialty: "Dalma (Lentil Veg)", rating: 4.4 },
      { name: "Michael's Kitchen", type: "Cafe", specialty: "Continental", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "AIIMS Bhubaneswar"
    }
  },

  // --- ART & CRAFT ---
  {
    id: 2009,
    name: "Raghurajpur Heritage Village",
    slug: "raghurajpur-heritage-village",
    state: "Odisha",
    category: "Heritage",
    badge: "Pattachitra Art Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Raghurajpur_Artist_Village.jpg/800px-Raghurajpur_Artist_Village.jpg",
    description: "A heritage crafts village near Puri where every household is involved in an art form, primarily Pattachitra (scroll painting), palm leaf engraving, and stone carving.",
    coordinates: { lat: 19.9972, lng: 85.7953 },

    essentials: {
      bestTime: "All Year (Basant Utsav in Feb/Mar)",
      weather: "Rural",
      timings: "09:00 AM - 05:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Bhubaneswar (50 km)",
      nearestRailway: "Puri (12 km)",
      busConnectivity: "Taxi/Auto from Puri or Bhubaneswar (1 km off NH-316)"
    },

    externalLinks: {
      officialBooking: "https://odishatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/raghurajpur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main village street is flat and paved, allowing access to artist homes."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Watch Artists at Work" },
      { time: "12:00 PM", activity: "Buy Souvenirs directly from Artisans" },
      { time: "01:00 PM", activity: "Gotipua Dance Performance (On request)" }
    ],

    foodGuide: [
      { name: "Local Village Hospitality", type: "Home", specialty: "Odia Meal", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "Chandanpur PHC"
    }
  },
  {
    id: 2010,
    name: "Dhauli Shanti Stupa",
    slug: "dhauli-shanti-stupa",
    state: "Odisha",
    category: "Heritage",
    badge: "Site of Kalinga War",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dhauli_Shanti_Stupa.jpg/800px-Dhauli_Shanti_Stupa.jpg",
    description: "A white Peace Pagoda built by the Japan Buddha Sangha on the banks of the Daya River. It marks the site where Emperor Ashoka renounced war after the Kalinga battle.",
    coordinates: { lat: 20.1927, lng: 85.8394 },

    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "06:00 AM - 06:00 PM (Light Show: 7 PM)",
      entryFee: {
        Entry: "Free",
        LightShow: "₹25"
      }
    },

    transport: {
      nearestAirport: "Bhubaneswar (10 km)",
      nearestRailway: "Bhubaneswar (8 km)",
      busConnectivity: "Easily accessible by auto/taxi from Bhubaneswar"
    },

    externalLinks: {
      officialBooking: "https://odishatourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dhauli"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Vehicles go up to the stupa base. Ramps available."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Ashokan Rock Edicts" },
      { time: "05:00 PM", activity: "Shanti Stupa View" },
      { time: "06:30 PM", activity: "Light & Sound Show" }
    ],

    foodGuide: [
      { name: "Dhauli Cafeteria", type: "Snacks", specialty: "Tea & Pakora", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-208-1414",
      nearestHospital: "Capital Hospital"
    }
  }
]; 
 
