export const KERALA_PLACES = [
  // --- HILL STATIONS ---
  {
    id: 301,
    name: "Munnar",
    state: "Kerala",
    category: "Hill Stations",
    badge: "Kashmir of South India",
    // Wikimedia: Tea Gardens
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Munnar_hillstation_kerala.jpg/800px-Munnar_hillstation_kerala.jpg",
    description: "Munnar is a town in the Western Ghats mountain range in Kerala. It is famous for its rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is a home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.",
    
    essentials: {
      bestTime: "September to March",
      weather: "Misty/Cold",
      entryFee: { NationalPark: "₹200", TeaMuseum: "₹125", Boating: "₹500" },
      timings: "National Park: 7:30 AM - 4:00 PM (Closed Feb-Mar for calving)"
    },

    routePlan: [
      { time: "08:00 AM", activity: "Eravikulam National Park (Book Online)" },
      { time: "11:00 AM", activity: "Tea Museum & Factory Visit" },
      { time: "02:00 PM", activity: "Mattupetty Dam Boating" },
      { time: "04:30 PM", activity: "Top Station View Point" }
    ],

    foodGuide: [
      { name: "Rapsy Restaurant", type: "Budget", specialty: "Beef Fry & Parotta", rating: 4.5 },
      { name: "Saravana Bhavan", type: "Vegetarian", specialty: "South Indian Thali", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "Tata General Hospital, Munnar"
    }
  },
  {
    id: 302,
    name: "Wayanad",
    state: "Kerala",
    category: "Hill Stations",
    badge: "Land of Paddy Fields",
    // Wikimedia: Wayanad Landscape
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Wayanad_Churam.jpg/800px-Wayanad_Churam.jpg",
    description: "Wayanad is a rural district in Kerala, known for its lush, green landscapes, spice plantations, and wildlife. The Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age.",
    
    essentials: {
      bestTime: "October to May",
      weather: "Pleasant",
      entryFee: { EdakkalCaves: "₹50", BanasuraDam: "₹40", Jeep: "₹800" },
      timings: "Caves: 9:00 AM - 4:00 PM (Closed Mondays)"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Edakkal Caves Trek (Steep Climb)" },
      { time: "12:00 PM", activity: "Wayanad Heritage Museum" },
      { time: "03:00 PM", activity: "Banasura Sagar Dam Speed Boating" }
    ],

    foodGuide: [
      { name: "1980's A Nostalgic Restaurant", type: "Theme", specialty: "Clay Pot Meals", rating: 4.7 },
      { name: "Wilton Restaurant", type: "Family", specialty: "Fish Moilee", rating: 4.4 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "WIMS Medical College, Meppadi"
    }
  },

  // --- NATURE / BACKWATERS ---
  {
    id: 303,
    name: "Alleppey (Alappuzha)",
    state: "Kerala",
    category: "Beaches", // Used for Water/Backwaters
    badge: "Venice of the East",
    // Wikimedia: Houseboat
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/800px-Alappuzha_Boat_Beauty_W.jpg",
    description: "Alappuzha (Alleppey) is the hub of Kerala's backwaters, home to a vast network of waterways and more than a thousand houseboats. It is famous for its boat races, beaches, marine products, and coir industry.",
    
    essentials: {
      bestTime: "November to February",
      weather: "Humid/Tropical",
      entryFee: { Houseboat: "₹7000+ (Overnight)", Shikara: "₹600/hr", Beach: "Free" },
      timings: "Houseboat Check-in: 12:00 PM"
    },

    routePlan: [
      { time: "11:00 AM", activity: "Check-in to Houseboat/Shikara" },
      { time: "01:00 PM", activity: "Lunch on Boat (Karimeen Fish)" },
      { time: "05:00 PM", activity: "Alleppey Beach & Lighthouse" }
    ],

    foodGuide: [
      { name: "Halais Restaurant", type: "Biryani", specialty: "Malabar Biryani", rating: 4.4 },
      { name: "Dreamers Cafe", type: "Beachside", specialty: "Seafood Platter", rating: 4.2 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "General Hospital, Alappuzha"
    }
  },
  {
    id: 304,
    name: "Kumarakom",
    state: "Kerala",
    category: "Nature/Wildlife",
    badge: "Bird Sanctuary & Backwaters",
    // Wikimedia: Vembanad Lake
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Kumarakom_houseboat.jpg/800px-Kumarakom_houseboat.jpg",
    description: "Kumarakom is a cluster of little islands on the Vembanad Lake. It is home to the Kumarakom Bird Sanctuary, a favorite haunt of migratory birds like the Siberian stork. A quieter alternative to Alleppey.",
    
    essentials: {
      bestTime: "November to February",
      weather: "Pleasant",
      entryFee: { Sanctuary: "₹100", Boating: "₹400/hr" },
      timings: "Sanctuary: 6:00 AM - 6:00 PM"
    },

    routePlan: [
      { time: "06:30 AM", activity: "Bird Sanctuary Walk (Best for sighting)" },
      { time: "10:00 AM", activity: "Driftwood Museum" },
      { time: "04:00 PM", activity: "Sunset Cruise on Vembanad Lake" }
    ],

    foodGuide: [
      { name: "Tharavadu Restaurant", type: "Heritage", specialty: "Duck Roast", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "Govt Community Health Centre"
    }
  },
  {
    id: 305,
    name: "Athirappilly Waterfalls",
    state: "Kerala",
    category: "Nature/Wildlife",
    badge: "Niagara of India",
    // Wikimedia: Athirappilly Falls
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Athirappilly_Waterfalls_2.jpg/800px-Athirappilly_Waterfalls_2.jpg",
    description: "Athirappilly is the largest waterfall in Kerala, standing 80 feet tall. Located on the Chalakudy River, it sits at the entrance to the Sholayar ranges of the Western Ghats. Famous filming location for the movie 'Baahubali'.",
    
    essentials: {
      bestTime: "June to October (Monsoon)",
      weather: "Wet/Humid",
      entryFee: { Adult: "₹50", Student: "₹15", Camera: "₹20" },
      timings: "08:00 AM - 06:00 PM"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Trek to bottom of falls (Steep)" },
      { time: "11:00 AM", activity: "Viewpoint from top" },
      { time: "01:00 PM", activity: "Visit nearby Vazhachal Falls" }
    ],

    foodGuide: [
      { name: "Rainforest Resort", type: "View", specialty: "Lunch with Waterfall View", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "St. James Hospital, Chalakudy"
    }
  },

  // --- WILDLIFE ---
  {
    id: 306,
    name: "Periyar National Park (Thekkady)",
    state: "Kerala",
    category: "Wildlife",
    badge: "Tiger Reserve",
    // Wikimedia: Periyar Lake Boating
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Periyar_National_Park_Lake.jpg/800px-Periyar_National_Park_Lake.jpg",
    description: "Located in Thekkady, this sanctuary is famous for its dense evergreen forests and savanna grass lands. It is home to herds of elephants, sambar, tigers, gaur, lion-tailed macaques and Nilgiri langurs.",
    
    essentials: {
      bestTime: "September to April",
      weather: "Cool",
      entryFee: { Boat: "₹255", Entry: "₹45", BambooRafting: "₹2000+" },
      timings: "Boating: 7:30, 9:30, 11:15, 1:45, 3:30"
    },

    routePlan: [
      { time: "07:30 AM", activity: "First Boat Safari (Best for wildlife)" },
      { time: "10:30 AM", activity: "Spice Plantation Tour" },
      { time: "06:00 PM", activity: "Kathakali & Kalaripayattu Show" }
    ],

    foodGuide: [
      { name: "Bamboo Cafe", type: "Forest Dept", specialty: "Snacks", rating: 4.0 },
      { name: "Ebony's Cafe", type: "City", specialty: "Continental", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "Govt Hospital Kumily"
    }
  },

  // --- BEACHES ---
  {
    id: 307,
    name: "Varkala",
    state: "Kerala",
    category: "Beaches",
    badge: "Only Cliff Beach in Kerala",
    // Wikimedia: Varkala Cliff
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Varkala_Beach_Kerala.jpg/800px-Varkala_Beach_Kerala.jpg",
    description: "Varkala is the only place in southern Kerala where cliffs are found adjacent to the Arabian Sea. Known for its hippie culture, shacks on the cliff edge, and the 2000-year-old Janardana Swami Temple.",
    
    essentials: {
      bestTime: "October to March",
      weather: "Sunny/Breezy",
      entryFee: { Beach: "Free", Sunbeds: "₹300/day" },
      timings: "Always Open (Shacks close by 10-11 PM)"
    },

    routePlan: [
      { time: "08:00 AM", activity: "Morning Yoga on Cliff" },
      { time: "10:00 AM", activity: "Swim at Papanasam Beach" },
      { time: "05:30 PM", activity: "Sunset from North Cliff Cafes" }
    ],

    foodGuide: [
      { name: "Cafe del Mar", type: "Cliffside", specialty: "Grilled Fish & Pasta", rating: 4.6 },
      { name: "Darjeeling Cafe", type: "Chill", specialty: "Smoothies & Momos", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "Sivagiri Sree Narayana Medical Mission"
    }
  },
  {
    id: 308,
    name: "Kovalam",
    state: "Kerala",
    category: "Beaches",
    badge: "Iconic Lighthouse Beach",
    // Wikimedia: Kovalam Lighthouse
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Kovalam_Beach_Thiruvananthapuram.jpg/800px-Kovalam_Beach_Thiruvananthapuram.jpg",
    description: "Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favorite haunt of tourists since the 1930s. The massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing.",
    
    essentials: {
      bestTime: "September to March",
      weather: "Hot/Humid",
      entryFee: { Beach: "Free", Lighthouse: "₹20" },
      timings: "Lighthouse: 10:00 AM - 5:00 PM (Closed Mondays)"
    },

    routePlan: [
      { time: "09:00 AM", activity: "Climb Lighthouse for View" },
      { time: "11:00 AM", activity: "Water Sports at Hawa Beach" },
      { time: "04:00 PM", activity: "Relax at Samudra Beach (Quieter)" }
    ],

    foodGuide: [
      { name: "German Bakery", type: "Breakfast", specialty: "Pancakes", rating: 4.4 },
      { name: "The Tides", type: "Luxury", specialty: "Seafood Platter", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "KIMS Hospital, Trivandrum"
    }
  },

  // --- HERITAGE / SPIRITUAL ---
  {
    id: 309,
    name: "Fort Kochi",
    state: "Kerala",
    category: "Heritage",
    badge: "Colonial History",
    // Wikimedia: Chinese Fishing Nets
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chinese_Fishing_Nets%2C_Cochin.jpg/800px-Chinese_Fishing_Nets%2C_Cochin.jpg",
    description: "Fort Kochi is a region in the city of Kochi known for its colonial charm. It has Dutch, Portuguese, and British style architecture. The iconic Chinese Fishing Nets are the most famous sight here.",
    
    essentials: {
      bestTime: "October to March",
      weather: "Humid",
      entryFee: { Street: "Free", Synagogue: "₹10", Palace: "₹5" },
      timings: "Synagogue: 10AM-1PM, 3PM-5PM (Closed Fri/Sat)"
    },

    routePlan: [
      { time: "09:00 AM", activity: "St. Francis Church (Vasco da Gama)" },
      { time: "10:30 AM", activity: "Mattancherry Palace (Dutch Palace)" },
      { time: "05:30 PM", activity: "Sunset at Chinese Fishing Nets" }
    ],

    foodGuide: [
      { name: "Kashi Art Cafe", type: "Cafe", specialty: "Chocolate Cake & Coffee", rating: 4.7 },
      { name: "Dal Roti", type: "North Indian", specialty: "Kathi Rolls", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "Gautham Hospital, Kochi"
    }
  },
  {
    id: 310,
    name: "Padmanabhaswamy Temple",
    state: "Kerala",
    category: "Spiritual",
    badge: "Richest Temple in World",
    // Wikimedia: Temple Gopuram
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Sree_Padmanabhaswamy_Temple%2C_Thiruvananthapuram.jpg/800px-Sree_Padmanabhaswamy_Temple%2C_Thiruvananthapuram.jpg",
    description: "Located in Thiruvananthapuram, this is a fusion of Kerala and Dravidian style architecture. It is the richest place of worship in the world. Strict dress code: Men must wear Mundu (Dhoti) and bare chest; Women must wear Saree/Set Mundu.",
    
    essentials: {
      bestTime: "Year Round",
      weather: "Humid",
      entryFee: { Entry: "Free", SpecialDarshan: "₹150-500" },
      timings: "3:30AM-12PM, 5PM-8:30PM (Strict Intervals)"
    },

    routePlan: [
      { time: "06:00 AM", activity: "Nirmalya Darshan (Early Morning)" },
      { time: "08:00 AM", activity: "Visit Kuthiramalika Palace Museum nearby" },
      { time: "10:00 AM", activity: "Napier Museum & Zoo" }
    ],

    foodGuide: [
      { name: "Mothers Veg Plaza", type: "Vegetarian", specialty: "Sadhya (Feast)", rating: 4.8 },
      { name: "Villa Maya", type: "Heritage Luxury", specialty: "Kerala Cuisine", rating: 4.7 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1-800-425-4747",
      nearestHospital: "Fort Hospital, Trivandrum"
    }
  }
];