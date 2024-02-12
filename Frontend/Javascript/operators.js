/*
Double equals (==) is a comparison operator,
which transforms the operands having the same type before comparison.

=== (Triple equals) is a strict equality comparison operator in JavaScript,
which returns false for the values which are not of a similar type. This operator performs type casting for equality.
If we compare 2 with “2” using ===, then it will return a false value.
*/
var num1 = 5;
var str1 = "5";
console.log(num1 == str1); //true ,type conversion are performed before check
console.log(num1 === str1);  // false, because types are different (number vs. string)

// ---Object.is()  : It is also use for comparison like === but it can provide more precise answer
console.log(NaN === NaN);  // false
console.log(Object.is(NaN, NaN));  // true
console.log(-0 === 0);  // true
console.log(Object.is(-0, 0));  // false
