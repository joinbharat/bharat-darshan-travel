/**
 * UTTARAKHAND_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Uttarakhand Tourism (UTDB) & Temple Boards
 * - Wildlife: Jim Corbett Official Booking (corbettonline.uk.gov.in)
 * - Char Dham: Opening dates depend on Akshay Tritiya (usually May-Oct)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const UTTARAKHAND_PLACES = [
  // --- SPIRITUAL (CHAR DHAM) ---
  {
    id: 2801,
    name: "Kedarnath Temple",
    slug: "kedarnath-temple",
    state: "Uttarakhand",
    category: "Spiritual",
    badge: "Highest of 12 Jyotirlingas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kedarnath_Temple_Uttarakhand.jpg/800px-Kedarnath_Temple_Uttarakhand.jpg",
    description: "Located at 3,583m amidst the snowy Garhwal Himalayas, this ancient Shiva temple is part of the Char Dham. It requires a steep 16km trek from Gaurikund.",
    coordinates: { lat: 30.7352, lng: 79.0669 },

    essentials: {
      bestTime: "May to June, Sept to Oct (Closed in Winter)",
      weather: "Freezing/Cold",
      timings: "04:00 AM - 09:00 PM (Temple opens seasonally)",
      entryFee: {
        Darshan: "Free",
        Helicopter: "₹5000-8000 (Round trip approx)"
      }
    },

    transport: {
      nearestAirport: "Dehradun (240 km to Gaurikund)",
      nearestRailway: "Rishikesh (220 km)",
      busConnectivity: "Buses to Sonprayag/Gaurikund, then Trek/Pony/Palki"
    },

    externalLinks: {
      officialBooking: "https://badrinath-kedarnath.gov.in/",
      googleMaps: "https://goo.gl/maps/kedarnath"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Extremely difficult terrain. Palanquins (Palki) and ponies are available for those who cannot trek."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Start Trek from Gaurikund" },
      { time: "02:00 PM", activity: "Reach Temple & Check-in" },
      { time: "06:00 PM", activity: "Evening Aarti" }
    ],

    foodGuide: [
      { name: "GMVN Canteen", type: "Govt", specialty: "Basic Dal Rice", rating: 3.5 },
      { name: "Local Dhabas", type: "Trek Route", specialty: "Maggi & Tea", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "Six Sigma High Altitude Hospital (Kedarnath)"
    }
  },
  {
    id: 2802,
    name: "Badrinath Temple",
    slug: "badrinath-temple",
    state: "Uttarakhand",
    category: "Spiritual",
    badge: "Abode of Lord Vishnu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Badrinath_Temple_2013.jpg/800px-Badrinath_Temple_2013.jpg",
    description: "One of the Char Dham sites dedicated to Lord Vishnu. The colorful temple sits on the banks of the Alaknanda River, flanked by the Nar and Narayan mountains.",
    coordinates: { lat: 30.7447, lng: 79.4912 },

    essentials: {
      bestTime: "May to October (Closed in Winter)",
      weather: "Cold",
      timings: "04:30 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dehradun (310 km)",
      nearestRailway: "Rishikesh (295 km)",
      busConnectivity: "Direct road access (Motorable) unlike Kedarnath"
    },

    externalLinks: {
      officialBooking: "https://badrinath-kedarnath.gov.in/",
      googleMaps: "https://goo.gl/maps/badrinath"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Temple complex is accessible by road. The final path to the sanctum has steps."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Tapt Kund (Hot Spring) Bath" },
      { time: "07:00 AM", activity: "Temple Darshan" },
      { time: "10:00 AM", activity: "Visit Mana Village (Last Indian Village)" }
    ],

    foodGuide: [
      { name: "Saket Restaurant", type: "Pilgrim", specialty: "North Indian Thali", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "CHC Joshimath"
    }
  },

  // --- YOGA & ADVENTURE ---
  {
    id: 2803,
    name: "Rishikesh (Lakshman Jhula)",
    slug: "rishikesh",
    state: "Uttarakhand",
    category: "Spiritual",
    badge: "Yoga Capital of the World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lakshman_Jhula_Rishikesh.jpg/800px-Lakshman_Jhula_Rishikesh.jpg",
    description: "Famous for the suspension bridges Lakshman Jhula and Ram Jhula, the Beatles Ashram, and white-water rafting on the Ganges. It is a hub for yoga and meditation.",
    coordinates: { lat: 30.1302, lng: 78.3265 },

    essentials: {
      bestTime: "September to June (Rafting closes Monsoon)",
      weather: "Pleasant",
      timings: "24 Hours (Ganga Aarti: 6 PM)",
      entryFee: {
        Rafting: "₹600-2500 (Depending on distance)",
        Ashrams: "Varies"
      }
    },

    transport: {
      nearestAirport: "Dehradun (Jolly Grant) - 20 km",
      nearestRailway: "Yog Nagari Rishikesh (4 km)",
      busConnectivity: "Frequent buses from Delhi and Haridwar"
    },

    externalLinks: {
      officialBooking: "https://uttarakhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rishikesh"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ram Jhula area is flat and paved. Parmarth Niketan for Aarti is accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "River Rafting (Shivpuri)" },
      { time: "02:00 PM", activity: "Beatles Ashram Visit" },
      { time: "06:00 PM", activity: "Ganga Aarti at Parmarth Niketan" }
    ],

    foodGuide: [
      { name: "Chotiwala", type: "Heritage", specialty: "Thali", rating: 4.0 },
      { name: "Little Buddha Cafe", type: "View", specialty: "Smoothie Bowls", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "AIIMS Rishikesh"
    }
  },
  {
    id: 2804,
    name: "Har Ki Pauri (Haridwar)",
    slug: "har-ki-pauri",
    state: "Uttarakhand",
    category: "Spiritual",
    badge: "Gateway to Gods",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Har_Ki_Pauri_Haridwar.jpg/800px-Har_Ki_Pauri_Haridwar.jpg",
    description: "The most famous ghat on the banks of the Ganges. It is believed that a drop of nectar (Amrit) fell here. The evening Ganga Aarti is a spectacular display of lamps and chants.",
    coordinates: { lat: 29.9567, lng: 78.1709 },

    essentials: {
      bestTime: "All Year (Kumbh Mela every 12 years)",
      weather: "Hot Summers/Cool Winters",
      timings: "24 Hours (Aarti: Sunset)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dehradun (35 km)",
      nearestRailway: "Haridwar Junction (2 km)",
      busConnectivity: "Direct buses from Delhi ISBT"
    },

    externalLinks: {
      officialBooking: "https://haridwar.nic.in/",
      googleMaps: "https://goo.gl/maps/harkipauri"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main ghats have ramps, but it gets extremely crowded. VIP ghat area is more accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Mansa Devi Temple (Ropeway)" },
      { time: "05:30 PM", activity: "Secure spot at Har Ki Pauri" },
      { time: "06:30 PM", activity: "Ganga Aarti" }
    ],

    foodGuide: [
      { name: "Mathura Walo Ki Prachin Dukan", type: "Sweet Shop", specialty: "Aloo Puri", rating: 4.6 },
      { name: "Hoshiyar Puri", type: "Heritage", specialty: "Chole Puri", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "City Hospital Haridwar"
    }
  },

  // --- WILDLIFE ---
  {
    id: 2805,
    name: "Jim Corbett National Park",
    slug: "jim-corbett-national-park",
    state: "Uttarakhand",
    category: "Wildlife",
    badge: "India's First National Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tiger_in_Corbett_National_Park.jpg/800px-Tiger_in_Corbett_National_Park.jpg",
    description: "Established in 1936, this is India's oldest national park. It is famous for its Bengal Tigers and the scenic Dhikala zone which offers panoramic views of the valley.",
    coordinates: { lat: 29.5300, lng: 78.7747 },

    essentials: {
      bestTime: "November to June (Dhikala closed in Monsoon)",
      weather: "Forest",
      timings: "06:00 AM - 10:00 AM, 02:00 PM - 06:00 PM",
      entryFee: {
        Gypsy: "₹4500-6000 (Full Vehicle)",
        Canter: "₹1500 (Per seat)",
        Booking: "Official Portal Only"
      }
    },

    transport: {
      nearestAirport: "Pantnagar (80 km)",
      nearestRailway: "Ramnagar (1 km from HQ)",
      busConnectivity: "Buses from Delhi to Ramnagar"
    },

    externalLinks: {
      officialBooking: "https://corbettonline.uk.gov.in/",
      googleMaps: "https://goo.gl/maps/corbett"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jeep/Canter safaris require climbing into high vehicles."
    },

    routePlan: [
      { time: "05:45 AM", activity: "Morning Jeep Safari (Bijrani/Dhikala)" },
      { time: "11:00 AM", activity: "Corbett Museum (Kaladhungi)" },
      { time: "03:00 PM", activity: "Garjia Devi Temple" }
    ],

    foodGuide: [
      { name: "Village Vatika", type: "Family", specialty: "Kumaoni Thali", rating: 4.2 },
      { name: "Barbeque Bay", type: "Resort", specialty: "Grills", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "Govt Hospital Ramnagar"
    }
  },

  // --- HILL STATIONS & NATURE ---
  {
    id: 2806,
    name: "Nainital (Naini Lake)",
    slug: "nainital",
    state: "Uttarakhand",
    category: "Hill Stations",
    badge: "Lake District of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Nainital_Lake_View.jpg/800px-Nainital_Lake_View.jpg",
    description: "A charming hill station centered around the emerald-green, eye-shaped Naini Lake. Famous for the Naina Devi Temple and Mall Road shopping.",
    coordinates: { lat: 29.3919, lng: 79.4542 },

    essentials: {
      bestTime: "March to June, Dec-Jan (Snow)",
      weather: "Cool/Cold",
      timings: "24 Hours (Boating: 6 AM - 6 PM)",
      entryFee: {
        Entry: "Free",
        Boating: "₹210-320"
      }
    },

    transport: {
      nearestAirport: "Pantnagar (65 km)",
      nearestRailway: "Kathgodam (35 km)",
      busConnectivity: "Taxis/Buses from Kathgodam"
    },

    externalLinks: {
      officialBooking: "https://nainital.gov.in/",
      googleMaps: "https://goo.gl/maps/nainital"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Mall Road runs parallel to the lake and is flat and paved. Accessible boats may not be available."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Naina Devi Temple" },
      { time: "10:30 AM", activity: "Boating in Naini Lake" },
      { time: "04:00 PM", activity: "Aerial Ropeway to Snow View" }
    ],

    foodGuide: [
      { name: "Sakley's", type: "Bakery", specialty: "Pastries & Thai Curry", rating: 4.5 },
      { name: "Machan", type: "Family", specialty: "North Indian", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "BD Pandey Hospital"
    }
  },
  {
    id: 2807,
    name: "Valley of Flowers",
    slug: "valley-of-flowers",
    state: "Uttarakhand",
    category: "Nature",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Valley_of_Flowers_National_Park.jpg/800px-Valley_of_Flowers_National_Park.jpg",
    description: "A high-altitude Himalayan valley that comes alive with hundreds of species of exotic wildflowers during the monsoon. It is a strict eco-zone requiring a trek.",
    coordinates: { lat: 30.7280, lng: 79.6053 },

    essentials: {
      bestTime: "July to September (Strictly Monsoon only)",
      weather: "Rainy/Cold",
      timings: "07:00 AM - 05:00 PM (Last entry 2 PM)",
      entryFee: {
        Indian: "₹150",
        Foreigner: "₹600",
        Trek: "Free (Permit required)"
      }
    },

    transport: {
      nearestAirport: "Dehradun (290 km)",
      nearestRailway: "Rishikesh (270 km)",
      busConnectivity: "Road to Govindghat, then 16 km trek to Ghangaria (Base)"
    },

    externalLinks: {
      officialBooking: "https://uttarakhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/vof"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Hard trek. No ponies/palanquins allowed inside the park (Only up to Ghangaria base)."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Trek from Ghangaria" },
      { time: "10:00 AM", activity: "Explore Flower Zones" },
      { time: "02:00 PM", activity: "Start Return Trek (Mandatory)" }
    ],

    foodGuide: [
      { name: "GMVN Ghangaria", type: "Lodge", specialty: "Simple Veg Meals", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "Army Medical Camp Ghangaria"
    }
  },
  {
    id: 2808,
    name: "Auli",
    slug: "auli-skiing",
    state: "Uttarakhand",
    category: "Adventure",
    badge: "Skiing Capital of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Auli_Artificial_Lake.jpg/800px-Auli_Artificial_Lake.jpg",
    description: "A premier ski destination in the Himalayas offering 270-degree views of Nanda Devi. It features Asia's longest cable car (ropeway) from Joshimath.",
    coordinates: { lat: 30.5342, lng: 79.5673 },

    essentials: {
      bestTime: "Jan-Feb (Skiing) or Summer (Meadows)",
      weather: "Snow/Cold",
      timings: "Ropeway: 09:00 AM - 05:00 PM",
      entryFee: {
        Entry: "Free",
        Ropeway: "₹1000 (Round Trip)",
        ChairLift: "₹500"
      }
    },

    transport: {
      nearestAirport: "Dehradun (280 km)",
      nearestRailway: "Rishikesh (260 km)",
      busConnectivity: "Cable car from Joshimath or road drive"
    },

    externalLinks: {
      officialBooking: "https://gmvnonline.com/",
      googleMaps: "https://goo.gl/maps/auli"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Cable car is accessible, but the ski slopes and meadows are uneven snow/grass."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Cable Car Ride" },
      { time: "11:00 AM", activity: "Skiing / Artificial Lake Visit" },
      { time: "02:00 PM", activity: "Chair Car to Gorson Bugyal" }
    ],

    foodGuide: [
      { name: "GMVN Cafeteria", type: "Govt", specialty: "Coffee & Maggi", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "ITBP Hospital Auli"
    }
  },
  {
    id: 2809,
    name: "Mussoorie (Kempty Falls)",
    slug: "mussoorie",
    state: "Uttarakhand",
    category: "Hill Stations",
    badge: "Queen of Hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kempty_Falls_Mussoorie.jpg/800px-Kempty_Falls_Mussoorie.jpg",
    description: "A colonial hill station established by the British. Famous for Kempty Falls, the Mall Road, and Gun Hill. It offers a spectacular view of the Doon Valley.",
    coordinates: { lat: 30.4598, lng: 78.0644 },

    essentials: {
      bestTime: "March to June, Dec-Jan",
      weather: "Cool/Misty",
      timings: "Falls: 08:00 AM - 06:00 PM",
      entryFee: {
        Falls: "Free",
        Ropeway: "₹150",
        GunHill: "₹100"
      }
    },

    transport: {
      nearestAirport: "Dehradun (60 km)",
      nearestRailway: "Dehradun (35 km)",
      busConnectivity: "Frequent buses/taxis from Dehradun"
    },

    externalLinks: {
      officialBooking: "https://uttarakhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/mussoorie"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Mall Road is paved and accessible (Vehicles banned). Ropeway to Kempty falls makes it easier than stairs."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Kempty Falls" },
      { time: "01:00 PM", activity: "Lunch at Mall Road" },
      { time: "03:00 PM", activity: "Gun Hill Ropeway" }
    ],

    foodGuide: [
      { name: "Kalsang", type: "Tibetan", specialty: "Devil Momos", rating: 4.6 },
      { name: "Lovely Omelette", type: "Street", specialty: "Cheese Omelette", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "Landour Community Hospital"
    }
  },
  {
    id: 2810,
    name: "Tungnath & Chandrashila",
    slug: "tungnath-trek",
    state: "Uttarakhand",
    category: "Adventure",
    badge: "Highest Shiva Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tungnath_Temple_Chopta.jpg/800px-Tungnath_Temple_Chopta.jpg",
    description: "At 3680m, Tungnath is the highest Shiva temple in the world. A further 1.5 km trek leads to Chandrashila peak, offering 360-degree views of Nanda Devi and Trishul peaks.",
    coordinates: { lat: 30.4883, lng: 79.2166 },

    essentials: {
      bestTime: "April to November (Snow Trek in Winter)",
      weather: "Cold",
      timings: "Daylight Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Dehradun (220 km)",
      nearestRailway: "Rishikesh (200 km)",
      busConnectivity: "Reach Chopta (Base) by taxi"
    },

    externalLinks: {
      officialBooking: "https://uttarakhandtourism.gov.in/",
      googleMaps: "https://goo.gl/maps/tungnath"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "3.5 km steep paved trek. Ponies are available but no wheelchair access."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Start Trek from Chopta" },
      { time: "09:00 AM", activity: "Tungnath Darshan" },
      { time: "11:00 AM", activity: "Chandrashila Summit (Optional)" }
    ],

    foodGuide: [
      { name: "Chopta Dhabas", type: "Basic", specialty: "Paratha & Chai", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1364",
      nearestHospital: "CHC Ukhimath"
    }
  }
]; 
 
