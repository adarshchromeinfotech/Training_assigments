//JavaScript has primitive (built-in) and non-primitive (not built-in) data structures

//-------json------------------
//JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on 
//JavaScript object syntax
//it is stored like key value pairs

let student = {
    "name": "Adarsh",
    "age": 24,
    "gender": "male",
    "grade": "A"
  };
//console.log(student.name);
console.log(student);

//------------Arrays
//There are two syntaxes for creating an empty array:

//let arr = new Array();
let arr = [];

//Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

//let fruits = ["Apple", "Orange", "Plum"];

//Array elements are numbered, starting with zero.

//We can get an element by its number in square brackets:

let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange

//We can replace an element:

fruits[2] = 'Pear'; // now ["Apple", "O