// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  const countryNames = countries.map((countries) => countries.name);
  return countryNames;
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  const countryCodes = countries.map((countries) => [countries.name, countries.iso2]);
  return countryCodes;
};

// INPUT: the array of shoes from data.js
// OUTPUT: an array of the brands
// REQS: use .map

export const getBrands = (brands) => {};
