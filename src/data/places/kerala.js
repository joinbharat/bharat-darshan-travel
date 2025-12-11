/**
 * KERALA_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Kerala Tourism, DTPC (District Tourism Promotion Council) & Forest Dept
 * - Houseboats: Standard Industry Timings (Alleppey/Kumarakom)
 * - Wildlife: Periyar & Eravikulam National Park Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const KERALA_PLACES = [
  // --- BACKWATERS & BEACHES ---
  {
    id: 1301,
    name: "Alleppey Backwaters",
    slug: "alleppey-backwaters",
    state: "Kerala",
    category: "Nature",
    badge: "Venice of the East",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/800px-Alappuzha_Boat_Beauty_W.jpg",
    description: "Famous for its intricate network of canals, lagoons, and houseboats. A cruise here offers a glimpse into the rustic life of Kuttanad, the 'Rice Bowl of Kerala'.",
    coordinates: { lat: 9.4981, lng: 76.3388 },

    essentials: {
      bestTime: "September to March",
      weather: "Tropical/Humid",
      timings: "Houseboat Check-in: 12:00 PM, Check-out: 09:00 AM",
      entryFee: {
        Houseboat: "₹7000-15000 (1 Night/2 Pax)",
        Shikara: "₹600-1000/hr",
        Canoe: "₹300/hr"
      }
    },

    transport: {
      nearestAirport: "Cochin International Airport (85 km)",
      nearestRailway: "Alappuzha (4 km)",
      busConnectivity: "KSRTC buses from Kochi and Trivandrum"
    },

    externalLinks: {
      officialBooking: "https://www.keralatourism.org/",
      googleMaps: "https://goo.gl/maps/alleppey"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Boarding houseboats requires stepping over gaps. Some luxury boats are accessible."
    },

    routePlan: [
      { time: "12:00 PM", activity: "Check-in to Houseboat" },
      { time: "01:30 PM", activity: "Traditional Kerala Lunch on board" },
      { time: "05:00 PM", activity: "Village Walk & Tea" }
    ],

    foodGuide: [
      { name: "Houseboat Kitchen", type: "Onboard", specialty: "Karimeen Pollichathu (Pearl Spot Fish)", rating: 4.8 },
      { name: "Thaff", type: "City", specialty: "Biryani & Shawarma", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "General Hospital Alappuzha"
    }
  },
  {
    id: 1302,
    name: "Varkala Beach",
    slug: "varkala-beach",
    state: "Kerala",
    category: "Beaches",
    badge: "Only Cliff Beach in Kerala",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Varkala_Beach_View.jpg/800px-Varkala_Beach_View.jpg",
    description: "A stunning beach where cliffs merge with the Arabian Sea. It is known for its natural springs, the Janardanaswamy Temple, and a vibrant backpacker culture.",
    coordinates: { lat: 8.7379, lng: 76.7163 },

    essentials: {
      bestTime: "October to March",
      weather: "Breezy/Sunny",
      timings: "24 Hours (Lifeguards: 7 AM - 6 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Trivandrum (40 km)",
      nearestRailway: "Varkala Sivagiri (3 km)",
      busConnectivity: "Buses from Trivandrum and Kollam"
    },

    externalLinks: {
      officialBooking: "https://www.keralatourism.org/",
      googleMaps: "https://goo.gl/maps/varkala"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The cliff top is flat, but accessing the beach requires descending steep steps."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Morning Yoga on Cliff" },
      { time: "10:00 AM", activity: "Swim & Sunbathe" },
      { time: "05:30 PM", activity: "Sunset from North Cliff Cafes" }
    ],

    foodGuide: [
      { name: "Darjeeling Cafe", type: "Cliffside", specialty: "Tibetan & Seafood", rating: 4.5 },
      { name: "Abba Restaurant", type: "Bakery", specialty: "European Breakfast", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "Mission Hospital Varkala"
    }
  },

  // --- HILL STATIONS & WILDLIFE ---
  {
    id: 1303,
    name: "Munnar",
    slug: "munnar",
    state: "Kerala",
    category: "Hill Stations",
    badge: "Kashmir of South India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Munnar_Tea_Plantations.jpg/800px-Munnar_Tea_Plantations.jpg",
    description: "Famous for its endless rolling tea gardens, misty hills, and the Eravikulam National Park (home to the endangered Nilgiri Tahr). Located at the confluence of three rivers.",
    coordinates: { lat: 10.0889, lng: 77.0595 },

    essentials: {
      bestTime: "September to March",
      weather: "Cold/Misty",
      timings: "24 Hours (Park: 7:30 AM - 4 PM)",
      entryFee: {
        Park: "₹125 (Indian)",
        TeaMuseum: "₹125",
        Bloom: "Extra (Neelakurinji year)"
      }
    },

    transport: {
      nearestAirport: "Cochin (110 km)",
      nearestRailway: "Aluva (110 km)",
      busConnectivity: "Scenic drive via KSRTC buses from Kochi"
    },

    externalLinks: {
      officialBooking: "https://eravikulam.org/",
      googleMaps: "https://goo.gl/maps/munnar"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Tea gardens are hilly. Eravikulam park buses are not wheelchair accessible."
    },

    routePlan: [
      { time: "08:30 AM", activity: "Eravikulam National Park" },
      { time: "11:30 AM", activity: "Tea Museum Visit" },
      { time: "03:00 PM", activity: "Mattupetty Dam & Echo Point" }
    ],

    foodGuide: [
      { name: "Saravana Bhavan", type: "City", specialty: "South Indian Veg", rating: 4.1 },
      { name: "Rapsy Restaurant", type: "Budget", specialty: "Beef Fry & Parotta", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "Tata High Range Hospital"
    }
  },
  {
    id: 1304,
    name: "Periyar National Park (Thekkady)",
    slug: "periyar-national-park",
    state: "Kerala",
    category: "Wildlife",
    badge: "Elephant & Tiger Reserve",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Periyar_Lake_Thekkady.jpg/800px-Periyar_Lake_Thekkady.jpg",
    description: "A renowned wildlife sanctuary centered around Periyar Lake. Famous for boat safaris where herds of wild elephants can be seen playing by the water's edge.",
    coordinates: { lat: 9.6031, lng: 77.1615 },

    essentials: {
      bestTime: "October to February",
      weather: "Forest/Cool",
      timings: "06:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹45",
        BoatRide: "₹255 (Online booking mandatory)"
      }
    },

    transport: {
      nearestAirport: "Madurai (140 km) or Cochin (190 km)",
      nearestRailway: "Kottayam (110 km)",
      busConnectivity: "Direct buses from Kumily/Thekkady"
    },

    externalLinks: {
      officialBooking: "https://www.periyarfoundation.online/",
      googleMaps: "https://goo.gl/maps/periyar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Boat landing area is accessible via ramps. Wheelchair priority on boats."
    },

    routePlan: [
      { time: "07:30 AM", activity: "Morning Boat Safari" },
      { time: "11:00 AM", activity: "Spice Plantation Tour" },
      { time: "06:00 PM", activity: "Kathakali & Kalaripayattu Show" }
    ],

    foodGuide: [
      { name: "Bamboo Cafe", type: "Forest Dept", specialty: "Snacks", rating: 3.8 },
      { name: "Grandma's Cafe", type: "City", specialty: "Homestyle Kerala Food", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "Govt Hospital Kumily"
    }
  },
  {
    id: 1305,
    name: "Wayanad (Edakkal Caves)",
    slug: "wayanad-edakkal",
    state: "Kerala",
    category: "Nature",
    badge: "Prehistoric Rock Art",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Edakkal_Caves_Wayanad.jpg/800px-Edakkal_Caves_Wayanad.jpg",
    description: "A green paradise in the Western Ghats. The Edakkal Caves feature Stone Age carvings (Neolithic) dating back to 6000 BC, the only known place in India with Stone Age carvings.",
    coordinates: { lat: 11.6280, lng: 76.2335 },

    essentials: {
      bestTime: "October to May",
      weather: "Pleasant",
      timings: "09:00 AM - 04:00 PM (Closed Mondays)",
      entryFee: {
        Entry: "₹40",
        Jeep: "₹150 (From parking to base)"
      }
    },

    transport: {
      nearestAirport: "Calicut (CCJ) - 100 km",
      nearestRailway: "Kozhikode (90 km)",
      busConnectivity: "Buses to Sultan Bathery, then local jeep"
    },

    externalLinks: {
      officialBooking: "https://dtpcwayanad.com/",
      googleMaps: "https://goo.gl/maps/edakkal"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Steep climb of ~1 km from base to caves. Not suitable for elderly/disabled."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Trek to Edakkal Caves" },
      { time: "01:00 PM", activity: "Lunch at Sultan Bathery" },
      { time: "03:00 PM", activity: "Banasura Sagar Dam" }
    ],

    foodGuide: [
      { name: "Wilton Hotel", type: "City", specialty: "Kerala Meals & Biryani", rating: 4.3 },
      { name: "1980's A Nostalgic Restaurant", type: "Theme", specialty: "Clay Pot Meals", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "WIMS Hospital Meppadi"
    }
  },

  // --- HERITAGE & CULTURE ---
  {
    id: 1306,
    name: "Fort Kochi",
    slug: "fort-kochi",
    state: "Kerala",
    category: "Heritage",
    badge: "Colonial History Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chinese_Fishing_Nets_Kochi.jpg/800px-Chinese_Fishing_Nets_Kochi.jpg",
    description: "A historic neighborhood showcasing Portuguese, Dutch, and British influences. Famous for Chinese Fishing Nets, St. Francis Church (Vasco da Gama's first burial site), and art cafes.",
    coordinates: { lat: 9.9658, lng: 76.2421 },

    essentials: {
      bestTime: "All Year (Biennale in Dec-Mar)",
      weather: "Humid",
      timings: "24 Hours (Museums close 5 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Cochin (40 km)",
      nearestRailway: "Ernakulam South (12 km)",
      busConnectivity: "Ferry from Ernakulam Jetty is the best scenic route"
    },

    externalLinks: {
      officialBooking: "https://www.keralatourism.org/",
      googleMaps: "https://goo.gl/maps/fortkochi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Streets are flat and paved. Most heritage sites have ground level access."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Chinese Fishing Nets" },
      { time: "10:30 AM", activity: "St. Francis Church & Dutch Palace" },
      { time: "04:00 PM", activity: "Jew Town & Synagogue" }
    ],

    foodGuide: [
      { name: "Kashi Art Cafe", type: "Cafe", specialty: "Cake & Coffee", rating: 4.6 },
      { name: "Fusion Bay", type: "Restaurant", specialty: "Seafood Platter", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "General Hospital Ernakulam"
    }
  },
  {
    id: 1307,
    name: "Sree Padmanabhaswamy Temple",
    slug: "padmanabhaswamy-temple",
    state: "Kerala",
    category: "Spiritual",
    badge: "Richest Temple in World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sree_Padmanabhaswamy_Temple_Trivandrum.jpg/800px-Sree_Padmanabhaswamy_Temple_Trivandrum.jpg",
    description: "Located in Trivandrum, this temple dedicated to Lord Vishnu features a massive Gopuram and is famous for its secret vaults containing immense wealth. Strict dress code applies.",
    coordinates: { lat: 8.4830, lng: 76.9436 },

    essentials: {
      bestTime: "All Year",
      weather: "Tropical",
      timings: "03:30 AM - 12:00 PM, 05:00 PM - 08:30 PM",
      entryFee: {
        Entry: "Free",
        SpecialDarshan: "₹250",
        DressCode: "Mundu/Saree Mandatory"
      }
    },

    transport: {
      nearestAirport: "Trivandrum (4 km)",
      nearestRailway: "Trivandrum Central (1 km)",
      busConnectivity: "Located in city center (East Fort)"
    },

    externalLinks: {
      officialBooking: "https://spst.in/",
      googleMaps: "https://goo.gl/maps/padmanabhaswamy"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs permitted in outer corridors. Main sanctum requires walking."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Nirmalyam Darshan" },
      { time: "08:00 AM", activity: "Kuthiramalika Palace Museum (Next door)" },
      { time: "10:00 AM", activity: "Napier Museum & Zoo (Nearby)" }
    ],

    foodGuide: [
      { name: "Mothers Veg Plaza", type: "City", specialty: "Sadya (Feast)", rating: 4.7 },
      { name: "Villa Maya", type: "Heritage", specialty: "Fine Dining", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "Medical College Trivandrum"
    }
  },

  // --- NATURE & FALLS ---
  {
    id: 1308,
    name: "Athirapally Waterfalls",
    slug: "athirapally-waterfalls",
    state: "Kerala",
    category: "Nature",
    badge: "Niagara of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Athirappilly_Waterfalls_Thrissur.jpg/800px-Athirappilly_Waterfalls_Thrissur.jpg",
    description: "The largest waterfall in Kerala, standing 80ft tall. Located on the Chalakudy River, it is a popular film shooting location (Bahubali) surrounded by lush rainforests.",
    coordinates: { lat: 10.2851, lng: 76.5698 },

    essentials: {
      bestTime: "June to October (Monsoon)",
      weather: "Humid/Spray",
      timings: "08:00 AM - 06:00 PM",
      entryFee: {
        Entry: "₹50",
        Parking: "₹50"
      }
    },

    transport: {
      nearestAirport: "Cochin (55 km)",
      nearestRailway: "Chalakudy (30 km)",
      busConnectivity: "Buses from Chalakudy bus stand"
    },

    externalLinks: {
      officialBooking: "https://www.keralatourism.org/",
      googleMaps: "https://goo.gl/maps/athirapally"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Top viewpoint is wheelchair accessible via paved path. Bottom of falls requires steep hike."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Top Viewpoint" },
      { time: "10:30 AM", activity: "Trek to Waterfall Base" },
      { time: "01:00 PM", activity: "Vazhachal Falls (5km away)" }
    ],

    foodGuide: [
      { name: "Rainforest Resort", type: "View", specialty: "Lunch with Waterfall View", rating: 4.5 },
      { name: "Local Stalls", type: "Street", specialty: "Bamboo Rice Payasam", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "St. James Hospital Chalakudy"
    }
  },
  {
    id: 1309,
    name: "Bekal Fort",
    slug: "bekal-fort",
    state: "Kerala",
    category: "Heritage",
    badge: "Largest Fort in Kerala",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bekal_Fort_Kasaragod.jpg/800px-Bekal_Fort_Kasaragod.jpg",
    description: "A massive 17th-century keyhole-shaped fort in Kasaragod, offering panoramic views of the Arabian Sea. Unlike other forts, it was built solely for defense, not administration.",
    coordinates: { lat: 12.3837, lng: 75.0336 },

    essentials: {
      bestTime: "August to March",
      weather: "Coastal",
      timings: "08:00 AM - 05:30 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Mangalore (50 km)",
      nearestRailway: "Bekal Fort (1 km) or Kasaragod (16 km)",
      busConnectivity: "Local buses from Kanhangad or Kasaragod"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/bekal"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wide ramps available to reach the observation decks. Grass lawns are flat."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Fort Walk & Observation Tower" },
      { time: "05:30 PM", activity: "Sunset at Bekal Beach" },
      { time: "06:30 PM", activity: "Park Light Show" }
    ],

    foodGuide: [
      { name: "Nombili", type: "Resort", specialty: "Malabar Cuisine", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "District Hospital Kanhangad"
    }
  },
  {
    id: 1310,
    name: "Kovalam Beach",
    slug: "kovalam-beach",
    state: "Kerala",
    category: "Beaches",
    badge: "Lighthouse Beach",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Kovalam_Lighthouse_Beach.jpg/800px-Kovalam_Lighthouse_Beach.jpg",
    description: "An internationally renowned beach with three adjacent crescent beaches. The Lighthouse Beach is famous for its 35m tall lighthouse and strong waves suitable for surfing.",
    coordinates: { lat: 8.4004, lng: 76.9787 },

    essentials: {
      bestTime: "September to March",
      weather: "Sunny/Humid",
      timings: "24 Hours (Lighthouse: 10 AM - 5 PM, closed Mon)",
      entryFee: {
        Beach: "Free",
        Lighthouse: "₹20"
      }
    },

    transport: {
      nearestAirport: "Trivandrum (15 km)",
      nearestRailway: "Trivandrum Central (15 km)",
      busConnectivity: "Frequent AC Low-floor buses from Trivandrum city"
    },

    externalLinks: {
      officialBooking: "https://www.keralatourism.org/",
      googleMaps: "https://goo.gl/maps/kovalam"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The promenade is paved and wheelchair friendly. Lighthouse has an elevator."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Climb Lighthouse" },
      { time: "05:00 PM", activity: "Swimming / Surfing" },
      { time: "07:00 PM", activity: "Seafood Dinner by the Beach" }
    ],

    foodGuide: [
      { name: "German Bakery", type: "Cafe", specialty: "Breakfast & Shakes", rating: 4.4 },
      { name: "Bait", type: "Luxury", specialty: "Fresh Catch", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-425-4747",
      nearestHospital: "Upasana Hospital"
    }
  }
]; 
