/**
 * TELANGANA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Telangana Tourism & ASI
 * - Ramoji Film City: Official Pricing (2024-25)
 * - Heritage: UNESCO (Ramappa) & Dept of Heritage Telangana
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const TELANGANA_PLACES = [
  // --- HERITAGE & ICONS ---
  {
    id: 2501,
    name: "Charminar",
    slug: "charminar-hyderabad",
    state: "Telangana",
    category: "Heritage",
    badge: "Global Icon of Hyderabad",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/800px-Charminar_Hyderabad_1.jpg",
    description: "Built in 1591 by Muhammad Quli Qutb Shah to mark the end of a plague. This square monument with four minarets is the centerpiece of Hyderabad and stands amidst the bustling Laad Bazaar.",
    coordinates: { lat: 17.3616, lng: 78.4747 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm/City",
      timings: "09:00 AM - 05:30 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (RGIA) - 20 km",
      nearestRailway: "Hyderabad Deccan (Nampally) - 4 km",
      busConnectivity: "Frequent TSRTC buses to Charminar bus stand"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/charminar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The ground area is accessible, but climbing the minarets requires navigating very narrow, steep spiral stairs."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Climb Charminar" },
      { time: "10:30 AM", activity: "Mecca Masjid (Next door)" },
      { time: "11:30 AM", activity: "Shop for Bangles in Laad Bazaar" }
    ],

    foodGuide: [
      { name: "Nimrah Cafe", type: "Iconic", specialty: "Irani Chai & Osmania Biscuit", rating: 4.8 },
      { name: "Shadab Hotel", type: "Heritage", specialty: "Hyderabadi Biryani", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Osmania General Hospital"
    }
  },
  {
    id: 2502,
    name: "Golconda Fort",
    slug: "golconda-fort",
    state: "Telangana",
    category: "Heritage",
    badge: "Acoustic Wonder",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Golconda_Fort_Hyderabad.jpg/800px-Golconda_Fort_Hyderabad.jpg",
    description: "A massive citadel known for its diamond mines (Koh-i-Noor was found nearby) and unique acoustics; a clap at the entrance dome can be heard at the hilltop pavilion 1 km away.",
    coordinates: { lat: 17.3833, lng: 78.4011 },

    essentials: {
      bestTime: "October to March (Evenings for Light Show)",
      weather: "Rocky/Hot",
      timings: "09:00 AM - 05:30 PM (Light Show: 7 PM)",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300",
        LightShow: "₹140"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (RGIA) - 25 km",
      nearestRailway: "Nampally (11 km)",
      busConnectivity: "Direct buses from Mehdipatnam"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/golconda"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The climb to the Bala Hissar (top) involves 360+ steep steps. Only the lower garden area is accessible."
    },

    routePlan: [
      { time: "03:00 PM", activity: "Explore Lower Fort & Gardens" },
      { time: "04:30 PM", activity: "Climb to Baradari (Top)" },
      { time: "06:30 PM", activity: "Sound & Light Show" }
    ],

    foodGuide: [
      { name: "Pista House", type: "City", specialty: "Haleem (Seasonal)", rating: 4.5 },
      { name: "Shah Ghouse", type: "Local", specialty: "Biryani & Kababs", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Olive Hospital"
    }
  },
  {
    id: 2503,
    name: "Ramappa Temple",
    slug: "ramappa-temple",
    state: "Telangana",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ramappa_Temple_Warangal.jpg/800px-Ramappa_Temple_Warangal.jpg",
    description: "Built in 1213 AD by the Kakatiya dynasty, this Shiva temple is the only one in India named after its sculptor, Ramappa. It is famous for its floating bricks and intricate carvings.",
    coordinates: { lat: 18.2606, lng: 79.9427 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (210 km)",
      nearestRailway: "Warangal (70 km) or Kazipet (75 km)",
      busConnectivity: "Buses to Mulugu, then auto/taxi to Palampet village"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/ramappa"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The temple stands on a 6ft high star-shaped platform which has steps, but the lawn area is flat."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Temple Architecture Tour" },
      { time: "12:00 PM", activity: "Ramappa Lake Boating (Nearby)" },
      { time: "03:00 PM", activity: "Drive back to Warangal" }
    ],

    foodGuide: [
      { name: "Haritha Hotel Ramappa", type: "Govt", specialty: "Telangana Thali", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Area Hospital Mulugu"
    }
  },

  // --- LEISURE & MUSEUMS ---
  {
    id: 2504,
    name: "Ramoji Film City",
    slug: "ramoji-film-city",
    state: "Telangana",
    category: "Leisure",
    badge: "World's Largest Film Studio",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ramoji_Film_City_Entrance.jpg/800px-Ramoji_Film_City_Entrance.jpg",
    description: "Certified by Guinness World Records, this integrated film city spreads over 1666 acres. It features film sets (Bahubali), amusement parks, and live shows.",
    coordinates: { lat: 17.2543, lng: 78.6808 },

    essentials: {
      bestTime: "All Year (Winter is best for walking)",
      weather: "Sunny",
      timings: "09:00 AM - 05:30 PM",
      entryFee: {
        Adult: "₹1350 + Taxes",
        Child: "₹1150 + Taxes",
        StarExperience: "₹2500+"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (RGIA) - 40 km",
      nearestRailway: "Secunderabad (35 km)",
      busConnectivity: "Designated RFC buses from key city points"
    },

    externalLinks: {
      officialBooking: "https://www.ramojifilmcity.com/",
      googleMaps: "https://goo.gl/maps/ramoji"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Vintage buses for tours are not wheelchair friendly, but the park areas are paved. Wheelchairs available for rent."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Opening Ceremony & Studio Tour Bus" },
      { time: "01:00 PM", activity: "Bahubali Set Tour" },
      { time: "04:00 PM", activity: "Action Theatre & Live Shows" }
    ],

    foodGuide: [
      { name: "Super Star", type: "Theme", specialty: "Buffet Lunch", rating: 4.0 },
      { name: "Dil Se", type: "North Indian", specialty: "Kababs", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Kamineni Hospital LB Nagar"
    }
  },
  {
    id: 2505,
    name: "Salar Jung Museum",
    slug: "salar-jung-museum",
    state: "Telangana",
    category: "Heritage",
    badge: "Largest One-Man Collection",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Salar_Jung_Museum_Hyderabad.jpg/800px-Salar_Jung_Museum_Hyderabad.jpg",
    description: "One of the three National Museums of India. It houses the immense personal collection of Salar Jung III, including the famous 'Veiled Rebecca' statue and the Musical Clock.",
    coordinates: { lat: 17.3714, lng: 78.4804 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor/AC",
      timings: "10:00 AM - 05:00 PM (Closed Fridays)",
      entryFee: {
        Indian: "₹50",
        Foreigner: "₹500",
        Camera: "₹50"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (20 km)",
      nearestRailway: "Nampally (3 km)",
      busConnectivity: "Located in Darulshifa, well connected by TSRTC"
    },

    externalLinks: {
      officialBooking: "https://salarjungmuseum.in/",
      googleMaps: "https://goo.gl/maps/salarjung"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Elevators and ramps available for all galleries. Wheelchairs available at reception."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Musical Clock (Strikes at 12 PM)" },
      { time: "12:15 PM", activity: "Veiled Rebecca & Jade Room" },
      { time: "02:00 PM", activity: "Arms and Armor Gallery" }
    ],

    foodGuide: [
      { name: "Museum Canteen", type: "Basic", specialty: "Tea & Snacks", rating: 3.5 },
      { name: "Grand Hotel", type: "City", specialty: "Biryani", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Osmania General Hospital"
    }
  },

  // --- NATURE & LAKES ---
  {
    id: 2506,
    name: "Hussain Sagar Lake",
    slug: "hussain-sagar",
    state: "Telangana",
    category: "Nature",
    badge: "World's Tallest Monolith Buddha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hussain_Sagar_Buddha_Statue.jpg/800px-Hussain_Sagar_Buddha_Statue.jpg",
    description: "A heart-shaped lake built in 1563 connecting Hyderabad and Secunderabad. A majestic 18-meter high monolith statue of Lord Buddha stands on the Gibraltar Rock in the center.",
    coordinates: { lat: 17.4239, lng: 78.4738 },

    essentials: {
      bestTime: "Evenings (All Year)",
      weather: "Breezy",
      timings: "08:00 AM - 10:00 PM (Boating till 8 PM)",
      entryFee: {
        Park: "Free/Minimal",
        Boat: "₹55 (Mechanized), ₹400 (Speed Boat)"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (30 km)",
      nearestRailway: "Secunderabad (5 km)",
      busConnectivity: "Metro Station: Khairatabad or Rasoolpura"
    },

    externalLinks: {
      officialBooking: "https://tourism.telangana.gov.in/",
      googleMaps: "https://goo.gl/maps/hussainsagar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Tank Bund and Necklace Road promenades are paved. Mechanized boats are spacious."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Boat Ride to Buddha Statue" },
      { time: "06:30 PM", activity: "Walk on Tank Bund" },
      { time: "07:30 PM", activity: "Dinner at Eat Street" }
    ],

    foodGuide: [
      { name: "Eat Street", type: "Food Court", specialty: "Multi-Cuisine", rating: 4.2 },
      { name: "Water Front", type: "Fine Dining", specialty: "Continental with View", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Yashoda Hospital Somajiguda"
    }
  },
  {
    id: 2507,
    name: "Nagarjuna Sagar Dam",
    slug: "nagarjuna-sagar",
    state: "Telangana",
    category: "Nature",
    badge: "World's Largest Masonry Dam",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Nagarjuna_Sagar_Dam.jpg/800px-Nagarjuna_Sagar_Dam.jpg",
    description: "Built across the Krishna River, this massive dam creates a reservoir that houses the Nagarjunakonda Island, home to ancient Buddhist ruins relocated here.",
    coordinates: { lat: 16.5776, lng: 79.3130 },

    essentials: {
      bestTime: "October to February (Monsoon for gates opening)",
      weather: "Warm",
      timings: "09:00 AM - 04:00 PM (Museum Boat)",
      entryFee: {
        DamView: "Free",
        MuseumBoat: "₹150 (Round Trip)"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (150 km)",
      nearestRailway: "Nadikudi (30 km)",
      busConnectivity: "Direct buses from Hyderabad (MGBS)"
    },

    externalLinks: {
      officialBooking: "https://tourism.telangana.gov.in/",
      googleMaps: "https://goo.gl/maps/nagarjunasagar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The island museum has uneven paths. Boat boarding requires assistance."
    },

    routePlan: [
      { time: "09:30 AM", activity: "Boat to Nagarjunakonda Island" },
      { time: "11:00 AM", activity: "Buddhist Museum Visit" },
      { time: "02:00 PM", activity: "Ethipothala Waterfalls (11 km away)" }
    ],

    foodGuide: [
      { name: "Haritha Vijay Vihar", type: "Govt Resort", specialty: "Andhra Meals", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Area Hospital Vijayapuri"
    }
  },

  // --- SPIRITUAL & HERITAGE ---
  {
    id: 2508,
    name: "Warangal Fort & Thousand Pillar Temple",
    slug: "warangal-fort",
    state: "Telangana",
    category: "Heritage",
    badge: "Kakatiya Dynasty Capital",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Warangal_Fort_Kala_Thoranam.jpg/800px-Warangal_Fort_Kala_Thoranam.jpg",
    description: "The capital of the Kakatiyas. The fort is famous for its massive stone gateways (Kakatiya Kala Thoranam). Nearby is the 1000-pillar temple dedicated to Shiva, Vishnu, and Surya.",
    coordinates: { lat: 17.9546, lng: 79.6015 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "09:00 AM - 05:30 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (140 km)",
      nearestRailway: "Warangal (5 km)",
      busConnectivity: "Auto/Rickshaw within Warangal/Hanamkonda"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/warangal"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fort ruins are in a park-like flat setting. Temple platform has steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Thousand Pillar Temple" },
      { time: "11:00 AM", activity: "Warangal Fort & Gateways" },
      { time: "01:00 PM", activity: "Bhadrakali Temple" }
    ],

    foodGuide: [
      { name: "City Grand", type: "Hotel", specialty: "South Indian Thali", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "MGM Hospital Warangal"
    }
  },
  {
    id: 2509,
    name: "Yadadri (Yadagirigutta)",
    slug: "yadadri-temple",
    state: "Telangana",
    category: "Spiritual",
    badge: "Telangana's Tirupati",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Yadadri_Temple_View.jpg/800px-Yadadri_Temple_View.jpg",
    description: "A magnificent newly renovated temple complex dedicated to Lord Narasimha Swamy, located on a hillock. Built entirely of black granite (Krushna Shila), it is an architectural marvel.",
    coordinates: { lat: 17.5879, lng: 78.9392 },

    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "04:00 AM - 09:30 PM",
      entryFee: {
        General: "Free",
        VIP: "₹150",
        CarEntry: "₹500 (Uphill)"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (90 km)",
      nearestRailway: "Raigir (5 km)",
      busConnectivity: "Direct TSRTC buses from Hyderabad (JBS/MGBS)"
    },

    externalLinks: {
      officialBooking: "https://yadadritemple.telangana.gov.in/",
      googleMaps: "https://goo.gl/maps/yadadri"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Lifts and battery-operated cars are available. Special queue for disabled."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Darshan" },
      { time: "09:00 AM", activity: "Temple Architecture Tour" },
      { time: "11:00 AM", activity: "Laddu Prasadam" }
    ],

    foodGuide: [
      { name: "Haritha Hotel", type: "Govt", specialty: "Veg Buffet", rating: 4.2 },
      { name: "Temple Annadanam", type: "Pilgrim", specialty: "Free Meals", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Area Hospital Bhongir"
    }
  },
  {
    id: 2510,
    name: "Chowmahalla Palace",
    slug: "chowmahalla-palace",
    state: "Telangana",
    category: "Heritage",
    badge: "Seat of the Nizams",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chowmahalla_Palace_Khilwat.jpg/800px-Chowmahalla_Palace_Khilwat.jpg",
    description: "The official residence of the Nizams of Hyderabad. The palace is known for its opulent Khilwat Mubarak (Durbar Hall) with massive chandeliers and a vintage car collection.",
    coordinates: { lat: 17.3578, lng: 78.4717 },

    essentials: {
      bestTime: "All Year",
      weather: "City",
      timings: "10:00 AM - 05:00 PM (Closed Fridays)",
      entryFee: {
        Indian: "₹100",
        Foreigner: "₹400",
        Camera: "₹50"
      }
    },

    transport: {
      nearestAirport: "Hyderabad (20 km)",
      nearestRailway: "Nampally (5 km)",
      busConnectivity: "Near Charminar, accessible by auto"
    },

    externalLinks: {
      officialBooking: "http://chowmahalla.co.in/",
      googleMaps: "https://goo.gl/maps/chowmahalla"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ground floor and courtyards are accessible. Vintage car section is paved."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Durbar Hall (Khilwat)" },
      { time: "03:00 PM", activity: "Vintage Car Museum" },
      { time: "04:00 PM", activity: "Crockery & Weapon Display" }
    ],

    foodGuide: [
      { name: "Pista House (Charminar)", type: "City", specialty: "Biryani", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4646",
      nearestHospital: "Princess Esra Hospital"
    }
  }
]; 
