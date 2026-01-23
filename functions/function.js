// function fname(parameter,parameter...){
    // code
// }


// Anonymous Function
// let fnc=function(){
    // Function Expression
//     code
// }


// fat arrow function
// let fnc=()=>{
//     code
// }


// default parameter 
function val(a=0,b=0){
    console.log(`${a+b} Default Parameter`);
}
val(22,22);


// Spread Function 
function fno(...value){
    console.log(value);
}
fno(1,12,2,2,3,3,444,5,5,6,);

// Function Declaration (Normal Function)
function greet(name){
    console.log("Hello " + name);
}
greet("afiya");
greet("aman");

let greeet=function gt(){
    console.log("Hello NameD Function ");
}
greeet();

let add=(n,m)=>n+m;
console.log(add(12,22));


// Immediately Invoked Function Expression (IIFE)
(function(){
    console.log("run run run");
})();

 
let user ={ 
    name:'afiya',
    age:12,
    af(){
        console.log("Hello Method Function (Inside Objects)")
    }
};
user.af()