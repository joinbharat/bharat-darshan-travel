/**
 * JAMMU_KASHMIR_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: J&K Tourism, Shrine Board & Gulmarg Cable Car Corp
 * - Gulmarg Gondola: Official Booking Portal (jammukashmircablecar.com)
 * - Vaishno Devi: Official RFID/Yatra Parchi rules
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const JAMMU_AND_KASHMIR_PLACES = [
  // --- SPIRITUAL ---
  {
    id: 3401,
    name: "Vaishno Devi Temple",
    slug: "vaishno-devi-katra",
    state: "Jammu and Kashmir",
    category: "Spiritual",
    badge: "Holiest Shakti Peeth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Vaishno_Devi_Bhavan_View.jpg/800px-Vaishno_Devi_Bhavan_View.jpg",
    description: "Nestled in the Trikuta Mountains, this is one of India's most visited pilgrimage sites. The trek spans 12 km from Katra to the Bhawan, housing the Holy Pindies in a cave.",
    coordinates: { lat: 33.0308, lng: 74.9490 },

    essentials: {
      bestTime: "March to October (Navratri is peak)",
      weather: "Cold/Alpine",
      timings: "24 Hours (RFID Card Mandatory)",
      entryFee: {
        YatraParchi: "Free (RFID Registration)",
        Helicopter: "₹2100 (Approx one way)",
        BatteryCar: "₹350 (Himkoti route)"
      }
    },

    transport: {
      nearestAirport: "Jammu (50 km)",
      nearestRailway: "Shri Mata Vaishno Devi Katra (SVDK) - 0 km",
      busConnectivity: "Direct buses from Delhi/Jammu to Katra Bus Stand"
    },

    externalLinks: {
      officialBooking: "https://www.maavaishnodevi.org/",
      googleMaps: "https://goo.gl/maps/vaishnodevi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The new Tarakote Marg is paved and less steep. Palkis, ponies, and battery cars are available for elderly."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Start Trek from Banganga" },
      { time: "10:00 AM", activity: "Darshan at Adhkuwari" },
      { time: "02:00 PM", activity: "Main Bhawan Darshan" }
    ],

    foodGuide: [
      { name: "Shrine Board Bhojanalaya", type: "Pilgrim", specialty: "Rajma Chawal", rating: 4.5 },
      { name: "Manoranjan Dhaba", type: "Katra", specialty: "Pure Veg Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "Narayana Super Speciality Hospital (Kakryal)"
    }
  },
  {
    id: 3402,
    name: "Shankaracharya Temple",
    slug: "shankaracharya-temple",
    state: "Jammu and Kashmir",
    category: "Spiritual",
    badge: "Oldest Shrine in Kashmir",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Shankaracharya_Temple_Srinagar.jpg/800px-Shankaracharya_Temple_Srinagar.jpg",
    description: "Perched on the Takht-e-Suleiman hill at 1100 feet, this Shiva temple dates back to 200 BC. It offers a breathtaking panoramic view of Srinagar city and Dal Lake.",
    coordinates: { lat: 34.0713, lng: 74.8436 },

    essentials: {
      bestTime: "April to October",
      weather: "Windy",
      timings: "07:00 AM - 08:00 PM (Strict Security - No Phones)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Srinagar (18 km)",
      nearestRailway: "Srinagar (15 km)",
      busConnectivity: "Cars go up to the base; 240 steps climb thereafter"
    },

    externalLinks: {
      officialBooking: "https://jk-tourism.gov.in/",
      googleMaps: "https://goo.gl/maps/shankaracharya"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires climbing 243 steep stone steps. No elevator or ramp available."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Drive up the hill" },
      { time: "08:30 AM", activity: "Climb steps & Darshan" },
      { time: "09:30 AM", activity: "Photography of City View" }
    ],

    foodGuide: [
      { name: "No Food Stalls on Top", type: "Note", specialty: "Carry Water", rating: 0.0 },
      { name: "Krishna Dhaba", type: "City", specialty: "Rajma Chawal", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "GB Pant Hospital Srinagar"
    }
  },

  // --- NATURE & ICONIC ---
  {
    id: 3403,
    name: "Dal Lake",
    slug: "dal-lake-srinagar",
    state: "Jammu and Kashmir",
    category: "Nature",
    badge: "Jewel in the Crown of Kashmir",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dal_Lake_Srinagar_Kashmir.jpg/800px-Dal_Lake_Srinagar_Kashmir.jpg",
    description: "Srinagar's main attraction, famous for its houseboats, Shikara rides, and floating markets. The lake is surrounded by Mughal gardens and the Zabarwan mountain range.",
    coordinates: { lat: 34.1167, lng: 74.8698 },

    essentials: {
      bestTime: "April to October (Winter for snow view)",
      weather: "Pleasant",
      timings: "24 Hours (Shikara: 6 AM - 8 PM)",
      entryFee: {
        Shikara: "₹700-1200 (Per hour/Govt rates)",
        Houseboat: "₹3000-15000 (Night)"
      }
    },

    transport: {
      nearestAirport: "Srinagar (15 km)",
      nearestRailway: "Srinagar (12 km)",
      busConnectivity: "Located on Boulevard Road, accessible by auto/taxi"
    },

    externalLinks: {
      officialBooking: "https://jk-tourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dallake"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boulevard road is accessible. Getting into Shikaras requires balance."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Floating Vegetable Market" },
      { time: "05:00 PM", activity: "Sunset Shikara Ride" },
      { time: "07:00 PM", activity: "Char Chinar Visit" }
    ],

    foodGuide: [
      { name: "Floating Cafe", type: "Lake", specialty: "Kahwa & BBQ", rating: 4.4 },
      { name: "Shamyana", type: "Boulevard", specialty: "Wazwan", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SMHS Hospital"
    }
  },
  {
    id: 3404,
    name: "Gulmarg Gondola",
    slug: "gulmarg-gondola",
    state: "Jammu and Kashmir",
    category: "Adventure",
    badge: "World's Second Highest Cable Car",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gulmarg_Gondola.jpg/800px-Gulmarg_Gondola.jpg",
    description: "A premier ski resort destination. The Gondola ride operates in two phases: Phase 1 to Kungdoor and Phase 2 to Apharwat Peak (13,780 ft), offering spectacular snow views.",
    coordinates: { lat: 34.0484, lng: 74.3805 },

    essentials: {
      bestTime: "Dec-Mar (Skiing), May-Sep (Greenery)",
      weather: "Snow/Cold",
      timings: "09:00 AM - 04:00 PM",
      entryFee: {
        Phase1: "₹740",
        Phase2: "₹950",
        Booking: "Online Mandatory (Weeks in advance)"
      }
    },

    transport: {
      nearestAirport: "Srinagar (50 km)",
      nearestRailway: "Srinagar (55 km)",
      busConnectivity: "Shared taxi from Tangmarg to Gulmarg (Chains used in winter)"
    },

    externalLinks: {
      officialBooking: "https://www.jammukashmircablecar.com/",
      googleMaps: "https://goo.gl/maps/gulmarg"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Base station has ramps, but snow and crowds make wheelchair movement difficult."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Board Phase 1 Gondola" },
      { time: "10:30 AM", activity: "Phase 2 (Apharwat Peak) Snow Activities" },
      { time: "02:00 PM", activity: "Skiing / ATV Ride" }
    ],

    foodGuide: [
      { name: "Igloo Cafe", type: "Seasonal", specialty: "Hot Chocolate", rating: 4.7 },
      { name: "Bakshi Restaurant", type: "Local", specialty: "Rogan Josh", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "Primary Health Center Gulmarg"
    }
  },
  {
    id: 3405,
    name: "Pahalgam (Betaab Valley)",
    slug: "pahalgam-betaab-valley",
    state: "Jammu and Kashmir",
    category: "Nature",
    badge: "Shepherd's Valley",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Betaab_Valley_Pahalgam.jpg/800px-Betaab_Valley_Pahalgam.jpg",
    description: "Located on the banks of the Lidder River, Pahalgam is famous for Betaab Valley (named after a Bollywood movie), Aru Valley, and as the base for the Amarnath Yatra.",
    coordinates: { lat: 34.0161, lng: 75.3262 },

    essentials: {
      bestTime: "April to November",
      weather: "Cool",
      timings: "08:00 AM - 06:00 PM (Valley Entry)",
      entryFee: {
        Entry: "₹100 (Betaab Valley)",
        PonyRide: "₹1000-2000 (To Baisaran/Mini Swiss)"
      }
    },

    transport: {
      nearestAirport: "Srinagar (90 km)",
      nearestRailway: "Anantnag (45 km)",
      busConnectivity: "Local union taxis required for Aru/Betaab/Chandanwari sightseeing"
    },

    externalLinks: {
      officialBooking: "https://jk-tourism.gov.in/",
      googleMaps: "https://goo.gl/maps/pahalgam"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Betaab Valley has paved pathways suitable for wheelchairs. Baisaran requires pony ride."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Visit Betaab Valley" },
      { time: "11:30 AM", activity: "Aru Valley Drive" },
      { time: "03:00 PM", activity: "River Rafting at Lidder" }
    ],

    foodGuide: [
      { name: "Dana Pani", type: "Vegetarian", specialty: "North Indian", rating: 4.3 },
      { name: "Trout Beat", type: "Local", specialty: "Fresh Trout Fish", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "Government Civil Hospital Pahalgam"
    }
  },
  {
    id: 3406,
    name: "Sonamarg (Thajiwas Glacier)",
    slug: "sonamarg",
    state: "Jammu and Kashmir",
    category: "Nature",
    badge: "Meadow of Gold",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sonamarg_Valley.jpg/800px-Sonamarg_Valley.jpg",
    description: "Famous for its golden meadows and access to the Thajiwas Glacier, which remains snow-covered all year. It is also the gateway to Ladakh via the Zojila Pass.",
    coordinates: { lat: 34.3057, lng: 75.2930 },

    essentials: {
      bestTime: "April to October (Road closed in deep winter)",
      weather: "Cold",
      timings: "Daylight Hours",
      entryFee: {
        Entry: "Free",
        PonyToGlacier: "₹1200-1500"
      }
    },

    transport: {
      nearestAirport: "Srinagar (80 km)",
      nearestRailway: "Srinagar (80 km)",
      busConnectivity: "Taxi from Srinagar (2.5 hours)"
    },

    externalLinks: {
      officialBooking: "https://jk-tourism.gov.in/",
      googleMaps: "https://goo.gl/maps/sonamarg"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Terrain is grassy and muddy. Reaching the glacier requires a pony ride or trek."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Pony Ride to Thajiwas Glacier" },
      { time: "01:00 PM", activity: "Sledging on Snow" },
      { time: "03:00 PM", activity: "Visit Zero Point (Zojila)" }
    ],

    foodGuide: [
      { name: "Tourist Cafeteria", type: "Govt", specialty: "Tea & Snacks", rating: 3.8 },
      { name: "Hotel Snowland", type: "Hotel", specialty: "Kashmiri Pulao", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "PHC Sonamarg"
    }
  },

  // --- GARDENS & HERITAGE ---
  {
    id: 3407,
    name: "Mughal Gardens (Nishat & Shalimar)",
    slug: "mughal-gardens-srinagar",
    state: "Jammu and Kashmir",
    category: "Heritage",
    badge: "Persian Style Gardens",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nishat_Bagh_Srinagar.jpg/800px-Nishat_Bagh_Srinagar.jpg",
    description: "Built by the Mughals, these terraced gardens (Nishat Bagh and Shalimar Bagh) feature fountains, Chinar trees, and vibrant flowerbeds overlooking Dal Lake.",
    coordinates: { lat: 34.1256, lng: 74.8812 },

    essentials: {
      bestTime: "April (Tulips) to October (Chinar Autumn)",
      weather: "Pleasant",
      timings: "09:00 AM - 07:00 PM",
      entryFee: {
        Adult: "₹24",
        Child: "₹12"
      }
    },

    transport: {
      nearestAirport: "Srinagar (20 km)",
      nearestRailway: "Srinagar (18 km)",
      busConnectivity: "Located on the banks of Dal Lake, accessible by taxi"
    },

    externalLinks: {
      officialBooking: "https://jk-tourism.gov.in/",
      googleMaps: "https://goo.gl/maps/nishat"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main pathways are paved. Ramps connect some terraces, but others have steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Nishat Bagh (Garden of Bliss)" },
      { time: "11:00 AM", activity: "Shalimar Bagh (Abode of Love)" },
      { time: "01:00 PM", activity: "Chashme Shahi (Royal Spring)" }
    ],

    foodGuide: [
      { name: "Mughal Darbar", type: "City", specialty: "Wazwan", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SKIMS Medical College"
    }
  },
  {
    id: 3408,
    name: "Patnitop",
    slug: "patnitop",
    state: "Jammu and Kashmir",
    category: "Hill Stations",
    badge: "Meadows & Pines",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Patnitop_Meadows.jpg/800px-Patnitop_Meadows.jpg",
    description: "A hilltop tourist location in Udhampur district, situated on a plateau. It offers beautiful meadows, pine forests, and the Skyview Gondola (India's highest ropeway).",
    coordinates: { lat: 33.0933, lng: 75.3262 },

    essentials: {
      bestTime: "All Year (Snow in Jan-Feb)",
      weather: "Cool",
      timings: "24 Hours (Skyview: 10 AM - 5 PM)",
      entryFee: {
        Park: "Free",
        SkyviewGondola: "₹999+"
      }
    },

    transport: {
      nearestAirport: "Jammu (110 km)",
      nearestRailway: "Udhampur (45 km)",
      busConnectivity: "Located on Jammu-Srinagar Highway"
    },

    externalLinks: {
      officialBooking: "https://skyviewbyempyrean.com/",
      googleMaps: "https://goo.gl/maps/patnitop"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Skyview gondola is fully accessible. The meadows are grassy but flat."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Skyview Gondola Ride (Sanget to Patnitop)" },
      { time: "12:00 PM", activity: "Picnic at Sanasar Lake" },
      { time: "03:00 PM", activity: "Nathatop View" }
    ],

    foodGuide: [
      { name: "Prem Sweets (Kud)", type: "Highway", specialty: "Patisa (Sweet)", rating: 4.8 },
      { name: "Skyview Cafe", type: "Resort", specialty: "Continental", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "CHC Chenani"
    }
  },
  {
    id: 3409,
    name: "Raghunath Temple",
    slug: "raghunath-temple-jammu",
    state: "Jammu and Kashmir",
    category: "Spiritual",
    badge: "Largest Temple Complex in North India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Raghunath_Temple_Jammu.jpg/800px-Raghunath_Temple_Jammu.jpg",
    description: "Located in the heart of Jammu city, this temple consists of seven shrines. It was built by Maharaja Gulab Singh and his son Maharaja Ranbir Singh in the 19th century.",
    coordinates: { lat: 32.7297, lng: 74.8643 },

    essentials: {
      bestTime: "All Year",
      weather: "Hot Summer/Cool Winter",
      timings: "06:00 AM - 08:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Jammu (6 km)",
      nearestRailway: "Jammu Tawi (5 km)",
      busConnectivity: "Located in Raghunath Bazar, city center"
    },

    externalLinks: {
      officialBooking: "https://jktourism.jk.gov.in/",
      googleMaps: "https://goo.gl/maps/raghunath"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main complex is paved. However, crowd management queues can be narrow."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Temple Darshan" },
      { time: "10:30 AM", activity: "Shopping in Raghunath Bazar" },
      { time: "12:00 PM", activity: "Bahu Fort (Nearby)" }
    ],

    foodGuide: [
      { name: "Pahalwan Di Hatti", type: "Sweet Shop", specialty: "Kalari Kulcha", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "GMC Jammu"
    }
  },
  {
    id: 3410,
    name: "Doodhpathri",
    slug: "doodhpathri",
    state: "Jammu and Kashmir",
    category: "Nature",
    badge: "Valley of Milk",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Doodhpathri_Meadows.jpg/800px-Doodhpathri_Meadows.jpg",
    description: "An emerging offbeat destination near Srinagar. The water of the Shaliganga river here appears milky white when it crashes against rocks, giving the place its name.",
    coordinates: { lat: 33.8767, lng: 74.5772 },

    essentials: {
      bestTime: "May to September",
      weather: "Cold",
      timings: "Day Trip Recommended",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Srinagar (42 km)",
      nearestRailway: "Budgam (30 km)",
      busConnectivity: "Taxi from Srinagar (1.5 - 2 hours)"
    },

    externalLinks: {
      officialBooking: "https://jk-tourism.gov.in/",
      googleMaps: "https://goo.gl/maps/doodhpathri"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Grassy meadows and river banks are uneven. Limited infrastructure."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Walk on the Meadows" },
      { time: "12:00 PM", activity: "Picnic by Shaliganga River" },
      { time: "02:00 PM", activity: "Pony Ride" }
    ],

    foodGuide: [
      { name: "Local Kiosks", type: "Basic", specialty: "Makki Roti & Tea", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "District Hospital Budgam"
    }
  }
]; 
