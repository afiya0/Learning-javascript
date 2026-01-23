console.log("It is All About variables ");

// VAR
// var variable add in window
// function scoped
// can declare again and again  
a=10; //it contain bugs
var x=10;
var x=220;
console.log(`So the Result is ${x}`);



// Let is a block scope use in like if while for 
// let y=10;
// let y=10;
// console.log(`${y} it through the error because it is block scoped variable`);


let name="Afiya siddiqui";
let age=22;
console.log(`Her name is ${name} and age is ${age}`);

const marks=22;
console.log(marks);

if(true){
    let sname="afiya";
console.log(sname);

}
// console.log(sname);

// const use when you know value will not change in whole project 
// block scope 
// Scoped to blocks
// Cannot be reassigned or redeclared
// Value must be assigned at declaration
// TDZ applies here too


const lname="Afiya";
console.log(lname);
