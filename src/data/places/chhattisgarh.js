/**
 * CHHATTISGARH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Chhattisgarh Tourism Board (CTB) & Forest Dept
 * - Cave Access: Verified seasonal opening times for Kutumsar
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const CHHATTISGARH_PLACES = [
  // --- NATURE & WATERFALLS ---
  {
    id: 601,
    name: "Chitrakote Waterfalls",
    slug: "chitrakote-waterfalls",
    state: "Chhattisgarh",
    category: "Nature",
    badge: "The Niagara of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chitrakote_Falls_2.jpg/800px-Chitrakote_Falls_2.jpg",
    description: "The widest waterfall in India, spanning 300 meters during the monsoon. Located on the Indravati River, its horseshoe shape and roaring waters create a misty spectacle, especially at sunset.",
    coordinates: { lat: 19.2059, lng: 81.7063 },

    essentials: {
      bestTime: "July to October (Monsoon View)",
      weather: "Humid/Misty",
      timings: "Sunrise to Sunset (Boating: 8 AM - 5 PM)",
      entryFee: {
        Entry: "Free",
        Boating: "₹50-100 (Seasonal)",
        Parking: "₹20"
      }
    },

    transport: {
      nearestAirport: "Jagdalpur (40 km) or Raipur (285 km)",
      nearestRailway: "Jagdalpur (38 km)",
      busConnectivity: "Buses/Taxis available from Jagdalpur city"
    },

    externalLinks: {
      officialBooking: "https://www.chhattisgarhtourism.in/",
      googleMaps: "https://goo.gl/maps/chitrakote"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Viewpoints on the upper bank are paved and accessible. Steps down to the river are steep."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Upper Viewpoint Photography" },
      { time: "10:00 AM", activity: "Steps down to river bank" },
      { time: "04:00 PM", activity: "Boat Ride to the base of falls" }
    ],

    foodGuide: [
      { name: "Dandami Luxury Resort", type: "Resort", specialty: "Bastar Tribal Thali", rating: 4.4 },
      { name: "Local Stalls", type: "Street", specialty: "Madiya Page (Rice Drink)", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "Medical College Jagdalpur"
    }
  },
  {
    id: 602,
    name: "Tirathgarh Waterfalls",
    slug: "tirathgarh-waterfalls",
    state: "Chhattisgarh",
    category: "Nature",
    badge: "White Milk Fall",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Tirathgarh_Waterfall.jpg/800px-Tirathgarh_Waterfall.jpg",
    description: "Located inside Kanger Valley National Park, this stunning waterfall splits into multiple streams as it cascades down 300 feet over tiered limestone steps.",
    coordinates: { lat: 18.9137, lng: 81.8653 },

    essentials: {
      bestTime: "October to March",
      weather: "Forest/Cool",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹25 (Park Entry)",
        Vehicle: "₹50",
        Camera: "₹50"
      }
    },

    transport: {
      nearestAirport: "Jagdalpur (35 km)",
      nearestRailway: "Jagdalpur (35 km)",
      busConnectivity: "Private taxis recommended from Jagdalpur"
    },

    externalLinks: {
      officialBooking: "https://www.chhattisgarhtourism.in/",
      googleMaps: "https://goo.gl/maps/tirathgarh"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires descending a long flight of stairs to reach the main viewing platform."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Descent to Lower Falls" },
      { time: "11:00 AM", activity: "Shiva Temple Visit" },
      { time: "12:30 PM", activity: "Picnic near stream" }
    ],

    foodGuide: [
      { name: "Park Canteen", type: "Basic", specialty: "Maggi & Tea", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "District Hospital Jagdalpur"
    }
  },

  // --- HERITAGE ---
  {
    id: 603,
    name: "Bhoramdeo Temple",
    slug: "bhoramdeo-temple",
    state: "Chhattisgarh",
    category: "Heritage",
    badge: "Khajuraho of Chhattisgarh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bhoramdeo_Temple_Kabirdham.jpg/800px-Bhoramdeo_Temple_Kabirdham.jpg",
    description: "An 11th-century temple complex dedicated to Lord Shiva, famous for its exquisite erotic carvings and Nagara style architecture, resembling the temples of Khajuraho.",
    coordinates: { lat: 22.1123, lng: 81.1554 },

    essentials: {
      bestTime: "Winter (Bhoramdeo Mahotsav in March)",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Raipur (135 km)",
      nearestRailway: "Raipur (130 km)",
      busConnectivity: "Buses available to Kawardha (18 km away)"
    },

    externalLinks: {
      officialBooking: "https://kawardha.gov.in/",
      googleMaps: "https://goo.gl/maps/bhoramdeo"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Temple courtyard is accessible. Steps to the sanctum may require assistance."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Architecture Tour" },
      { time: "10:00 AM", activity: "Madwa Mahal (Nearby Wedding Hall)" },
      { time: "11:30 AM", activity: "Cherki Mahal Visit" }
    ],

    foodGuide: [
      { name: "Kawardha Palace", type: "Heritage Hotel", specialty: "Royal Lunch", rating: 4.5 },
      { name: "Tourist Motel", type: "Budget", specialty: "Veg Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "District Hospital Kawardha"
    }
  },
  {
    id: 604,
    name: "Sirpur Heritage Site",
    slug: "sirpur-heritage-site",
    state: "Chhattisgarh",
    category: "Heritage",
    badge: "Ancient Buddhist Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Lakshman_Temple_Sirpur.jpg/800px-Lakshman_Temple_Sirpur.jpg",
    description: "Located on the banks of Mahanadi, Sirpur is an archaeological wonder from the 5th-8th century AD. It features the Lakshman Temple (brick temple), Buddhist Viharas, and Jain monuments.",
    coordinates: { lat: 21.3435, lng: 82.1793 },

    essentials: {
      bestTime: "January to March (Sirpur Festival)",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Raipur (80 km)",
      nearestRailway: "Mahasamund (40 km)",
      busConnectivity: "Direct buses from Raipur and Mahasamund"
    },

    externalLinks: {
      officialBooking: "https://www.chhattisgarhtourism.in/",
      googleMaps: "https://goo.gl/maps/sirpur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main Lakshman Temple grounds are flat and paved. Excavated sites have uneven terrain."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Lakshman Temple (Red Brick)" },
      { time: "10:30 AM", activity: "Teevardev Vihara (Buddhist)" },
      { time: "12:00 PM", activity: "Surang Tila (Ancient Ghats)" }
    ],

    foodGuide: [
      { name: "Hi-Way Retreat", type: "Motel", specialty: "Chana Samosa", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "District Hospital Mahasamund"
    }
  },

  // --- WILDLIFE & CAVES ---
  {
    id: 605,
    name: "Kanger Valley National Park",
    slug: "kanger-valley-national-park",
    state: "Chhattisgarh",
    category: "Wildlife",
    badge: "Home of Hill Myna",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kutumsar_Caves_Bastar.jpg/800px-Kutumsar_Caves_Bastar.jpg",
    description: "A biodiversity hotspot known for its dense Sal forests, limestone caves (Kutumsar & Kailash), and the Bastar Hill Myna. The Kutumsar Cave features natural stalactite formations.",
    coordinates: { lat: 18.8778, lng: 81.9965 },

    essentials: {
      bestTime: "November to June",
      weather: "Forest",
      timings: "08:00 AM - 04:00 PM (Caves closed in Monsoon: June 15-Oct 31)",
      entryFee: {
        Entry: "₹50 (Indian)",
        Vehicle: "₹100",
        Guide: "₹200 (Mandatory for caves)"
      }
    },

    transport: {
      nearestAirport: "Jagdalpur (27 km)",
      nearestRailway: "Jagdalpur (27 km)",
      busConnectivity: "Taxis required for park entry (Gypsy not mandatory, private cars allowed)"
    },

    externalLinks: {
      officialBooking: "https://kvnp.in/",
      googleMaps: "https://goo.gl/maps/kanger"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Caves involve narrow vertical descents and slippery floors. Not accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Kutumsar Cave Exploration" },
      { time: "11:00 AM", activity: "Kailash Cave" },
      { time: "02:00 PM", activity: "Bird Watching (Hill Myna)" }
    ],

    foodGuide: [
      { name: "Forest Canteen", type: "Basic", specialty: "Tea & Biscuits", rating: 3.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "Medical College Jagdalpur"
    }
  },
  {
    id: 606,
    name: "Barnawapara Wildlife Sanctuary",
    slug: "barnawapara-wildlife-sanctuary",
    state: "Chhattisgarh",
    category: "Wildlife",
    badge: "Bison & Leopard Spotting",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Indian_Gaur_Close_Up.jpg/800px-Indian_Gaur_Close_Up.jpg",
    description: "A relatively flat terrain sanctuary famous for frequent sightings of Indian Gaur (Bison), Leopards, and Sloth Bears. It is one of the most popular wildlife destinations in the state.",
    coordinates: { lat: 21.3995, lng: 82.4168 },

    essentials: {
      bestTime: "November to June",
      weather: "Dry/Hot",
      timings: "06:00 AM - 10:00 AM, 03:00 PM - 06:00 PM",
      entryFee: {
        Entry: "₹50",
        Gypsy: "₹2000-2500 (Full Vehicle)",
        Guide: "₹300"
      }
    },

    transport: {
      nearestAirport: "Raipur (100 km)",
      nearestRailway: "Mahasamund (60 km)",
      busConnectivity: "Connected via Pithora on NH-53"
    },

    externalLinks: {
      officialBooking: "https://www.chhattisgarhtourism.in/",
      googleMaps: "https://goo.gl/maps/barnawapara"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Safari vehicles (Gypsy) require climbing. Resorts are accessible."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Morning Jungle Safari" },
      { time: "10:00 AM", activity: "Breakfast at Resort" },
      { time: "04:00 PM", activity: "Nature Walk near Reservoir" }
    ],

    foodGuide: [
      { name: "Hareli Eco Resort", type: "Resort", specialty: "Buffet Meals", rating: 4.3 },
      { name: "Moha Resort", type: "Luxury", specialty: "Tribal Cuisine", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "CHC Kasdol"
    }
  },

  // --- HILL STATION ---
  {
    id: 607,
    name: "Mainpat",
    slug: "mainpat",
    state: "Chhattisgarh",
    category: "Hill Stations",
    badge: "Shimla of Chhattisgarh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tiger_Point_Mainpat.jpg/800px-Tiger_Point_Mainpat.jpg",
    description: "A plateau in the Surguja district, known for its cool climate, Tibetan settlements, and the unique 'Ulta Pani' (gravity-defying stream) and bouncing earth (Jaljali).",
    coordinates: { lat: 22.8256, lng: 83.2925 },

    essentials: {
      bestTime: "September to March",
      weather: "Cool/Misty",
      timings: "24 Hours (Daylight for viewpoints)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Darima Airport, Ambikapur (50 km)",
      nearestRailway: "Ambikapur (55 km)",
      busConnectivity: "Buses available from Ambikapur to Mainpat"
    },

    externalLinks: {
      officialBooking: "https://surguja.gov.in/",
      googleMaps: "https://goo.gl/maps/mainpat"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Tibetan temple is accessible. Jaljali (bouncing earth) ground is uneven soft soil."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Dhakhpo Shedupling Monastery" },
      { time: "11:00 AM", activity: "Tiger Point Waterfall" },
      { time: "03:00 PM", activity: "Jaljali (Bouncing Earth Experience)" }
    ],

    foodGuide: [
      { name: "Shyla Resort", type: "Resort", specialty: "Indian/Chinese", rating: 4.1 },
      { name: "Tibetan Camp Stalls", type: "Street", specialty: "Momos & Thukpa", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "Medical College Ambikapur"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 608,
    name: "Dongargarh (Maa Bamleshwari)",
    slug: "dongargarh-bamleshwari",
    state: "Chhattisgarh",
    category: "Spiritual",
    badge: "Hilltop Shakti Peeth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bambleshwari_Temple_Dongargarh.jpg/800px-Bambleshwari_Temple_Dongargarh.jpg",
    description: "A major pilgrimage center featuring a hilltop temple dedicated to Maa Bamleshwari, accessible via 1000 steps or a ropeway. The view from the top overlooking the town and lake is mesmerizing.",
    coordinates: { lat: 21.1887, lng: 80.7601 },

    essentials: {
      bestTime: "Navratri (Oct/April) or Winter",
      weather: "Windy on top",
      timings: "04:00 AM - 10:00 PM (Ropeway: 7 AM - 7 PM)",
      entryFee: {
        Entry: "Free",
        Ropeway: "₹100 (Return)",
        VIPDarshan: "₹200"
      }
    },

    transport: {
      nearestAirport: "Raipur (100 km)",
      nearestRailway: "Dongargarh Station (2 km)",
      busConnectivity: "Frequent trains and buses on the Mumbai-Howrah route"
    },

    externalLinks: {
      officialBooking: "https://dongargarh.gov.in/",
      googleMaps: "https://goo.gl/maps/dongargarh"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ropeway cabins can accommodate folded wheelchairs. Ramp available at the base station."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Ropeway Ride to Top Temple" },
      { time: "09:00 AM", activity: "Darshan of Badi Bamleshwari" },
      { time: "11:00 AM", activity: "Chhoti Bamleshwari (Ground Level)" }
    ],

    foodGuide: [
      { name: "Hotel Punam", type: "City", specialty: "Pure Veg Thali", rating: 4.0 },
      { name: "Prasadalaya", type: "Pilgrim", specialty: "Temple Bhog", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "CHC Dongargarh"
    }
  },

  // --- NATURE & LEISURE ---
  {
    id: 609,
    name: "Gangrel Dam",
    slug: "gangrel-dam",
    state: "Chhattisgarh",
    category: "Nature",
    badge: "Mini Goa of Chhattisgarh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Gangrel_Dam.jpg/800px-Gangrel_Dam.jpg",
    description: "Built across the Mahanadi River, Gangrel (Ravishankar Sagar) is a massive reservoir known for its water sports complex, islands, and eco-tourism cottages.",
    coordinates: { lat: 20.6139, lng: 81.5459 },

    essentials: {
      bestTime: "August to February",
      weather: "Coastal/Breezy",
      timings: "08:00 AM - 06:30 PM",
      entryFee: {
        Entry: "Free",
        SpeedBoat: "₹300",
        JetSki: "₹500"
      }
    },

    transport: {
      nearestAirport: "Raipur (80 km)",
      nearestRailway: "Dhamtari (15 km)",
      busConnectivity: "Auto/Taxi from Dhamtari town"
    },

    externalLinks: {
      officialBooking: "https://www.chhattisgarhtourism.in/",
      googleMaps: "https://goo.gl/maps/gangrel"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Resort areas and viewing decks are paved and accessible."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Water Sports (Jet Ski)" },
      { time: "05:00 PM", activity: "Sunset Boat Ride" },
      { time: "07:00 PM", activity: "Dinner at Barda Eco Resort" }
    ],

    foodGuide: [
      { name: "Barda Eco Resort", type: "Resort", specialty: "Fish Curry", rating: 4.2 },
      { name: "Angan Restaurant", type: "Family", specialty: "Indian", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "Christian Hospital Dhamtari"
    }
  },
  {
    id: 610,
    name: "Achanakmar Tiger Reserve",
    slug: "achanakmar-tiger-reserve",
    state: "Chhattisgarh",
    category: "Wildlife",
    badge: "Biosphere Reserve",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Panthera_tigris_tigris.jpg/800px-Panthera_tigris_tigris.jpg",
    description: "Part of the huge Achanakmar-Amarkantak Biosphere Reserve, this dense forest connects to Kanha National Park. It is home to Tigers, Bison, and Giant Squirrels.",
    coordinates: { lat: 22.5186, lng: 81.7607 },

    essentials: {
      bestTime: "November to June",
      weather: "Forest/Cool",
      timings: "06:00 AM - 05:00 PM (Closed in Monsoon)",
      entryFee: {
        Entry: "₹50",
        Gypsy: "₹2500 approx",
        Guide: "₹300"
      }
    },

    transport: {
      nearestAirport: "Bilaspur (55 km)",
      nearestRailway: "Belgahana (35 km) or Bilaspur",
      busConnectivity: "Connected via Bilaspur-Amarkantak road"
    },

    externalLinks: {
      officialBooking: "https://forest.cg.gov.in/",
      googleMaps: "https://goo.gl/maps/achanakmar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jungle safaris involve uneven terrain and high vehicles."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Jungle Safari" },
      { time: "11:00 AM", activity: "Visit Forest Rest House" },
      { time: "02:00 PM", activity: "Drive to Amarkantak (Nearby)" }
    ],

    foodGuide: [
      { name: "Shiv Tarang Resort", type: "Resort", specialty: "Veg Thali", rating: 4.0 },
      { name: "Forest Canteen", type: "Basic", specialty: "Tea & Poha", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-3434",
      nearestHospital: "Apollo Hospital Bilaspur (55 km)"
    }
  }
]; 
