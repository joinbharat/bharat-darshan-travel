/**
 * LADAKH_PLACES DATASET
 * ------------------------------------------------------------------
 * Sources:
 * - Timings/Fees: Ladakh Tourism & Monastery Associations
 * - Permits: Official ILP (Inner Line Permit) Portal (lahdclehpermit.in)
 * - Health: High Altitude Medical Guidelines (Leh Hospital)
 * - Images: Wikimedia Commons (Public Domain / Creative Commons)
 * - Coordinates: Google Maps Geocoding
 * ------------------------------------------------------------------
 */

export const LADAKH_PLACES = [
  // --- NATURE & LAKES ---
  {
    id: 3501,
    name: "Pangong Tso",
    slug: "pangong-tso",
    state: "Ladakh",
    category: "Nature",
    badge: "World's Highest Saltwater Lake",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pangong_Tso_Lake_Leh_Ladakh_India.jpg/800px-Pangong_Tso_Lake_Leh_Ladakh_India.jpg",
    description: "A mesmerizing endorheic lake spanning India and China, situated at 4,225m. It is famous for changing colors from shades of blue to green and red. The '3 Idiots' shooting point is here.",
    coordinates: { lat: 33.8792, lng: 78.5273 },

    essentials: {
      bestTime: "June to September",
      weather: "Freezing/Windy",
      timings: "Sunrise to Sunset",
      entryFee: {
        Entry: "Permit Cost",
        Permit: "ILP Mandatory (Apply Online)"
      }
    },

    transport: {
      nearestAirport: "Kushok Bakula Rimpochee Airport, Leh (150 km)",
      nearestRailway: "Jammu Tawi (700 km)",
      busConnectivity: "Private Taxi or Shared Sumo from Leh (5-6 hours one way)"
    },

    externalLinks: {
      officialBooking: "https://www.lahdclehpermit.in/",
      googleMaps: "https://goo.gl/maps/pangong"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The terrain is rocky and sandy. Oxygen levels are low, making physical exertion difficult."
    },

    routePlan: [
      { time: "07:00 AM", activity: "Depart Leh via Chang La Pass" },
      { time: "12:00 PM", activity: "Arrival at Pangong Lake" },
      { time: "01:00 PM", activity: "Photo Stop at '3 Idiots' Point" }
    ],

    foodGuide: [
      { name: "3 Idiots Cafe", type: "Lake View", specialty: "Maggi & Thukpa", rating: 4.0 },
      { name: "Homestays (Spangmik)", type: "Home", specialty: "Butter Tea", rating: 4.3 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "Army Medical Aid Centre (Tangtse)"
    }
  },
  {
    id: 3502,
    name: "Nubra Valley (Hunder)",
    slug: "nubra-valley",
    state: "Ladakh",
    category: "Nature",
    badge: "Cold Desert Sand Dunes",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Hunder_Sand_Dunes.jpg/800px-Hunder_Sand_Dunes.jpg",
    description: "Located across the Khardung La pass, Nubra offers a stark landscape of white sand dunes at Hunder, where tourists can ride the double-humped Bactrian camels.",
    coordinates: { lat: 34.5854, lng: 77.4764 },

    essentials: {
      bestTime: "June to September",
      weather: "Cold Desert",
      timings: "24 Hours (Camel Ride: 9 AM - 6 PM)",
      entryFee: {
        CamelRide: "₹300-500",
        Permit: "ILP Mandatory"
      }
    },

    transport: {
      nearestAirport: "Leh (120 km)",
      nearestRailway: "Jammu Tawi (820 km)",
      busConnectivity: "Taxi/Sumo from Leh crossing Khardung La"
    },

    externalLinks: {
      officialBooking: "https://lahdclehpermit.in/",
      googleMaps: "https://goo.gl/maps/nubra"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Sand dunes are not wheelchair friendly. Viewing from the road is possible."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Cross Khardung La Pass" },
      { time: "12:00 PM", activity: "Visit Diskit Monastery (Maitreya Buddha)" },
      { time: "04:00 PM", activity: "Bactrian Camel Ride at Hunder" }
    ],

    foodGuide: [
      { name: "Gyantse Restaurant", type: "Hunder", specialty: "Momos & Thenthuk", rating: 4.2 },
      { name: "Himalayan Eco Resort", type: "Resort", specialty: "Buffet", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "Diskit Hospital"
    }
  },
  {
    id: 3503,
    name: "Tso Moriri",
    slug: "tso-moriri",
    state: "Ladakh",
    category: "Nature",
    badge: "Ramsar Wetland Site",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Tso_Moriri_Lake.jpg/800px-Tso_Moriri_Lake.jpg",
    description: "A high-altitude lake in the Changthang Plateau (4,522m), known for its serene beauty and migratory birds like Black-necked Cranes. It is less commercialized than Pangong.",
    coordinates: { lat: 32.9157, lng: 78.3242 },

    essentials: {
      bestTime: "June to August",
      weather: "Harsh Cold",
      timings: "Sunrise to Sunset",
      entryFee: {
        Entry: "Permit Cost",
        Permit: "ILP Mandatory"
      }
    },

    transport: {
      nearestAirport: "Leh (220 km)",
      nearestRailway: "Jammu Tawi (850 km)",
      busConnectivity: "6-7 hour drive from Leh via Mahe Bridge"
    },

    externalLinks: {
      officialBooking: "https://lahdclehpermit.in/",
      googleMaps: "https://goo.gl/maps/tsomoriri"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Remote area with zero infrastructure for accessibility. High altitude sickness risk is high."
    },

    routePlan: [
      { time: "06:00 AM", activity: "Depart Leh early" },
      { time: "01:00 PM", activity: "Arrival at Korzok Village" },
      { time: "03:00 PM", activity: "Walk by Tso Moriri Lake" }
    ],

    foodGuide: [
      { name: "Nomadic Camps", type: "Camp", specialty: "Basic Ladakhi Meal", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "ITBP Medical Center (Korzok)"
    }
  },

  // --- SPIRITUAL & HERITAGE ---
  {
    id: 3504,
    name: "Thiksey Monastery",
    slug: "thiksey-monastery",
    state: "Ladakh",
    category: "Spiritual",
    badge: "Mini Potala Palace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Thikse_Monastery.jpg/800px-Thikse_Monastery.jpg",
    description: "Resembling the Potala Palace in Lhasa, this is the largest monastery in central Ladakh. It houses a 49ft high statue of Maitreya Buddha and offers stunning views of the Indus Valley.",
    coordinates: { lat: 34.0560, lng: 77.6667 },

    essentials: {
      bestTime: "May to October (Gustor Festival in Oct/Nov)",
      weather: "Sunny/Windy",
      timings: "07:00 AM - 07:00 PM (Morning Prayer at 7 AM)",
      entryFee: {
        Entry: "₹30",
        Camera: "Free"
      }
    },

    transport: {
      nearestAirport: "Leh (19 km)",
      nearestRailway: "Jammu Tawi (700 km)",
      busConnectivity: "Local buses/taxis available from Leh Market"
    },

    externalLinks: {
      officialBooking: "https://leh.nic.in/",
      googleMaps: "https://goo.gl/maps/thiksey"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Vehicles go up to the main gate, but reaching the prayer hall involves climbing steep stairs."
    },

    routePlan: [
      { time: "06:30 AM", activity: "Attend Morning Prayer" },
      { time: "08:00 AM", activity: "View Maitreya Buddha Statue" },
      { time: "09:00 AM", activity: "Breakfast at Monastery Cafe" }
    ],

    foodGuide: [
      { name: "Cafe Cloud", type: "Monastery Cafe", specialty: "Cheesecake & Coffee", rating: 4.6 },
      { name: "Chamba Hotel", type: "Nearby", specialty: "Thukpa", rating: 4.1 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SNM Hospital Leh"
    }
  },
  {
    id: 3505,
    name: "Shanti Stupa",
    slug: "shanti-stupa-leh",
    state: "Ladakh",
    category: "Spiritual",
    badge: "Symbol of Peace",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Shanti_Stupa_Leh.jpg/800px-Shanti_Stupa_Leh.jpg",
    description: "A white-domed Buddhist stupa on a hilltop in Chanspa, Leh. Built by Japanese monks to promote world peace, it holds the relics of the Buddha and offers the best sunset view of Leh city.",
    coordinates: { lat: 34.1727, lng: 77.5759 },

    essentials: {
      bestTime: "Evening (Sunset)",
      weather: "Windy",
      timings: "05:00 AM - 09:00 PM",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Leh (5 km)",
      nearestRailway: "Jammu Tawi (700 km)",
      busConnectivity: "5 km drive from Leh Main Market"
    },

    externalLinks: {
      officialBooking: "https://leh.nic.in/",
      googleMaps: "https://goo.gl/maps/shantistupa"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Vehicles can drive up to the parking lot. A ramp is available to reach the Stupa level."
    },

    routePlan: [
      { time: "05:00 PM", activity: "Drive to Stupa" },
      { time: "05:30 PM", activity: "Circumambulation & Meditation" },
      { time: "06:30 PM", activity: "Sunset Photography" }
    ],

    foodGuide: [
      { name: "Wonderland Restaurant", type: "Chanspa", specialty: "Pizza & Coffee", rating: 4.4 },
      { name: "Bon Appetit", type: "Fine Dining", specialty: "Ladakhi Fusion", rating: 4.5 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SNM Hospital Leh"
    }
  },
  {
    id: 3506,
    name: "Leh Palace",
    slug: "leh-palace",
    state: "Ladakh",
    category: "Heritage",
    badge: "Lhachen Palkhar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Leh_Palace_Full_View.jpg/800px-Leh_Palace_Full_View.jpg",
    description: "A 17th-century former royal palace overlooking Leh town. Built by King Sengge Namgyal, it is nine storeys high and modeled on the Potala Palace in Tibet. Managed by ASI.",
    coordinates: { lat: 34.1661, lng: 77.5866 },

    essentials: {
      bestTime: "April to September",
      weather: "Sunny",
      timings: "07:00 AM - 04:00 PM",
      entryFee: {
        Indian: "₹25",
        Foreigner: "₹300"
      }
    },

    transport: {
      nearestAirport: "Leh (5 km)",
      nearestRailway: "Jammu Tawi (700 km)",
      busConnectivity: "Walkable from Leh Market (steep) or accessible by car"
    },

    externalLinks: {
      officialBooking: "https://asi.payumoney.com/",
      googleMaps: "https://goo.gl/maps/lehpalace"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The palace has old wooden stairs and uneven floors. Not wheelchair accessible."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Palace Museum Tour" },
      { time: "10:00 AM", activity: "Rooftop View of Leh" },
      { time: "11:00 AM", activity: "Namgyal Tsemo Gompa (Above Palace)" }
    ],

    foodGuide: [
      { name: "The Tibetan Kitchen", type: "Market", specialty: "Shabta & Tingmo", rating: 4.6 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SNM Hospital Leh"
    }
  },

  // --- ADVENTURE & WAR MEMORIAL ---
  {
    id: 3507,
    name: "Magnetic Hill",
    slug: "magnetic-hill-ladakh",
    state: "Ladakh",
    category: "Nature",
    badge: "Gravity Defying Hill",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Magnetic_Hill_Ladakh.jpg/800px-Magnetic_Hill_Ladakh.jpg",
    description: "A Cyclops hill located on the Leh-Kargil-Srinagar national highway. The layout of the surrounding land produces an optical illusion that makes a slight downhill slope appear to be an uphill slope.",
    coordinates: { lat: 34.1736, lng: 77.3570 },

    essentials: {
      bestTime: "May to October",
      weather: "Windy/Dry",
      timings: "24 Hours (Daylight best for illusion)",
      entryFee: { Entry: "Free" }
    },

    transport: {
      nearestAirport: "Leh (30 km)",
      nearestRailway: "Jammu Tawi (700 km)",
      busConnectivity: "On the NH-1 highway towards Kargil"
    },

    externalLinks: {
      officialBooking: "https://leh.nic.in/",
      googleMaps: "https://goo.gl/maps/magnetichill"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "The viewing area is right on the highway and is paved."
    },

    routePlan: [
      { time: "10:00 AM", activity: "Experience Magnetic Illusion" },
      { time: "10:30 AM", activity: "ATV Bike Ride" },
      { time: "11:30 AM", activity: "Pathar Sahib Gurudwara (Nearby)" }
    ],

    foodGuide: [
      { name: "Magnetic Hill Cafe", type: "Highway", specialty: "Coffee & Sandwich", rating: 4.2 },
      { name: "Gurudwara Langar", type: "Pilgrim", specialty: "Community Meal", rating: 5.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SNM Hospital Leh"
    }
  },
  {
    id: 3508,
    name: "Khardung La Pass",
    slug: "khardung-la",
    state: "Ladakh",
    category: "Adventure",
    badge: "Gateway to Nubra",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Khardung_La_Pass_Sign.jpg/800px-Khardung_La_Pass_Sign.jpg",
    description: "Historically cited as the world's highest motorable pass (17,582 ft). It is the gateway to the Shyok and Nubra valleys. The air is thin, and stops should be brief.",
    coordinates: { lat: 34.2787, lng: 77.6047 },

    essentials: {
      bestTime: "May to October",
      weather: "Sub-Zero",
      timings: "09:00 AM - 05:00 PM (Traffic regulated)",
      entryFee: {
        Entry: "Permit Cost",
        Permit: "ILP Mandatory"
      }
    },

    transport: {
      nearestAirport: "Leh (40 km)",
      nearestRailway: "Jammu Tawi (740 km)",
      busConnectivity: "Taxi/Bike from Leh"
    },

    externalLinks: {
      officialBooking: "https://lahdclehpermit.in/",
      googleMaps: "https://goo.gl/maps/khardungla"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "Icy, slippery roads. High altitude poses severe health risks for vulnerable individuals."
    },

    routePlan: [
      { time: "08:00 AM", activity: "Drive from Leh" },
      { time: "09:30 AM", activity: "Photo Op at Pass (Max 15 mins)" },
      { time: "10:00 AM", activity: "Descend towards Nubra" }
    ],

    foodGuide: [
      { name: "Rinchen Cafeteria", type: "Army Cafe", specialty: "Highest Cafeteria (Tea/Maggi)", rating: 4.8 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "Army MI Room (South Pullu)"
    }
  },
  {
    id: 3509,
    name: "Hall of Fame",
    slug: "hall-of-fame-leh",
    state: "Ladakh",
    category: "Heritage",
    badge: "War Memorial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Hall_of_Fame_Leh.jpg/800px-Hall_of_Fame_Leh.jpg",
    description: "A museum constructed and maintained by the Indian Army in memory of the brave soldiers who lost their lives in the Indo-Pak wars. It houses weapons, biographies, and a souvenir shop.",
    coordinates: { lat: 34.1408, lng: 77.5358 },

    essentials: {
      bestTime: "All Year",
      weather: "Indoor",
      timings: "09:00 AM - 01:00 PM, 02:00 PM - 07:00 PM",
      entryFee: {
        Entry: "₹25",
        Photography: "₹50"
      }
    },

    transport: {
      nearestAirport: "Leh (2 km)",
      nearestRailway: "Jammu Tawi (700 km)",
      busConnectivity: "Located on Leh-Kargil Road, near Airport"
    },

    externalLinks: {
      officialBooking: "https://leh.nic.in/",
      googleMaps: "https://goo.gl/maps/halloffame"
    },

    accessibility: {
      wheelchairFriendly: true,
      notes: "Single story building with ramps. Fully accessible."
    },

    routePlan: [
      { time: "04:00 PM", activity: "Visit War Galleries" },
      { time: "05:30 PM", activity: "Watch Documentary" },
      { time: "06:30 PM", activity: "Beating Retreat (Sundays)" }
    ],

    foodGuide: [
      { name: "Army Cafe", type: "Cafe", specialty: "Coffee", rating: 4.0 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SNM Hospital Leh"
    }
  },
  {
    id: 3510,
    name: "Hemis Monastery",
    slug: "hemis-monastery",
    state: "Ladakh",
    category: "Spiritual",
    badge: "Richest Monastery in Ladakh",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hemis_Monastery_Courtyard.jpg/800px-Hemis_Monastery_Courtyard.jpg",
    description: "A 17th-century monastery belonging to the Drukpa Lineage. It is famous for the annual Hemis Festival honoring Padmasambhava, where the famous Cham dance is performed.",
    coordinates: { lat: 33.9126, lng: 77.7022 },

    essentials: {
      bestTime: "June/July (Hemis Festival)",
      weather: "Warm",
      timings: "08:00 AM - 01:00 PM, 02:00 PM - 06:00 PM",
      entryFee: {
        Entry: "₹50",
        Museum: "₹50"
      }
    },

    transport: {
      nearestAirport: "Leh (45 km)",
      nearestRailway: "Jammu Tawi (730 km)",
      busConnectivity: "Taxi from Leh (1.5 hours)"
    },

    externalLinks: {
      officialBooking: "https://leh.nic.in/",
      googleMaps: "https://goo.gl/maps/hemis"
    },

    accessibility: {
      wheelchairFriendly: false,
      notes: "The large courtyard is flat, but the main temple and museum require climbing stairs."
    },

    routePlan: [
      { time: "09:00 AM", activity: "Hemis Museum (Treasures)" },
      { time: "10:30 AM", activity: "Main Prayer Hall" },
      { time: "12:00 PM", activity: "Lunch at Monastery Restaurant" }
    ],

    foodGuide: [
      { name: "Hemis Monastery Restaurant", type: "Basic", specialty: "Thukpa & Momos", rating: 3.9 }
    ],

    emergency: {
      police: "100",
      ambulance: "108",
      touristHelpline: "1800-180-7205",
      nearestHospital: "SNM Hospital Leh"
    }
  }
]; 
