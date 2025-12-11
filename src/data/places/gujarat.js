/**
 * GUJARAT_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: TCGL (Tourism Corp of Gujarat Ltd) & ASI
 * - Statue of Unity: Official SoU Authority Data (2024-25)
 * - Wildlife: Gir & Velavadar Forest Department Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const GUJARAT_PLACES = [
  // --- HERITAGE ---
  {
    id: 801,
    name: "Statue of Unity",
    slug: "statue-of-unity",
    state: "Gujarat",
    category: "Heritage",
    badge: "Tallest Statue in World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/800px-Statue_of_Unity.jpg",
    description: "Standing at 182 meters, this colossal tribute to Sardar Vallabhbhai Patel is the world's tallest statue. The complex features a high-speed lift to the viewing gallery, a museum, and a light & sound show.",
    coordinates: { lat: 21.8380, lng: 73.7191 },

    essentials: {
      bestTime: "October to February",
      weather: "Humid",
      timings: "08:00 AM - 06:00 PM (Closed on Mondays)",
      entryFee: {
        Basic: "₹150 (Adult)",
        ViewingGallery: "₹380 (Adult)",
        Express: "₹1030 (Skip Line)"
      }
    },

    transport: {
      nearestAirport: "Vadodara (90 km) or Ahmedabad (200 km)",
      nearestRailway: "Ekta Nagar (Kevadiya) - On site",
      busConnectivity: "Direct GSRTC Volvo buses from Ahmedabad/Vadodara"
    },

    externalLinks: {
      officialBooking: "https://www.soutickets.in/",
      googleMaps: "https://goo.gl/maps/statueofunity"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible. E-rickshaws, elevators, and moving walkways available throughout the complex."
    },

    routePlan: [
      { time: "08:30 AM", activity: "Entry via Ekta Nagar (Electric Bus)" },
      { time: "09:30 AM", activity: "Museum & Exhibition Hall" },
      { time: "11:00 AM", activity: "Viewing Gallery (153m)" },
      { time: "07:30 PM", activity: "Laser Light & Sound Show" }
    ],

    foodGuide: [
      { name: "Ekta Food Court", type: "Multi-Cuisine", specialty: "Global Street Food", rating: 4.2 },
      { name: "Ramada Encore", type: "Luxury", specialty: "Gujarati Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7951",
      nearestHospital: "Sub-District Hospital, Garudeshwar"
    }
  },
  {
    id: 802,
    name: "Laxmi Vilas Palace",
    slug: "laxmi-vilas-palace",
    state: "Gujarat",
    category: "Heritage",
    badge: "4x Bigger than Buckingham Palace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Laxmi_Vilas_Palace_Vadodara.jpg/800px-Laxmi_Vilas_Palace_Vadodara.jpg",
    description: "The residence of the Royal family of Baroda (Gaekwads), this palace is a stunning example of Indo-Saracenic architecture. It houses a remarkable collection of armory and sculptures.",
    coordinates: { lat: 22.2937, lng: 73.1956 },

    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      timings: "09:30 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹225",
        Foreigner: "₹500",
        AudioGuide: "Included"
      }
    },

    transport: {
      nearestAirport: "Vadodara (7 km)",
      nearestRailway: "Vadodara Junction (5 km)",
      busConnectivity: "Central Bus Station Vadodara (5 km)"
    },

    externalLinks: {
      officialBooking: "http://www.laxmivilaspalace.in/",
      googleMaps: "https://goo.gl/maps/laxmivilas"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Golf carts available from gate. Ground floor museum is accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Audio Guided Palace Tour" },
      { time: "11:30 AM", activity: "Darbar Hall & Coronation Room" },
      { time: "12:30 PM", activity: "Maharaja Fateh Singh Museum" }
    ],

    foodGuide: [
      { name: "Peshwa Restaurant", type: "Fine Dining", specialty: "Maratha Cuisine", rating: 4.6 },
      { name: "Kalyan Cafe", type: "Snacks", specialty: "Sev Usal", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "SSG Hospital, Vadodara"
    }
  },
  {
    id: 803,
    name: "Rani Ki Vav",
    slug: "rani-ki-vav",
    state: "Gujarat",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rani_ki_vav_03.jpg/800px-Rani_ki_vav_03.jpg",
    description: "A queen's stepwell located in Patan, designed as an inverted temple highlighting the sanctity of water. The seven levels of stairs are adorned with over 500 principal sculptures.",
    coordinates: { lat: 23.8589, lng: 72.1025 },

    essentials: {
      bestTime: "Winter",
      weather: "Sunny",
      timings: "08:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        Camera: "Free"
      }
    },

    transport: {
      nearestAirport: "Ahmedabad (125 km)",
      nearestRailway: "Patan (4 km) or Mehsana (50 km)",
      busConnectivity: "GSRTC buses from Ahmedabad to Patan (Intercity)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/ranikivav"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Viewable from the top garden level. Descent requires steep steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Upper Corridors Photography" },
      { time: "10:00 AM", activity: "Descent to Vishnu Avatar Sculptures" },
      { time: "11:30 AM", activity: "Patola Saree Museum (Nearby)" }
    ],

    foodGuide: [
      { name: "The Grand Raveta", type: "Family", specialty: "Kathiyawadi Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "General Hospital, Patan"
    }
  },
  {
    id: 804,
    name: "Sun Temple, Modhera",
    slug: "sun-temple-modhera",
    state: "Gujarat",
    category: "Heritage",
    badge: "ASI Monument",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Modhera_Sun_Temple_01.jpg/800px-Modhera_Sun_Temple_01.jpg",
    description: "Built in 1026 AD by King Bhimdev I, this temple is dedicated to the Solar Deity. The complex features a stunning Rama Kund (stepped tank) and is designed so the first rays of the sun fall on the main idol.",
    coordinates: { lat: 23.5835, lng: 72.1325 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "07:00 AM - 06:00 PM (Light Show: 7 PM)",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300",
        LightShow: "Free"
      }
    },

    transport: {
      nearestAirport: "Ahmedabad (100 km)",
      nearestRailway: "Mehsana Junction (25 km)",
      busConnectivity: "Local buses from Mehsana or Ahmedabad"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/modherasuntemple"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps available for the main temple plinth. The stepped tank (Kund) is not wheelchair accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Surya Kund Architecture Walk" },
      { time: "05:00 PM", activity: "Sabha Mandap (Assembly Hall)" },
      { time: "07:00 PM", activity: "3D Projection Mapping Show" }
    ],

    foodGuide: [
      { name: "Toran Cafeteria", type: "Budget", specialty: "Thepla & Chai", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Becharaji Hospital"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 805,
    name: "Somnath Temple",
    slug: "somnath-temple",
    state: "Gujarat",
    category: "Spiritual",
    badge: "First Jyotirlinga",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Somnath_Mandir_Veraval_Gujarat_India_Night_View_01.jpg/800px-Somnath_Mandir_Veraval_Gujarat_India_Night_View_01.jpg",
    description: "Located on the Arabian Sea coast, Somnath is the first of the twelve Jyotirlinga shrines of Shiva. The temple is a masterpiece of Kailash Mahameru Prasad style architecture.",
    coordinates: { lat: 20.8880, lng: 70.4010 },

    essentials: {
      bestTime: "Winter",
      weather: "Coastal/Windy",
      timings: "06:00 AM - 10:00 PM",
      entryFee: { Entry: "Free", LightShow: "₹30" }
    },

    transport: {
      nearestAirport: "Diu (85 km) or Rajkot (200 km)",
      nearestRailway: "Veraval Junction (6 km)",
      busConnectivity: "GSRTC Luxury buses from Rajkot/Ahmedabad"
    },

    externalLinks: {
      officialBooking: "https://somnath.org/",
      googleMaps: "https://goo.gl/maps/somnath"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs available at trust office. Lifts available to reach the main sanctum level."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Aarti" },
      { time: "10:00 AM", activity: "Old Somnath Temple (Ahilyabai)" },
      { time: "08:00 PM", activity: "Sound & Light Show (Sea side)" }
    ],

    foodGuide: [
      { name: "The Grand Daksh", type: "Pure Veg", specialty: "Gujarati Thali", rating: 4.5 },
      { name: "Somnath Trust Bhojanalaya", type: "Pilgrim", specialty: "Prasad Meal", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Govt Hospital Veraval"
    }
  },
  {
    id: 806,
    name: "Dwarkadhish Temple",
    slug: "dwarkadhish-temple",
    state: "Gujarat",
    category: "Spiritual",
    badge: "Char Dham Yatra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dwarkadhish_Temple_Dwarka.jpg/800px-Dwarkadhish_Temple_Dwarka.jpg",
    description: "One of the Char Dham pilgrimage sites, dedicated to Lord Krishna (King of Dwarka). The 5-story temple stands on 72 pillars and is known for the daily 5-time flag changing ceremony.",
    coordinates: { lat: 22.2376, lng: 68.9675 },

    essentials: {
      bestTime: "August to March",
      weather: "Coastal",
      timings: "06:30 AM - 01:00 PM, 05:00 PM - 09:30 PM",
      entryFee: { Entry: "Free", VIP: "N/A" }
    },

    transport: {
      nearestAirport: "Jamnagar (130 km)",
      nearestRailway: "Dwarka Station (2 km)",
      busConnectivity: "Direct buses from Jamnagar and Rajkot"
    },

    externalLinks: {
      officialBooking: "https://dwarkadhish.org/",
      googleMaps: "https://goo.gl/maps/dwarka"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs available at the main gate. Ramp access provided."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Mangla Aarti (Morning)" },
      { time: "09:00 AM", activity: "Sudama Setu Walk" },
      { time: "05:00 PM", activity: "Flag Changing Ceremony (Dhwaja)" }
    ],

    foodGuide: [
      { name: "Shrinath Dining Hall", type: "Vegetarian", specialty: "Unlimited Thali", rating: 4.4 },
      { name: "Kantu Chorafali", type: "Street Food", specialty: "Fafda Jalebi", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "General Hospital Dwarka"
    }
  },

  // --- WILDLIFE & NATURE ---
  {
    id: 807,
    name: "Gir National Park",
    slug: "gir-national-park",
    state: "Gujarat",
    category: "Wildlife",
    badge: "Only Home of Asiatic Lions",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lion_waiting_in_Gir_forest.jpg/800px-Lion_waiting_in_Gir_forest.jpg",
    description: "The last abode of the Asiatic Lion. The park's rugged terrain and dry deciduous forests are also home to leopards, sambar deer, and over 300 species of birds.",
    coordinates: { lat: 21.1243, lng: 70.8242 },

    essentials: {
      bestTime: "December to March",
      weather: "Dry/Hot",
      timings: "06:00 AM - 09:00 AM, 03:00 PM - 06:00 PM (Closed Mid-June to Oct)",
      entryFee: {
        Permit: "₹800-1000 (Per Jeep)",
        GypsyHire: "₹2000-2500",
        Guide: "₹400"
      }
    },

    transport: {
      nearestAirport: "Rajkot (160 km) or Diu (100 km)",
      nearestRailway: "Junagadh (60 km) or Veraval (45 km)",
      busConnectivity: "Buses available to Sasan Gir from Junagadh"
    },

    externalLinks: {
      officialBooking: "https://girlion.gujarat.gov.in/",
      googleMaps: "https://goo.gl/maps/gir"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jeep safaris require climbing into high vehicles. Devalia Interpretation Zone buses are moderately accessible."
    },

    routePlan: [
      { time: "05:45 AM", activity: "Assemble at Sinh Sadan" },
      { time: "06:30 AM", activity: "Morning Safari (Route 4 or 6)" },
      { time: "04:00 PM", activity: "Devalia Interpretation Zone (Guaranteed Sighting)" }
    ],

    foodGuide: [
      { name: "Gir Pride Resort", type: "Buffet", specialty: "Kathiyawadi Dinner", rating: 4.5 },
      { name: "Terracotta Restaurant", type: "Local", specialty: "Bajra Rotla & Ringan Bhartha", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1926 (Forest Dept)",
      nearestHospital: "Civil Hospital Sasan Gir"
    }
  },
  {
    id: 808,
    name: "Rann of Kutch",
    slug: "rann-of-kutch",
    state: "Gujarat",
    category: "Nature",
    badge: "World's Largest Salt Desert",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rann_of_Kutch%2C_Dhordo.jpg/800px-Rann_of_Kutch%2C_Dhordo.jpg",
    description: "The Great Rann of Kutch is a vast salt marsh in the Thar Desert. During the Rann Utsav (Nov-Feb), it transforms into a cultural hub with luxury tents, folk music, and moonlit desert walks.",
    coordinates: { lat: 23.7937, lng: 69.5042 },

    essentials: {
      bestTime: "Nov to Feb (Rann Utsav)",
      weather: "Cold Nights",
      timings: "06:00 AM - 08:00 PM (Best at Sunrise/Sunset)",
      entryFee: {
        Permit: "₹100 (Adult)",
        Child: "₹50",
        Vehicle: "₹50"
      }
    },

    transport: {
      nearestAirport: "Bhuj (80 km)",
      nearestRailway: "Bhuj Station (80 km)",
      busConnectivity: "Shuttle buses from Bhuj to Dhordo (Tent City) during Utsav"
    },

    externalLinks: {
      officialBooking: "https://www.rannutsav.net/",
      googleMaps: "https://goo.gl/maps/rann"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Tent City is flat and accessible. Special carts available for entering the salt flats."
    },

    routePlan: [
      { time: "04:30 PM", activity: "Camel Cart Ride to White Desert" },
      { time: "06:00 PM", activity: "Sunset Photography" },
      { time: "08:00 PM", activity: "Cultural Folk Dance Show" }
    ],

    foodGuide: [
      { name: "Rann Utsav Dining Hall", type: "Buffet", specialty: "Kutchi Cuisine", rating: 4.6 },
      { name: "Hotel Prince (Bhuj)", type: "City Dining", specialty: "Dabeli", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "GK General Hospital, Bhuj"
    }
  },
  {
    id: 809,
    name: "Shivrajpur Beach",
    slug: "shivrajpur-beach",
    state: "Gujarat",
    category: "Beaches",
    badge: "Blue Flag Certified",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Shivrajpur_Beach.jpg/800px-Shivrajpur_Beach.jpg",
    description: "Located near Dwarka, Shivrajpur is a pristine 'Blue Flag' certified beach known for its clear blue waters, white sands, and eco-friendly facilities. Ideal for swimming and scuba diving.",
    coordinates: { lat: 22.3316, lng: 68.9557 },

    essentials: {
      bestTime: "October to April",
      weather: "Sunny/Breezy",
      timings: "08:00 AM - 07:00 PM",
      entryFee: {
        Adult: "₹30",
        Parking: "₹50",
        Scuba: "₹2500+ (Private)"
      }
    },

    transport: {
      nearestAirport: "Jamnagar (140 km)",
      nearestRailway: "Dwarka (12 km)",
      busConnectivity: "Auto-rickshaws or taxis from Dwarka town"
    },

    externalLinks: {
      officialBooking: "https://www.gujarattourism.com/",
      googleMaps: "https://goo.gl/maps/shivrajpur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Blue Flag certification ensures disability-friendly access, including ramps to the beach and accessible restrooms."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Snorkeling / Scuba Session" },
      { time: "11:00 AM", activity: "Relax at Beach Shacks" },
      { time: "05:00 PM", activity: "Sunset Walk near Lighthouse" }
    ],

    foodGuide: [
      { name: "Blue Coriander", type: "Seaside", specialty: "Mocktails & Snacks", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "General Hospital Dwarka"
    }
  },

  // --- HILL STATION ---
  {
    id: 810,
    name: "Saputara",
    slug: "saputara",
    state: "Gujarat",
    category: "Hill Stations",
    badge: "Only Hill Station of Gujarat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Saputara_Lake_View.jpg/800px-Saputara_Lake_View.jpg",
    description: "Perched in the Sahyadri range of the Dang district, Saputara offers cool climate, tribal culture, and scenic viewpoints. Key attractions include Saputara Lake, Sunrise Point, and the Ropeway.",
    coordinates: { lat: 20.5756, lng: 73.7516 },

    essentials: {
      bestTime: "Monsoon & Winter",
      weather: "Misty/Cool",
      timings: "08:00 AM - 06:00 PM",
      entryFee: {
        Lake: "Free",
        Boating: "₹50-150",
        Ropeway: "₹77"
      }
    },

    transport: {
      nearestAirport: "Surat (160 km)",
      nearestRailway: "Bilimora (50 km) or Nashik (80 km)",
      busConnectivity: "GSRTC buses from Surat/Nashik"
    },

    externalLinks: {
      officialBooking: "https://www.gujarattourism.com/saputara",
      googleMaps: "https://goo.gl/maps/saputara"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Lake garden area is accessible. Ropeway cabins can accommodate folded wheelchairs."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Saputara Lake Boating" },
      { time: "11:00 AM", activity: "Table Point via Ropeway" },
      { time: "05:30 PM", activity: "Sunset Point" }
    ],

    foodGuide: [
      { name: "Sugar N Spice", type: "Casual", specialty: "Pav Bhaji", rating: 4.2 },
      { name: "Patang Restaurant", type: "View", specialty: "Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Community Health Center, Saputara"
    }
  }
]; 
