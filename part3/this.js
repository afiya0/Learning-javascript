// 1️⃣ Global Scope
console.log(this); 
// Output in browser → Window (global object)
// Output in strict mode → undefined

// 2️⃣ Function Scope
function greet() {
    let a = 10;
    console.log(this);
}
greet(); 
// Output → Window (or undefined in strict mode)

// 3️⃣ Object Method (Implicit Binding)
let obj = {
    name: "Afiya",
    city: "Hyderabad",
    sayName: function() {
        console.log(this);
    }
};
obj.sayName();
// Output → { name: "Afiya", city: "Hyderabad", sayName: f }
// 'this' points to the obj itself

// 4️⃣ Constructor Function (New Binding)
function User(name) {
  this.name = name;
}

const u1 = new User("Sara");
console.log(u1.name); 
// Output → "Sara"
// 'this' points to the newly created object

// 5️⃣ Explicit Binding with bind()
const b = {
  name: "John",
  print: function () {
    console.log(this.name);
  }
};

setTimeout(b.print.bind(b), 2000); 
// Output after 2 seconds → "John"
// 'this' is permanently bound to object 'b'


function name (){
 let a=10;
  console.log(a);
}

// Binding


let a={
  name:"afiya",
   namea:function(){
    console.log(this);
  }
}