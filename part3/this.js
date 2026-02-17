// global scope
console.log(this);

// function scope
function greet() {
    let a = 10;
    // console.log(a);

    console.log(this);

}
// greet();

// Object
let obj={
    name:"afiya",
    city:"hyderabad",
    sayName:function(){
        console.log(this);
    }
}
obj.sayName();

function User(name) {
  this.name = name;
}

const u1 = new User("Sara");
console.log(u1.name);


const a = {
  name: "John",
  print: function () {
    console.log(this.name);
  }
};

setTimeout(a.print, 1000);

