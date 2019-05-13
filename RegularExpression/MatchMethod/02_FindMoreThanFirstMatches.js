let input = 'Cat is domestic animal and cat drinks milk';
let regExpression = /Cat/g

console.log(input.match(regExpression));

regExpression = /Cat/ig

console.log(input.match(regExpression));