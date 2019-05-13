// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /./; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt