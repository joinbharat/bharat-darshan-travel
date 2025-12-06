export const GUJARAT_PLACES = [
  // --- HERITAGE ---
  {
    id: 201,
    name: "Statue of Unity",
    state: "Gujarat",
    category: "Heritage",
    badge: "Tallest Statue in World",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&q=80",
    description: "Standing at 182 meters, the Statue of Unity is the world's tallest statue, dedicated to Sardar Vallabhbhai Patel. Located on the Sadhu Bet island near the Sardar Sarovar Dam, it offers a viewing gallery with breathtaking views of the Satpura and Vindhya mountain ranges.",
    
    essentials: {
      bestTime: "October to February",
      weather: "Humid",
      entryFee: { Basic: "₹150", ViewingGallery: "₹380", Express: "₹1030" },
      timings: "08:00 AM - 06:00 PM (Closed on Mondays)"
    },

    routePlan: [
      { time: "08:30 AM", activity: "Entry via Ekta Nagar (Electric Bus)" },
      { time: "09:30 AM", activity: "Museum & Exhibition Hall" },
      { time: "11:00 AM", activity: "High-Speed Lift to Viewing Gallery" },
      { time: "07:30 PM", activity: "Laser Light & Sound Show" }
    ],

    foodGuide: [
      { name: "Ekta Food Court", type: "Multi-Cuisine", specialty: "Global Street Food", rating: 4.2 },
      { name: "Ramada Encore", type: "Luxury", specialty: "Gujarati Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-233-7951",
      nearestHospital: "Sub-District Hospital, Garudeshwar"
    }
  },
  {
    id: 202,
    name: "Laxmi Vilas Palace",
    state: "Gujarat",
    category: "Heritage",
    badge: "4x Bigger than Buckingham Palace",
    image: "https://images.unsplash.com/photo-1705648604907-797768e826b6?auto=format&fit=crop&q=80",
    description: "The residence of the Royal family of Baroda, this palace is a stunning example of Indo-Saracenic architecture. It houses a remarkable collection of sculptures and armory, and the Darbar Hall features a Venetian mosaic floor.",
    
    essentials: {
      bestTime: "Winter",
      weather: "Pleasant",
      entryFee: { Indian: "₹200", Foreigner: "₹400", AudioGuide: "Included" },
      timings: "09:30 AM - 05:00 PM (Closed Mondays)"
    },

    routePlan: [
      { time: "10:00 AM", activity: "Audio Guided Tour (Start)" },
      { time: "11:00 AM", activity: "Darbar Hall & Coronation Room" },
      { time: "12:30 PM", activity: "Maharaja Fateh Singh Museum" }
    ],

    foodGuide: [
      { name: "Peshwa Restaurant", type: "Fine Dining", specialty: "Maratha Cuisine", rating: 4.6 },
      { name: "Kalyan Cafe", type: "Snacks", specialty: "Sev Usal", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "SSG Hospital, Vadodara"
    }
  },
  {
    id: 203,
    name: "Rani Ki Vav",
    state: "Gujarat",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://images.unsplash.com/photo-1643209351239-254d3101c519?auto=format&fit=crop&q=80",
    description: "A queen's stepwell located in Patan. It is designed as an inverted temple highlighting the sanctity of water. The seven levels of stairs are adorned with over 500 principal sculptures.",
    
    essentials: {
      bestTime: "Winter",
      weather: "Sunny",
      entryFee: { Indian: "₹40", Foreigner: "₹600", Camera: "Free" },
      timings: "08:30 AM - 07:00 PM"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Upper Corridors Photography" },
      { time: "10:00 AM", activity: "Descent to Vishnu Avatar Sculptures" },
      { time: "11:30 AM", activity: "Patola Saree Museum (Nearby)" }
    ],

    foodGuide: [
      { name: "The Grand Raveta", type: "Family", specialty: "Kathiyawadi Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "General Hospital, Patan"
    }
  },
  {
    id: 204,
    name: "Sun Temple, Modhera",
    state: "Gujarat",
    category: "Heritage",
    badge: "ASI Monument of National Importance",
    image: "https://images.unsplash.com/photo-1695618414441-2c09265882b0?auto=format&fit=crop&q=80",
    description: "Built in 1026 AD by King Bhimdev I, this temple is dedicated to the Solar Deity. The temple complex features a stunning Rama Kund (stepped tank) and is designed so the first rays of the sun fall on the main idol.",
    
    essentials: {
      bestTime: "October to March",
      weather: "Warm",
      entryFee: { Indian: "₹25", Foreigner: "₹300", LightShow: "Free" },
      timings: "07:00 AM - 06:00 PM (Light Show: 7 PM)"
    },

    routePlan: [
      { time: "04:00 PM", activity: "Surya Kund Architecture Walk" },
      { time: "05:00 PM", activity: "Sabha Mandap (Assembly Hall)" },
      { time: "07:00 PM", activity: "3D Projection Mapping Show" }
    ],

    foodGuide: [
      { name: "Toran Cafeteria", type: "Budget", specialty: "Thepla & Chai", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Becharaji Hospital"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 205,
    name: "Somnath Temple",
    state: "Gujarat",
    category: "Spiritual",
    badge: "First Jyotirlinga",
    image: "https://images.unsplash.com/photo-1620760467144-889417835158?auto=format&fit=crop&q=80",
    description: "The Somnath temple located in Prabhas Patan is believed to be the first among the twelve Jyotirlinga shrines of Shiva. Reconstructed several times, the current structure is in the Chalukya style.",
    
    essentials: {
      bestTime: "Winter",
      weather: "Coastal/Windy",
      entryFee: { Indian: "Free", Foreigner: "Free", Shoes: "Free" },
      timings: "06:00 AM - 10:00 PM"
    },

    routePlan: [
      { time: "07:00 AM", activity: "Morning Aarti" },
      { time: "10:00 AM", activity: "Old Somnath Temple (Ahilyabai)" },
      { time: "08:00 PM", activity: "Sound & Light Show (Sea side)" }
    ],

    foodGuide: [
      { name: "The Grand Daksh", type: "Pure Veg", specialty: "Gujarati Thali", rating: 4.5 },
      { name: "Somnath Trust Bhojanalaya", type: "Pilgrim", specialty: "Prasad Meal", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Govt Hospital Veraval"
    }
  },
  {
    id: 206,
    name: "Dwarkadhish Temple",
    state: "Gujarat",
    category: "Spiritual",
    badge: "Char Dham Yatra",
    image: "https://images.unsplash.com/photo-1662483866299-8d740523db42?auto=format&fit=crop&q=80",
    description: "Dwarka is one of the Char Dham pilgrimage sites. The main temple, Jagat Mandir, is dedicated to Lord Krishna. The 5-story building is supported by 72 pillars and is known for its intricate carvings.",
    
    essentials: {
      bestTime: "August to March",
      weather: "Coastal",
      entryFee: { Indian: "Free", Foreigner: "Free", VIP: "N/A" },
      timings: "6:30 AM-1 PM, 5 PM-9:30 PM"
    },

    routePlan: [
      { time: "07:00 AM", activity: "Mangla Aarti (Morning)" },
      { time: "09:00 AM", activity: "Sudama Setu Walk" },
      { time: "05:00 PM", activity: "Flag Changing Ceremony (Dhwaja)" }
    ],

    foodGuide: [
      { name: "Shrinath Dining Hall", type: "Vegetarian", specialty: "Unlimited Thali", rating: 4.4 },
      { name: "Kantu Chorafali", type: "Street Food", specialty: "Fafda Jalebi", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "General Hospital Dwarka"
    }
  },

  // --- WILDLIFE & NATURE ---
  {
    id: 207,
    name: "Gir National Park",
    state: "Gujarat",
    category: "Wildlife",
    badge: "Only Home of Asiatic Lions",
    image: "https://images.unsplash.com/photo-1549487933-286a6eb27393?auto=format&fit=crop&q=80",
    description: "Gir is the last abode of the Asiatic Lion. The park's rugged terrain and dry deciduous forests are also home to leopards, sambar deer, and over 300 species of birds.",
    
    essentials: {
      bestTime: "Dec to March",
      weather: "Dry/Hot",
      entryFee: { Permit: "₹800-1000", Gypsy: "₹2000+", Guide: "₹400" },
      timings: "6 AM-9 AM, 3 PM-6 PM (Closed Mid-June to Oct)"
    },

    routePlan: [
      { time: "05:45 AM", activity: "Assemble at Sinh Sadan" },
      { time: "06:30 AM", activity: "Morning Safari (Route 4 or 6)" },
      { time: "04:00 PM", activity: "Devalia Interpretation Zone (Guaranteed Sighting)" }
    ],

    foodGuide: [
      { name: "Gir Pride Resort", type: "Buffet", specialty: "Kathiyawadi Dinner", rating: 4.5 },
      { name: "Terracotta Restaurant", type: "Local", specialty: "Bajra Rotla & Ringan Bhartha", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1926 (Forest Dept)",
      nearestHospital: "Civil Hospital Sasan Gir"
    }
  },
  {
    id: 208,
    name: "Rann of Kutch",
    state: "Gujarat",
    category: "Beaches", // Using Beaches category for Sand/Salt Desert
    badge: "World's Largest Salt Desert",
    image: "https://images.unsplash.com/photo-1546252924-4f40f005086b?auto=format&fit=crop&q=80",
    description: "The Great Rann of Kutch is a vast salt marsh in the Thar Desert. During the Rann Utsav (Nov-Feb), it transforms into a cultural hub with luxury tents, folk music, and moonlit desert walks.",
    
    essentials: {
      bestTime: "Nov to Feb (Rann Utsav)",
      weather: "Cold Nights",
      entryFee: { Permit: "₹100 (Adult)", Child: "₹50", Vehicle: "₹50" },
      timings: "Best at Sunrise/Sunset"
    },

    routePlan: [
      { time: "04:30 PM", activity: "Camel Cart Ride to White Desert" },
      { time: "06:00 PM", activity: "Sunset Photography" },
      { time: "08:00 PM", activity: "Cultural Folk Dance Show" }
    ],

    foodGuide: [
      { name: "Rann Utsav Dining Hall", type: "Buffet", specialty: "Kutchi Cuisine", rating: 4.6 },
      { name: "Hotel Prince (Bhuj)", type: "City Dining", specialty: "Dabeli", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "GK General Hospital, Bhuj"
    }
  },
  {
    id: 209,
    name: "Shivrajpur Beach",
    state: "Gujarat",
    category: "Beaches",
    badge: "Blue Flag Certified",
    image: "https://images.unsplash.com/photo-1627063469145-207a97c8340d?auto=format&fit=crop&q=80",
    description: "Located near Dwarka, Shivrajpur is a pristine Blue Flag certified beach known for its clear blue waters and white sands. It offers activities like scuba diving and snorkeling.",
    
    essentials: {
      bestTime: "October to April",
      weather: "Sunny/Breezy",
      entryFee: { Adult: "₹30", Parking: "₹50", Scuba: "₹2500+" },
      timings: "08:00 AM - 07:00 PM"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Snorkeling / Scuba Session" },
      { time: "11:00 AM", activity: "Relax at Beach Shacks" },
      { time: "05:00 PM", activity: "Sunset Walk near Lighthouse" }
    ],

    foodGuide: [
      { name: "Blue Coriander", type: "Seaside", specialty: "Mocktails & Snacks", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "General Hospital Dwarka"
    }
  },

  // --- HILL STATION ---
  {
    id: 210,
    name: "Saputara",
    state: "Gujarat",
    category: "Hill Stations",
    badge: "Only Hill Station of Gujarat",
    image: "https://images.unsplash.com/photo-1625407001479-7973059635ce?auto=format&fit=crop&q=80",
    description: "Perched in the Dang district forest, Saputara is Gujarat's only hill station. It offers cool climate, tribal culture, and attractions like the Artist Village and Saputara Lake.",
    
    essentials: {
      bestTime: "Monsoon & Winter",
      weather: "Misty/Cool",
      entryFee: { Lake: "Free", Boating: "₹140", Ropeway: "₹80" },
      timings: "08:00 AM - 06:00 PM"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Saputara Lake Boating" },
      { time: "11:00 AM", activity: "Table Point via Ropeway" },
      { time: "05:30 PM", activity: "Sunset Point" }
    ],

    foodGuide: [
      { name: "Sugar N Spice", type: "Casual", specialty: "Pav Bhaji", rating: 4.2 },
      { name: "Patang Restaurant", type: "View", specialty: "Thali", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Community Health Center, Saputara"
    }
  }
];