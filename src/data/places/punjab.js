/**
 * PUNJAB_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Punjab Tourism, SGPC & ASI
 * - Border Ceremony: BSF Official Timings (Winter/Summer vary)
 * - Museums: Virasat-e-Khalsa & Partition Museum Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const PUNJAB_PLACES = [
  // --- SPIRITUAL & HERITAGE ---
  {
    id: 2101,
    name: "Golden Temple (Sri Harmandir Sahib)",
    slug: "golden-temple-amritsar",
    state: "Punjab",
    category: "Spiritual",
    badge: "Holiest Sikh Shrine",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Golden_Temple_India.jpg/800px-Golden_Temple_India.jpg",
    description: "The holiest Gurudwara of Sikhism, plated with gold and surrounded by the Sarovar (holy tank). It represents human brotherhood and equality, serving free meals to 100,000 people daily.",
    coordinates: { lat: 31.6200, lng: 74.8765 },

    essentials: {
      bestTime: "October to March (Guru Nanak Gurpurab in Nov)",
      weather: "Extreme Summers/Cold Winters",
      timings: "24 Hours (Langar is 24x7)",
      entryFee: {
        Entry: "Free",
        ShoeKeeping: "Free"
      }
    },

    transport: {
      nearestAirport: "Sri Guru Ram Dass Jee Intl Airport (12 km)",
      nearestRailway: "Amritsar Junction (2 km)",
      busConnectivity: "Free yellow buses run from station to temple"
    },

    externalLinks: {
      officialBooking: "https://sgpc.net/",
      googleMaps: "https://goo.gl/maps/goldentemple"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Wheelchairs provided at entrance. Lifts available for museum. Periphery is paved marble."
    },

    routePlan: [
      { time: "04:00 AM", activity: "Palki Sahib Ceremony" },
      { time: "06:00 AM", activity: "Darshan & Parikrama" },
      { time: "11:00 AM", activity: "Langar (Community Kitchen)" }
    ],

    foodGuide: [
      { name: "Guru Ka Langar", type: "Pilgrim", specialty: "Dal, Roti & Kheer (Free)", rating: 5.0 },
      { name: "Kesar Da Dhaba", type: "City Legend", specialty: "Dal Makhani & Paratha", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Guru Ram Das Hospital"
    }
  },
  {
    id: 2102,
    name: "Jallianwala Bagh",
    slug: "jallianwala-bagh",
    state: "Punjab",
    category: "Heritage",
    badge: "National Memorial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Jallianwala_Bagh_Memorial.jpg/800px-Jallianwala_Bagh_Memorial.jpg",
    description: "A public garden that houses a memorial of national importance, established in 1951 to commemorate the massacre of peaceful celebrators by British forces on April 13, 1919.",
    coordinates: { lat: 31.6206, lng: 74.8801 },

    essentials: {
      bestTime: "All Year",
      weather: "Warm",
      timings: "06:30 AM - 07:30 PM",
      entryFee: {
        Entry: "Free",
        LightShow: "Free (Evening)"
      }
    },

    transport: {
      nearestAirport: "Amritsar (13 km)",
      nearestRailway: "Amritsar Junction (3 km)",
      busConnectivity: "Walking distance (2 mins) from Golden Temple"
    },

    externalLinks: {
      officialBooking: "https://amritsar.nic.in/",
      googleMaps: "https://goo.gl/maps/jallianwala"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Pathways are flat and paved. The narrow entrance passage is historic but accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Martyrs' Well & Bullet Marks" },
      { time: "11:00 AM", activity: "Museum Gallery" },
      { time: "12:00 PM", activity: "Eternal Flame" }
    ],

    foodGuide: [
      { name: "Brother's Dhaba", type: "City", specialty: "Amritsari Kulcha", rating: 4.4 },
      { name: "Gianiji's Lassi", type: "Sweet Shop", specialty: "Pedewali Lassi", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Civil Hospital Amritsar"
    }
  },
  {
    id: 2103,
    name: "Attari-Wagah Border",
    slug: "wagah-border",
    state: "Punjab",
    category: "Heritage",
    badge: "Beating Retreat Ceremony",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wagah_Border_Ceremony.jpg/800px-Wagah_Border_Ceremony.jpg",
    description: "The international border between India and Pakistan. Famous for the daily 'Beating Retreat' ceremony where soldiers from both nations perform a high-energy parade.",
    coordinates: { lat: 31.6047, lng: 74.5707 },

    essentials: {
      bestTime: "All Year (Arrive by 3 PM)",
      weather: "Open Air/Hot",
      timings: "Ceremony starts 4:15 PM (Winter) / 5:15 PM (Summer)",
      entryFee: {
        Entry: "Free",
        IDProof: "Mandatory (No bags allowed)"
      }
    },

    transport: {
      nearestAirport: "Amritsar (35 km)",
      nearestRailway: "Amritsar (30 km)",
      busConnectivity: "Hop-on Hop-off bus or Taxi from Amritsar city"
    },

    externalLinks: {
      officialBooking: "https://punjabtourism.punjab.gov.in/",
      googleMaps: "https://goo.gl/maps/wagah"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Special seating area reserved for elderly and disabled near the gate."
    },

    routePlan: [
      { time: "02:30 PM", activity: "Depart from Amritsar" },
      { time: "03:30 PM", activity: "Security Check & Seating" },
      { time: "05:00 PM", activity: "Beating Retreat Ceremony" }
    ],

    foodGuide: [
      { name: "Sarhad", type: "Theme Restaurant", specialty: "Lahori & Amritsari Fusion", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "BSF Hospital Attari"
    }
  },

  // --- CULTURE & MUSEUMS ---
  {
    id: 2104,
    name: "Virasat-e-Khalsa",
    slug: "virasat-e-khalsa",
    state: "Punjab",
    category: "Heritage",
    badge: "World Class Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Virasat-e-Khalsa_Anandpur_Sahib.jpg/800px-Virasat-e-Khalsa_Anandpur_Sahib.jpg",
    description: "Located in Anandpur Sahib, this architectural marvel celebrates 500 years of Sikh history. It is the most visited museum in the Indian subcontinent, known for its immersive audio-visuals.",
    coordinates: { lat: 31.2334, lng: 76.5020 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "10:00 AM - 04:30 PM (Closed Mondays)",
      entryFee: {
        Entry: "Free (Pass required)",
        AudioGuide: "Free"
      }
    },

    transport: {
      nearestAirport: "Chandigarh (85 km)",
      nearestRailway: "Anandpur Sahib (2 km)",
      busConnectivity: "Regular buses from Chandigarh and Ludhiana"
    },

    externalLinks: {
      officialBooking: "http://virasatekhalsa.in/",
      googleMaps: "https://goo.gl/maps/virasat"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Fully accessible with elevators, ramps, and wheelchairs for rent."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Collect Pass & Audio Guide" },
      { time: "10:30 AM", activity: "Boat Building & Flower Building Galleries" },
      { time: "01:00 PM", activity: "Cafeteria Lunch" }
    ],

    foodGuide: [
      { name: "Virasat Cafeteria", type: "Museum Cafe", specialty: "Snacks", rating: 4.0 },
      { name: "Keshgarh Sahib Langar", type: "Pilgrim", specialty: "Community Meal", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Civil Hospital Anandpur Sahib"
    }
  },
  {
    id: 2105,
    name: "Partition Museum",
    slug: "partition-museum-amritsar",
    state: "Punjab",
    category: "Heritage",
    badge: "World's First Partition Museum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Town_Hall_Amritsar_Partition_Museum.jpg/800px-Town_Hall_Amritsar_Partition_Museum.jpg",
    description: "Housed in the historic Town Hall of Amritsar, this museum is a repository of stories, materials, and documents related to the 1947 Partition of India and Pakistan.",
    coordinates: { lat: 31.6264, lng: 74.8770 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:00 AM - 06:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹10",
        Foreigner: "₹250",
        Child: "Free"
      }
    },

    transport: {
      nearestAirport: "Amritsar (12 km)",
      nearestRailway: "Amritsar Junction (2 km)",
      busConnectivity: "Located on Heritage Street, walking distance from Golden Temple"
    },

    externalLinks: {
      officialBooking: "https://www.partitionmuseum.org/",
      googleMaps: "https://goo.gl/maps/partitionmuseum"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Elevators and ramps are available for all galleries."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Gallery of Migration" },
      { time: "03:30 PM", activity: "Oral History Section" },
      { time: "05:00 PM", activity: "Tree of Hope" }
    ],

    foodGuide: [
      { name: "Kanha Sweets", type: "City", specialty: "Puri Chana", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Civil Hospital"
    }
  },

  // --- FORTS & PALACES ---
  {
    id: 2106,
    name: "Qila Mubarak (Bathinda)",
    slug: "qila-mubarak-bathinda",
    state: "Punjab",
    category: "Heritage",
    badge: "Oldest Surviving Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Qila_Mubarak_Bathinda.jpg/800px-Qila_Mubarak_Bathinda.jpg",
    description: "Built in the 6th century AD, this is the oldest surviving fort in India. Razia Sultana, the first female ruler of Delhi, was imprisoned here.",
    coordinates: { lat: 30.2110, lng: 74.9455 },

    essentials: {
      bestTime: "October to March",
      weather: "Dry/Hot",
      timings: "09:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹20",
        Foreigner: "₹200"
      }
    },

    transport: {
      nearestAirport: "Bathinda (25 km)",
      nearestRailway: "Bathinda Junction (2 km)",
      busConnectivity: "Located in the heart of Bathinda city"
    },

    externalLinks: {
      officialBooking: "https://bathinda.nic.in/",
      googleMaps: "https://goo.gl/maps/qilamubarak"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The fort entrance is accessible, but the ramparts and upper levels have steep, uneven brick steps."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Fort Entrance & Gurudwara" },
      { time: "11:30 AM", activity: "Rani Mahal View" },
      { time: "01:00 PM", activity: "Explore Bathinda Market" }
    ],

    foodGuide: [
      { name: "Mano Dhaba", type: "Local", specialty: "Tandoori Chicken", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Civil Hospital Bathinda"
    }
  },
  {
    id: 2107,
    name: "Sheesh Mahal (Patiala)",
    slug: "sheesh-mahal-patiala",
    state: "Punjab",
    category: "Heritage",
    badge: "Palace of Mirrors",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sheesh_Mahal_Patiala.jpg/800px-Sheesh_Mahal_Patiala.jpg",
    description: "Built by Maharaja Narinder Singh, this palace is famous for its hall of mirrors and a suspension bridge (Lakshman Jhula) over an artificial lake. It houses a medal gallery.",
    coordinates: { lat: 30.3235, lng: 76.3930 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "10:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹20",
        Foreigner: "₹100"
      }
    },

    transport: {
      nearestAirport: "Chandigarh (60 km)",
      nearestRailway: "Patiala (5 km)",
      busConnectivity: "Auto/Rickshaw from Patiala Bus Stand"
    },

    externalLinks: {
      officialBooking: "https://patiala.nic.in/",
      googleMaps: "https://goo.gl/maps/sheeshmahal"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Gardens and ground floor museum are accessible."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Medal Gallery Museum" },
      { time: "11:30 AM", activity: "Walk across Suspension Bridge" },
      { time: "01:00 PM", activity: "Visit Baradari Gardens (Nearby)" }
    ],

    foodGuide: [
      { name: "Nagpal Restaurant", type: "City", specialty: "Patiala Chicken", rating: 4.4 },
      { name: "Gopal's", type: "Sweets", specialty: "Patisa", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Rajindra Hospital Patiala"
    }
  },

  // --- NATURE & WILDLIFE ---
  {
    id: 2108,
    name: "Harike Wetland (Bird Sanctuary)",
    slug: "harike-wetland",
    state: "Punjab",
    category: "Nature",
    badge: "Largest Wetland in North India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Harike_Barrage.jpg/800px-Harike_Barrage.jpg",
    description: "Situated at the confluence of the Beas and Sutlej rivers, this Ramsar site is a haven for migratory birds and the rare Indus River Dolphin.",
    coordinates: { lat: 31.1506, lng: 74.9509 },

    essentials: {
      bestTime: "November to February (Migratory Birds)",
      weather: "Foggy/Cold",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Amritsar (60 km)",
      nearestRailway: "Tarn Taran (35 km)",
      busConnectivity: "Located on NH-54 (Amritsar-Bathinda highway)"
    },

    externalLinks: {
      officialBooking: "https://punjabtourism.punjab.gov.in/",
      googleMaps: "https://goo.gl/maps/harike"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Viewing points on the barrage are accessible by car."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Birdwatching at Barrage" },
      { time: "09:00 AM", activity: "Boat Ride (Subject to water level)" },
      { time: "11:00 AM", activity: "Visit Gurudwara Nanaksar" }
    ],

    foodGuide: [
      { name: "Highway Dhabas", type: "Roadside", specialty: "Sarson da Saag & Makki di Roti", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Civil Hospital Tarn Taran"
    }
  },

  // --- ROYAL HERITAGE ---
  {
    id: 2109,
    name: "Jagatjit Palace (Kapurthala)",
    slug: "jagatjit-palace",
    state: "Punjab",
    category: "Heritage",
    badge: "Versailles of Punjab",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sainik_School_Kapurthala_Palace.jpg/800px-Sainik_School_Kapurthala_Palace.jpg",
    description: "Built in 1908 by Maharaja Jagatjit Singh, this palace is modelled after the Palace of Versailles. It currently houses the Sainik School but the architecture is breathtaking.",
    coordinates: { lat: 31.3736, lng: 75.3942 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "09:00 AM - 05:00 PM (Exterior view/Sunday Open)",
      entryFee: { Entry: "Free (Permission needed for interior)" }
    },

    transport: {
      nearestAirport: "Jalandhar (Adampur) - 30 km",
      nearestRailway: "Kapurthala (3 km)",
      busConnectivity: "20km drive from Jalandhar"
    },

    externalLinks: {
      officialBooking: "https://kapurthala.gov.in/",
      googleMaps: "https://goo.gl/maps/jagatjit"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Gardens and front facade viewing area are flat."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Palace Exterior & Gardens" },
      { time: "12:00 PM", activity: "Moorish Mosque (Nearby)" },
      { time: "01:30 PM", activity: "Lunch in Jalandhar" }
    ],

    foodGuide: [
      { name: "Haveli (Jalandhar)", type: "Theme Restaurant", specialty: "Punjabi Culture & Food", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Civil Hospital Kapurthala"
    }
  },
  {
    id: 2110,
    name: "Anandpur Sahib (Takht Keshgarh)",
    slug: "anandpur-sahib",
    state: "Punjab",
    category: "Spiritual",
    badge: "Birthplace of Khalsa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Takht_Sri_Keshgarh_Sahib.jpg/800px-Takht_Sri_Keshgarh_Sahib.jpg",
    description: "One of the five Takhts of Sikhism, situated on the banks of the Sutlej river. It is where Guru Gobind Singh Ji initiated the Khalsa Panth in 1699. Famous for Hola Mohalla festival.",
    coordinates: { lat: 31.2356, lng: 76.4990 },

    essentials: {
      bestTime: "March (Hola Mohalla) or Winter",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Chandigarh (80 km)",
      nearestRailway: "Anandpur Sahib (1 km)",
      busConnectivity: "Direct buses from Delhi/Chandigarh"
    },

    externalLinks: {
      officialBooking: "https://sgpc.net/",
      googleMaps: "https://goo.gl/maps/anandpur"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Lifts available for the main darbar hall. Langar hall is accessible."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Morning Prayer" },
      { time: "07:00 AM", activity: "Shastra Darshan (Weapons of Guru)" },
      { time: "09:00 AM", activity: "Virasat-e-Khalsa Visit" }
    ],

    foodGuide: [
      { name: "Takht Langar", type: "Pilgrim", specialty: "Community Meal", rating: 5.0 },
      { name: "Pehalwan Dhaba", type: "Highway", specialty: "Paratha", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-0500",
      nearestHospital: "Sri Guru Teg Bahadur Hospital"
    }
  }
]; 
