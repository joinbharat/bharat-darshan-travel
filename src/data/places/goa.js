/**
 * GOA_PLACES DATASET - COMPREHENSIVE
 * ------------------------------------------------------------------
 * Expanded to cover North/South Beaches, Forts, Temples, and Nightlife.
 * ------------------------------------------------------------------
 */

export const GOA_PLACES = [
  // --- BEACHES (NORTH & SOUTH) ---
  {
    id: 701,
    name: "Calangute Beach",
    slug: "calangute-beach",
    state: "Goa",
    category: "Beaches",
    badge: "Queen of Beaches",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Calangute_Beach_Goa.jpg/800px-Calangute_Beach_Goa.jpg",
    description: "The largest and most popular beach in North Goa, known for its golden sands, buzzing shacks, and endless water sports options. It is the hub of Goa's tourist activity.",
    coordinates: { lat: 15.5494, lng: 73.7535 },
    essentials: {
      bestTime: "November to February",
      weather: "Sunny/Humid",
      timings: "24 Hours (Lifeguards: 7 AM - 6 PM)",
      entryFee: { Entry: "Free", Parasailing: "₹800-1000", JetSki: "₹400-600" }
    },
    transport: {
      nearestAirport: "Mopa (GOX) - 28 km",
      nearestRailway: "Thivim (18 km)",
      busConnectivity: "Frequent buses from Mapusa and Panaji"
    },
    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/calangute"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Main beach access road is paved. Some beach shacks have ramps."
    },
    routePlan: [
      { time: "09:00 AM", activity: "Water Sports (Parasailing)" },
      { time: "01:00 PM", activity: "Lunch at Beach Shack" },
      { time: "05:00 PM", activity: "Sunset Walk & Shopping" }
    ],
    foodGuide: [
      { name: "Souza Lobo", type: "Heritage", specialty: "Goan Fish Curry", rating: 4.4 },
      { name: "Pousada by the Beach", type: "Fine Dining", specialty: "Prawn Balchao", rating: 4.6 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Primary Health Centre, Candolim"
    }
  },
  {
    id: 702,
    name: "Palolem Beach",
    slug: "palolem-beach",
    state: "Goa",
    category: "Beaches",
    badge: "Scenic Crescent Bay",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Palolem_Beach_Panorama.jpg/800px-Palolem_Beach_Panorama.jpg",
    description: "A stunning crescent-shaped beach in South Goa, famous for its calm waters, silent noise parties, and dolphin-watching boat trips. It offers a more relaxed vibe than North Goa.",
    coordinates: { lat: 15.0100, lng: 74.0232 },
    essentials: {
      bestTime: "October to March",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: { Entry: "Free", DolphinTrip: "₹300-500", SilentDisco: "₹600-800" }
    },
    transport: {
      nearestAirport: "Dabolim (GOI) - 60 km",
      nearestRailway: "Canacona (2 km)",
      busConnectivity: "Direct buses from Margao"
    },
    externalLinks: {
      officialBooking: "https://goa-tourism.com/",
      googleMaps: "https://goo.gl/maps/palolem"
    },
    accessibility: {
      wheelchairFriendly: true,
      notes: "Flat access to the beach entrance."
    },
    routePlan: [
      { time: "08:00 AM", activity: "Dolphin Watching Boat Ride" },
      { time: "11:00 AM", activity: "Kayaking" },
      { time: "07:00 PM", activity: "Silent Noise Headphone Party" }
    ],
    foodGuide: [
      { name: "Dropadi", type: "Beachfront", specialty: "Seafood Platter", rating: 4.5 },
      { name: "Café Inn", type: "Cafe", specialty: "English Breakfast", rating: 4.3 }
    ],
    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1363",
      nearestHospital: "Community Health Centre, Canacona"
    }
  },
  {
    id: 711,
    name: "Baga Beach",
    slug: "baga-beach",
    state: "Goa",
    category: "Beaches",
    badge: "Nightlife Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Baga_Beach_Goa.jpg/800px-Baga_Beach_Goa.jpg",
    description: "The party capital of Goa. Famous for its nightlife (Tito's Lane), water sports, and endless rows of shacks. It flows right into Calangute but offers a more energetic vibe.",
    coordinates: { lat: 15.5553, lng: 73.7517 },
    essentials: {
      bestTime: "Nov-Feb (Party Season)",
      weather: "Sunny/Loud",
      timings: "24 Hours (Clubs open till 4 AM)",
      entryFee: { Entry: "Free", Clubs: "₹1500-3000 (Stag)" }
    },
    transport: {
      nearestAirport: "Mopa (28 km)",
      nearestRailway: "Thivim (19 km)",
      busConnectivity: "Connected to Mapusa and Calangute"
    },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/baga" },
    accessibility: { wheelchairFriendly: true, notes: "Crowded but paved access." },
    routePlan: [
      { time: "11:00 AM", activity: "Banana Boat Ride" },
      { time: "07:00 PM", activity: "Dinner at Britto's" },
      { time: "10:00 PM", activity: "Party at Tito's or Mambos" }
    ],
    foodGuide: [
      { name: "Britto's", type: "Iconic", specialty: "Seafood Platter", rating: 4.6 },
      { name: "Go with the Flow", type: "Fine Dining", specialty: "Fusion", rating: 4.4 }
    ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Candolim PHC" }
  },
  {
    id: 712,
    name: "Colva Beach",
    slug: "colva-beach",
    state: "Goa",
    category: "Beaches",
    badge: "South Goa Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Colva_Beach_Goa.jpg/800px-Colva_Beach_Goa.jpg",
    description: "The most popular beach in South Goa with 25km of powder white sand. It is less chaotic than Baga/Calangute but lively enough with shacks and water sports.",
    coordinates: { lat: 15.2762, lng: 73.9116 },
    essentials: {
      bestTime: "Oct-Mar",
      weather: "Breezy",
      timings: "24 Hours",
      entryFee: { Entry: "Free" }
    },
    transport: { nearestAirport: "Dabolim (27 km)", nearestRailway: "Madgaon (8 km)", busConnectivity: "Frequent buses from Margao" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/colva" },
    accessibility: { wheelchairFriendly: true, notes: "Good parking and paved entrance." },
    routePlan: [ { time: "04:00 PM", activity: "Water Scooter" }, { time: "06:00 PM", activity: "Sunset Stroll" } ],
    foodGuide: [ { name: "Mickey's", type: "Goan", specialty: "Fish Recheado", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Hospicio Margao" }
  },
  {
    id: 719,
    name: "Butterfly Beach",
    slug: "butterfly-beach",
    state: "Goa",
    category: "Beaches",
    badge: "Hidden Gem",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Butterfly_Beach.jpg/800px-Butterfly_Beach.jpg",
    description: "A semi-circular hidden beach accessible only by boat from Palolem/Agonda or a trek. Famous for butterfly sightings and breathtaking sunsets without the crowds.",
    coordinates: { lat: 15.0234, lng: 74.0045 },
    essentials: { bestTime: "Nov-Mar (Mornings)", weather: "Isolated", timings: "Dawn to Dusk", entryFee: { Entry: "Free", Boat: "₹1500" } },
    transport: { nearestAirport: "Dabolim (60 km)", nearestRailway: "Canacona", busConnectivity: "None. Boat or Trek only." },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/butterfly" },
    accessibility: { wheelchairFriendly: false, notes: "Not accessible. Requires climbing into boats." },
    routePlan: [ { time: "08:00 AM", activity: "Boat Ride" }, { time: "09:00 AM", activity: "Picnic & Photography" } ],
    foodGuide: [ { name: "Carry your own", type: "None", specialty: "No shacks available", rating: 0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Canacona" }
  },

  // --- HERITAGE & FORTS ---
  {
    id: 703,
    name: "Basilica of Bom Jesus",
    slug: "basilica-of-bom-jesus",
    state: "Goa",
    category: "Heritage",
    badge: "UNESCO World Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Basilica_of_Bom_Jesus_Old_Goa.jpg/800px-Basilica_of_Bom_Jesus_Old_Goa.jpg",
    description: "Located in Old Goa, this 16th-century baroque church holds the mortal remains of St. Francis Xavier. It is a masterpiece of Jesuit architecture and India's first minor basilica.",
    coordinates: { lat: 15.5009, lng: 73.9116 },
    essentials: {
      bestTime: "All Year (Feast in Dec)",
      weather: "Indoor/Cool",
      timings: "09:00 AM - 06:30 PM",
      entryFee: { Entry: "Free", Museum: "₹10" }
    },
    transport: { nearestAirport: "Dabolim (25 km)", nearestRailway: "Karmali (3 km)", busConnectivity: "Buses from Panaji" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/bomjesus" },
    accessibility: { wheelchairFriendly: true, notes: "Ramps available at side entrance." },
    routePlan: [ { time: "09:30 AM", activity: "View St. Francis Casket" }, { time: "10:30 AM", activity: "Se Cathedral (Opposite)" } ],
    foodGuide: [ { name: "Ratnasagar", type: "Family", specialty: "Goan Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "GMC Bambolim" }
  },
  {
    id: 704,
    name: "Fort Aguada",
    slug: "fort-aguada",
    state: "Goa",
    category: "Heritage",
    badge: "17th Century Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Aguada_Fort_Light_House.jpg/800px-Aguada_Fort_Light_House.jpg",
    description: "Built in 1612 to guard against the Dutch, this fort stands on Sinquerim Beach. It features a four-storey lighthouse (one of Asia's oldest) and vast water reservoirs.",
    coordinates: { lat: 15.4922, lng: 73.7738 },
    essentials: {
      bestTime: "Winter",
      weather: "Sunny/Windy",
      timings: "09:30 AM - 06:00 PM",
      entryFee: { Indian: "₹25", Foreigner: "₹300" }
    },
    transport: { nearestAirport: "Dabolim (40 km)", nearestRailway: "Thivim (20 km)", busConnectivity: "Taxi/Bike from Candolim" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/aguada" },
    accessibility: { wheelchairFriendly: false, notes: "Rocky terrain." },
    routePlan: [ { time: "04:30 PM", activity: "Explore Lighthouse" }, { time: "06:00 PM", activity: "Sunset" } ],
    foodGuide: [ { name: "Fisherman's Wharf", type: "Premium", specialty: "Seafood", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Candolim" }
  },
  {
    id: 713,
    name: "Chapora Fort",
    slug: "chapora-fort",
    state: "Goa",
    category: "Heritage",
    badge: "Dil Chahta Hai Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Chapora_Fort_Goa.jpg/800px-Chapora_Fort_Goa.jpg",
    description: "Famous from the movie 'Dil Chahta Hai', this ruined fort offers the best sunset views in Goa, overlooking Vagator Beach and the Chapora River.",
    coordinates: { lat: 15.6053, lng: 73.7383 },
    essentials: { bestTime: "Evening", weather: "Windy", timings: "Always Open", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Mopa (25 km)", nearestRailway: "Thivim (15 km)", busConnectivity: "Near Vagator" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/chapora" },
    accessibility: { wheelchairFriendly: false, notes: "Steep trek uphill. Loose gravel." },
    routePlan: [ { time: "05:00 PM", activity: "Trek Up" }, { time: "06:00 PM", activity: "Sunset Photos" } ],
    foodGuide: [ { name: "Mango Tree", type: "Cafe", specialty: "Drinks", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Anjuna" }
  },
  {
    id: 714,
    name: "Immaculate Conception Church",
    slug: "immaculate-conception-church",
    state: "Goa",
    category: "Heritage",
    badge: "Iconic Steps",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Our_Lady_of_the_Immaculate_Conception_Church_Goa.jpg/800px-Our_Lady_of_the_Immaculate_Conception_Church_Goa.jpg",
    description: "The pristine white church with famous zigzag stairs located in the heart of Panaji. Built in 1541, it is a key landmark of the state capital.",
    coordinates: { lat: 15.4944, lng: 73.8295 },
    essentials: { bestTime: "All Year", weather: "City", timings: "09:30 AM - 12:30 PM, 03:00 PM - 05:30 PM", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Dabolim (28 km)", nearestRailway: "Karmali (12 km)", busConnectivity: "Central Panaji" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/panjimchurch" },
    accessibility: { wheelchairFriendly: false, notes: "Many steps to entrance." },
    routePlan: [ { time: "04:00 PM", activity: "Photography on Steps" }, { time: "04:30 PM", activity: "Explore Panaji Market" } ],
    foodGuide: [ { name: "Ritz Classic", type: "Goan", specialty: "Fish Thali", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Manipal Panaji" }
  },

  // --- NATURE & ADVENTURE ---
  {
    id: 705,
    name: "Dudhsagar Waterfalls",
    slug: "dudhsagar-waterfalls",
    state: "Goa",
    category: "Nature",
    badge: "Sea of Milk",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dudhsagar_Falls_Train.jpg/800px-Dudhsagar_Falls_Train.jpg",
    description: "One of India's tallest waterfalls (310m), located on the Mandovi River. The white cascading water looks like milk, especially when a train passes on the bridge cutting through it.",
    coordinates: { lat: 15.3144, lng: 74.3143 },
    essentials: {
      bestTime: "Oct-Apr",
      weather: "Forest",
      timings: "06:00 AM - 04:30 PM",
      entryFee: { Jeep: "₹3500 (Group of 7)", LifeJacket: "₹40", Entry: "₹50" }
    },
    transport: { nearestAirport: "Dabolim (70 km)", nearestRailway: "Kulem", busConnectivity: "Reach Kulem Base" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/dudhsagar" },
    accessibility: { wheelchairFriendly: false, notes: "Rugged jeep track." },
    routePlan: [ { time: "07:30 AM", activity: "Jeep Safari" }, { time: "09:00 AM", activity: "Swim" } ],
    foodGuide: [ { name: "Dudhsagar Plantation", type: "Farm Stay", specialty: "Buffet", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "PHC Molem" }
  },
  {
    id: 706,
    name: "Dr. Salim Ali Bird Sanctuary",
    slug: "salim-ali-bird-sanctuary",
    state: "Goa",
    category: "Nature",
    badge: "Mangrove Habitat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chor%C3%A3o_Island_Mangroves.jpg/800px-Chor%C3%A3o_Island_Mangroves.jpg",
    description: "Located on Chorao Island along the Mandovi River, this sanctuary is a paradise for birdwatchers. It protects a unique mangrove ecosystem and is home to kingfishers, eagles, and mudskippers.",
    coordinates: { lat: 15.5126, lng: 73.8569 },
    essentials: { bestTime: "Oct-Mar (Early Morning)", weather: "Humid", timings: "06:00 AM - 06:00 PM", entryFee: { Entry: "₹10", Boat: "₹900-1200" } },
    transport: { nearestAirport: "Dabolim (30 km)", nearestRailway: "Karmali", busConnectivity: "Ferry from Ribandar" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/salimali" },
    accessibility: { wheelchairFriendly: false, notes: "Boat entry." },
    routePlan: [ { time: "06:30 AM", activity: "Ferry" }, { time: "07:00 AM", activity: "Bird Watching Canoe" } ],
    foodGuide: [ { name: "Lazy Goose", type: "Riverside", specialty: "Crab Masala", rating: 4.4 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "GMC Bambolim" }
  },
  {
    id: 716,
    name: "Netravali Bubbling Lake",
    slug: "netravali-bubbling-lake",
    state: "Goa",
    category: "Nature",
    badge: "Mystical Phenomenon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Budbudyanchi_Tali.jpg/800px-Budbudyanchi_Tali.jpg",
    description: "Also known as Budbudyanchi Tali, this sacred tank attached to the Gopinath Temple has continuous bubbles rising to the surface, which supposedly intensify when you clap!",
    coordinates: { lat: 15.0863, lng: 74.2081 },
    essentials: { bestTime: "All Year", weather: "Forest", timings: "08:00 AM - 06:00 PM", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Dabolim (65 km)", nearestRailway: "Margao (45 km)", busConnectivity: "Remote (Taxi required)" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/netravali" },
    accessibility: { wheelchairFriendly: false, notes: "Steps to the tank." },
    routePlan: [ { time: "10:00 AM", activity: "Clap & Watch Bubbles" }, { time: "11:00 AM", activity: "Spice Farm Visit nearby" } ],
    foodGuide: [ { name: "Tanshikar Spice Farm", type: "Farm", specialty: "Organic Lunch", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Sanguem PHC" }
  },

  // --- SPIRITUAL ---
  {
    id: 707,
    name: "Shanta Durga Temple",
    slug: "shanta-durga-temple",
    state: "Goa",
    category: "Spiritual",
    badge: "Indo-Portuguese Art",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Shanta_Durga_Temple_Kavlem.jpg/800px-Shanta_Durga_Temple_Kavlem.jpg",
    description: "Located in Kavlem, Ponda, this temple is dedicated to Goddess Shanta Durga. It features a unique blend of Pyramidal Shikharas and Portuguese-style windows.",
    coordinates: { lat: 15.3986, lng: 73.9782 },
    essentials: { bestTime: "All Year", weather: "Warm", timings: "06:00 AM - 08:30 PM", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Dabolim (30 km)", nearestRailway: "Madgaon (18 km)", busConnectivity: "Bus from Ponda" },
    externalLinks: { officialBooking: "http://www.shantadurga.org/", googleMaps: "https://goo.gl/maps/shantadurga" },
    accessibility: { wheelchairFriendly: true, notes: "Spacious compound." },
    routePlan: [ { time: "09:00 AM", activity: "Darshan" }, { time: "10:00 AM", activity: "Temple Tank" } ],
    foodGuide: [ { name: "Padmavati", type: "Veg", specialty: "Bhaji Pao", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Ponda Hospital" }
  },
  {
    id: 720,
    name: "Mangueshi Temple",
    slug: "mangueshi-temple",
    state: "Goa",
    category: "Spiritual",
    badge: "Iconic Deepstambha",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mangueshi_Temple_Goa.jpg/800px-Mangueshi_Temple_Goa.jpg",
    description: "One of the largest and most frequently visited temples in Goa. Famous for its 7-storey Deepstambha (lamp tower) which looks spectacular when lit up during festivals.",
    coordinates: { lat: 15.4055, lng: 73.9688 },
    essentials: { bestTime: "All Year", weather: "Warm", timings: "06:00 AM - 09:00 PM", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Dabolim (32 km)", nearestRailway: "Karmali (12 km)", busConnectivity: "Near Ponda" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/mangueshi" },
    accessibility: { wheelchairFriendly: true, notes: "Flat compound." },
    routePlan: [ { time: "05:00 PM", activity: "Evening Aarti" }, { time: "06:00 PM", activity: "View Lit Tower" } ],
    foodGuide: [ { name: "Laxmi Family Restaurant", type: "Veg", specialty: "Thali", rating: 4.0 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Ponda" }
  },
  {
    id: 708,
    name: "Se Cathedral",
    slug: "se-cathedral",
    state: "Goa",
    category: "Heritage",
    badge: "Largest Church in Asia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Se_Cathedral_Old_Goa.jpg/800px-Se_Cathedral_Old_Goa.jpg",
    description: "Dedicated to St. Catherine, this 16th-century cathedral is famous for its giant Golden Bell, the largest in Goa.",
    coordinates: { lat: 15.5034, lng: 73.9126 },
    essentials: { bestTime: "All Year", weather: "Indoor", timings: "07:30 AM - 06:00 PM", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Dabolim (25 km)", nearestRailway: "Karmali (3 km)", busConnectivity: "Old Goa Complex" },
    externalLinks: { officialBooking: "https://asi.payumoney.com/", googleMaps: "https://goo.gl/maps/secathedral" },
    accessibility: { wheelchairFriendly: true, notes: "Flat entrance." },
    routePlan: [ { time: "11:00 AM", activity: "Main Altar" }, { time: "11:30 AM", activity: "Golden Bell" } ],
    foodGuide: [ { name: "Rasoda", type: "Thali", specialty: "Rajasthani/Goan", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "GMC" }
  },

  // --- LEISURE & NIGHTLIFE ---
  {
    id: 709,
    name: "Fontainhas Latin Quarter",
    slug: "fontainhas-latin-quarter",
    state: "Goa",
    category: "Heritage",
    badge: "Europe in India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Fontainhas_Street.jpg/800px-Fontainhas_Street.jpg",
    description: "The old Latin Quarter of Panaji, known for its narrow winding streets, brightly colored Portuguese houses, art galleries, and quaint bakeries.",
    coordinates: { lat: 15.4947, lng: 73.8298 },
    essentials: { bestTime: "Winter Evenings", weather: "City", timings: "24 Hours", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Dabolim (28 km)", nearestRailway: "Karmali", busConnectivity: "Panaji KTC Stand" },
    externalLinks: { officialBooking: "https://goa-tourism.com/", googleMaps: "https://goo.gl/maps/fontainhas" },
    accessibility: { wheelchairFriendly: true, notes: "Paved narrow streets." },
    routePlan: [ { time: "04:30 PM", activity: "Photo Walk" }, { time: "05:30 PM", activity: "Bakery Visit" } ],
    foodGuide: [ { name: "Viva Panjim", type: "Heritage", specialty: "Pork Vindaloo", rating: 4.5 }, { name: "Confeitaria 31", type: "Bakery", specialty: "Bebinca", rating: 4.6 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Manipal" }
  },
  {
    id: 710,
    name: "Anjuna Flea Market",
    slug: "anjuna-flea-market",
    state: "Goa",
    category: "Leisure",
    badge: "Hippie Legacy",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Anjuna_Beach_Market.jpg/800px-Anjuna_Beach_Market.jpg",
    description: "Started by hippies in the 60s, this Wednesday market is a chaotic, colorful mix of trinkets, clothes, spices, and live music.",
    coordinates: { lat: 15.5794, lng: 73.7432 },
    essentials: { bestTime: "Wednesdays", weather: "Dusty", timings: "09:00 AM - 06:00 PM (Wed Only)", entryFee: { Entry: "Free" } },
    transport: { nearestAirport: "Mopa (28 km)", nearestRailway: "Thivim", busConnectivity: "Buses from Mapusa" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/anjuna" },
    accessibility: { wheelchairFriendly: false, notes: "Sandy/Uneven ground." },
    routePlan: [ { time: "10:00 AM", activity: "Shopping" }, { time: "01:00 PM", activity: "Lunch at Curlies" } ],
    foodGuide: [ { name: "Curlies", type: "Shack", specialty: "Woodfired Pizza", rating: 4.1 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "St. Anthony's" }
  },
  {
    id: 715,
    name: "Deltin Royale Casino",
    slug: "deltin-royale",
    state: "Goa",
    category: "Leisure",
    badge: "Floating Casino",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Casino_Royale_Goa.jpg/800px-Casino_Royale_Goa.jpg",
    description: "India's largest offshore gaming vessel, floating on the Mandovi River. It offers international standard gaming, live entertainment, and buffet dinners.",
    coordinates: { lat: 15.4989, lng: 73.8345 },
    essentials: {
      bestTime: "All Year",
      weather: "AC/Indoor",
      timings: "24 Hours (Peak: 9 PM - 2 AM)",
      entryFee: { Standard: "₹3000 (Includes Chips)", VIP: "₹5000+" }
    },
    transport: { nearestAirport: "Dabolim (28 km)", nearestRailway: "Karmali", busConnectivity: "Feeder boat from Panaji Jetty" },
    externalLinks: { officialBooking: "https://www.deltin.com/", googleMaps: "https://goo.gl/maps/deltin" },
    accessibility: { wheelchairFriendly: true, notes: "Elevators on ship." },
    routePlan: [ { time: "08:00 PM", activity: "Boarding" }, { time: "09:00 PM", activity: "Dinner & Show" }, { time: "11:00 PM", activity: "Gaming" } ],
    foodGuide: [ { name: "Vegas", type: "Buffet", specialty: "Multi-Cuisine", rating: 4.5 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Manipal" }
  },
  {
    id: 717,
    name: "Naval Aviation Museum",
    slug: "naval-aviation-museum",
    state: "Goa",
    category: "Heritage",
    badge: "Only one in Asia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Naval_Aviation_Museum_Goa.jpg/800px-Naval_Aviation_Museum_Goa.jpg",
    description: "Located near Bogmalo beach, this is one of only two naval aviation museums in India. It displays decommissioned aircraft, weapons, and sensors.",
    coordinates: { lat: 15.3857, lng: 73.8344 },
    essentials: { bestTime: "All Year", weather: "Outdoor/Indoor", timings: "10:00 AM - 05:00 PM (Mon Closed)", entryFee: { Entry: "₹30" } },
    transport: { nearestAirport: "Dabolim (4 km)", nearestRailway: "Vasco (8 km)", busConnectivity: "Near Bogmalo" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/naval" },
    accessibility: { wheelchairFriendly: true, notes: "Outdoor display paved." },
    routePlan: [ { time: "10:00 AM", activity: "View Aircraft" }, { time: "11:30 AM", activity: "Visit Bogmalo Beach" } ],
    foodGuide: [ { name: "Joets", type: "Shack", specialty: "Beer & Prawns", rating: 4.3 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "SMRC Vasco" }
  },
  {
    id: 718,
    name: "Reis Magos Fort",
    slug: "reis-magos-fort",
    state: "Goa",
    category: "Heritage",
    badge: "Restored Beauty",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Reis_Magos_Fort.jpg/800px-Reis_Magos_Fort.jpg",
    description: "The oldest fort in Goa, beautifully restored as a cultural center. It offers sweeping views of the Mandovi River meeting the Arabian Sea.",
    coordinates: { lat: 15.4988, lng: 73.8078 },
    essentials: { bestTime: "Evening", weather: "Sunny", timings: "09:30 AM - 05:00 PM (Mon Closed)", entryFee: { Entry: "₹50" } },
    transport: { nearestAirport: "Dabolim (35 km)", nearestRailway: "Karmali", busConnectivity: "Taxi from Panaji/Candolim" },
    externalLinks: { officialBooking: "N/A", googleMaps: "https://goo.gl/maps/reismagos" },
    accessibility: { wheelchairFriendly: false, notes: "Steep ramps." },
    routePlan: [ { time: "03:00 PM", activity: "Museum Tour" }, { time: "04:30 PM", activity: "Rampart Views" } ],
    foodGuide: [ { name: "Babazin", type: "Local", specialty: "Crab Xacuti", rating: 4.2 } ],
    emergency: { police: "100", ambulance: "108", touristHelpline: "1363", nearestHospital: "Nerul PHC" }
  },
  
];