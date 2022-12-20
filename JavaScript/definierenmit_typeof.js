//Datentyp mit typeof console.log(typeof );

const name = 'Max Mustermann';      
//string
const age = 25;                     
//number-integer
const isCold = false;               
//boolean
const address = undefined;          
//undefined
const address = null;               
//object

console.log(typeof name);
console.log(typeof age);
console.log(typeof isCold);
console.log(typeof address);
console.log(typeof address);

// Datentypen können durch Ausgaben geändert werden. (nicht in statisch typisierten)
let name = 'Maxi Mustermaedchen';
name = 12
console.log(name);

// Datentypen in Ausgaben näher definieren
const age = 12;
const ageAsString = age.toString();

console.log(age);
console.log(ageAsString);

console.log(typeof age);
console.log(typeof ageAsString);
