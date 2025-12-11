/**
 * ANDAMAN_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Andaman Tourism & Directorate of Information/Publicity
 * - Ferries: DSS (Govt) & Private Ferry Schedules (Makruzz/Nautika)
 * - Cellular Jail: Official E-Ticket Portal
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const ANDAMAN_AND_NICOBAR_ISLANDS_PLACES = [
  // --- HERITAGE ---
  {
    id: 3001,
    name: "Cellular Jail National Memorial",
    slug: "cellular-jail-port-blair",
    state: "Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Kaala Paani",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Cellular_Jail_Wings.jpg/800px-Cellular_Jail_Wings.jpg",
    description: "A colonial prison used by the British to exile political prisoners. The jail is a poignant reminder of India's freedom struggle. The evening Light & Sound show narrates the harrowing history.",
    coordinates: { lat: 11.6738, lng: 92.7483 },

    essentials: {
      bestTime: "October to April",
      weather: "Tropical/Humid",
      timings: "09:00 AM - 12:30 PM, 01:30 PM - 04:00 PM (Closed Mondays)",
      entryFee: {
        Entry: "₹30",
        LightShow: "₹300 (Hindi/English)",
        Camera: "₹200"
      }
    },

    transport: {
      nearestAirport: "Veer Savarkar Intl Airport, Port Blair (4 km)",
      nearestRailway: "Chennai/Kolkata (Sea/Air connectivity only)",
      busConnectivity: "Located in Atlanta Point, accessible by auto/taxi"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/cellularjail"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ground floor wings and central tower courtyard are accessible. Upper cells have stairs."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Museum & Photo Gallery" },
      { time: "03:00 PM", activity: "Veer Savarkar Cell" },
      { time: "06:00 PM", activity: "Light & Sound Show" }
    ],

    foodGuide: [
      { name: "New Lighthouse Restaurant", type: "Seafood", specialty: "Lobster & Crab", rating: 4.4 },
      { name: "Annapurna", type: "Vegetarian", specialty: "South Indian Thali", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3002,
    name: "Ross Island (Netaji Subhash Chandra Bose Dweep)",
    slug: "ross-island",
    state: "Andaman and Nicobar Islands",
    category: "Heritage",
    badge: "Paris of the East (Ruins)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ross_Island_Church_Ruins.jpg/800px-Ross_Island_Church_Ruins.jpg",
    description: "The former administrative headquarters of the British in the Andamans. Now in ruins, the island features remnants of a church, bakery, and commissioner's house, overtaken by massive Ficus tree roots.",
    coordinates: { lat: 11.6766, lng: 92.7635 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "08:30 AM - 04:00 PM (Closed Wednesdays)",
      entryFee: {
        Entry: "₹30",
        Boat: "₹300-500 (Round Trip from Aberdeen Jetty)"
      }
    },

    transport: {
      nearestAirport: "Port Blair (3 km to Jetty)",
      nearestRailway: "N/A",
      busConnectivity: "Reach Aberdeen Jetty (Rajiv Gandhi Water Sports Complex) by auto"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/rossisland"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Golf carts are available on the island for a fee to tour the ruins. Paths are paved."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry from Aberdeen Jetty" },
      { time: "09:30 AM", activity: "Explore British Ruins & Deer Park" },
      { time: "11:30 AM", activity: "Return Ferry" }
    ],

    foodGuide: [
      { name: "Island Canteen", type: "Basic", specialty: "Coconut Water & Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital Port Blair"
    }
  },

  // --- BEACHES & ISLANDS ---
  {
    id: 3003,
    name: "Radhanagar Beach (Havelock)",
    slug: "radhanagar-beach",
    state: "Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Asia's Best Beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Radhanagar_Beach_Andaman.jpg/800px-Radhanagar_Beach_Andaman.jpg",
    description: "Located on Swaraj Dweep (Havelock), this beach is consistently ranked among the best in the world. It features fine white sand, turquoise blue waters, and lush forest backdrops.",
    coordinates: { lat: 11.9845, lng: 92.9514 },

    essentials: {
      bestTime: "October to May",
      weather: "Tropical/Sunny",
      timings: "06:00 AM - 05:00 PM (Swimming allowed till sunset)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair (Ferry to Havelock: 1.5 - 2.5 hrs)",
      nearestRailway: "N/A",
      busConnectivity: "Auto/Taxi/Scooter rental from Havelock Jetty (12 km)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/radhanagar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Blue Flag certified beach with accessible toilets and paved pathways to the sand."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Swimming" },
      { time: "04:30 PM", activity: "Sunset Photography" },
      { time: "06:00 PM", activity: "Return to Resort" }
    ],

    foodGuide: [
      { name: "Something Different", type: "Cafe", specialty: "Pizza & Seafood", rating: 4.6 },
      { name: "Full Moon Cafe", type: "Resort", specialty: "Pancakes", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282411",
      nearestHospital: "PHC Havelock (Govt Hospital)"
    }
  },
  {
    id: 3004,
    name: "Elephant Beach",
    slug: "elephant-beach",
    state: "Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Water Sports Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Elephant_Beach_Havelock.jpg/800px-Elephant_Beach_Havelock.jpg",
    description: "The water sports capital of Havelock Island. Famous for its vibrant coral reefs starting just a meter deep, making it perfect for snorkeling, sea walking, and glass-bottom boat rides.",
    coordinates: { lat: 12.0093, lng: 92.9463 },

    essentials: {
      bestTime: "October to April (Closed if sea is rough)",
      weather: "Sunny",
      timings: "08:00 AM - 03:00 PM (Last boat return)",
      entryFee: {
        Boat: "₹1000 (Round Trip)",
        Snorkeling: "₹500-1000",
        SeaWalk: "₹3500+"
      }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Speed boat from Havelock Jetty (20 mins) or 2km Trek through forest"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/elephantbeach"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding speed boats requires balance. The beach sand is soft. Not accessible."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Boat from Jetty" },
      { time: "09:00 AM", activity: "Sea Walk / Snorkeling" },
      { time: "12:00 PM", activity: "Return to Jetty" }
    ],

    foodGuide: [
      { name: "Beach Stalls", type: "Shacks", specialty: "Coconut Water & Maggi", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282411",
      nearestHospital: "PHC Havelock"
    }
  },
  {
    id: 3005,
    name: "Laxmanpur Beach (Neil Island)",
    slug: "laxmanpur-beach",
    state: "Andaman and Nicobar Islands",
    category: "Beaches",
    badge: "Natural Rock Bridge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Natural_Bridge_Neil_Island.jpg/800px-Natural_Bridge_Neil_Island.jpg",
    description: "Located on Shaheed Dweep (Neil Island), this beach is famous for the 'Howrah Bridge', a natural coral rock formation shaped like a bridge. It is also a prime sunset spot.",
    coordinates: { lat: 11.8496, lng: 93.0298 },

    essentials: {
      bestTime: "October to May (Low tide is must for bridge)",
      weather: "Breezy",
      timings: "Sunrise to Sunset (Bridge accessible during low tide)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Port Blair (Ferry to Neil: 1-1.5 hrs)",
      nearestRailway: "N/A",
      busConnectivity: "Auto/Scooter rental from Neil Jetty (2 km)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/laxmanpur"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Walking to the Natural Bridge involves walking over dead corals and slippery rocks."
    },

    routePlan: [
      { time: "03:30 PM", activity: "Walk to Natural Bridge (Check Tide)" },
      { time: "04:30 PM", activity: "Relax at Laxmanpur Beach 1" },
      { time: "05:30 PM", activity: "Sunset" }
    ],

    foodGuide: [
      { name: "Dugong", type: "Resort", specialty: "Seafood Platter", rating: 4.3 },
      { name: "Beach Shacks", type: "Stall", specialty: "Bhajiyas", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-282638",
      nearestHospital: "PHC Neil Island"
    }
  },

  // --- NATURE & ADVENTURE ---
  {
    id: 3006,
    name: "Baratang Island (Limestone Caves)",
    slug: "baratang-caves",
    state: "Andaman and Nicobar Islands",
    category: "Adventure",
    badge: "Mangrove Tunnel Ride",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Limestone_Caves_Baratang.jpg/800px-Limestone_Caves_Baratang.jpg",
    description: "Famous for its natural limestone caves and mud volcanoes. The journey involves driving through the Jarawa Tribal Reserve and a thrilling boat ride through dense mangrove tunnels.",
    coordinates: { lat: 12.1056, lng: 92.7667 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      timings: "03:00 AM Start from Port Blair (Convoy timings strict)",
      entryFee: {
        Boat: "₹800 (Cave)",
        Permit: "Required (Arranged by driver)"
      }
    },

    transport: {
      nearestAirport: "Port Blair (100 km)",
      nearestRailway: "N/A",
      busConnectivity: "Govt Bus/Private Cab convoy through Jarawa Reserve (No stopping allowed)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/baratang"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Involves a 1.5 km trek on a wooden boardwalk and mud path to reach the caves. Not accessible."
    },

    routePlan: [
      { time: "03:30 AM", activity: "Depart Port Blair (Jirkatang Checkpost)" },
      { time: "09:00 AM", activity: "Mangrove Boat Ride" },
      { time: "10:30 AM", activity: "Limestone Cave Trek" }
    ],

    foodGuide: [
      { name: "Nilambur Jetty Dhabas", type: "Roadside", specialty: "Fish Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "CHC Baratang"
    }
  },
  {
    id: 3007,
    name: "Chidiya Tapu",
    slug: "chidiya-tapu",
    state: "Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Sunset Point & Biological Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Chidiya_Tapu_Sunset.jpg/800px-Chidiya_Tapu_Sunset.jpg",
    description: "Known as the 'Bird Island', located 25km from Port Blair. It offers the best sunset views in South Andaman and a Biological Park with indigenous flora and fauna.",
    coordinates: { lat: 11.5034, lng: 92.7032 },

    essentials: {
      bestTime: "Afternoons (3 PM onwards)",
      weather: "Breezy",
      timings: "Sunrise to Sunset (Park closes at 5 PM)",
      entryFee: {
        Park: "₹20",
        Beach: "Free"
      }
    },

    transport: {
      nearestAirport: "Port Blair (25 km)",
      nearestRailway: "N/A",
      busConnectivity: "Taxi or Bike rental from Port Blair"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/chidiyatapu"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The sunset point and beach area are accessible. The trekking trail to Munda Pahad is not."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Biological Park" },
      { time: "04:30 PM", activity: "Munda Pahad Beach" },
      { time: "05:30 PM", activity: "Sunset Viewing" }
    ],

    foodGuide: [
      { name: "Brewberrys", type: "City (Port Blair)", specialty: "Burgers", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3008,
    name: "Mount Harriet (Mount Manipur)",
    slug: "mount-harriet",
    state: "Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Highest Peak in South Andaman",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mount_Harriet_View.jpg/800px-Mount_Harriet_View.jpg",
    description: "Renamed as Mount Manipur, this national park offers a bird's eye view of the archipelago. The view of North Bay from here is depicted on the back of the Indian ₹20 currency note.",
    coordinates: { lat: 11.7289, lng: 92.7366 },

    essentials: {
      bestTime: "Morning or Evening",
      weather: "Cool/Windy",
      timings: "07:00 AM - 05:00 PM",
      entryFee: {
        Adult: "₹25",
        Camera: "₹25",
        Vehicle: "₹10"
      }
    },

    transport: {
      nearestAirport: "Port Blair (45 km by road, 15 km via ferry)",
      nearestRailway: "N/A",
      busConnectivity: "Vehicle Ferry from Chatham to Bamboo Flat, then drive uphill"
    },

    externalLinks: {
      officialBooking: "https://forest.and.nic.in/",
      googleMaps: "https://goo.gl/maps/mountharriet"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Vehicles go up to the park gate. The main viewpoint is paved and accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry to Bamboo Flat" },
      { time: "10:30 AM", activity: "Drive to Peak" },
      { time: "11:30 AM", activity: "Watch Tower View" }
    ],

    foodGuide: [
      { name: "Forest Guest House", type: "Govt", specialty: "Tea & Snacks", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "CHC Bamboo Flat"
    }
  },
  {
    id: 3009,
    name: "North Bay Island",
    slug: "north-bay-island",
    state: "Andaman and Nicobar Islands",
    category: "Adventure",
    badge: "Coral Island",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/North_Bay_Island_Lighthouse.jpg/800px-North_Bay_Island_Lighthouse.jpg",
    description: "Famous for its lighthouse (seen on the old ₹20 note) and extensive coral reefs. It is the hub for water sports like scuba diving, sea walking, and semi-submarine rides near Port Blair.",
    coordinates: { lat: 11.7042, lng: 92.7562 },

    essentials: {
      bestTime: "October to April",
      weather: "Sunny",
      timings: "09:00 AM - 04:00 PM (Ferry timings)",
      entryFee: {
        Ferry: "₹500-700",
        Scuba: "₹3500+",
        SeaWalk: "₹3500+"
      }
    },

    transport: {
      nearestAirport: "Port Blair",
      nearestRailway: "N/A",
      busConnectivity: "Ferry from Aberdeen Jetty (Rajiv Gandhi Water Sports Complex)"
    },

    externalLinks: {
      officialBooking: "https://www.andamantourism.gov.in/",
      googleMaps: "https://goo.gl/maps/northbay"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding ferries is difficult. The island has sandy paths."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Ferry from Port Blair" },
      { time: "10:00 AM", activity: "Semi-Submarine Ride" },
      { time: "11:30 AM", activity: "Scuba Diving" }
    ],

    foodGuide: [
      { name: "Island Shacks", type: "Stall", specialty: "Coconut & Maggi", rating: 3.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "G.B. Pant Hospital"
    }
  },
  {
    id: 3010,
    name: "Mahatma Gandhi Marine National Park (Wandoor)",
    slug: "wandoor-marine-park",
    state: "Andaman and Nicobar Islands",
    category: "Nature",
    badge: "Marine Conservation Area",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wandoor_Beach_Andaman.jpg/800px-Wandoor_Beach_Andaman.jpg",
    description: "Located 30km from Port Blair, this park covers 15 islands including Jolly Buoy and Red Skin. It is a strict plastic-free zone known for pristine corals and glass-bottom boat rides.",
    coordinates: { lat: 11.6042, lng: 92.6075 },

    essentials: {
      bestTime: "Dec to May (Jolly Buoy opens 6 months/year)",
      weather: "Sunny/Clear Water",
      timings: "08:30 AM - 10:00 AM (Ferry departure slots)",
      entryFee: {
        Permit: "₹50",
        Boat: "₹850+",
        PlasticDeposit: "Mandatory"
      }
    },

    transport: {
      nearestAirport: "Port Blair (30 km)",
      nearestRailway: "N/A",
      busConnectivity: "Bus/Taxi to Wandoor Jetty, then forest dept boat"
    },

    externalLinks: {
      officialBooking: "https://forest.and.nic.in/",
      googleMaps: "https://goo.gl/maps/wandoor"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boat boarding is not wheelchair friendly. Islands have sandy beaches."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Reach Wandoor Jetty" },
      { time: "09:00 AM", activity: "Boat to Jolly Buoy/Red Skin" },
      { time: "10:00 AM", activity: "Glass Bottom Boat Ride" }
    ],

    foodGuide: [
      { name: "Pack Lunch Required", type: "Self", specialty: "No food sold on islands", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "03192-232694",
      nearestHospital: "PHC Wandoor"
    }
  }
]; 
 
