/**
 * RAJASTHAN_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Dept of Archaeology & Museums, Rajasthan & ASI
 * - Wildlife: FMDSS (Forest Dept Official Portal)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const RAJASTHAN_PLACES = [
  // --- HERITAGE & FORTS ---
  {
    id: 2201,
    name: "Amber Fort (Amer)",
    slug: "amber-fort-jaipur",
    state: "Rajasthan",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amber_Fort_Jaipur.jpg/800px-Amber_Fort_Jaipur.jpg",
    description: "A majestic hilltop fort built in 1592 by Raja Man Singh. Famous for its artistic Hindu style elements, the Sheesh Mahal (Mirror Palace), and the elephant ride up the ramparts.",
    coordinates: { lat: 26.9855, lng: 75.8513 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Hot",
      timings: "08:00 AM - 05:30 PM (Night Viewing: 6:30 PM - 9:15 PM)",
      entryFee: {
        Indian: "₹100",
        Foreigner: "₹500",
        LightShow: "₹295 (English)"
      }
    },

    transport: {
      nearestAirport: "Jaipur (25 km)",
      nearestRailway: "Jaipur Junction (12 km)",
      busConnectivity: "AC Low Floor buses from Hawa Mahal/Ajmeri Gate"
    },

    externalLinks: {
      officialBooking: "https://www.rajasthantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/amberfort"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Golf carts available at the rear entrance for elderly/disabled. Main courtyard is paved."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Elephant/Jeep Ride to Top" },
      { time: "09:30 AM", activity: "Sheesh Mahal & Ganesh Pol" },
      { time: "11:30 AM", activity: "Jaigarh Fort Tunnel Walk (Nearby)" }
    ],

    foodGuide: [
      { name: "1135 AD", type: "Fine Dining", specialty: "Royal Rajasthani Thali", rating: 4.7 },
      { name: "Surabhi Restaurant", type: "Family", specialty: "Laal Maas", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "SMS Hospital Jaipur"
    }
  },
  {
    id: 2202,
    name: "Mehrangarh Fort",
    slug: "mehrangarh-fort-jodhpur",
    state: "Rajasthan",
    category: "Heritage",
    badge: "The Citadel of the Sun",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mehrangarh_Fort_Jodhpur_View.jpg/800px-Mehrangarh_Fort_Jodhpur_View.jpg",
    description: "One of the largest forts in India, rising 410 feet above the city of Jodhpur. It houses one of the best-stocked museums in Rajasthan, displaying royal palanquins and armory.",
    coordinates: { lat: 26.2975, lng: 73.0185 },

    essentials: {
      bestTime: "October to March",
      weather: "Dry/Desert",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Indian: "₹200",
        Foreigner: "₹600",
        Elevator: "₹50 (Optional)"
      }
    },

    transport: {
      nearestAirport: "Jodhpur (10 km)",
      nearestRailway: "Jodhpur Junction (5 km)",
      busConnectivity: "Auto-rickshaws available from Old City"
    },

    externalLinks: {
      officialBooking: "https://www.mehrangarh.org/",
      googleMaps: "https://goo.gl/maps/mehrangarh"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Elevator available to reach the top levels. Most museum galleries are accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Fort Museum & Palaces" },
      { time: "12:00 PM", activity: "Chamunda Mata Temple" },
      { time: "04:00 PM", activity: "Zip Lining (Flying Fox)" }
    ],

    foodGuide: [
      { name: "Chokelao Mahal", type: "Fort Terrace", specialty: "Gatte ki Sabzi", rating: 4.5 },
      { name: "Janta Sweets", type: "City", specialty: "Mirchi Bada & Makhaniya Lassi", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "MG Hospital Jodhpur"
    }
  },
  {
    id: 2203,
    name: "City Palace, Udaipur",
    slug: "city-palace-udaipur",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Largest Palace in Rajasthan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/City_Palace_Udaipur.jpg/800px-City_Palace_Udaipur.jpg",
    description: "A monumental complex of 11 palaces sitting on the banks of Lake Pichola. It is a fusion of Rajasthani and Mughal architecture, offering stunning views of the Lake Palace.",
    coordinates: { lat: 24.5764, lng: 73.6835 },

    essentials: {
      bestTime: "September to March",
      weather: "Pleasant",
      timings: "09:30 AM - 05:30 PM",
      entryFee: {
        Adult: "₹400",
        Student: "₹100",
        Museum: "Included"
      }
    },

    transport: {
      nearestAirport: "Maharana Pratap Airport (24 km)",
      nearestRailway: "Udaipur City (3 km)",
      busConnectivity: "Walkable from Jagdish Temple"
    },

    externalLinks: {
      officialBooking: "https://citypalacemuseum.org/",
      googleMaps: "https://goo.gl/maps/citypalaceudaipur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps and elevators available for the main museum areas. Some narrow corridors exist."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Palace Museum Tour" },
      { time: "11:30 AM", activity: "Crystal Gallery" },
      { time: "04:00 PM", activity: "Boat Ride on Lake Pichola" }
    ],

    foodGuide: [
      { name: "Ambrai", type: "Lakeside", specialty: "Mewari Cuisine", rating: 4.6 },
      { name: "Natraj Dining Hall", type: "City", specialty: "Unlimited Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "MB Govt Hospital"
    }
  },
  {
    id: 2204,
    name: "Jaisalmer Fort",
    slug: "jaisalmer-fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "The Golden Living Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jaisalmer_Fort_Night_View.jpg/800px-Jaisalmer_Fort_Night_View.jpg",
    description: "A UNESCO World Heritage site made of yellow sandstone, glowing gold at sunset. It is one of the few 'living forts' in the world, with thousands of people residing within its walls.",
    coordinates: { lat: 26.9124, lng: 70.9127 },

    essentials: {
      bestTime: "November to February",
      weather: "Desert/Cold Nights",
      timings: "24 Hours (Fort Entry), 9-6 (Palace Museum)",
      entryFee: {
        FortEntry: "Free",
        PalaceMuseum: "₹250",
        Camera: "₹50"
      }
    },

    transport: {
      nearestAirport: "Jaisalmer Airport (12 km) - Limited Flights",
      nearestRailway: "Jaisalmer (2 km)",
      busConnectivity: "Auto-rickshaws available from station"
    },

    externalLinks: {
      officialBooking: "https://tourism.rajasthan.gov.in/",
      googleMaps: "https://goo.gl/maps/jaisalmerfort"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep cobblestone paths. Very difficult for wheelchairs. Tuk-tuks can go up to the main square."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Jain Temples (Inside Fort)" },
      { time: "11:00 AM", activity: "Fort Palace Museum" },
      { time: "05:00 PM", activity: "Sunset at Vyas Chhatri" }
    ],

    foodGuide: [
      { name: "Jaisal Italy", type: "Fort View", specialty: "Pasta & Pizza", rating: 4.4 },
      { name: "Dhanraj Ranmal", type: "Sweet Shop", specialty: "Ghotua Ladoo", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "Jawahar Hospital"
    }
  },

  // --- WILDLIFE ---
  {
    id: 2205,
    name: "Ranthambore National Park",
    slug: "ranthambore-national-park",
    state: "Rajasthan",
    category: "Wildlife",
    badge: "Royal Bengal Tiger Habitat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tiger_in_Ranthambhore.jpg/800px-Tiger_in_Ranthambhore.jpg",
    description: "A former royal hunting ground, famous for its diurnally active tigers. The park is dotted with ancient ruins, including the 10th-century Ranthambore Fort.",
    coordinates: { lat: 26.0173, lng: 76.5026 },

    essentials: {
      bestTime: "October to June (Zones 1-5 best for Tigers)",
      weather: "Forest",
      timings: "06:30 AM - 10:00 AM, 02:30 PM - 06:00 PM",
      entryFee: {
        Canter: "₹800-1000",
        Gypsy: "₹1500-1800",
        Booking: "FMDSS Online Mandatory"
      }
    },

    transport: {
      nearestAirport: "Jaipur (180 km)",
      nearestRailway: "Sawai Madhopur (14 km)",
      busConnectivity: "Local buses/autos from Sawai Madhopur town"
    },

    externalLinks: {
      officialBooking: "https://fmdss.forest.rajasthan.gov.in/",
      googleMaps: "https://goo.gl/maps/ranthambore"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Safari vehicles (Canters/Gypsies) require climbing steps."
    },

    routePlan: [
      { time: "06:30 AM", activity: "Morning Jungle Safari" },
      { time: "11:00 AM", activity: "Visit Ranthambore Fort (Trinetra Ganesh)" },
      { time: "03:00 PM", activity: "Afternoon Safari (Different Zone)" }
    ],

    foodGuide: [
      { name: "Manisha Restaurant", type: "Local", specialty: "Dal Baati Churma", rating: 4.0 },
      { name: "Oberoi Vanyavilas", type: "Luxury", specialty: "Fine Dining", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "General Hospital Sawai Madhopur"
    }
  },
  {
    id: 2206,
    name: "Keoladeo National Park (Bharatpur)",
    slug: "keoladeo-national-park",
    state: "Rajasthan",
    category: "Nature",
    badge: "UNESCO World Heritage Bird Sanctuary",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Painted_Storks_Bharatpur.jpg/800px-Painted_Storks_Bharatpur.jpg",
    description: "Formerly known as the Bharatpur Bird Sanctuary, it hosts thousands of birds, especially during the winter migration. It is a man-made wetland and a haven for ornithologists.",
    coordinates: { lat: 27.1593, lng: 77.5232 },

    essentials: {
      bestTime: "August to February (Migratory season)",
      weather: "Cool/Wetland",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹75",
        Foreigner: "₹500",
        Rickshaw: "₹150/hr (Govt rates)"
      }
    },

    transport: {
      nearestAirport: "Agra (55 km) or Delhi (180 km)",
      nearestRailway: "Bharatpur Junction (5 km)",
      busConnectivity: "Auto/Cycle Rickshaw from station"
    },

    externalLinks: {
      officialBooking: "https://fmdss.forest.rajasthan.gov.in/",
      googleMaps: "https://goo.gl/maps/keoladeo"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main path is paved for 10km. Cycle rickshaws can accommodate folded wheelchairs."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Cycle Rickshaw Bird Tour" },
      { time: "10:00 AM", activity: "Boat Ride in Wetlands" },
      { time: "01:00 PM", activity: "Visit Lohagarh Fort (City)" }
    ],

    foodGuide: [
      { name: "Laxmi Vilas Palace", type: "Heritage", specialty: "Rajasthani Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "RBM Hospital Bharatpur"
    }
  },

  // --- SPIRITUAL & HILL STATION ---
  {
    id: 2207,
    name: "Pushkar Lake & Brahma Temple",
    slug: "pushkar-lake",
    state: "Rajasthan",
    category: "Spiritual",
    badge: "Only Brahma Temple in World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pushkar_Lake_Ghats.jpg/800px-Pushkar_Lake_Ghats.jpg",
    description: "A sacred town built around a holy lake with 52 ghats. It houses one of the very few temples dedicated to Lord Brahma in the world. Famous for the annual Camel Fair.",
    coordinates: { lat: 26.4886, lng: 74.5509 },

    essentials: {
      bestTime: "November (Camel Fair) or Winter",
      weather: "Desert",
      timings: "24 Hours (Temple: 6 AM - 8 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Kishangarh (45 km)",
      nearestRailway: "Ajmer Junction (15 km)",
      busConnectivity: "Frequent buses from Ajmer to Pushkar"
    },

    externalLinks: {
      officialBooking: "https://tourism.rajasthan.gov.in/",
      googleMaps: "https://goo.gl/maps/pushkar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Ghats have steep steps. Temple entrance has steps but assistance is available."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Brahma Temple Darshan" },
      { time: "09:00 AM", activity: "Walk around 52 Ghats" },
      { time: "05:00 PM", activity: "Sunset & Aarti at Varaha Ghat" }
    ],

    foodGuide: [
      { name: "The Laughing Buddha", type: "Cafe", specialty: "Falafel & Malpua", rating: 4.4 },
      { name: "Halwai Gali", type: "Street", specialty: "Rabri Malpua", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "Govt Hospital Pushkar"
    }
  },
  {
    id: 2208,
    name: "Mount Abu (Dilwara Temples)",
    slug: "mount-abu",
    state: "Rajasthan",
    category: "Hill Stations",
    badge: "Only Hill Station of Rajasthan",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nakki_Lake_Mount_Abu.jpg/800px-Nakki_Lake_Mount_Abu.jpg",
    description: "An oasis in the desert, famous for the Nakki Lake and the exquisite Dilwara Jain Temples, known for their marble carvings that are finer than the Taj Mahal.",
    coordinates: { lat: 24.5926, lng: 72.7156 },

    essentials: {
      bestTime: "All Year (Monsoon is scenic)",
      weather: "Cool",
      timings: "Temple: 12:00 PM - 05:00 PM (Strict timings)",
      entryFee: { Entry: "Free (No phones allowed)" }
    },

    transport: {
      nearestAirport: "Udaipur (165 km)",
      nearestRailway: "Abu Road (28 km)",
      busConnectivity: "Taxis/Buses from Abu Road station"
    },

    externalLinks: {
      officialBooking: "https://tourism.rajasthan.gov.in/",
      googleMaps: "https://goo.gl/maps/mountabu"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Dilwara temples have wheelchair access. Nakki Lake promenade is flat."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Nakki Lake Boating" },
      { time: "12:30 PM", activity: "Dilwara Temples" },
      { time: "05:30 PM", activity: "Sunset Point" }
    ],

    foodGuide: [
      { name: "Mulberry Tree", type: "Restaurant", specialty: "North Indian", rating: 4.2 },
      { name: "Arbuda", type: "View", specialty: "Gujarati Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "Global Hospital"
    }
  },

  // --- FORT ---
  {
    id: 2209,
    name: "Chittorgarh Fort",
    slug: "chittorgarh-fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Largest Fort in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chittorgarh_Fort_Gaumukh.jpg/800px-Chittorgarh_Fort_Gaumukh.jpg",
    description: "A UNESCO World Heritage site spreading over 700 acres. It symbolizes Rajput chivalry and sacrifice (Jauhar). Famous for Vijay Stambh (Victory Tower) and Padmini's Palace.",
    coordinates: { lat: 24.8879, lng: 74.6454 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "09:30 AM - 05:00 PM",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        LightShow: "₹150"
      }
    },

    transport: {
      nearestAirport: "Udaipur (115 km)",
      nearestRailway: "Chittorgarh Junction (6 km)",
      busConnectivity: "Auto/Taxi required to tour the massive fort complex"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/chittorgarh"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "You can drive your vehicle inside the fort to most monuments. Ramps available at Vijay Stambh base."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Vijay Stambh & Kirti Stambh" },
      { time: "11:00 AM", activity: "Rani Padmini's Palace" },
      { time: "01:00 PM", activity: "Meera Temple" }
    ],

    foodGuide: [
      { name: "Chokhi Dhani (Chittor)", type: "Theme", specialty: "Rajasthani Experience", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "District Hospital Chittorgarh"
    }
  },
  {
    id: 2210,
    name: "Kumbhalgarh Fort",
    slug: "kumbhalgarh-fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Great Wall of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kumbhalgarh_Fort_Wall.jpg/800px-Kumbhalgarh_Fort_Wall.jpg",
    description: "Famous for having the second-longest continuous wall in the world (36 km) after the Great Wall of China. It is the birthplace of Maharana Pratap.",
    coordinates: { lat: 25.1479, lng: 73.5882 },

    essentials: {
      bestTime: "October to March",
      weather: "Cool/Windy",
      timings: "09:00 AM - 06:00 PM (Light Show: 6:45 PM)",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        LightShow: "₹100"
      }
    },

    transport: {
      nearestAirport: "Udaipur (85 km)",
      nearestRailway: "Falna (80 km)",
      busConnectivity: "Best accessed by taxi from Udaipur or Ranakpur"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/kumbhalgarh"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Very steep ramps and cobblestones. Difficult for wheelchairs to reach the top palace (Badal Mahal)."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Climb to Badal Mahal" },
      { time: "05:00 PM", activity: "Walk on the Wall" },
      { time: "06:45 PM", activity: "Sound & Light Show" }
    ],

    foodGuide: [
      { name: "Kumbhal Palace", type: "Resort", specialty: "Mewari Lunch", rating: 4.3 },
      { name: "Chowka", type: "Luxury", specialty: "Continental", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-3500",
      nearestHospital: "Community Health Center Kelwara"
    }
  }
];
