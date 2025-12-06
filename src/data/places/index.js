// src/data/places/index.js

import { RAJASTHAN_PLACES } from './rajasthan';
import { GUJARAT_PLACES } from './gujarat'; 
import { KERALA_PLACES } from './kerala'; // Import Kerala

// 1. The Master Database (Contains Everything for Search)
export const PLACES = [
  ...RAJASTHAN_PLACES,
  ...GUJARAT_PLACES,
  ...KERALA_PLACES, // Add Kerala to master list
];

// 2. The "Top Picks" List (6 items for Home Page)
// I have updated this to include Kerala's best spots
export const TOP_DESTINATIONS = [
  // Rajasthan Top Pick
  RAJASTHAN_PLACES.find(p => p.id === 101), // Amer Fort
  RAJASTHAN_PLACES.find(p => p.id === 102), // Udaipur City Palace
  
  // Gujarat Top Pick
  GUJARAT_PLACES.find(p => p.id === 201), // Statue of Unity
  GUJARAT_PLACES.find(p => p.id === 208), // Rann of Kutch

  // Kerala Top Pick (New!)
  KERALA_PLACES.find(p => p.id === 301), // Munnar
  KERALA_PLACES.find(p => p.id === 303), // Alleppey Houseboat
];