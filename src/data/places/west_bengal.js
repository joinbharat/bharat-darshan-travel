/**
 * WEST_BENGAL_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: WBTDCL, ASI & Forest Department
 * - Sundarbans: Verified boat entry points (Godkhali/Sonakhali)
 * - Heritage: UNESCO data for Santiniketan & Darjeeling Railway
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const WEST_BENGAL_PLACES = [
  // --- HERITAGE & ICONS ---
  {
    id: 2901,
    name: "Victoria Memorial",
    slug: "victoria-memorial-kolkata",
    state: "West Bengal",
    category: "Heritage",
    badge: "Icon of Kolkata",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_Kolkata_India.jpg/800px-Victoria_Memorial_Kolkata_India.jpg",
    description: "A grand marble building built between 1906 and 1921, dedicated to the memory of Queen Victoria. It combines British, Mughal, and Venetian architectural styles and houses a museum.",
    coordinates: { lat: 22.5448, lng: 88.3426 },

    essentials: {
      bestTime: "October to March",
      weather: "City/Humid",
      timings: "Museum: 10:00 AM - 06:00 PM (Closed Mondays), Garden: 05:30 AM - 06:15 PM",
      entryFee: {
        Garden: "₹20",
        Museum: "₹30 (Indian), ₹500 (Foreigner)"
      }
    },

    transport: {
      nearestAirport: "Netaji Subhash Chandra Bose Intl (CCU) - 22 km",
      nearestRailway: "Howrah (6 km) or Sealdah (5 km)",
      busConnectivity: "Metro (Maidan Station) or AC Bus"
    },

    externalLinks: {
      officialBooking: "https://www.victoriamemorial-cal.org/",
      googleMaps: "https://goo.gl/maps/victoria"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Golf carts available in the garden. Museum ground floor is accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Garden Walk & Photography" },
      { time: "11:30 AM", activity: "Museum Galleries Tour" },
      { time: "01:00 PM", activity: "St. Paul's Cathedral (Nearby)" }
    ],

    foodGuide: [
      { name: "Peter Cat", type: "Iconic", specialty: "Chelo Kebab", rating: 4.6 },
      { name: "Flurys", type: "Heritage Cafe", specialty: "English Breakfast", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "SSKM Hospital"
    }
  },
  {
    id: 2902,
    name: "Howrah Bridge",
    slug: "howrah-bridge",
    state: "West Bengal",
    category: "Heritage",
    badge: "Busiest Cantilever Bridge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Howrah_Bridge_Night_View.jpg/800px-Howrah_Bridge_Night_View.jpg",
    description: "Commissioned in 1943, this engineering marvel connects Howrah and Kolkata over the Hooghly River. It is one of the busiest bridges in the world and carries no nuts or bolts.",
    coordinates: { lat: 22.5851, lng: 88.3468 },

    essentials: {
      bestTime: "Evening/Night (Illumination)",
      weather: "River Breeze",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Kolkata (18 km)",
      nearestRailway: "Howrah Junction (0 km)",
      busConnectivity: "Ferry from Millennium Park is the best way to view it"
    },

    externalLinks: {
      officialBooking: "https://wbtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/howrahbridge"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Pedestrian walkways are wide and paved, though very crowded."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Ferry Ride from Millennium Park" },
      { time: "06:00 PM", activity: "Walk along Prinsep Ghat" },
      { time: "07:30 PM", activity: "View Bridge Illumination" }
    ],

    foodGuide: [
      { name: "Scoop", type: "River View", specialty: "Ice Cream & Pizza", rating: 4.1 },
      { name: "Arsalan", type: "City", specialty: "Kolkata Biryani", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Medical College Kolkata"
    }
  },

  // --- WILDLIFE & NATURE ---
  {
    id: 2903,
    name: "Sundarbans National Park",
    slug: "sundarbans-national-park",
    state: "West Bengal",
    category: "Wildlife",
    badge: "Largest Mangrove Forest",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Royal_Bengal_Tiger_at_Sunderbans.jpg/800px-Royal_Bengal_Tiger_at_Sunderbans.jpg",
    description: "A UNESCO World Heritage site and Biosphere Reserve, famous for the Royal Bengal Tiger and estuarine crocodiles. It is a complex network of tidal waterways and mudflats.",
    coordinates: { lat: 21.9497, lng: 88.8995 },

    essentials: {
      bestTime: "September to March",
      weather: "Humid/Tidal",
      timings: "07:00 AM - 05:00 PM (Boat only)",
      entryFee: {
        Entry: "₹60 (Indian)",
        BoatPermit: "₹400-800",
        Guide: "₹400 (Mandatory)"
      }
    },

    transport: {
      nearestAirport: "Kolkata (110 km)",
      nearestRailway: "Canning (48 km)",
      busConnectivity: "Drive to Godkhali (Gateway) via Canning to board boats"
    },

    externalLinks: {
      officialBooking: "https://wbtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/sundarbans"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding boats from muddy ghats is difficult. Watchtowers like Sudhanyakhali have caged ramps but are steep."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Board Boat at Godkhali" },
      { time: "10:00 AM", activity: "Sajnekhali Watch Tower" },
      { time: "01:00 PM", activity: "Dobanki Canopy Walk" }
    ],

    foodGuide: [
      { name: "Boat Kitchen", type: "Onboard", specialty: "Fresh Crab & Fish Curry", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Gosaba Rural Hospital"
    }
  },
  {
    id: 2904,
    name: "Jaldapara National Park",
    slug: "jaldapara-national-park",
    state: "West Bengal",
    category: "Wildlife",
    badge: "Home of One-Horned Rhino",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/One_Horned_Rhino_Jaldapara.jpg/800px-One_Horned_Rhino_Jaldapara.jpg",
    description: "Located in the Dooars region at the foothills of the Himalayas. It has the second-largest population of the Indian One-Horned Rhinoceros after Kaziranga.",
    coordinates: { lat: 26.6961, lng: 89.2829 },

    essentials: {
      bestTime: "October to May (Closed June 15 - Sept 15)",
      weather: "Forest/Cool",
      timings: "06:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹100",
        ElephantSafari: "₹800 (Limited seats)",
        JeepSafari: "₹2500+"
      }
    },

    transport: {
      nearestAirport: "Bagdogra (140 km)",
      nearestRailway: "Madarihat (7 km) or Hasimara (20 km)",
      busConnectivity: "Located on NH-317 (Siliguri-Guwahati route)"
    },

    externalLinks: {
      officialBooking: "https://wbsfda.gov.in/",
      googleMaps: "https://goo.gl/maps/jaldapara"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jeep and Elephant safaris are not wheelchair friendly."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Elephant Safari (Hollong)" },
      { time: "09:00 AM", activity: "Jeep Safari (Grasslands)" },
      { time: "02:00 PM", activity: "Visit Chilapata Forest (Nearby)" }
    ],

    foodGuide: [
      { name: "Jaldapara Tourist Lodge", type: "WBTDCL", specialty: "Bengali Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Alipurduar District Hospital"
    }
  },

  // --- HILL STATIONS ---
  {
    id: 2905,
    name: "Darjeeling (Tiger Hill)",
    slug: "darjeeling-tiger-hill",
    state: "West Bengal",
    category: "Hill Stations",
    badge: "Queen of the Hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Kanchenjunga_from_Tiger_Hill.jpg/800px-Kanchenjunga_from_Tiger_Hill.jpg",
    description: "Famous for the UNESCO World Heritage 'Toy Train', tea gardens, and the sunrise view of Mt. Kanchenjunga from Tiger Hill. It has a rich colonial history.",
    coordinates: { lat: 27.0360, lng: 88.2627 },

    essentials: {
      bestTime: "Mar-May, Oct-Dec",
      weather: "Cold",
      timings: "Tiger Hill Sunrise: 4:00 AM",
      entryFee: {
        TigerHill: "₹50 (Observatory)",
        ToyTrain: "₹1000-1500 (Joyride)"
      }
    },

    transport: {
      nearestAirport: "Bagdogra (70 km)",
      nearestRailway: "New Jalpaiguri (NJP) - 75 km",
      busConnectivity: "Shared taxis/SUVs from Siliguri/NJP"
    },

    externalLinks: {
      officialBooking: "https://darjeeling.gov.in/",
      googleMaps: "https://goo.gl/maps/darjeeling"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep hilly roads. The Mall Road (Chowrasta) is flat and accessible by vehicle up to a point."
    },

    routePlan: [
      { time: "04:00 AM", activity: "Sunrise at Tiger Hill" },
      { time: "07:00 AM", activity: "Batasia Loop (War Memorial)" },
      { time: "10:00 AM", activity: "Joy Ride on Toy Train" }
    ],

    foodGuide: [
      { name: "Glenary's", type: "Heritage Bakery", specialty: "English Breakfast & Cakes", rating: 4.7 },
      { name: "Keventers", type: "Cafe", specialty: "Darjeeling Tea & Sausages", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "District Hospital Darjeeling"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 2906,
    name: "Dakshineswar Kali Temple",
    slug: "dakshineswar-kali",
    state: "West Bengal",
    category: "Spiritual",
    badge: "Ramakrishna Paramahansa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dakshineswar_Temple_Kolkata.jpg/800px-Dakshineswar_Temple_Kolkata.jpg",
    description: "Built in 1855 by Rani Rashmoni, this temple is dedicated to Goddess Kali (Bhavatarini). It is spiritually significant as the place where Ramakrishna Paramahansa attained enlightenment.",
    coordinates: { lat: 22.6531, lng: 88.3575 },

    essentials: {
      bestTime: "All Year",
      weather: "Humid",
      timings: "06:00 AM - 12:30 PM, 03:00 PM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Kolkata (12 km)",
      nearestRailway: "Dakshineswar Station (0.5 km)",
      busConnectivity: "Connected via Metro (Dakshineswar Station) and Bali Bridge"
    },

    externalLinks: {
      officialBooking: "http://www.dakshineswarkalitemple.org/",
      googleMaps: "https://goo.gl/maps/dakshineswar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The large courtyard is paved. Wheelchairs are available at the trust office."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Darshan" },
      { time: "08:30 AM", activity: "Visit Ramakrishna's Room" },
      { time: "09:30 AM", activity: "Ferry Ride to Belur Math" }
    ],

    foodGuide: [
      { name: "Temple Canteen", type: "Prasad", specialty: "Bhog (Coupons required)", rating: 4.8 },
      { name: "Local Sweet Shops", type: "Street", specialty: "Kachori & Mishti", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Sagar Dutt Hospital"
    }
  },
  {
    id: 2907,
    name: "Belur Math",
    slug: "belur-math",
    state: "West Bengal",
    category: "Spiritual",
    badge: "HQ of Ramakrishna Mission",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Belur_Math_Kolkata.jpg/800px-Belur_Math_Kolkata.jpg",
    description: "Founded by Swami Vivekananda, the main temple is notable for its architecture that fuses Hindu, Christian, and Islamic motifs as a symbol of unity of all religions.",
    coordinates: { lat: 22.6299, lng: 88.3524 },

    essentials: {
      bestTime: "All Year",
      weather: "Peaceful",
      timings: "06:30 AM - 11:30 AM, 03:30 PM - 08:30 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Kolkata (15 km)",
      nearestRailway: "Howrah (6 km)",
      busConnectivity: "Ferry from Dakshineswar or Bus from Howrah"
    },

    externalLinks: {
      officialBooking: "https://belurmath.org/",
      googleMaps: "https://goo.gl/maps/belurmath"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Battery-operated cars available for elderly from the gate to the temple."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Museum of Ramakrishna Mission" },
      { time: "05:00 PM", activity: "Main Temple Meditation" },
      { time: "06:00 PM", activity: "Evening Aarti (Sandhya Aarti)" }
    ],

    foodGuide: [
      { name: "Math Bhog", type: "Prasad", specialty: "Khichdi (Specific timings)", rating: 4.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "TL Jaiswal Hospital"
    }
  },

  // --- CULTURAL (UNESCO) ---
  {
    id: 2908,
    name: "Santiniketan (Visva-Bharati)",
    slug: "santiniketan",
    state: "West Bengal",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Upasana_Griha_Santiniketan.jpg/800px-Upasana_Griha_Santiniketan.jpg",
    description: "Founded by Nobel Laureate Rabindranath Tagore, this university town was recently declared a UNESCO World Heritage site. Notable for its open-air classrooms and Upasana Griha (Glass Temple).",
    coordinates: { lat: 23.6793, lng: 87.6749 },

    essentials: {
      bestTime: "Dec (Poush Mela) or Spring (Basanta Utsav)",
      weather: "Pleasant",
      timings: "10:00 AM - 04:30 PM (Museums closed Wed)",
      entryFee: {
        Museum: "₹40",
        Campus: "Restricted Access"
      }
    },

    transport: {
      nearestAirport: "Durgapur (RDP) - 60 km",
      nearestRailway: "Bolpur Santiniketan (3 km)",
      busConnectivity: "Toto (E-Rickshaw) from Bolpur station"
    },

    externalLinks: {
      officialBooking: "https://visvabharati.ac.in/",
      googleMaps: "https://goo.gl/maps/santiniketan"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Museum complex (Rabindra Bhavan) is accessible. Campus roads are flat."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Rabindra Bhavan Museum" },
      { time: "12:00 PM", activity: "Upasana Griha (Prayer Hall)" },
      { time: "02:00 PM", activity: "Kala Bhavana (Art College)" }
    ],

    foodGuide: [
      { name: "Kasahara", type: "Cafe", specialty: "Bengali Thali", rating: 4.3 },
      { name: "Banalakshmi", type: "Rural", specialty: "Authentic Bengali Lunch", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Bolpur Sub-Divisional Hospital"
    }
  },

  // --- BEACH & HERITAGE ---
  {
    id: 2909,
    name: "Digha Beach",
    slug: "digha-beach",
    state: "West Bengal",
    category: "Beaches",
    badge: "Brighton of the East",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/New_Digha_Beach.jpg/800px-New_Digha_Beach.jpg",
    description: "The most popular sea resort in West Bengal. New Digha offers wide, flat beaches, while Old Digha is known for its stone embankments and casuarina plantations.",
    coordinates: { lat: 21.6212, lng: 87.5164 },

    essentials: {
      bestTime: "October to March",
      weather: "Coastal",
      timings: "24 Hours (Swimming 6 AM - 5 PM)",
      entryFee: {
        Beach: "Free",
        ScienceCentre: "₹30"
      }
    },

    transport: {
      nearestAirport: "Kolkata (180 km)",
      nearestRailway: "Digha (1 km)",
      busConnectivity: "Frequent SBSTC buses from Kolkata (Esplanade)"
    },

    externalLinks: {
      officialBooking: "https://wbtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/digha"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "New Digha has paved promenades. Access to the sand is difficult for wheelchairs."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise at New Digha" },
      { time: "10:00 AM", activity: "Marine Aquarium" },
      { time: "05:00 PM", activity: "Biswa Bangla Park" }
    ],

    foodGuide: [
      { name: "Sea Hawk", type: "Hotel", specialty: "Fish Fry & Crab", rating: 4.1 },
      { name: "Beach Stalls", type: "Street", specialty: "Fried Fish", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Digha State General Hospital"
    }
  },
  {
    id: 2910,
    name: "Bishnupur Terracotta Temples",
    slug: "bishnupur-temples",
    state: "West Bengal",
    category: "Heritage",
    badge: "Terracotta Capital",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rasmancha_Bishnupur.jpg/800px-Rasmancha_Bishnupur.jpg",
    description: "Famous for its Malla dynasty temples built from terracotta (burnt clay) in the 17th century. The Rasmancha and Jor Bangla temples showcase exquisite craftsmanship.",
    coordinates: { lat: 23.0679, lng: 87.3174 },

    essentials: {
      bestTime: "December (Bishnupur Mela) to Feb",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Durgapur (80 km)",
      nearestRailway: "Bishnupur (2 km)",
      busConnectivity: "Direct buses from Kolkata and Bankura"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/bishnupur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Rasmancha and main temples have flat grassy compounds. Some plinths have steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Rasmancha Visit" },
      { time: "10:30 AM", activity: "Jor Bangla & Madan Mohan Temple" },
      { time: "02:00 PM", activity: "Shopping for Baluchari Sarees" }
    ],

    foodGuide: [
      { name: "Monalisa Hotel", type: "Family", specialty: "Posto Bora (Poppy Seed Fritters)", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-212-1655",
      nearestHospital: "Bishnupur District Hospital"
    }
  }
]; 
