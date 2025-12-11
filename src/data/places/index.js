import { ANDHRA_PRADESH_PLACES } from './andhra_pradesh';
import { ARUNACHAL_PRADESH_PLACES } from './arunachal_pradesh';
import { ASSAM_PLACES } from './assam';
import { BIHAR_PLACES } from './bihar';
import { CHHATTISGARH_PLACES } from './chhattisgarh';
import { GOA_PLACES } from './goa';
import { GUJARAT_PLACES } from './gujarat';
import { HARYANA_PLACES } from './haryana';
import { HIMACHAL_PRADESH_PLACES } from './himachal_pradesh';
import { JHARKHAND_PLACES } from './jharkhand';
import { KARNATAKA_PLACES } from './karnataka';
import { KERALA_PLACES } from './kerala';
import { MADHYA_PRADESH_PLACES } from './madhya_pradesh';
import { MAHARASHTRA_PLACES } from './maharashtra';
import { MANIPUR_PLACES } from './manipur';
import { MEGHALAYA_PLACES } from './meghalaya';
import { MIZORAM_PLACES } from './mizoram';
import { NAGALAND_PLACES } from './nagaland';
import { ODISHA_PLACES } from './odisha';
import { PUNJAB_PLACES } from './punjab';
import { RAJASTHAN_PLACES } from './rajasthan';
import { SIKKIM_PLACES } from './sikkim';
import { TAMIL_NADU_PLACES } from './tamil_nadu';
import { TELANGANA_PLACES } from './telangana';
import { TRIPURA_PLACES } from './tripura';
import { UTTAR_PRADESH_PLACES } from './uttar_pradesh';
import { UTTARAKHAND_PLACES } from './uttarakhand';
import { WEST_BENGAL_PLACES } from './west_bengal';
import { ANDAMAN_AND_NICOBAR_ISLANDS_PLACES } from './andaman_and_nicobar_islands';
import { CHANDIGARH_PLACES } from './chandigarh';
import { DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU_PLACES } from './dadra_and_nagar_haveli_and_daman_and_diu';
import { DELHI_PLACES } from './delhi';
import { JAMMU_AND_KASHMIR_PLACES } from './jammu_and_kashmir';
import { LADAKH_PLACES } from './ladakh';
import { LAKSHADWEEP_PLACES } from './lakshadweep';
import { PUDUCHERRY_PLACES } from './puducherry';

// Combine all arrays into one massive list
export const ALL_PLACES = [
  ...ANDHRA_PRADESH_PLACES,
  ...ARUNACHAL_PRADESH_PLACES,
  ...ASSAM_PLACES,
  ...BIHAR_PLACES,
  ...CHHATTISGARH_PLACES,
  ...GOA_PLACES,
  ...GUJARAT_PLACES,
  ...HARYANA_PLACES,
  ...HIMACHAL_PRADESH_PLACES,
  ...JHARKHAND_PLACES,
  ...KARNATAKA_PLACES,
  ...KERALA_PLACES,
  ...MADHYA_PRADESH_PLACES,
  ...MAHARASHTRA_PLACES,
  ...MANIPUR_PLACES,
  ...MEGHALAYA_PLACES,
  ...MIZORAM_PLACES,
  ...NAGALAND_PLACES,
  ...ODISHA_PLACES,
  ...PUNJAB_PLACES,
  ...RAJASTHAN_PLACES,
  ...SIKKIM_PLACES,
  ...TAMIL_NADU_PLACES,
  ...TELANGANA_PLACES,
  ...TRIPURA_PLACES,
  ...UTTAR_PRADESH_PLACES,
  ...UTTARAKHAND_PLACES,
  ...WEST_BENGAL_PLACES,
  ...ANDAMAN_AND_NICOBAR_ISLANDS_PLACES,
  ...CHANDIGARH_PLACES,
  ...DADRA_AND_NAGAR_HAVELI_AND_DAMAN_AND_DIU_PLACES,
  ...DELHI_PLACES,
  ...JAMMU_AND_KASHMIR_PLACES,
  ...LADAKH_PLACES,
  ...LAKSHADWEEP_PLACES,
  ...PUDUCHERRY_PLACES
];

// --- CRITICAL EXPORTS FOR HOME.JSX ---

// 1. Export 'PLACES' (Home.jsx looks for this specifically)
export const PLACES = ALL_PLACES;

// 2. Export 'TOP_DESTINATIONS' (Home.jsx looks for this)
// We slice the first 8 to show as "Top Destinations" initially
export const TOP_DESTINATIONS = ALL_PLACES.slice(0, 8); 

// 3. Helper function
export const getPlacesByState = (stateName) => {
  return ALL_PLACES.filter(p => p.state === stateName);
};