/**
 * LAKSHADWEEP_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: SPORTS (Society for Promotion of Nature Tourism and Sports)
 * - Permits: Entry Permit is MANDATORY for all tourists (Apply via ePermit portal)
 * - Transport: Air India (Agatti) & Shipping Corporation of India (Ships)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const LAKSHADWEEP_PLACES = [
  // --- ISLANDS & BEACHES ---
  {
    id: 3601,
    name: "Agatti Island",
    slug: "agatti-island",
    state: "Lakshadweep",
    category: "Beaches",
    badge: "Gateway to Lakshadweep",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Agatti_Island_Beach.jpg/800px-Agatti_Island_Beach.jpg",
    description: "The gateway to the archipelago, housing the only airport. Agatti features a stunning 5.6 km long coral reef, crystal clear turquoise waters, and is the hub for water sports.",
    coordinates: { lat: 10.8531, lng: 72.1939 },

    essentials: {
      bestTime: "October to April",
      weather: "Tropical/Sunny",
      timings: "Sunrise to Sunset (Water Sports: 9 AM - 4 PM)",
      entryFee: {
        Entry: "Permit Cost",
        Scuba: "₹3500-5000",
        GlassBottomBoat: "₹500"
      }
    },

    transport: {
      nearestAirport: "Agatti Airport (0 km)",
      nearestRailway: "N/A (Cochin is base)",
      busConnectivity: "Auto-rickshaws available within the island"
    },

    externalLinks: {
      officialBooking: "https://lakshadweep.gov.in/",
      googleMaps: "https://goo.gl/maps/agatti"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding small boats for island hopping is difficult. Beach sand is soft."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Lagoon Snorkeling" },
      { time: "12:00 PM", activity: "Glass Bottom Boat Ride" },
      { time: "04:00 PM", activity: "Cycling around the Island" }
    ],

    foodGuide: [
      { name: "Agatti Island Beach Resort", type: "Resort", specialty: "Tuna Fish Curry", rating: 4.2 },
      { name: "Local Stalls", type: "Street", specialty: "Coconut Water", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "CHC Agatti"
    }
  },
  {
    id: 3602,
    name: "Bangaram Island",
    slug: "bangaram-island",
    state: "Lakshadweep",
    category: "Beaches",
    badge: "Jewel of Lakshadweep",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bangaram_Island_Beach.jpg/800px-Bangaram_Island_Beach.jpg",
    description: "An uninhabited island open only to tourists, offering absolute seclusion. Famous for its phosphorescent plankton (glowing water at night) and pristine coral sands.",
    coordinates: { lat: 10.9392, lng: 72.2343 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Humid",
      timings: "24 Hours (Resort Guests Only)",
      entryFee: {
        Entry: "Restricted (Package Only)",
        BoatTransfer: "₹2000-4000 (From Agatti)"
      }
    },

    transport: {
      nearestAirport: "Agatti (12 km)",
      nearestRailway: "N/A",
      busConnectivity: "Speed boat from Agatti (45 mins)"
    },

    externalLinks: {
      officialBooking: "http://www.lakshadweeptourism.com/",
      googleMaps: "https://goo.gl/maps/bangaram"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Requires disembarking from boats into shallow water. Sand pathways."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Scuba Diving (Shipwreck)" },
      { time: "01:00 PM", activity: "Picnic on Sandbar" },
      { time: "08:00 PM", activity: "Bioluminescence Walk" }
    ],

    foodGuide: [
      { name: "Bangaram Island Resort", type: "Resort", specialty: "Buffet Only", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "First Aid Centre Bangaram (Agatti for serious cases)"
    }
  },
  {
    id: 3603,
    name: "Kavaratti Island",
    slug: "kavaratti-island",
    state: "Lakshadweep",
    category: "Heritage",
    badge: "Administrative Capital",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kavaratti_Island_Mosque.jpg/800px-Kavaratti_Island_Mosque.jpg",
    description: "The capital of Lakshadweep, known for the pristine white Ujra Mosque (built without cement), the Marine Aquarium, and calm lagoons perfect for kayaking.",
    coordinates: { lat: 10.5667, lng: 72.6417 },

    essentials: {
      bestTime: "October to April",
      weather: "Tropical",
      timings: "09:00 AM - 05:00 PM (Museum/Aquarium)",
      entryFee: {
        Aquarium: "₹20",
        Kayaking: "₹300"
      }
    },

    transport: {
      nearestAirport: "Agatti (Helicopter available)",
      nearestRailway: "N/A",
      busConnectivity: "Ship from Cochin or Speed vessel from Agatti (2.5 hrs)"
    },

    externalLinks: {
      officialBooking: "https://lakshadweep.gov.in/",
      googleMaps: "https://goo.gl/maps/kavaratti"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The Marine Aquarium and Mosque areas are accessible. Jetty has ramps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Marine Aquarium & Museum" },
      { time: "11:00 AM", activity: "Ujra Mosque Visit" },
      { time: "04:00 PM", activity: "Sunset Kayaking" }
    ],

    foodGuide: [
      { name: "Coral Reef Restaurant", type: "Govt", specialty: "Fish Fry", rating: 4.0 },
      { name: "Cafe de Saina", type: "Local", specialty: "Malabar Parotta", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "Indira Gandhi Hospital"
    }
  },
  {
    id: 3604,
    name: "Minicoy Island",
    slug: "minicoy-island",
    state: "Lakshadweep",
    category: "Heritage",
    badge: "Culture of Maldives",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Minicoy_Lighthouse.jpg/800px-Minicoy_Lighthouse.jpg",
    description: "The southernmost island, culturally distinct with Dhivehi (Maldivian) speaking people. Famous for its 300-foot tall Lighthouse (built by British in 1885) and Tuna canning factory.",
    coordinates: { lat: 8.2838, lng: 73.0377 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "Lighthouse: 3 PM - 5 PM",
      entryFee: {
        Lighthouse: "₹20",
        VillageTour: "Part of Package"
      }
    },

    transport: {
      nearestAirport: "Agatti (Helicopter/Ship connectivity only)",
      nearestRailway: "N/A",
      busConnectivity: "Overnight ship journey from Kochi or Agatti"
    },

    externalLinks: {
      officialBooking: "https://lakshadweep.gov.in/",
      googleMaps: "https://goo.gl/maps/minicoy"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Climbing the lighthouse involves steep spiral stairs. Village roads are sandy."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Village Walk (Culture Tour)" },
      { time: "11:00 AM", activity: "Tuna Canning Factory" },
      { time: "04:00 PM", activity: "Climb Lighthouse for View" }
    ],

    foodGuide: [
      { name: "Minicoy Island Resort", type: "Resort", specialty: "Maldivian Cuisine", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "Govt Hospital Minicoy"
    }
  },
  {
    id: 3605,
    name: "Kadmat Island",
    slug: "kadmat-island",
    state: "Lakshadweep",
    category: "Adventure",
    badge: "Scuba Diving Centre",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kadmat_Island_Beach.jpg/800px-Kadmat_Island_Beach.jpg",
    description: "Known for its coral wealth and long sandy beaches. It houses the best diving school in Lakshadweep, offering PADI certified courses.",
    coordinates: { lat: 11.2227, lng: 72.7768 },

    essentials: {
      bestTime: "October to April",
      weather: "Sunny",
      timings: "Dive Center: 08:00 AM - 04:00 PM",
      entryFee: {
        Entry: "Permit Cost",
        ScubaCourse: "₹5000+ (Intro Dive)"
      }
    },

    transport: {
      nearestAirport: "Agatti (77 km)",
      nearestRailway: "N/A",
      busConnectivity: "High-speed vessel from Agatti (2.5 hours)"
    },

    externalLinks: {
      officialBooking: "http://www.lakshadweeptourism.com/",
      googleMaps: "https://goo.gl/maps/kadmat"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Mainly for water sports enthusiasts. Beach wheelchairs not available."
    },

    routePlan: [
      { time: "08:30 AM", activity: "Introductory Scuba Dive" },
      { time: "12:00 PM", activity: "Relax at Lagoon Beach" },
      { time: "04:30 PM", activity: "Kayaking" }
    ],

    foodGuide: [
      { name: "Kadmat Island Resort", type: "Resort", specialty: "Grilled Fish", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "CHC Kadmat"
    }
  },
  {
    id: 3606,
    name: "Thinnakara Island",
    slug: "thinnakara-island",
    state: "Lakshadweep",
    category: "Nature",
    badge: "Camping & Turtles",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Thinnakara_Island_View.jpg/800px-Thinnakara_Island_View.jpg",
    description: "A tiny uninhabited island opposite Bangaram, famous for its tent stays and turtle nesting sites. It offers a Robinson Crusoe-like experience.",
    coordinates: { lat: 10.9456, lng: 72.2856 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid/Breezy",
      timings: "24 Hours (Tent Stay)",
      entryFee: {
        Stay: "Package Booking Mandatory",
        Boat: "Transfer from Agatti"
      }
    },

    transport: {
      nearestAirport: "Agatti (15 km)",
      nearestRailway: "N/A",
      busConnectivity: "Boat transfer from Agatti (45 mins)"
    },

    externalLinks: {
      officialBooking: "http://www.lakshadweeptourism.com/",
      googleMaps: "https://goo.gl/maps/thinnakara"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Accommodation is in tents on the sand. No paved paths."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Arrival & Tent Check-in" },
      { time: "02:00 PM", activity: "Snorkeling with Turtles" },
      { time: "08:00 PM", activity: "Stargazing on Beach" }
    ],

    foodGuide: [
      { name: "Tent Mess", type: "Camp", specialty: "Fixed Menu", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "Agatti CHC (By Boat)"
    }
  },
  {
    id: 3607,
    name: "Kalpeni Island",
    slug: "kalpeni-island",
    state: "Lakshadweep",
    category: "Nature",
    badge: "Coral Debris Bank",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kalpeni_Island_Lagoon.jpg/800px-Kalpeni_Island_Lagoon.jpg",
    description: "Known for its massive bank of coral debris along the shoreline (storm bank) and the scenic islets of Tilakkam and Pitti. The lagoon is shallow and perfect for reef walking.",
    coordinates: { lat: 10.0867, lng: 73.6425 },

    essentials: {
      bestTime: "October to April",
      weather: "Warm",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Permit: "Required",
        Snorkeling: "₹500"
      }
    },

    transport: {
      nearestAirport: "Agatti (Helicopter available)",
      nearestRailway: "N/A",
      busConnectivity: "Ship from Kochi is the main access"
    },

    externalLinks: {
      officialBooking: "https://lakshadweep.gov.in/",
      googleMaps: "https://goo.gl/maps/kalpeni"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Shoreline is full of coral rubble. Difficult to walk for elderly/disabled."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Reef Walking" },
      { time: "11:00 AM", activity: "Visit Lighthouse (40m high)" },
      { time: "03:00 PM", activity: "Kayaking in Lagoon" }
    ],

    foodGuide: [
      { name: "Koomel Beach Resort", type: "Govt", specialty: "Seafood Lunch", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "102",
      touristHelpline: "04896-262256",
      nearestHospital: "CHC Kalpeni"
    }
  }
]; 
 
