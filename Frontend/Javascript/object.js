/*
There are different ways to create new objects:

    Create a single object, using an object literal.
    Create a single object, with the keyword new.
    Define an object constructor, and then create objects of the constructed type.
    Create an object using Object.create().
*/

//Usign literal object
const person_1 = {firstName : "John", lastName : "Doe", age:50, eyeColor : "blue"};

//paces and line breaks are not important. An object definition can span multiple lines:
const person_2 = {
    firstname: "Ram",
    lastname: "Sharma",
    age: 40,
    eyeColor: "black"
};

//New keyword can be used also to create new objects later it can be initialized
const person_3 = new Object();
person_3.firstname = "Adarsh";
person_3.lastname = "Mishra";
person_3.age = 24;
person_3.eyeColor = "blue";

//Objects are mutable: They are addressed by reference, not by value.
const temp = person_3;
//Now temp is also pointing to person_3,It is becuase of reference
console.log(temp.firstname);
//Now change the value of temp it will be effected in person as well
temp.name = "Student";
console.log(person_3.name);

//Builtin object 
let str = "Adarsh"
str[0] = "t";
console.log(str[0]);

/*
----------------------------------------------
To solve different kinds of problems, JavaScript provides various built-in objects. Each object contains properties and methods. Some of the built-in objects in Javascript are:

    Array
    Date
    Math
    String
    Number
*/

//Examples 
    var today = new Date();
    var text_value = "Hello World";
    var len = str.length;

//Type of operator
    console.log(typeof text_value+"\n");
    console.log(typeof len);