// ==============================
// Primitive Data Types in JavaScript
// ==============================

// Number
let studentId = 101;
let marks = 99;
let cgpa = 3.99;

// String
let studentName = "Afiya";

// Boolean
let isGraduate = false;

// Null (intentional absence of value)
let isMarried = null;

// Undefined (value not assigned)
let hasChild;

// Symbol (unique identifier)
let secretId = Symbol("afiya");

// BigInt (used for very large numbers)
let expectedSalary = 1109098765479846454n;

// Logging Symbol (cannot be concatenated directly)
console.log(secretId);

// Copying symbol reference
let copiedSymbol = secretId;

// Template literal output
console.log(`
Student ID: ${studentId}
Name: ${studentName}
Graduate: ${isGraduate}
Last Semester Marks: ${marks}
CGPA: ${cgpa}
Marital Status: ${isMarried}
Has Child: ${hasChild}
Secret Name: ${secretId.description}
Expected Salary: ${expectedSalary}
`);

// JavaScript is a dynamically typed language, which means:
// You do not need to define the data type explicitly.
// The same variable can store different data types at different times.
// The type is decided at runtime.
let dynamicName = "Afiya";
dynamicName = "Ali";
dynamicName = "Aman" + true + 88;

console.log(dynamicName); // Output: Amantrue88


// DataType Quirks 
console.log(`
Type of studentName: ${typeof studentName} 
Type of studentId: ${typeof studentId}        
Type of isGraduate: ${typeof isGraduate}    
Type of isMarried: ${typeof isMarried}       
Type of hasChild: ${typeof hasChild}      
Type of secretId: ${typeof secretId}        
Type of expectedSalary: ${typeof expectedSalary} 
`);


// Type Correcion
// let n=11+"1";
// let nn=11-"1";
// let n=true+1;
// let n=false+1;
// let n=null+1;
let n=undefined+1;
console.log(n);
console.log(!!n); //trick to know the truthy and falsy value



