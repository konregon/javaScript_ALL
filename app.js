console.log("Hello world by using External means")

// JavaScript can "display" data in different ways:
//  Writing into an HTML element, using innerHTML.
//  Writing into the HTML output using document.write().
//      Only use this for testing. Red flag
//  Writing into an alert box, using window.alert().
//  Writing into the browser console, using console.log().



// A computer program is a list of "instructions" to be "executed" by a computer.
// In a programming language, these programming instructions are called statements.
// A JavaScript program is a list of programming statements.

// JavaScript statements are composed of:
// Values, Operators, Expressions, Keywords, and Comments.
// This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

// 5. variables
var x = 51;
var y = 65;
var z = 351;
var a = x+y+z;
console.log(a);

// 6. let
// Variables defined with let cannot be redeclared.
let carName = "swift";
var numberPlate = 4587;
console.log(carName);
console.log(numberPlate);
{
    var numberPlate = 9875;
    let carName = "wegon";
}
console.log(numberPlate);
console.log(carName);

// 7. const
// A const variable cannot be reassigned:
// JavaScript const variables must be assigned a value when they are declared:
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// 8. operators
var x = 5;         // assign the value 5 to x
var y = 2;         // assign the value 2 to y
var z = x + y;
console.log(z);
var z = x * y;
console.log(z);
z = x / y;
console.log(z);


// 9. Arithmetic
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement


// 10. Assignment
// +=	Addition
// -=	Subtraction
// *=	Multiplication
// **=	Exponentiation (ES2016)
// /=	Division
// %=	Modulus (Remainder)
// ++=	Increment
// --=	Decrement
z += 45;

// 11. data types
let length1 = 16;                               // Number
let lastName1 = "Johnson";                      // String
let x1 = {firstName:"John", lastName:"Doe"};    // Object
console.log(length1);
console.log(lastName1);
console.log(x1);


// 12. Functions
// function name(parameter1, parameter2, parameter3) {
//     // code to be executed
//   }
function sample(a1 = 5, a2 = 5){
    return a1 * a2;
}
console.log(sample);