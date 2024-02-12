/*Type conversion is similar to type coercion because they both convert values from one data type to
 another with one key difference — type coercion is implicit whereas type conversion can be either implicit 
 or explic. 
 implicit means the conversion can be done internally be compiler automatically but 
 explicit conversion needs to done manually by the user. 
 */

 //Example 
 
// string to number-explicitly
    let result;
    result = Number('324');
    console.log(result); // 324
//  number to string-implicitly or coercion
    result = '3' + 2; 
    console.log(result) // "32"