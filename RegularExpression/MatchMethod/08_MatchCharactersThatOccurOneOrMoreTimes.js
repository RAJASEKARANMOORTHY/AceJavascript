let input = 'aaabc';
let regExpression = /a+/

let result = input.match(regExpression);

console.log(result);

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
result = difficultSpelling.match(myRegex);

console.log(result);
