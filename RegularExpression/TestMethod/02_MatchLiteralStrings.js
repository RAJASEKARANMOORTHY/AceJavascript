let testStr = "Hello, my name is Rajasekaran.";
let testRegex = /Rajasekaran/;
console.log(testRegex.test(testStr));
// Returns true

testRegex = /rajasekaran/;
console.log(testRegex.test(testStr));
