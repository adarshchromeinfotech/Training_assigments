/*
JavaScript function declarations are made by using the function keyword.
Functions can also be defined by saving function expressions to a variable. “Arrow” functions are commonly used in this way
*/
//Arrow function
    const greet = (name) => {
        console.log(`Hello, ${name}!`);
    };
// Calling the function
    greet('Adarsh');
  

    function myFunc(theArr) {
        theArr[0] = 30;
    }
  
    const arr = [45];
  
    console.log(arr[0]); // 45
    myFunc(arr);
    console.log(arr[0]); // 30
//Parameters
//There are two special kinds of parameter syntax: default parameters and rest parameters.
    function multiply(a, b = 1) {
        return a * b;
    }
  
    console.log(multiply(5)); // 5
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
    function multiply(multiplier, ...theArgs) {
        return theArgs.map((x) => multiplier * x);
    }
    
    const arr_num = multiply(2, 1, 2, 3);
    console.log(arr_num); // [2, 4, 6]
  