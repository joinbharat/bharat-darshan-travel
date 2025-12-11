/**
 * MIZORAM_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Mizoram Tourism Department
 * - Permits: ILP (Inner Line Permit) is MANDATORY for all Indian tourists.
 * (Foreigners need to register at the nearest police station).
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const MIZORAM_PLACES = [
  // --- HILL STATIONS & CULTURE ---
  {
    id: 1801,
    name: "Reiek Tlang",
    slug: "reiek-tlang",
    state: "Mizoram",
    category: "Hill Stations",
    badge: "Mizo Heritage Village",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Reiek_Peak.jpg/800px-Reiek_Peak.jpg",
    description: "A prominent peak offering a 360-degree view of the surrounding valleys and Bangladesh plains. The base features a model Heritage Village showcasing traditional Mizo huts.",
    coordinates: { lat: 23.6967, lng: 92.6953 },

    essentials: {
      bestTime: "September to March (Anthurium Festival in Sept)",
      weather: "Windy/Pleasant",
      timings: "09:00 AM - 05:00 PM (Heritage Village)",
      entryFee: {
        Entry: "₹20",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Lengpui (35 km)",
      nearestRailway: "Silchar (170 km)",
      busConnectivity: "Taxi/Sumo from Aizawl (29 km - 1 hour drive)"
    },

    externalLinks: {
      officialBooking: "https://tourism.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/reiek"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The heritage village is accessible, but the trek to the peak (30 mins) involves steep rocky steps."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Explore Heritage Village" },
      { time: "10:30 AM", activity: "Trek to Reiek Peak" },
      { time: "01:00 PM", activity: "Picnic at the summit" }
    ],

    foodGuide: [
      { name: "Reiek Tourist Resort", type: "Govt Lodge", specialty: "Mizo Bai (Veg Stew)", rating: 4.2 },
      { name: "Local Tea Huts", type: "Stall", specialty: "Red Tea & Kurtai", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "Civil Hospital Aizawl"
    }
  },
  {
    id: 1802,
    name: "Solomon's Temple",
    slug: "solomons-temple",
    state: "Mizoram",
    category: "Spiritual",
    badge: "Architectural Marvel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Solomon%27s_Temple_Aizawl.jpg/800px-Solomon%27s_Temple_Aizawl.jpg",
    description: "A grand church in Aizawl built by the Kohhran Thianghlim group. It is constructed with white marble and can accommodate thousands. It is a symbol of modern Mizo architecture.",
    coordinates: { lat: 23.7432, lng: 92.7068 },

    essentials: {
      bestTime: "All Year",
      weather: "City/Pleasant",
      timings: "09:00 AM - 04:00 PM (Weekdays)",
      entryFee: {
        Entry: "Free",
        Permit: "ILP Required for Mizoram entry"
      }
    },

    transport: {
      nearestAirport: "Lengpui (30 km)",
      nearestRailway: "Silchar (170 km)",
      busConnectivity: "Located in Chawlhhmun, Aizawl. Accessible by city taxi."
    },

    externalLinks: {
      officialBooking: "https://tourism.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/solomonstemple"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The compound is paved and spacious. Ramps are available."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Church Exterior Photography" },
      { time: "11:00 AM", activity: "Prayer Hall Visit" },
      { time: "12:00 PM", activity: "Visit nearby KV Paradise" }
    ],

    foodGuide: [
      { name: "Chopstyx", type: "City", specialty: "Chinese & Tibetan", rating: 4.4 },
      { name: "Zote Bakery", type: "Bakery", specialty: "Fresh Bread & Cakes", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "Civil Hospital Aizawl"
    }
  },

  // --- NATURE & FALLS ---
  {
    id: 1803,
    name: "Vantawng Falls",
    slug: "vantawng-falls",
    state: "Mizoram",
    category: "Nature",
    badge: "Highest Waterfall in Mizoram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Vantawng_Falls_Mizoram.jpg/800px-Vantawng_Falls_Mizoram.jpg",
    description: "Cascading down from a height of 750 feet, this two-tiered waterfall is set amidst dense bamboo forests. It is best viewed from a specially constructed viewing tower.",
    coordinates: { lat: 23.2952, lng: 92.7628 },

    essentials: {
      bestTime: "September to January",
      weather: "Forest/Cool",
      timings: "09:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹10",
        Permit: "ILP Required"
      }
    },

    transport: {
      nearestAirport: "Lengpui (140 km)",
      nearestRailway: "Silchar (250 km)",
      busConnectivity: "Drive from Aizawl to Thenzawl (90 km), then 5 km to falls"
    },

    externalLinks: {
      officialBooking: "https://tourism.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/vantawng"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The viewing tower area is accessible by car, but the tower itself has steps."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Drive to Thenzawl" },
      { time: "11:00 AM", activity: "Viewpoint Photography" },
      { time: "01:00 PM", activity: "Visit Handloom Centre Thenzawl" }
    ],

    foodGuide: [
      { name: "Tourist Lodge Thenzawl", type: "Govt", specialty: "Simple Rice & Curry", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "CHC Thenzawl"
    }
  },
  {
    id: 1804,
    name: "Phawngpui (Blue Mountain)",
    slug: "phawngpui-blue-mountain",
    state: "Mizoram",
    category: "Nature",
    badge: "Highest Peak in Mizoram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Phawngpui_Blue_Mountain.jpg/800px-Phawngpui_Blue_Mountain.jpg",
    description: "Known as the 'Blue Mountain', it is the highest peak in the state (2157m) and a National Park. It is famous for its exotic flora like orchids and rhododendrons, and the elusive Blyth's Tragopan.",
    coordinates: { lat: 22.6316, lng: 93.0425 },

    essentials: {
      bestTime: "October to April (Peak blooming season)",
      weather: "Cold/Windy",
      timings: "Sunrise to Sunset (Trekking)",
      entryFee: {
        Entry: "₹20",
        Camera: "₹50",
        Guide: "Mandatory (₹500-1000)"
      }
    },

    transport: {
      nearestAirport: "Lengpui (300 km)",
      nearestRailway: "Silchar (400 km)",
      busConnectivity: "Reach Sangau village by Sumo (South East Mizoram)"
    },

    externalLinks: {
      officialBooking: "https://forest.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/phawngpui"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Strictly a trekking and adventure destination. Rugged terrain."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Start Trek from Sangau" },
      { time: "11:00 AM", activity: "Reach Peak (Thlazuang Kham)" },
      { time: "03:00 PM", activity: "Return to Base Camp" }
    ],

    foodGuide: [
      { name: "Farpui Homestay", type: "Village", specialty: "Boiled Vegetables & Rice", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "Lawngtlai District Hospital"
    }
  },

  // --- LAKES & CULTURE ---
  {
    id: 1805,
    name: "Tam Dil Lake",
    slug: "tam-dil-lake",
    state: "Mizoram",
    category: "Nature",
    badge: "Lake of Mustard",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tam_Dil_Lake_Mizoram.jpg/800px-Tam_Dil_Lake_Mizoram.jpg",
    description: "A natural lake situated near Saitual village. 'Tam Dil' means 'Lake of Mustard'. It is a serene picnic spot offering boating facilities and surrounded by tropical forests.",
    coordinates: { lat: 23.7369, lng: 92.9476 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "08:00 AM - 05:00 PM",
      entryFee: {
        Entry: "₹10",
        Boating: "₹50-100"
      }
    },

    transport: {
      nearestAirport: "Lengpui (95 km)",
      nearestRailway: "Silchar (180 km)",
      busConnectivity: "Accessible by taxi/Sumo from Aizawl (85 km)"
    },

    externalLinks: {
      officialBooking: "https://tourism.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/tamdil"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The area around the tourist lodge and boat jetty is relatively flat."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Pedal Boating" },
      { time: "12:00 PM", activity: "Picnic Lunch by the Lake" },
      { time: "02:00 PM", activity: "Walk in the surrounding forest" }
    ],

    foodGuide: [
      { name: "Tam Dil Tourist Lodge", type: "Govt", specialty: "Fish Fry", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "CHC Saitual"
    }
  },
  {
    id: 1806,
    name: "Aizawl State Museum",
    slug: "mizoram-state-museum",
    state: "Mizoram",
    category: "Heritage",
    badge: "Cultural Repository",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mizoram_State_Museum.jpg/800px-Mizoram_State_Museum.jpg",
    description: "Located in the heart of Aizawl, this museum provides insight into Mizo history, culture, and traditions. It displays textiles, weapons, musical instruments, and natural history specimens.",
    coordinates: { lat: 23.7271, lng: 92.7176 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "10:00 AM - 04:00 PM (Closed Sundays & Mondays)",
      entryFee: {
        Indian: "₹20",
        Foreigner: "₹50",
        Camera: "₹20"
      }
    },

    transport: {
      nearestAirport: "Lengpui (30 km)",
      nearestRailway: "Silchar (170 km)",
      busConnectivity: "Located at McDonald's Hill, Zarkawt. Walkable from city center."
    },

    externalLinks: {
      officialBooking: "https://artandculture.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/aizawlmuseum"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The museum building has ramps and is generally accessible."
    },

    routePlan: [
      { time: "11:00 AM", activity: "Ethnography Gallery Tour" },
      { time: "12:30 PM", activity: "Textile Gallery" },
      { time: "01:30 PM", activity: "Lunch at Zarkawt" }
    ],

    foodGuide: [
      { name: "Red Pepper", type: "Restaurant", specialty: "Momo & Noodles", rating: 4.3 },
      { name: "Magnolia", type: "Fine Dining", specialty: "Indian/Continental", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "Civil Hospital Aizawl"
    }
  },
  {
    id: 1807,
    name: "Hmuifang Tlang",
    slug: "hmuifang-tlang",
    state: "Mizoram",
    category: "Hill Stations",
    badge: "Misty Mountain Peak",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hmuifang_Tourist_Resort.jpg/800px-Hmuifang_Tourist_Resort.jpg",
    description: "A scenic peak located 50km from Aizawl. It is covered in virgin forests reserved since the days of the Mizo chiefs. It hosts the annual Thalfavang Kut festival.",
    coordinates: { lat: 23.4533, lng: 92.7533 },

    essentials: {
      bestTime: "November (Festival) or Winter",
      weather: "Misty/Cold",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Lengpui (80 km)",
      nearestRailway: "Silchar (220 km)",
      busConnectivity: "Taxi/Sumo from Aizawl (1.5 hours)"
    },

    externalLinks: {
      officialBooking: "https://tourism.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/hmuifang"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The tourist resort area is flat and grassy. The surrounding forest trails are not."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Picnic on the grassy slopes" },
      { time: "12:00 PM", activity: "Nature Walk in Virgin Forests" },
      { time: "03:00 PM", activity: "View of Cliffs" }
    ],

    foodGuide: [
      { name: "Hmuifang Tourist Resort", type: "Govt", specialty: "Chowmein & Tea", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "Civil Hospital Aizawl (50 km)"
    }
  },
  {
    id: 1808,
    name: "Palak Dil",
    slug: "palak-dil",
    state: "Mizoram",
    category: "Nature",
    badge: "Largest Lake in Mizoram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Palak_Dil_Lake.jpg/800px-Palak_Dil_Lake.jpg",
    description: "Located in the remote Mara Autonomous District Council (MADC) area, this oval-shaped lake is rich in biodiversity and aquatic birds. It is surrounded by tropical evergreen forests.",
    coordinates: { lat: 22.2036, lng: 92.8947 },

    essentials: {
      bestTime: "November to March",
      weather: "Humid",
      timings: "Sunrise to Sunset",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Lengpui (370 km)",
      nearestRailway: "Silchar (450 km)",
      busConnectivity: "Reach Saiha by Sumo, then hire 4x4 to Phura village"
    },

    externalLinks: {
      officialBooking: "https://madc.mizoram.gov.in/",
      googleMaps: "https://goo.gl/maps/palakdil"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Very remote location with limited infrastructure. Rough roads."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Bird Watching" },
      { time: "11:00 AM", activity: "Lake Circumambulation" },
      { time: "01:00 PM", activity: "Village Visit (Phura)" }
    ],

    foodGuide: [
      { name: "Local Mara Stalls", type: "Village", specialty: "Smoked Meat & Rice", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "District Hospital Siaha"
    }
  },
  {
    id: 1809,
    name: "Lunglei",
    slug: "lunglei-bridge",
    state: "Mizoram",
    category: "Nature",
    badge: "Bridge of Rock",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Lunglei_Town_View.jpg/800px-Lunglei_Town_View.jpg",
    description: "The second largest city in Mizoram, named after a bridge-like rock found in the area. It offers cooler weather than Aizawl and scenic spots like Khawnglung Wildlife Sanctuary nearby.",
    coordinates: { lat: 22.8671, lng: 92.7655 },

    essentials: {
      bestTime: "October to April",
      weather: "Pleasant",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Lengpui (170 km)",
      nearestRailway: "Silchar (300 km)",
      busConnectivity: "Regular Helicopter service and Sumo from Aizawl"
    },

    externalLinks: {
      officialBooking: "https://lunglei.nic.in/",
      googleMaps: "https://goo.gl/maps/lunglei"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Town area is accessible. Viewpoints may have uneven ground."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Saikuti Hall (Museum)" },
      { time: "11:00 AM", activity: "Thuamluaia Mual (Park)" },
      { time: "04:00 PM", activity: "Sunset at Serkawn" }
    ],

    foodGuide: [
      { name: "Lunglei Hotel", type: "City", specialty: "Mizo/Chinese", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "Civil Hospital Lunglei"
    }
  },
  {
    id: 1810,
    name: "Murlen National Park",
    slug: "murlen-national-park",
    state: "Mizoram",
    category: "Wildlife",
    badge: "Amazon of Mizoram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mizoram_Forest_Canopy.jpg/800px-Mizoram_Forest_Canopy.jpg",
    description: "Located near the Indo-Myanmar border, this park is known for its thick canopy that hardly lets sunlight touch the ground. It is home to the Hoolock Gibbon, Himalayan Black Bear, and leopards.",
    coordinates: { lat: 23.6394, lng: 93.3031 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid/Dark Forest",
      timings: "06:00 AM - 04:00 PM",
      entryFee: {
        Entry: "₹20",
        Guide: "₹500 (Mandatory)"
      }
    },

    transport: {
      nearestAirport: "Lengpui (245 km)",
      nearestRailway: "Silchar (350 km)",
      busConnectivity: "Reach Champhai by Sumo, then taxi to park gate"
    },

    externalLinks: {
      officialBooking: "https://champhai.nic.in/",
      googleMaps: "https://goo.gl/maps/murlen"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Dense jungle with no paved paths. Adventure destination only."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Trek into Dense Forest" },
      { time: "10:00 AM", activity: "Bird Watching" },
      { time: "01:00 PM", activity: "Visit Prtse (Camping Site)" }
    ],

    foodGuide: [
      { name: "Champhai Tourist Lodge", type: "Govt", specialty: "Meals", rating: 3.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "0389-2333475",
      nearestHospital: "District Hospital Champhai"
    }
  }
]; 
