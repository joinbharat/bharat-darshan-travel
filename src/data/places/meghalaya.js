/**
 * MEGHALAYA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Meghalaya Tourism & Local Village Councils (Durbars)
 * - Adventure: Certified Caving & Trekking Operators
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const MEGHALAYA_PLACES = [
  // --- NATURE & FALLS ---
  {
    id: 1701,
    name: "Double Decker Living Root Bridge",
    slug: "double-decker-root-bridge",
    state: "Meghalaya",
    category: "Nature",
    badge: "Bio-Engineering Marvel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Double_Decker_Living_Root_Bridge_Nongriat.jpg/800px-Double_Decker_Living_Root_Bridge_Nongriat.jpg",
    description: "Located in Nongriat village, this 150+ year old bridge is made from the roots of the Ficus Elastica tree, trained by the Khasi people. It requires a steep trek of 3500+ steps.",
    coordinates: { lat: 25.2505, lng: 91.6669 },

    essentials: {
      bestTime: "October to April (Avoid heavy monsoon due to slippery steps)",
      weather: "Humid/Rainy",
      timings: "Sunrise to Sunset (Trek takes 4-6 hours round trip)",
      entryFee: {
        Entry: "₹20",
        Camera: "₹50",
        Guide: "₹700-1000 (Recommended)"
      }
    },

    transport: {
      nearestAirport: "Shillong (85 km) or Guwahati (175 km)",
      nearestRailway: "Guwahati (175 km)",
      busConnectivity: "Taxi from Cherrapunji (Sohra) to Tyrna Village (Base point)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/rootbridge"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Extremely difficult trek involving 3500 steep steps. Not accessible for those with mobility issues."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Start Trek from Tyrna" },
      { time: "10:00 AM", activity: "Reach Double Decker Bridge" },
      { time: "12:00 PM", activity: "Dip in Rainbow Falls (Ahead)" }
    ],

    foodGuide: [
      { name: "Serene Homestay", type: "Homestay", specialty: "Maggi & Red Tea", rating: 4.5 },
      { name: "Village Stalls", type: "Basic", specialty: "Lemon Tea", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "CHC Sohra (Cherrapunji)"
    }
  },
  {
    id: 1702,
    name: "Nohkalikai Falls",
    slug: "nohkalikai-falls",
    state: "Meghalaya",
    category: "Nature",
    badge: "Tallest Plunge Waterfall in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nohkalikai_Falls_Cherrapunji.jpg/800px-Nohkalikai_Falls_Cherrapunji.jpg",
    description: "Plunging 340 meters from a verdant cliff, this is the pride of Cherrapunji. The pool at the bottom changes color from blue to green depending on the season.",
    coordinates: { lat: 25.2762, lng: 91.6865 },

    essentials: {
      bestTime: "September to March (Cloud-free views)",
      weather: "Misty/Rainy",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹20",
        Camera: "₹20"
      }
    },

    transport: {
      nearestAirport: "Shillong (80 km)",
      nearestRailway: "Guwahati (165 km)",
      busConnectivity: "Taxi from Cherrapunji town (7 km)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/nohkalikai"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The main viewpoint is accessible via a paved path from the parking lot. Steps lead to lower viewpoints."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Viewpoint Photography" },
      { time: "11:00 AM", activity: "Shopping for Spices/Honey" },
      { time: "12:00 PM", activity: "Drive to Mawsmai Cave" }
    ],

    foodGuide: [
      { name: "Nohkalikai Viewpoint Dhabas", type: "Stall", specialty: "Pork Chowmein", rating: 4.2 },
      { name: "Orange Roots", type: "Vegetarian", specialty: "South Indian Thali", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "CHC Sohra"
    }
  },
  {
    id: 1703,
    name: "Umngot River (Dawki)",
    slug: "umngot-river-dawki",
    state: "Meghalaya",
    category: "Nature",
    badge: "Crystal Clear Waters",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dawki_River_Boating.jpg/800px-Dawki_River_Boating.jpg",
    description: "Located at the India-Bangladesh border, the Umngot River is famous for its incredibly clear water that makes boats appear to be floating in mid-air.",
    coordinates: { lat: 25.1952, lng: 92.0195 },

    essentials: {
      bestTime: "October to March (Water is muddiest in Monsoon)",
      weather: "Warm",
      timings: "08:00 AM - 05:00 PM (Boating)",
      entryFee: {
        Entry: "Free",
        Boating: "₹800-1000 (Per boat)"
      }
    },

    transport: {
      nearestAirport: "Shillong (90 km)",
      nearestRailway: "Guwahati (180 km)",
      busConnectivity: "Sumo/Taxi from Shillong (3-4 hours drive)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/dawki"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The river bank is rocky and sandy. Getting into boats requires balance and assistance."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Boat Ride on Umngot" },
      { time: "12:00 PM", activity: "Camping at Shnongpdeng (Nearby)" },
      { time: "02:00 PM", activity: "Visit India-Bangladesh Friendship Gate" }
    ],

    foodGuide: [
      { name: "Riverside Stalls", type: "Basic", specialty: "Maggi & Omelette", rating: 3.8 },
      { name: "Pioneer Restaurant", type: "Highway", specialty: "Rice & Curry", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "CHC Dawki"
    }
  },

  // --- CAVES & ADVENTURE ---
  {
    id: 1704,
    name: "Mawsmai Cave",
    slug: "mawsmai-cave",
    state: "Meghalaya",
    category: "Adventure",
    badge: "Limestone Cave Exploration",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mawsmai_Cave_Interior.jpg/800px-Mawsmai_Cave_Interior.jpg",
    description: "One of the few fully lit caves in Meghalaya accessible to tourists. It features impressive limestone stalactites and fossils, with some narrow passages to squeeze through.",
    coordinates: { lat: 25.2632, lng: 91.7208 },

    essentials: {
      bestTime: "All Year",
      weather: "Cool/Damp",
      timings: "09:00 AM - 05:30 PM",
      entryFee: {
        Adult: "₹20",
        Camera: "₹20"
      }
    },

    transport: {
      nearestAirport: "Shillong (85 km)",
      nearestRailway: "Guwahati (170 km)",
      busConnectivity: "6 km from Cherrapunji town (Taxi available)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/mawsmai"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Uneven, wet, and slippery floors. Requires bending and squeezing through gaps."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Cave Walkthrough" },
      { time: "03:00 PM", activity: "Seven Sisters Falls (Nearby Viewpoint)" },
      { time: "04:00 PM", activity: "Thangkharang Park" }
    ],

    foodGuide: [
      { name: "Cave Cafe", type: "Stall", specialty: "Pineapple Slices", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "CHC Sohra"
    }
  },
  {
    id: 1705,
    name: "Krem Liat Prah",
    slug: "krem-liat-prah",
    state: "Meghalaya",
    category: "Adventure",
    badge: "Longest Natural Cave in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Caving_in_Meghalaya.jpg/800px-Caving_in_Meghalaya.jpg",
    description: "Located in the Jaintia Hills, this massive cave system stretches over 30 km. It is a destination for serious cavers, featuring the enormous 'Aircraft Hangar' passage.",
    coordinates: { lat: 25.3725, lng: 92.5165 },

    essentials: {
      bestTime: "November to March (Dry Season)",
      weather: "Dark/Humid",
      timings: "Daylight (Guide Mandatory)",
      entryFee: {
        Guide: "₹1000-2000 (Approx)",
        GearRental: "Extra"
      }
    },

    transport: {
      nearestAirport: "Shillong (120 km)",
      nearestRailway: "Guwahati (200 km)",
      busConnectivity: "Requires private vehicle from Jowai or Lad Rymbai"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/kremliatprah"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Extreme adventure. Requires physical fitness and caving gear."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Drive from Jowai" },
      { time: "10:00 AM", activity: "Guided Caving Expedition" },
      { time: "02:00 PM", activity: "Picnic at Shnongrim Ridge" }
    ],

    foodGuide: [
      { name: "Local Dhabas (Lad Rymbai)", type: "Highway", specialty: "Jadoh (Meat Rice)", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "Civil Hospital Jowai"
    }
  },

  // --- HILL STATIONS & LAKES ---
  {
    id: 1706,
    name: "Umiam Lake",
    slug: "umiam-lake",
    state: "Meghalaya",
    category: "Nature",
    badge: "Barapani (Big Water)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Umiam_Lake_Shillong.jpg/800px-Umiam_Lake_Shillong.jpg",
    description: "A vast man-made reservoir north of Shillong, surrounded by sylvan hills. It offers water sports like kayaking, water cycling, and speed boating.",
    coordinates: { lat: 25.6667, lng: 91.8927 },

    essentials: {
      bestTime: "All Year",
      weather: "Breezy",
      timings: "09:00 AM - 05:00 PM (Water Sports)",
      entryFee: {
        Park: "₹20",
        SpeedBoat: "₹500-800"
      }
    },

    transport: {
      nearestAirport: "Shillong (15 km)",
      nearestRailway: "Guwahati (80 km)",
      busConnectivity: "Located on the Guwahati-Shillong Highway (NH-6)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/umiam"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The viewpoint park and Orchid Lake Resort areas are accessible. Boat jetty has steps."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Speed Boat Ride" },
      { time: "05:00 PM", activity: "Sunset at Viewpoint" },
      { time: "06:00 PM", activity: "Coffee at Ri Kynjai" }
    ],

    foodGuide: [
      { name: "Sao Aiom (Ri Kynjai)", type: "Luxury", specialty: "Khasi Platter", rating: 4.7 },
      { name: "Excelcia", type: "Highway", specialty: "Chinese", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "NEIGRIHMS Shillong"
    }
  },
  {
    id: 1707,
    name: "Shillong Peak & Viewpoint",
    slug: "shillong-peak",
    state: "Meghalaya",
    category: "Hill Stations",
    badge: "Highest Point in Shillong",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shillong_Peak_View.jpg/800px-Shillong_Peak_View.jpg",
    description: "Standing at 1965 meters, this peak offers a panoramic view of Shillong city and the distant plains of Bangladesh. It is located within an Air Force base.",
    coordinates: { lat: 25.5342, lng: 91.8557 },

    essentials: {
      bestTime: "September to May (Clear Skies)",
      weather: "Windy/Cold",
      timings: "09:00 AM - 05:00 PM (ID Proof Required)",
      entryFee: {
        Entry: "₹30",
        Telescope: "₹20"
      }
    },

    transport: {
      nearestAirport: "Shillong (35 km)",
      nearestRailway: "Guwahati (105 km)",
      busConnectivity: "Taxi from Shillong city center (10 km)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/shillongpeak"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The viewing tower area is flat and paved. Accessible by car up to the gate."
    },

    routePlan: [
      { time: "10:00 AM", activity: "City View Photography" },
      { time: "11:00 AM", activity: "Elephant Falls (En route)" },
      { time: "01:00 PM", activity: "Lunch at ML05 Cafe" }
    ],

    foodGuide: [
      { name: "ML05 Cafe", type: "Theme Cafe", specialty: "Hot Chocolate & Momos", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "Civil Hospital Shillong"
    }
  },

  // --- VILLAGE & CULTURE ---
  {
    id: 1708,
    name: "Mawlynnong Village",
    slug: "mawlynnong-village",
    state: "Meghalaya",
    category: "Heritage",
    badge: "Cleanest Village in Asia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mawlynnong_Village_Path.jpg/800px-Mawlynnong_Village_Path.jpg",
    description: "Renowned for its cleanliness and community-led eco-tourism. The village features bamboo dustbins, manicured gardens, and a Sky Walk (bamboo treehouse) overlooking Bangladesh.",
    coordinates: { lat: 25.2023, lng: 92.0159 },

    essentials: {
      bestTime: "All Year",
      weather: "Tropical",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        VillageEntry: "₹50 (Vehicle)",
        SkyWalk: "₹20"
      }
    },

    transport: {
      nearestAirport: "Shillong (90 km)",
      nearestRailway: "Guwahati (180 km)",
      busConnectivity: "Taxi from Shillong (Day trip usually combined with Dawki)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/mawlynnong"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Village paths are paved and clean. The Bamboo Sky Walk is NOT accessible (ladder climb)."
    },

    routePlan: [
      { time: "01:00 PM", activity: "Village Walk & Gardens" },
      { time: "02:00 PM", activity: "Climb Bamboo Sky Walk" },
      { time: "03:00 PM", activity: "Visit Balancing Rock" }
    ],

    foodGuide: [
      { name: "Village Homestays", type: "Home", specialty: "Chicken Curry & Rice", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "CHC Pynursla"
    }
  },
  {
    id: 1709,
    name: "Don Bosco Centre for Indigenous Cultures",
    slug: "don-bosco-museum",
    state: "Meghalaya",
    category: "Heritage",
    badge: "Seven-Storey Cultural Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Don_Bosco_Museum_Shillong.jpg/800px-Don_Bosco_Museum_Shillong.jpg",
    description: "Asia's largest museum of indigenous cultures, showcasing the heritage of the Seven Sister States of Northeast India. It features 17 galleries and a Skywalk.",
    coordinates: { lat: 25.5802, lng: 91.8845 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "09:00 AM - 05:30 PM (Closed Sundays)",
      entryFee: {
        Indian: "₹100",
        Student: "₹50",
        Foreigner: "₹200"
      }
    },

    transport: {
      nearestAirport: "Shillong (25 km)",
      nearestRailway: "Guwahati (95 km)",
      busConnectivity: "Located in Mawlai, accessible by city bus/taxi"
    },

    externalLinks: {
      officialBooking: "https://dbcic.org/",
      googleMaps: "https://goo.gl/maps/donbosco"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Elevators available for all 7 floors. Ramps at entrance."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Cultural Galleries Tour" },
      { time: "12:00 PM", activity: "Skywalk View of Shillong" },
      { time: "01:00 PM", activity: "Museum Souvenir Shop" }
    ],

    foodGuide: [
      { name: "Museum Food Court", type: "Cafe", specialty: "Momos & Coffee", rating: 3.9 },
      { name: "City Hut Family Dhaba", type: "City", specialty: "Tandoori", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "Roberts Hospital"
    }
  },
  {
    id: 1710,
    name: "Laitlum Canyons",
    slug: "laitlum-canyons",
    state: "Meghalaya",
    category: "Nature",
    badge: "End of Hills",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Laitlum_Canyons_View.jpg/800px-Laitlum_Canyons_View.jpg",
    description: "Meaning 'End of Hills', Laitlum offers breathtaking views of deep gorges and winding stairways leading down to the valley villages like Rasong. A serene and less crowded spot.",
    coordinates: { lat: 25.5416, lng: 91.9056 },

    essentials: {
      bestTime: "September to May (Avoid heavy fog days)",
      weather: "Windy/Misty",
      timings: "Sunrise to Sunset",
      entryFee: {
        Entry: "Free",
        Parking: "₹50"
      }
    },

    transport: {
      nearestAirport: "Shillong (35 km)",
      nearestRailway: "Guwahati (110 km)",
      busConnectivity: "Hire a taxi from Shillong (22 km)"
    },

    externalLinks: {
      officialBooking: "https://meghalayatourism.in/",
      googleMaps: "https://goo.gl/maps/laitlum"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The plateau top is grassy and relatively flat, accessible by car. The trek down is NOT accessible."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Canyon Photography" },
      { time: "04:00 PM", activity: "Walk along the ridge" },
      { time: "05:00 PM", activity: "Sunset View" }
    ],

    foodGuide: [
      { name: "Local Tea Stalls", type: "Basic", specialty: "Maggie & Lal Cha (Red Tea)", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-6222",
      nearestHospital: "Civil Hospital Shillong"
    }
  }
]; 
