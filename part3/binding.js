// Binding


let a = {
    name: "afiya",
    city: "hyderabad",
    namea: function () {
        console.log(this.name,this.city);
    }
}
a.namea();



let object={
    name:"afiya",
    city:"hyderabad",
    height:56,
}
function info(name,age,country){
    console.log(`Calling object info`,this,name,age,country);
}
info.call(object,"Afiya",22,"Pakistan");


// apply method 
info.call(object,["She is Apply",12,"india"]);

let fnc=info.bind(object,"she is Bind",18,"Englad");
fnc();