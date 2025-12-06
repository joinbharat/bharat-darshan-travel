export const RAJASTHAN_PLACES = [
  // --- HERITAGE ---
  {
    id: 101,
    name: "Amer Fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "UNESCO World Heritage Site",
    // Wikimedia Commons: Amer Fort View
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amber_Fort_Jaipur_Rajasthan_India.jpg/800px-Amber_Fort_Jaipur_Rajasthan_India.jpg",
    description: "Amer Fort is a masterpiece of Rajput architecture, constructed of red sandstone and marble. Known for its artistic style elements, the fort overlooks Maota Lake. The Sheesh Mahal (Mirror Palace) is the highlight, known for its exquisite mirror mosaics.",
    
    essentials: {
      bestTime: "October to March",
      weather: "Warm & Dry",
      entryFee: { Indian: "₹100", Foreigner: "₹500", Student: "₹10" },
      timings: "08:00 AM - 05:30 PM (Night Tourism: 7-9 PM)"
    },

    routePlan: [
      { time: "08:30 AM", activity: "Parking at Maota Lake (Take Jeep/Elephant)" },
      { time: "09:30 AM", activity: "Enter via Suraj Pol (Sun Gate)" },
      { time: "10:30 AM", activity: "Sheesh Mahal (Mirror Palace) - Guide Recommended" },
      { time: "12:00 PM", activity: "Tunnel walk to Jaigarh Fort (Optional)" }
    ],

    foodGuide: [
      { name: "1135 AD", type: "Royal Fine Dining", specialty: "Lal Maas (Inside Fort)", rating: 4.7 },
      { name: "Kokum Bistro", type: "Casual Cafe", specialty: "Pasta & Coffee", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "SMS Hospital, Jaipur"
    }
  },
  {
    id: 102,
    name: "City Palace, Udaipur",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Mewar Royal Legacy",
    // Wikimedia Commons: Udaipur City Palace
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Udaipur_City_Palace.jpg/800px-Udaipur_City_Palace.jpg",
    description: "A palace complex situated in the city of Udaipur. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty. It offers a panoramic view of Lake Pichola and its surrounding islands.",
    
    essentials: {
      bestTime: "September to March",
      weather: "Pleasant",
      entryFee: { Indian: "₹300", Foreigner: "₹300", Camera: "₹200" },
      timings: "09:30 AM - 05:30 PM"
    },

    routePlan: [
      { time: "09:30 AM", activity: "Enter via Badi Pol (Big Gate)" },
      { time: "11:00 AM", activity: "Crystal Gallery Visit" },
      { time: "01:00 PM", activity: "Boat Ride from Jetty to Jagmandir" }
    ],

    foodGuide: [
      { name: "Ambrai", type: "Lakeside Dining", specialty: "Mewari Thali with Lake View", rating: 4.8 },
      { name: "Upre by 1559 AD", type: "Rooftop", specialty: "Laal Maas", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "MB Government Hospital, Udaipur"
    }
  },
  {
    id: 103,
    name: "Mehrangarh Fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Museum of the Year",
    // Wikimedia Commons: Mehrangarh Fort
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mehrangarh_Fort_Jodhpur_Rajasthan_India.jpg/800px-Mehrangarh_Fort_Jodhpur_Rajasthan_India.jpg",
    description: "One of the largest forts in India, Mehrangarh rises 410 feet above the city of Jodhpur. Its walls are thick and imposing, and inside there are several palaces known for their intricate carvings and expansive courtyards.",
    
    essentials: {
      bestTime: "October to March",
      weather: "Sunny",
      entryFee: { Indian: "₹100", Foreigner: "₹600", Elevator: "₹50" },
      timings: "09:00 AM - 05:00 PM"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Take Elevator to Top (Save energy)" },
      { time: "10:30 AM", activity: "Phool Mahal & Moti Mahal" },
      { time: "12:00 PM", activity: "Chamunda Mata Temple (Fort End)" },
      { time: "01:00 PM", activity: "Walk down to Rao Jodha Desert Park" }
    ],

    foodGuide: [
      { name: "Indique", type: "Rooftop", specialty: "Butter Chicken with Fort View", rating: 4.6 },
      { name: "Gypsy Dining Hall", type: "Vegetarian", specialty: "Famous Rajasthani Thali", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "MDM Hospital, Jodhpur"
    }
  },
  {
    id: 104,
    name: "Chittorgarh Fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Largest Fort in India",
    // Wikimedia Commons: Padmini Palace
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chittorgarh_Fort_Padmini_Palace.jpg/800px-Chittorgarh_Fort_Padmini_Palace.jpg",
    description: "A UNESCO World Heritage Site and the largest fort in India. It sprawls over a hill 180 m (590.6 ft) in height spread over an area of 280 ha (691.9 acres) above the plains of the valley drained by the Berach River.",
    
    essentials: {
      bestTime: "Winter",
      weather: "Windy",
      entryFee: { Indian: "₹40", Foreigner: "₹600", Vehicle: "₹50" },
      timings: "09:00 AM - 06:00 PM"
    },

    routePlan: [
      { time: "08:00 AM", activity: "Vijay Stambh (Tower of Victory)" },
      { time: "10:00 AM", activity: "Padmini Palace (Jauhar Sthal)" },
      { time: "12:00 PM", activity: "Meera Temple" }
    ],

    foodGuide: [
      { name: "Chokhi Dhani Chittor", type: "Traditional", specialty: "Dal Baati Churma", rating: 4.3 },
      { name: "Hotel Pratap Palace", type: "Multi-Cuisine", specialty: "Gatte ki Sabzi", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "District Hospital, Chittorgarh"
    }
  },

  // --- SPIRITUAL ---
  {
    id: 105,
    name: "Brahma Temple, Pushkar",
    state: "Rajasthan",
    category: "Spiritual",
    badge: "Only Brahma Temple",
    // Wikimedia Commons: Pushkar Lake
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pushkar_Lake_Rajasthan.jpg/800px-Pushkar_Lake_Rajasthan.jpg",
    description: "One of the very few existing temples dedicated to the Hindu creator-god Brahma in India and remains the most prominent among them. It is situated close to the sacred Pushkar Lake.",
    
    essentials: {
      bestTime: "October to March",
      weather: "Desert",
      entryFee: { Indian: "Free", Foreigner: "Free", Shoes: "₹10" },
      timings: "06:00 AM - 08:00 PM"
    },

    routePlan: [
      { time: "06:00 AM", activity: "Holy Dip at Pushkar Lake Ghats" },
      { time: "07:30 AM", activity: "Brahma Temple Darshan" },
      { time: "09:00 AM", activity: "Savitri Mata Ropeway" }
    ],

    foodGuide: [
      { name: "Halwai Gali", type: "Street Food", specialty: "Malpua & Rabri", rating: 4.9 },
      { name: "The Laughing Buddha", type: "Cafe", specialty: "Falafel & Smoothies", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Pushkar Govt Hospital"
    }
  },
  {
    id: 106,
    name: "Karni Mata Temple",
    state: "Rajasthan",
    category: "Spiritual",
    badge: "Temple of Rats",
    // Wikimedia Commons: Karni Mata Entrance
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Deshnok_Karni_Mata_Temple_Entrance.jpg/800px-Deshnok_Karni_Mata_Temple_Entrance.jpg",
    description: "Famous for the approximately 25,000 black rats that live, and are revered, in the temple. These holy rats are called kabbas, and many people travel great distances to pay their respects.",
    
    essentials: {
      bestTime: "Winter",
      weather: "Hot",
      entryFee: { Indian: "Free", Foreigner: "Free", Camera: "₹30" },
      timings: "04:00 AM - 10:00 PM"
    },

    routePlan: [
      { time: "05:00 AM", activity: "Mangala Aarti (Less Crowd)" },
      { time: "06:00 AM", activity: "Spotting White Rat (Lucky)" },
      { time: "07:00 AM", activity: "Prasad Distribution" }
    ],

    foodGuide: [
      { name: "Deshnoke Dhabas", type: "Local", specialty: "Mirchi Vada", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "PBM Hospital, Bikaner"
    }
  },

  // --- NATURE / WILDLIFE / HILL STATION ---
  {
    id: 107,
    name: "Mount Abu",
    state: "Rajasthan",
    category: "Hill Stations",
    badge: "Only Hill Station in Rajasthan",
    // Wikimedia Commons: Nakki Lake
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nakki_Lake_Mount_Abu.jpg/800px-Nakki_Lake_Mount_Abu.jpg",
    description: "The only hill station in Rajasthan, located in the Aravalli Range. It offers a cool climate, waterfalls, and the famous Nakki Lake. While it doesn't have heavy snow, it gets frosty in winter!",
    
    essentials: {
      bestTime: "Year Round",
      weather: "Cool/Cold",
      entryFee: { Indian: "Free (City)", Foreigner: "Free", NakkiBoating: "₹100" },
      timings: "Always Open"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Dilwara Jain Temples (Marble Art)" },
      { time: "04:00 PM", activity: "Boating at Nakki Lake" },
      { time: "06:00 PM", activity: "Sunset Point Trek" }
    ],

    foodGuide: [
      { name: "Mulberry Tree", type: "Multi-Cuisine", specialty: "Sizzlers", rating: 4.5 },
      { name: "Arbuda Restaurant", type: "View", specialty: "Gujarati Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Global Hospital Mount Abu"
    }
  },
  {
    id: 108,
    name: "Ranthambore National Park",
    state: "Rajasthan",
    category: "Wildlife",
    badge: "Project Tiger Reserve",
    // Wikimedia Commons: Tiger in Ranthambore
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tiger_in_Ranthambhore_National_Park.jpg/800px-Tiger_in_Ranthambhore_National_Park.jpg",
    description: "One of the biggest and most renowned national parks in Northern India. The park is majorly famous for its tigers and is one of the best locations in India to see the majestic predators in their natural habitat.",
    
    essentials: {
      bestTime: "October to June",
      weather: "Dry Forest",
      entryFee: { Indian: "₹1900 (Gypsy)", Foreigner: "₹4000 (Gypsy)", Canter: "₹1300" },
      timings: "06:00 AM - 10:00 AM (Morning Safari)"
    },

    routePlan: [
      { time: "05:30 AM", activity: "Report at Booking Office" },
      { time: "06:30 AM", activity: "Zone 1-5 Safari (Best for Tigers)" },
      { time: "10:00 AM", activity: "Visit Ranthambore Fort inside Park" }
    ],

    foodGuide: [
      { name: "Oberoi Vanyavilas", type: "Luxury", specialty: "Gala Dinner", rating: 4.9 },
      { name: "Manisha Restaurant", type: "Budget", specialty: "Parathas", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Sawai Madhopur District Hospital"
    }
  },
  {
    id: 109,
    name: "Jaisalmer Desert (Sam Dunes)",
    state: "Rajasthan",
    category: "Beaches", // Used for "Sand Dunes/Beaches" category
    badge: "Thar Desert Experience",
    // Wikimedia Commons: Sam Sand Dunes
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sam_Sand_Dunes_Jaisalmer.jpg/800px-Sam_Sand_Dunes_Jaisalmer.jpg",
    description: "Experience the vast Thar Desert with Camel Safaris and Jeep bashing. The Sam Sand Dunes are famous for their shifting sands and spectacular sunsets.",
    
    essentials: {
      bestTime: "November to March",
      weather: "Extreme Desert",
      entryFee: { Indian: "Free (Dunes)", Foreigner: "Free", Safari: "₹500+" },
      timings: "Best at Sunset (4 PM - 7 PM)"
    },

    routePlan: [
      { time: "04:00 PM", activity: "Jeep Dune Bashing" },
      { time: "05:30 PM", activity: "Camel Ride to Sunset Point" },
      { time: "07:30 PM", activity: "Kalbeliya Dance & Dinner at Camp" }
    ],

    foodGuide: [
      { name: "Desert Camp Dining", type: "Buffet", specialty: "Ker Sangri & Bajra Roti", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Jawahar Hospital Jaisalmer"
    }
  },
  {
    id: 110,
    name: "Kumbhalgarh Fort",
    state: "Rajasthan",
    category: "Heritage",
    badge: "Great Wall of India",
    // Wikimedia Commons: Kumbhalgarh Walls
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kumbhalgarh_Fort_Walls.jpg/800px-Kumbhalgarh_Fort_Walls.jpg",
    description: "Built on a hilltop 1,100 m above sea level, the wall of Kumbhalgarh is the second-longest continuous wall in the world (after the Great Wall of China), stretching 36 km.",
    
    essentials: {
      bestTime: "July to February",
      weather: "Windy",
      entryFee: { Indian: "₹40", Foreigner: "₹600", LightShow: "₹100" },
      timings: "09:00 AM - 06:00 PM"
    },

    routePlan: [
      { time: "10:00 AM", activity: "Climb to Badal Mahal (Highest Point)" },
      { time: "01:00 PM", activity: "Neelkanth Mahadev Temple" },
      { time: "06:45 PM", activity: "Sound & Light Show" }
    ],

    foodGuide: [
      { name: "The Aodhi", type: "Heritage", specialty: "Mewari Cuisine", rating: 4.6 },
      { name: "Kumbhalgarh Forest Retreat", type: "View", specialty: "Veg Platter", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "RK Hospital, Rajsamand"
    }
  }
];