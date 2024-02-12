
// example of a for loop
    console.log("for loop:");
    for (let i = 1; i <= 5; i++) {
        console.log(`iteration ${i}`);
    }

// example of a while loop
    console.log("\nwhile loop:");
    let count = 1;
    while (count <= 5) {
        console.log(`iteration ${count}`);
        count++;
    }

// example of a do-while loop
    console.log("\ndo-while loop:");
    let doWhileCount = 1;
    do {
        console.log(`iteration ${doWhileCount}`);
        doWhileCount++;
    } while (doWhileCount <= 5);

//For...in statement
//The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols),
//including inherited enumerable properties.

// Define an object
    const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
  };
  
// Iterate over the properties of the object using for...in loop
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

//For..of
// Define an array
const numbers = [1, 2, 3, 4, 5];

// Iterate over the elements of the array using for...of loop
for (let number of numbers) {
  console.log(number);
}

/*
An enumerable is just a read-only object that you can enumerate over.
This means it is a collection of any type of variables that you can go through one-by-one.
Since it is read-only, you can't change the enumerable itself,
you just read the information from it.
*/
  

/*You can use a label to identify a statement, and later refer to it using a break or continue statement.
Note that JavaScript has no goto statement; you can only use labels with break or continue.
 */
let str = '';

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// output: "0234"
