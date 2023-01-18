// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers shoes
// REQS: use .reduce

export const getSneaks = (brands) => {
  // using a for loop:
  //   let sneaks = [];
  //   for (let brand of brands) {
  //     sneaks = [...sneaks, ...brand.shoes];
  //   }
  //   return sneaks;
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {};
