/**
 * DNH_DD_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: U.T. Administration Tourism Dept (dnh.gov.in, daman.nic.in, diu.gov.in)
 * - Wildlife: Vasona Lion Safari Official Schedules
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU_PLACES = [
  // --- DIU (Beaches & Heritage) ---
  {
    id: 3201,
    name: "Diu Fort",
    slug: "diu-fort",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Heritage",
    badge: "Seven Wonders of Portugal",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Diu_Fort_01.jpg/800px-Diu_Fort_01.jpg",
    description: "Built by the Portuguese in 1535, this massive sea fort commands a spectacular view of the Arabian Sea. It features canons, a lighthouse, and a jail, surrounded by the sea on three sides.",
    coordinates: { lat: 20.7144, lng: 70.9968 },

    essentials: {
      bestTime: "October to March (Festa De Diu in Dec)",
      weather: "Coastal/Breezy",
      timings: "08:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Diu Airport (8 km)",
      nearestRailway: "Veraval (90 km)",
      busConnectivity: "Auto-rickshaws available from Diu Bus Stand"
    },

    externalLinks: {
      officialBooking: "https://diu.gov.in/",
      googleMaps: "https://goo.gl/maps/diufort"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The fort ramparts involve steep climbs and uneven stone paths."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Walk along the Ramparts" },
      { time: "10:30 AM", activity: "Visit Lighthouse & Jail" },
      { time: "12:00 PM", activity: "St. Paul's Church (Nearby)" }
    ],

    foodGuide: [
      { name: "O'Coqueiro", type: "Garden", specialty: "Portuguese Seafood", rating: 4.5 },
      { name: "Apana Foodland", type: "City", specialty: "Fish Thali", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "02875-252653",
      nearestHospital: "Government Hospital Diu"
    }
  },
  {
    id: 3202,
    name: "Nagoa Beach",
    slug: "nagoa-beach",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Beaches",
    badge: "Hoka Trees & Watersports",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nagoa_Beach_Diu.jpg/800px-Nagoa_Beach_Diu.jpg",
    description: "A pristine horseshoe-shaped beach famous for its Hoka (Branching Palm) trees, which are native to Africa. It is the hub for water sports like parasailing and jet skiing in Diu.",
    coordinates: { lat: 20.7077, lng: 70.9254 },

    essentials: {
      bestTime: "October to May",
      weather: "Sunny",
      timings: "24 Hours (Water Sports: 9 AM - 6 PM)",
      entryFee: {
        Entry: "Free",
        Parasailing: "₹1000-1200",
        JetSki: "₹400"
      }
    },

    transport: {
      nearestAirport: "Diu Airport (1 km)",
      nearestRailway: "Veraval (85 km)",
      busConnectivity: "Accessible by taxi/auto from Diu town (7 km)"
    },

    externalLinks: {
      officialBooking: "https://diu.gov.in/",
      googleMaps: "https://goo.gl/maps/nagoa"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The promenade is paved. Beach access is sandy."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Water Sports" },
      { time: "01:00 PM", activity: "Lunch at Beach Resort" },
      { time: "04:00 PM", activity: "Relax under Hoka Trees" }
    ],

    foodGuide: [
      { name: "Radhika Beach Resort", type: "Resort", specialty: "Seafood Platter", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "02875-252653",
      nearestHospital: "Government Hospital Diu"
    }
  },
  {
    id: 3203,
    name: "Naida Caves",
    slug: "naida-caves",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Nature",
    badge: "Photographer's Paradise",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Naida_Caves_Diu.jpg/800px-Naida_Caves_Diu.jpg",
    description: "A labyrinth of rock formations located just outside the Diu Fort walls. Sunlight filtering through the natural openings creates a dramatic play of light and shadow.",
    coordinates: { lat: 20.7119, lng: 70.9823 },

    essentials: {
      bestTime: "Mid-day (For best light)",
      weather: "Cool/Humid",
      timings: "24 Hours (Best 9 AM - 5 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Diu Airport (8 km)",
      nearestRailway: "Veraval (90 km)",
      busConnectivity: "Walking distance from Jalandhar Beach"
    },

    externalLinks: {
      officialBooking: "https://diu.gov.in/",
      googleMaps: "https://goo.gl/maps/naida"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Uneven rocky ground and steps. Not accessible."
    },

    routePlan: [
      { time: "11:00 AM", activity: "Photography Walk" },
      { time: "12:30 PM", activity: "Explore Hidden Tunnels" },
      { time: "01:30 PM", activity: "Jalandhar Beach (Next door)" }
    ],

    foodGuide: [
      { name: "Ram Vijay", type: "Heritage", specialty: "Homemade Ice Cream", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "02875-252653",
      nearestHospital: "Government Hospital Diu"
    }
  },
  {
    id: 3204,
    name: "Gangeshwar Mahadev Temple",
    slug: "gangeshwar-mahadev",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Spiritual",
    badge: "Sea-Washed Shiva Lingas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gangeshwar_Mahadev_Temple_Diu.jpg/800px-Gangeshwar_Mahadev_Temple_Diu.jpg",
    description: "A unique cave temple located on the seashore where five Shiva Lingas (believed to be established by the Pandavas) are washed by the tidal waves of the sea.",
    coordinates: { lat: 20.7064, lng: 70.9575 },

    essentials: {
      bestTime: "High Tide (To see waves washing Lingas)",
      weather: "Coastal",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Diu Airport (4 km)",
      nearestRailway: "Delvada (12 km)",
      busConnectivity: "Located in Fudam village, accessible by auto"
    },

    externalLinks: {
      officialBooking: "https://diu.gov.in/",
      googleMaps: "https://goo.gl/maps/gangeshwar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires descending steps to the rocky shore."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Temple Darshan" },
      { time: "06:00 PM", activity: "Sunset on the Rocks" },
      { time: "07:00 PM", activity: "Evening Aarti" }
    ],

    foodGuide: [
      { name: "Cat's Eye", type: "Resort", specialty: "Seafood", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "02875-252653",
      nearestHospital: "Government Hospital Diu"
    }
  },

  // --- DAMAN (Heritage & Beaches) ---
  {
    id: 3205,
    name: "Moti Daman Fort",
    slug: "moti-daman-fort",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Heritage",
    badge: "Colonial Admin Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Moti_Daman_Fort_Gate.jpg/800px-Moti_Daman_Fort_Gate.jpg",
    description: "Built by the Portuguese in 1559, this massive fort houses the Secretariat, the Cathedral of Bom Jesus, and the Dominican Monastery ruins. It retains a strong colonial charm.",
    coordinates: { lat: 20.4134, lng: 72.8335 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "08:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Mumbai (170 km) or Surat (120 km)",
      nearestRailway: "Vapi (12 km)",
      busConnectivity: "Auto/Taxi from Vapi station"
    },

    externalLinks: {
      officialBooking: "https://daman.nic.in/",
      googleMaps: "https://goo.gl/maps/motidaman"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The roads inside the fort are paved and flat. Churches are accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Cathedral of Bom Jesus" },
      { time: "05:00 PM", activity: "Walk on Fort Ramparts" },
      { time: "06:30 PM", activity: "Lighthouse View" }
    ],

    foodGuide: [
      { name: "Veepee's", type: "Inside Fort", specialty: "Continental", rating: 4.2 },
      { name: "Daman Delite", type: "City", specialty: "Butter Chicken", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0260-2250002",
      nearestHospital: "Government Hospital Marwad"
    }
  },
  {
    id: 3206,
    name: "Jampore Beach",
    slug: "jampore-beach",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Beaches",
    badge: "Black Sand Beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jampore_Beach_Daman.jpg/800px-Jampore_Beach_Daman.jpg",
    description: "A popular beach in Moti Daman with brownish-black sand. The water is shallow and calm, making it ideal for swimming and horse riding. The casuarina groves offer great shade.",
    coordinates: { lat: 20.3857, lng: 72.8122 },

    essentials: {
      bestTime: "Evenings",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: {
        Entry: "Free",
        HorseRide: "₹100-200"
      }
    },

    transport: {
      nearestAirport: "Mumbai (170 km)",
      nearestRailway: "Vapi (15 km)",
      busConnectivity: "Auto from Moti Daman (5 km)"
    },

    externalLinks: {
      officialBooking: "https://daman.nic.in/",
      googleMaps: "https://goo.gl/maps/jampore"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The promenade is paved. Beach shacks are on the sand."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Horse/Camel Ride" },
      { time: "05:00 PM", activity: "Parasailing (Seasonal)" },
      { time: "06:00 PM", activity: "Seafood at Shacks" }
    ],

    foodGuide: [
      { name: "Beach Shacks", type: "Stall", specialty: "Fried Pomfret & Prawns", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0260-2250002",
      nearestHospital: "Govt Hospital Marwad"
    }
  },
  {
    id: 3207,
    name: "Devka Beach",
    slug: "devka-beach",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Beaches",
    badge: "Renovated Seafront",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Devka_Beach_Daman.jpg/800px-Devka_Beach_Daman.jpg",
    description: "Located in Nani Daman, this beach is rocky but features a newly built, world-class seafront promenade with fountains, lighting, and an amusement park.",
    coordinates: { lat: 20.4376, lng: 72.8427 },

    essentials: {
      bestTime: "Evening (For promenade lighting)",
      weather: "Humid",
      timings: "24 Hours (Amusement Park: 4 PM - 9 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Surat (120 km)",
      nearestRailway: "Vapi (12 km)",
      busConnectivity: "Auto/Taxi from Vapi or Nani Daman taxi stand"
    },

    externalLinks: {
      officialBooking: "https://daman.nic.in/",
      googleMaps: "https://goo.gl/maps/devka"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The new seafront promenade is fully paved and wheelchair accessible."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Walk on the Promenade" },
      { time: "06:30 PM", activity: "Musical Fountain Show" },
      { time: "08:00 PM", activity: "Dinner at Mirasol" }
    ],

    foodGuide: [
      { name: "Mirasol Lake Resort", type: "Resort", specialty: "Multi-Cuisine", rating: 4.2 },
      { name: "Gurukripa", type: "City", specialty: "Vegetarian", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0260-2250002",
      nearestHospital: "Govt Hospital Marwad"
    }
  },

  // --- DADRA & NAGAR HAVELI (Nature & Wildlife) ---
  {
    id: 3208,
    name: "Vasona Lion Safari",
    slug: "vasona-lion-safari",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Wildlife",
    badge: "Asiatic Lion Reserve",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lion_waiting_in_Gir_forest.jpg/800px-Lion_waiting_in_Gir_forest.jpg",
    description: "Located near Silvassa, this 25-hectare park is home to Asiatic lions brought from Gir. Visitors are taken inside the safari zone in caged buses.",
    coordinates: { lat: 20.2443, lng: 73.0039 },

    essentials: {
      bestTime: "October to June",
      weather: "Warm",
      timings: "09:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Adult: "₹25",
        Child: "₹10",
        BusSafari: "Included"
      }
    },

    transport: {
      nearestAirport: "Mumbai (160 km)",
      nearestRailway: "Vapi (18 km)",
      busConnectivity: "Auto/Bus from Silvassa (10 km)"
    },

    externalLinks: {
      officialBooking: "https://dnh.gov.in/",
      googleMaps: "https://goo.gl/maps/vasona"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding the safari bus requires climbing steps."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Bus Safari" },
      { time: "10:30 AM", activity: "Visit Satmaliya Deer Park (Nearby)" },
      { time: "12:00 PM", activity: "Butterfly Park" }
    ],

    foodGuide: [
      { name: "Treat Resort", type: "Resort", specialty: "Buffet", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0260-2641399",
      nearestHospital: "Vinoba Bhave Civil Hospital Silvassa"
    }
  },
  {
    id: 3209,
    name: "Dudhni Lake",
    slug: "dudhni-lake",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Nature",
    badge: "Water Sports Hub of DNH",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dudhni_Lake_Silvassa.jpg/800px-Dudhni_Lake_Silvassa.jpg",
    description: "Formed by the Madhuban Dam reservoir on the Daman Ganga river. It is a scenic spot offering kayaking, speed boating, and shikara rides, surrounded by Western Ghats foothills.",
    coordinates: { lat: 20.0894, lng: 73.0642 },

    essentials: {
      bestTime: "November to March",
      weather: "Pleasant",
      timings: "07:00 AM - 06:00 PM",
      entryFee: {
        Entry: "Free",
        Shikara: "₹250-400",
        SpeedBoat: "₹500+"
      }
    },

    transport: {
      nearestAirport: "Mumbai (170 km)",
      nearestRailway: "Vapi (40 km)",
      busConnectivity: "Taxi from Silvassa (40 km, 1 hour drive)"
    },

    externalLinks: {
      officialBooking: "https://dnh.gov.in/",
      googleMaps: "https://goo.gl/maps/dudhni"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The jetty area has steps and uneven surfaces."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Shikara Ride" },
      { time: "12:00 PM", activity: "Lunch at Van Vihar" },
      { time: "02:00 PM", activity: "Visit Tribal Museum Silvassa (On return)" }
    ],

    foodGuide: [
      { name: "Van Vihar Resort", type: "Govt", specialty: "Simple Veg/Non-Veg", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0260-2641399",
      nearestHospital: "Khanvel Sub-District Hospital"
    }
  },
  {
    id: 3210,
    name: "Vanganga Lake Garden",
    slug: "vanganga-lake-garden",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Nature",
    badge: "Japanese Style Garden",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vanganga_Lake_Garden_Silvassa.jpg/800px-Vanganga_Lake_Garden_Silvassa.jpg",
    description: "A beautiful garden in Dadra featuring a central lake with an island, connected by Japanese-style bridges. It is a popular spot for boating and evening walks.",
    coordinates: { lat: 20.2760, lng: 72.9520 },

    essentials: {
      bestTime: "Evenings",
      weather: "Pleasant",
      timings: "09:00 AM - 08:30 PM",
      entryFee: {
        Adult: "₹20",
        Child: "₹10",
        Boating: "₹50"
      }
    },

    transport: {
      nearestAirport: "Mumbai (160 km)",
      nearestRailway: "Vapi (7 km)",
      busConnectivity: "Located on the Silvassa-Vapi road (Dadra)"
    },

    externalLinks: {
      officialBooking: "https://dnh.gov.in/",
      googleMaps: "https://goo.gl/maps/vanganga"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Pathways are paved and well-maintained. Bridges have slight inclines."
    },

    routePlan: [
      { time: "04:30 PM", activity: "Garden Walk" },
      { time: "05:30 PM", activity: "Paddle Boating" },
      { time: "07:00 PM", activity: "Musical Fountain (Weekend)" }
    ],

    foodGuide: [
      { name: "Garden Canteen", type: "Snacks", specialty: "Pav Bhaji", rating: 3.8 },
      { name: "Woodland Restaurant", type: "Nearby", specialty: "Indian", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0260-2641399",
      nearestHospital: "VBCH Silvassa"
    }
  }
]; 
 
