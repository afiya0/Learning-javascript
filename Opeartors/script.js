// ========================================
// Operators in JavaScript
// Used for mathematical and logical computations
// ========================================


// ========================================
// instanceof Operator (Type Checking)
// ========================================

let data = ["afiya", 11, true, 11n];

// Checks whether `data` is an instance of Array
console.log(data instanceof Array); // true


// ========================================
// Arithmetic Operators
// ========================================

let num1 = 10;
let num2 = 20;

console.log("\nArithmetic Operators");

console.log(`
Addition: ${num1 + num2}
Multiplication: ${num1 * num2}
Division: ${num1 / num2}
Subtraction: ${num1 - num2}
Exponentiation: ${num1 ** num2}
Modulus: ${num2 % num1}
`);


// ========================================
// Increment and Decrement Operators
// ========================================

console.log("Increment and Decrement");

console.log(`
Post Increment (num1++): ${num1++}
Pre Increment (++num2): ${++num2}
Post Decrement (num1--): ${num1--}
Pre Decrement (--num1): ${--num1}
`);


// ========================================
// Assignment Operators
// ========================================

let x = 100;
let y = 200;

console.log("Assignment Operators");

console.log(`
x = y        → ${(x = y)}
x += y       → ${(x += y)}
x -= y       → ${(x -= y)}
x *= y       → ${(x *= y)}
x /= y       → ${(x /= y)}
x %= y       → ${(x %= y)}
`);


// ========================================
// Comparison Operators
// Comparison operators always return true or false
// ========================================

let m = 10;
let n = 10;

console.log("Comparison Operators");

console.log(`
Equal (==): ${m == n}
Strict Equal (===): ${m === n}
Not Equal (!=): ${m != n}
Strict Not Equal (!==): ${m !== n}
Greater Than (>): ${m > n}
Less Than (<): ${m < n}
Greater or Equal (>=): ${m >= n}
Less or Equal (<=): ${m <= n}
`);


// ========================================
// Logical Operators
// ========================================

console.log("Logical Operators");

// OR (||) with ternary operator
let result = m === 10 || n < 10 ? "Good" : "False";
console.log(result);

// AND (&&) with real-world example
let loggedIn = true;
let hasToken = true;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access);
