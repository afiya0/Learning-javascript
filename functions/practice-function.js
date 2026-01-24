function greet(name){
    return name;
}
console.log(greet("hello"));

function greet(name){
    console.log(`Hello js ${name} `);
}
greet("afiya");

function add(a,b){
    return a+b;
}
console.log(add(11,11));

function evenOdd(n){
   return n%2===0; 
}
console.log(evenOdd(224));

let sum = n=>n*n;
console.log(sum(3));

let all =n=>n-n;
console.log(all(8));

let Multiple=(a,b)=>{
    let result=a+b-a;
    console.log(result);
}
Multiple(111,22);


function abc(num){
    return num*num;

}
let val=abc(4);
console.log(val);