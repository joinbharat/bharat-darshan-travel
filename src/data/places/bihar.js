/**
 * BIHAR_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: BSTDC (Bihar Tourism) & ASI (Archaeological Survey of India)
 * - Nature Safari: Official Rajgir Zoo Safari Booking Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const BIHAR_PLACES = [
  // --- SPIRITUAL & HERITAGE (UNESCO) ---
  {
    id: 501,
    name: "Mahabodhi Temple",
    slug: "mahabodhi-temple-bodh-gaya",
    state: "Bihar",
    category: "Spiritual",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mahabodhi_Temple_Bodhgaya.jpg/800px-Mahabodhi_Temple_Bodhgaya.jpg",
    description: "The holiest site in Buddhism, marking the spot where Lord Buddha attained enlightenment under the Bodhi Tree. The main temple is a 55m high pyramidal structure built in the 5th-6th century AD.",
    coordinates: { lat: 24.6960, lng: 84.9913 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm days/Cool nights",
      timings: "05:00 AM - 09:00 PM",
      entryFee: {
        Entry: "Free",
        Camera: "₹100",
        Mobile: "Not allowed inside (Deposit at counter)"
      }
    },

    transport: {
      nearestAirport: "Gaya International Airport (12 km)",
      nearestRailway: "Gaya Junction (16 km)",
      busConnectivity: "Regular BSTDC buses from Patna (110 km) and Gaya town"
    },

    externalLinks: {
      officialBooking: "https://tourism.bihar.gov.in/",
      googleMaps: "https://goo.gl/maps/mahabodhi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The entire temple complex is flat and paved. Wheelchairs are available at the entrance."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Meditation under Bodhi Tree" },
      { time: "08:00 AM", activity: "Main Shrine Darshan" },
      { time: "10:30 AM", activity: "Visit 80ft Giant Buddha Statue" }
    ],

    foodGuide: [
      { name: "Be Happy Cafe", type: "Cafe", specialty: "Italian & Bakery", rating: 4.5 },
      { name: "Siam Thai", type: "Restaurant", specialty: "Thai Curry", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Anugrah Narayan Magadh Medical College"
    }
  },
  {
    id: 502,
    name: "Ruins of Nalanda University",
    slug: "nalanda-university-ruins",
    state: "Bihar",
    category: "Heritage",
    badge: "First Residential University",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Nalanda_University_Ruins.jpg/800px-Nalanda_University_Ruins.jpg",
    description: "A UNESCO World Heritage site, this was a renowned center of learning from the 5th to 12th century AD. The sprawling red brick ruins include stupas, shrines, and viharas (monk cells).",
    coordinates: { lat: 25.1357, lng: 85.4404 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Pleasant",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Indian: "₹40",
        Foreigner: "₹600",
        Video: "₹25"
      }
    },

    transport: {
      nearestAirport: "Patna (85 km)",
      nearestRailway: "Rajgir (12 km) or Nalanda (2 km)",
      busConnectivity: "Frequent buses/autos from Rajgir and Bihar Sharif"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/nalanda"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Main pathways are paved. Ramps are installed at major entry points to the ruins."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Stupa of Sariputta (Main Ruins)" },
      { time: "12:00 PM", activity: "Nalanda Archaeological Museum" },
      { time: "02:00 PM", activity: "Xuanzang Memorial Hall (Nearby)" }
    ],

    foodGuide: [
      { name: "Nalanda Cafeteria", type: "Budget", specialty: "Samosa & Chai", rating: 3.8 },
      { name: "Gargee Gautam Vihar", type: "Hotel", specialty: "North Indian Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Sadar Hospital, Bihar Sharif"
    }
  },

  // --- NATURE & ADVENTURE ---
  {
    id: 503,
    name: "Rajgir Glass Bridge & Zoo Safari",
    slug: "rajgir-glass-bridge",
    state: "Bihar",
    category: "Nature",
    badge: "India's Second Glass Bridge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vishwa_Shanti_Stupa_Rajgir.jpg/800px-Vishwa_Shanti_Stupa_Rajgir.jpg",
    description: "Set amidst the five hills of Rajgir, this modern attraction features a glass skywalk, a ropeway to the Vishwa Shanti Stupa, and a unique Zoo Safari where tourists are caged in vehicles while animals roam free.",
    coordinates: { lat: 25.0069, lng: 85.3986 },

    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        GlassBridge: "₹125 (Booking Mandatory)",
        ZooSafari: "₹250",
        Ropeway: "₹100 (Round Trip)"
      }
    },

    transport: {
      nearestAirport: "Patna (100 km) or Gaya (70 km)",
      nearestRailway: "Rajgir Station (3 km)",
      busConnectivity: "Direct buses from Patna (Inter-State Bus Terminal)"
    },

    externalLinks: {
      officialBooking: "https://rajgirzoosafari.bihar.gov.in/",
      googleMaps: "https://goo.gl/maps/rajgir"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Zoo safari vehicles are accessible. Glass bridge area has ramps but requires assistance."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Zoo Safari (Prior Booking Required)" },
      { time: "11:30 AM", activity: "Nature Safari & Glass Bridge" },
      { time: "03:00 PM", activity: "Ropeway to Vishwa Shanti Stupa" }
    ],

    foodGuide: [
      { name: "Green Hotel", type: "Local", specialty: "Litti Chokha", rating: 4.2 },
      { name: "Indo Hokke Hotel", type: "Mid-Range", specialty: "Japanese Cuisine", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Sub-Divisional Hospital Rajgir"
    }
  },
  {
    id: 504,
    name: "Valmiki Tiger Reserve",
    slug: "valmiki-tiger-reserve",
    state: "Bihar",
    category: "Wildlife",
    badge: "Only Tiger Reserve in Bihar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gandak_river_at_Valmiki_Tiger_Reserve.jpg/800px-Gandak_river_at_Valmiki_Tiger_Reserve.jpg",
    description: "Located in West Champaran at the India-Nepal border, this pristine forest is home to Tigers, Rhinos, and Leopards. The Gandak river flows through it, offering scenic boat rides.",
    coordinates: { lat: 27.3888, lng: 84.1220 },

    essentials: {
      bestTime: "November to March",
      weather: "Forest/Cool",
      timings: "06:00 AM - 04:00 PM (Safari)",
      entryFee: {
        Entry: "₹50",
        JeepSafari: "₹1500-2000 (Approx)",
        BoatRide: "₹200"
      }
    },

    transport: {
      nearestAirport: "Gorakhpur (120 km) or Patna (270 km)",
      nearestRailway: "Valmiki Nagar Road (5 km) or Narkatiaganj (40 km)",
      busConnectivity: "Buses from Bettiah or Gorakhpur"
    },

    externalLinks: {
      officialBooking: "https://valmikitigerreserve.com/",
      googleMaps: "https://goo.gl/maps/valmiki"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jungle terrain is rough. Eco-huts are accessible but safaris are not."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Morning Jungle Safari" },
      { time: "10:00 AM", activity: "Valmiki Ashram Visit" },
      { time: "03:00 PM", activity: "Boating on Gandak River" }
    ],

    foodGuide: [
      { name: "Valmiki Vihar Hotel", type: "Govt Lodge", specialty: "Simple Veg Meals", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Sub-Divisional Hospital Bagaha"
    }
  },

  // --- HERITAGE & MUSEUMS ---
  {
    id: 505,
    name: "Sher Shah Suri Tomb",
    slug: "sher-shah-suri-tomb",
    state: "Bihar",
    category: "Heritage",
    badge: "Second Taj Mahal of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sher_Shah_Suri_Tomb_Sasaram.jpg/800px-Sher_Shah_Suri_Tomb_Sasaram.jpg",
    description: "A magnificent Indo-Islamic mausoleum built in red sandstone, standing in the middle of an artificial lake in Sasaram. It is dedicated to Emperor Sher Shah Suri.",
    coordinates: { lat: 24.9436, lng: 84.0134 },

    essentials: {
      bestTime: "Winter",
      weather: "Warm",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Varanasi (130 km) or Gaya (100 km)",
      nearestRailway: "Sasaram Junction (2 km)",
      busConnectivity: "On the Grand Trunk Road (NH-19), well connected to Varanasi/Gaya"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/shershah"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "A causeway connects the mainland to the island tomb, which is flat and paved."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Tomb Photography" },
      { time: "10:30 AM", activity: "Visit Rohtasgarh Fort (Nearby)" },
      { time: "01:00 PM", activity: "Lunch at Highway Dhaba" }
    ],

    foodGuide: [
      { name: "Maurya Royal", type: "Highway", specialty: "Paneer Butter Masala", rating: 4.1 },
      { name: "Sher Shah Vihar", type: "City", specialty: "Tandoori Chicken", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Sadar Hospital Sasaram"
    }
  },
  {
    id: 506,
    name: "Bihar Museum",
    slug: "bihar-museum",
    state: "Bihar",
    category: "Heritage",
    badge: "World Class Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bihar_Museum_Patna.jpg/800px-Bihar_Museum_Patna.jpg",
    description: "A state-of-the-art history museum in Patna designed by Japanese firm Maki & Associates. It houses artifacts from ancient Magadha to modern art, including the famous Didarganj Yakshi.",
    coordinates: { lat: 25.6067, lng: 85.1190 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor/AC",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹100",
        Foreigner: "₹500",
        Student: "₹50"
      }
    },

    transport: {
      nearestAirport: "Patna (5 km)",
      nearestRailway: "Patna Junction (3 km)",
      busConnectivity: "Located on Bailey Road, easily accessible by auto/Uber"
    },

    externalLinks: {
      officialBooking: "https://biharmuseum.org/",
      googleMaps: "https://goo.gl/maps/biharmuseum"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible with elevators, ramps, and dedicated restrooms."
    },

    routePlan: [
      { time: "10:30 AM", activity: "Children's Gallery" },
      { time: "12:00 PM", activity: "History Galleries (Didarganj Yakshi)" },
      { time: "02:00 PM", activity: "Lunch at Museum Potbelly Cafe" }
    ],

    foodGuide: [
      { name: "The Potbelly", type: "Museum Cafe", specialty: "Bihari Thali", rating: 4.6 },
      { name: "Pind Balluchi", type: "Nearby", specialty: "North Indian", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "IGIMS Patna"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 507,
    name: "Takht Sri Patna Sahib",
    slug: "takht-sri-patna-sahib",
    state: "Bihar",
    category: "Spiritual",
    badge: "Birthplace of Guru Gobind Singh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Takht_Sri_Patna_Sahib.jpg/800px-Takht_Sri_Patna_Sahib.jpg",
    description: "One of the five Takhts of Sikhism, this Gurudwara commemorates the birthplace of the tenth Sikh Guru, Guru Gobind Singh Ji. It is a spectacular marble structure.",
    coordinates: { lat: 25.6110, lng: 85.2323 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid/Warm",
      timings: "02:30 AM - 10:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Patna (18 km)",
      nearestRailway: "Patna Sahib Station (1 km)",
      busConnectivity: "City buses connect Patna Junction to Patna Sahib (Chowk)"
    },

    externalLinks: {
      officialBooking: "https://www.takhatpatnasahib.com/",
      googleMaps: "https://goo.gl/maps/patnasahib"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps available at main entrance. Lifts available for upper floors."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Morning Ardas" },
      { time: "07:00 AM", activity: "Museum of Guru's Relics" },
      { time: "12:00 PM", activity: "Langar (Community Kitchen)" }
    ],

    foodGuide: [
      { name: "Guru Ka Langar", type: "Pilgrim", specialty: "Free Vegetarian Meal", rating: 4.9 },
      { name: "Harilal's", type: "City", specialty: "Sweets & Snacks", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "NMCH Patna"
    }
  },
  {
    id: 508,
    name: "Vishnupad Temple",
    slug: "vishnupad-temple",
    state: "Bihar",
    category: "Spiritual",
    badge: "Footprint of Lord Vishnu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vishnupad_Temple_Gaya.jpg/800px-Vishnupad_Temple_Gaya.jpg",
    description: "Located on the banks of the Falgu River in Gaya, this temple houses a 40cm long footprint of Lord Vishnu stamped in basalt. It is a major center for Pind Daan rituals.",
    coordinates: { lat: 24.7801, lng: 85.0080 },

    essentials: {
      bestTime: "Sep-Oct (Pitru Paksha) or Winter",
      weather: "Hot/Dry",
      timings: "06:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Gaya (10 km)",
      nearestRailway: "Gaya Junction (4 km)",
      busConnectivity: "Auto-rickshaws available from Gaya station"
    },

    externalLinks: {
      officialBooking: "https://tourism.bihar.gov.in/",
      googleMaps: "https://goo.gl/maps/vishnupad"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Temple complex has narrow lanes and steps. Crowded during Pind Daan."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Pind Daan Rituals (Falgu River)" },
      { time: "09:00 AM", activity: "Vishnupad Darshan" },
      { time: "11:00 AM", activity: "Akshay Vat Visit" }
    ],

    foodGuide: [
      { name: "Pramod Laddu Bhandar", type: "Sweet Shop", specialty: "Gaya Tilkut & Anarsa", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Pilgrim Hospital Gaya"
    }
  },
  {
    id: 509,
    name: "Vikramshila Ruins",
    slug: "vikramshila-ruins",
    state: "Bihar",
    category: "Heritage",
    badge: "Ancient Buddhist Learning Center",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vikramshila_Stupa.jpg/800px-Vikramshila_Stupa.jpg",
    description: "Established by King Dharmapala, Vikramshila was one of the two most important centers of learning in India during the Pala Empire, alongside Nalanda. It is famous for its massive central stupa.",
    coordinates: { lat: 25.3287, lng: 87.2307 },

    essentials: {
      bestTime: "November to February",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Bagdogra (210 km) or Patna (280 km)",
      nearestRailway: "Kahalgaon (13 km)",
      busConnectivity: "Accessible via Bhagalpur (40 km)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/vikramshila"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Ruins are spread out on grassy terrain. The main stupa has high terraces with steps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Central Stupa Walk" },
      { time: "12:00 PM", activity: "Visit ASI Museum" },
      { time: "02:00 PM", activity: "Return to Bhagalpur" }
    ],

    foodGuide: [
      { name: "Hotel Rajhans (Bhagalpur)", type: "City", specialty: "North Indian", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "Sadar Hospital Bhagalpur"
    }
  },
  {
    id: 510,
    name: "Golghar",
    slug: "golghar-patna",
    state: "Bihar",
    category: "Heritage",
    badge: "Icon of Patna",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Golghar_Patna.jpg/800px-Golghar_Patna.jpg",
    description: "A massive beehive-shaped granary built by Captain John Garstin in 1786. It was intended to store grain during famines and offers a panoramic view of Patna city and the Ganges river.",
    coordinates: { lat: 25.6175, lng: 85.1376 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Entry: "Free (Park)",
        Climb: "Currently closed for renovation (Check locally)"
      }
    },

    transport: {
      nearestAirport: "Patna (7 km)",
      nearestRailway: "Patna Junction (3 km)",
      busConnectivity: "Located near Gandhi Maidan, central connectivity"
    },

    externalLinks: {
      officialBooking: "https://tourism.bihar.gov.in/",
      googleMaps: "https://goo.gl/maps/golghar"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Garden area is accessible. The top of the dome is reached only via 145 steep steps (no lift)."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Garden Walk & Photography" },
      { time: "05:00 PM", activity: "Laser Light Show (Evening)" },
      { time: "06:00 PM", activity: "Boat Drive at Gandhi Ghat (Nearby)" }
    ],

    foodGuide: [
      { name: "Bansi Vihar", type: "City", specialty: "South Indian Dosa", rating: 4.5 },
      { name: "Kapil Dev's Elevens", type: "Fine Dining", specialty: "Multi-Cuisine", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-345-6112",
      nearestHospital: "PMCH Patna"
    }
  }
]; 
 
