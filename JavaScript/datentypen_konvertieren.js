// Umwandeln von Datentypen mit parseInt - beachtet keine Kommastellen
const ageAsString = '12,5';
const age = parseInt(ageAsString);

console.log(age);
console.log(ageAsString);

console.log(typeof age);
console.log(typeof ageAsString);

// Umwandeln von Datentypen mit parseFloat - beachtet Kommastellen
const ageAsString = '12,5';
const age = parseFloat(ageAsString);

console.log(age);
console.log(ageAsString);

console.log(typeof age);
console.log(typeof ageAsString);

//string wird zu number-integer
