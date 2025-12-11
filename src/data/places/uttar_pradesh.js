/**
 * UTTAR_PRADESH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: UP Tourism, ASI & Temple Trusts
 * - Taj Mahal: Official ASI Pricing (Includes Mausoleum charges)
 * - Wildlife: Dudhwa Tiger Reserve Official Data
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const UTTAR_PRADESH_PLACES = [
  // --- HERITAGE & ICONS ---
  {
    id: 2701,
    name: "Taj Mahal",
    slug: "taj-mahal-agra",
    state: "Uttar Pradesh",
    category: "Heritage",
    badge: "Seven Wonders of the World",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Taj_Mahal_Agra_India.jpg/800px-Taj_Mahal_Agra_India.jpg",
    description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife. It is the jewel of Muslim art in India.",
    coordinates: { lat: 27.1751, lng: 78.0421 },

    essentials: {
      bestTime: "October to March",
      weather: "Hot/Cold Extremes",
      timings: "30 mins before sunrise to 30 mins before sunset (Closed Fridays)",
      entryFee: {
        Indian: "₹50 + ₹200 (Mausoleum)",
        Foreigner: "₹1100 + ₹200 (Mausoleum)",
        NightView: "₹510 (Full Moon only)"
      }
    },

    transport: {
      nearestAirport: "Agra (12 km) or Delhi (230 km)",
      nearestRailway: "Agra Cantt (6 km)",
      busConnectivity: "Electric buses/Golf carts from parking to gate"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/tajmahal"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps available up to the main platform. The main mausoleum interior has steps."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Sunrise View" },
      { time: "08:00 AM", activity: "Walk through Charbagh Gardens" },
      { time: "10:00 AM", activity: "Visit Taj Museum (Inside Complex)" }
    ],

    foodGuide: [
      { name: "Pinch of Spice", type: "Fine Dining", specialty: "Dal Makhani", rating: 4.5 },
      { name: "Joney's Place", type: "Cafe", specialty: "Banana Lassi", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "S.N. Medical College"
    }
  },
  {
    id: 2702,
    name: "Agra Fort",
    slug: "agra-fort",
    state: "Uttar Pradesh",
    category: "Heritage",
    badge: "Walled City of Mughals",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Agra_Fort.jpg/800px-Agra_Fort.jpg",
    description: "A UNESCO World Heritage site and the main residence of the emperors of the Mughal Dynasty until 1638. It contains splendid palaces like the Jahangiri Mahal and Khas Mahal.",
    coordinates: { lat: 27.1795, lng: 78.0211 },

    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹50",
        Foreigner: "₹650",
        Children: "Free (below 15)"
      }
    },

    transport: {
      nearestAirport: "Agra (10 km)",
      nearestRailway: "Agra Fort Station (2 km)",
      busConnectivity: "Auto-rickshaws available from Taj Mahal (2.5 km)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/agrafort"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Most areas are accessible via ramps, though some slopes are steep."
    },

    routePlan: [
      { time: "02:00 PM", activity: "Amar Singh Gate Entry" },
      { time: "03:30 PM", activity: "Musamman Burj (View of Taj)" },
      { time: "05:00 PM", activity: "Diwan-i-Aam Hall" }
    ],

    foodGuide: [
      { name: "Dasaprakash", type: "Family", specialty: "South Indian", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "District Hospital Agra"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 2703,
    name: "Kashi Vishwanath Temple",
    slug: "kashi-vishwanath-varanasi",
    state: "Uttar Pradesh",
    category: "Spiritual",
    badge: "Golden Temple of Varanasi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kashi_Vishwanath_Corridor_Varanasi.jpg/800px-Kashi_Vishwanath_Corridor_Varanasi.jpg",
    description: "Dedicated to Lord Shiva, this is one of the most famous Hindu temples. The new Kashi Vishwanath Corridor connects the temple directly to the Ganga ghats, offering a seamless spiritual experience.",
    coordinates: { lat: 25.3109, lng: 83.0107 },

    essentials: {
      bestTime: "October to March",
      weather: "Humid/Crowded",
      timings: "03:00 AM - 11:00 PM (Mangala Aarti: 3-4 AM)",
      entryFee: {
        General: "Free",
        SugamDarshan: "₹300 (Online)",
        MangalaAarti: "₹350-500"
      }
    },

    transport: {
      nearestAirport: "Varanasi (Lal Bahadur Shastri) - 25 km",
      nearestRailway: "Varanasi Junction (5 km)",
      busConnectivity: "E-rickshaws restricted near Godowlia; short walk required"
    },

    externalLinks: {
      officialBooking: "https://shrikashivishwanath.org/",
      googleMaps: "https://goo.gl/maps/kashi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The new corridor has escalators, ramps, and wheelchairs available for elderly/disabled."
    },

    routePlan: [
      { time: "05:00 AM", activity: "Morning Darshan via Corridor" },
      { time: "07:00 AM", activity: "Boat Ride to Dashashwamedh Ghat" },
      { time: "09:00 AM", activity: "Breakfast (Kachori Sabzi)" }
    ],

    foodGuide: [
      { name: "Blue Lassi", type: "Iconic", specialty: "Malai Lassi", rating: 4.6 },
      { name: "Ram Bhandar", type: "Breakfast", specialty: "Kachori Jalebi", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "Kabir Chaura Hospital"
    }
  },
  {
    id: 2704,
    name: "Ganga Aarti (Dashashwamedh Ghat)",
    slug: "ganga-aarti-varanasi",
    state: "Uttar Pradesh",
    category: "Spiritual",
    badge: "Divine Evening Ritual",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Varanasi_Ghats.jpg/800px-Varanasi_Ghats.jpg",
    description: "A spectacular daily ritual where priests offer prayers to the River Ganga with large oil lamps, accompanied by chants and music. It is a mesmerizing spiritual experience.",
    coordinates: { lat: 25.3076, lng: 83.0104 },

    essentials: {
      bestTime: "All Year (Dev Deepawali is peak)",
      weather: "Crowded",
      timings: "Starts at Sunset (Approx 6:30 PM - 7:00 PM)",
      entryFee: {
        Viewing: "Free (Steps)",
        BoatSeat: "₹200-500"
      }
    },

    transport: {
      nearestAirport: "Varanasi (25 km)",
      nearestRailway: "Varanasi Junction (4 km)",
      busConnectivity: "Walk from Godowlia Crossing"
    },

    externalLinks: {
      officialBooking: "https://uptourism.gov.in/",
      googleMaps: "https://goo.gl/maps/dashashwamedh"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The ghat steps are steep and crowded. Viewing from a boat is easier but boarding is tricky."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Arrive to secure a spot" },
      { time: "06:30 PM", activity: "Watch Ganga Aarti" },
      { time: "07:30 PM", activity: "Dinner at Rooftop Cafe" }
    ],

    foodGuide: [
      { name: "Dolphin Restaurant", type: "Rooftop", specialty: "Veg Thali with View", rating: 4.1 },
      { name: "Kashi Chat Bhandar", type: "Street", specialty: "Tamatar Chaat", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "Marwari Hospital"
    }
  },
  {
    id: 2705,
    name: "Ram Ki Paidi (Ayodhya)",
    slug: "ram-ki-paidi-ayodhya",
    state: "Uttar Pradesh",
    category: "Spiritual",
    badge: "Birthplace of Lord Ram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ram_ki_Paidi_Ayodhya.jpg/800px-Ram_ki_Paidi_Ayodhya.jpg",
    description: "A series of ghats on the bank of River Saryu. The area is beautifully illuminated at night and is the site for the grand Deepotsav celebrations. The Ram Mandir is nearby.",
    coordinates: { lat: 26.7996, lng: 82.2037 },

    essentials: {
      bestTime: "October to March (Deepotsav in Oct/Nov)",
      weather: "Warm",
      timings: "24 Hours (Aarti at 6 PM)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Maharishi Valmiki Intl Airport (10 km)",
      nearestRailway: "Ayodhya Dham Junction (3 km)",
      busConnectivity: "E-buses and E-rickshaws available throughout the city"
    },

    externalLinks: {
      officialBooking: "https://srjbtkshetra.org/",
      googleMaps: "https://goo.gl/maps/ramkipaidi"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The promenade along Ram Ki Paidi is paved and accessible. Ramps available at new ghats."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Ram Janmabhoomi Mandir Darshan" },
      { time: "06:00 PM", activity: "Saryu Aarti at Ghats" },
      { time: "07:30 PM", activity: "Laser Show at Ram Ki Paidi" }
    ],

    foodGuide: [
      { name: "Makhan-Malai Restaurant", type: "Hotel", specialty: "Veg Deluxe Thali", rating: 4.0 },
      { name: "Ram Prasadam", type: "Pilgrim", specialty: "Free Temple Food", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "District Hospital Ayodhya"
    }
  },
  {
    id: 2706,
    name: "Triveni Sangam (Prayagraj)",
    slug: "triveni-sangam",
    state: "Uttar Pradesh",
    category: "Spiritual",
    badge: "Confluence of 3 Rivers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kumbh_Mela_Triveni_Sangam.jpg/800px-Kumbh_Mela_Triveni_Sangam.jpg",
    description: "The sacred confluence of the Ganga, Yamuna, and the invisible Saraswati rivers. It is the site of the Maha Kumbh Mela, the largest human gathering on Earth.",
    coordinates: { lat: 25.4326, lng: 81.8890 },

    essentials: {
      bestTime: "Jan-Feb (Magh Mela/Kumbh)",
      weather: "Sunny/Windy",
      timings: "24 Hours (Boating: 5 AM - 6 PM)",
      entryFee: {
        Entry: "Free",
        Boat: "₹50-100 (Shared), ₹1000 (Private)"
      }
    },

    transport: {
      nearestAirport: "Prayagraj (15 km)",
      nearestRailway: "Prayagraj Junction (6 km)",
      busConnectivity: "Auto/Rickshaw to Sangam Nose or Fort area"
    },

    externalLinks: {
      officialBooking: "https://kumbh.gov.in/",
      googleMaps: "https://goo.gl/maps/sangam"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The ghats are sandy and muddy. Boats are traditional wooden rowboats, hard to access for disabled."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Holy Dip at Sangam" },
      { time: "08:00 AM", activity: "Boat Ride to Yamuna Bank" },
      { time: "10:00 AM", activity: "Hanuman Mandir (Reclining Idol)" }
    ],

    foodGuide: [
      { name: "Netram Moolchand", type: "City", specialty: "Kachori Sabzi", rating: 4.6 },
      { name: "El Chico", type: "Fine Dining", specialty: "Continental", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "S.R.N. Hospital"
    }
  },

  // --- HERITAGE & ARCHITECTURE ---
  {
    id: 2707,
    name: "Bara Imambara",
    slug: "bara-imambara-lucknow",
    state: "Uttar Pradesh",
    category: "Heritage",
    badge: "Gravity-Defying Hall",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bara_Imambara_Lucknow.jpg/800px-Bara_Imambara_Lucknow.jpg",
    description: "Built by Asaf-ud-Daula in 1784, this complex includes the Bhool Bhulaiya (Labyrinth), a stepwell, and a mosque. The central hall is the largest arched hall in the world without pillar support.",
    coordinates: { lat: 26.8692, lng: 80.9129 },

    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      timings: "06:00 AM - 05:00 PM (Closed Mondays)",
      entryFee: {
        Indian: "₹50",
        Foreigner: "₹500",
        Guide: "₹100-200 (Recommended for Labyrinth)"
      }
    },

    transport: {
      nearestAirport: "Lucknow (CCS Intl) - 15 km",
      nearestRailway: "Lucknow Charbagh (5 km)",
      busConnectivity: "Metro/Auto from anywhere in Lucknow"
    },

    externalLinks: {
      officialBooking: "https://uptourism.gov.in/",
      googleMaps: "https://goo.gl/maps/imambara"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Grounds are accessible. The Bhool Bhulaiya (Labyrinth) on the roof involves narrow, dark stairs."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Central Hall Tour" },
      { time: "11:00 AM", activity: "Bhool Bhulaiya Maze" },
      { time: "12:30 PM", activity: "Rumi Darwaza (Outside)" }
    ],

    foodGuide: [
      { name: "Tunday Kababi", type: "Iconic", specialty: "Galouti Kebab", rating: 4.8 },
      { name: "Idris Biryani", type: "Local", specialty: "Mutton Biryani", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "KGMU Trauma Centre"
    }
  },
  {
    id: 2708,
    name: "Sarnath (Dhamek Stupa)",
    slug: "sarnath",
    state: "Uttar Pradesh",
    category: "Heritage",
    badge: "Buddha's First Sermon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Dhamekh_Stupa_Sarnath.jpg/800px-Dhamekh_Stupa_Sarnath.jpg",
    description: "The site where Lord Buddha delivered his first sermon after enlightenment. It features the massive Dhamek Stupa, the Ashoka Pillar (National Emblem source), and an archaeological museum.",
    coordinates: { lat: 25.3811, lng: 83.0214 },

    essentials: {
      bestTime: "October to March",
      weather: "Pleasant",
      timings: "06:00 AM - 06:00 PM (Museum closed Fridays)",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300",
        Museum: "₹5"
      }
    },

    transport: {
      nearestAirport: "Varanasi (25 km)",
      nearestRailway: "Varanasi Junction (10 km)",
      busConnectivity: "Auto/Cab from Varanasi city (30 mins)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/sarnath"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The archaeological park has flat, paved pathways suitable for wheelchairs."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Dhamek Stupa & Ruins" },
      { time: "11:00 AM", activity: "Sarnath Museum (Ashoka Capital)" },
      { time: "01:00 PM", activity: "Mulagandha Kuti Vihara" }
    ],

    foodGuide: [
      { name: "Highway Inn", type: "Restaurant", specialty: "North Indian", rating: 4.0 },
      { name: "Green Hut", type: "Garden", specialty: "Veg Thali", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "Apex Hospital"
    }
  },
  {
    id: 2709,
    name: "Fatehpur Sikri",
    slug: "fatehpur-sikri",
    state: "Uttar Pradesh",
    category: "Heritage",
    badge: "Ghost City of Victory",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Buland_Darwaza_Fatehpur_Sikri.jpg/800px-Buland_Darwaza_Fatehpur_Sikri.jpg",
    description: "The short-lived capital of the Mughal Empire built by Akbar. It is a UNESCO World Heritage site known for the Buland Darwaza (Gate of Victory) and the tomb of Salim Chishti.",
    coordinates: { lat: 27.0945, lng: 77.6679 },

    essentials: {
      bestTime: "October to March",
      weather: "Hot",
      timings: "06:00 AM - 06:00 PM",
      entryFee: {
        Indian: "₹50",
        Foreigner: "₹610",
        Bus: "₹10 (Parking to Gate)"
      }
    },

    transport: {
      nearestAirport: "Agra (40 km)",
      nearestRailway: "Agra Cantt (36 km)",
      busConnectivity: "Regular UPSRTC buses from Agra (Idgah Bus Stand)"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/fatehpursikri"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Ramps are available, but the courtyard is vast and made of sandstone which can be hot. Assistance recommended."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Buland Darwaza" },
      { time: "10:00 AM", activity: "Salim Chishti Tomb" },
      { time: "11:30 AM", activity: "Panch Mahal & Diwan-i-Khas" }
    ],

    foodGuide: [
      { name: "Ganpati Resort", type: "Highway", specialty: "Lunch Buffet", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "CHC Fatehpur Sikri"
    }
  },

  // --- WILDLIFE ---
  {
    id: 2710,
    name: "Dudhwa National Park",
    slug: "dudhwa-national-park",
    state: "Uttar Pradesh",
    category: "Wildlife",
    badge: "Terai Ecosystem",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Swamp_Deer_Dudhwa.jpg/800px-Swamp_Deer_Dudhwa.jpg",
    description: "Located on the Indo-Nepal border, this park is famous for the Swamp Deer (Barasingha), Tigers, and Rhinos. It represents the lush Terai ecosystem.",
    coordinates: { lat: 28.4877, lng: 80.6480 },

    essentials: {
      bestTime: "November to May (Closed in Monsoon)",
      weather: "Forest/Humid",
      timings: "06:00 AM - 10:00 AM, 03:00 PM - 06:00 PM",
      entryFee: {
        Entry: "₹100 (Indian)",
        Jeep: "₹2000-3000 (Full vehicle)",
        Guide: "₹300"
      }
    },

    transport: {
      nearestAirport: "Lucknow (230 km)",
      nearestRailway: "Dudhwa (4 km) or Palia Kalan (10 km)",
      busConnectivity: "Buses from Lucknow to Palia, then taxi"
    },

    externalLinks: {
      officialBooking: "https://upecotourism.in/",
      googleMaps: "https://goo.gl/maps/dudhwa"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Jungle safaris involve climbing into high jeeps."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Morning Jeep Safari" },
      { time: "10:00 AM", activity: "Elephant Ride (Subject to availability)" },
      { time: "04:00 PM", activity: "Bird Watching at Banke Tal" }
    ],

    foodGuide: [
      { name: "Dudhwa Tiger Resort", type: "Resort", specialty: "Buffet", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-103-1060",
      nearestHospital: "CHC Palia Kalan"
    }
  }
]; 
