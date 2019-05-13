let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
let result = jennyStr.match(myRegex);

console.log(result);

let quoteSample = "Blueberry 3.141592653s are delicious.";
 myRegex = /[h-s2-6]/ig; // Change this line
 result = quoteSample.match(myRegex); // Change this line

console.log(result);
