// Simple Function Declaration
function greetAfiya() {
    return "Hello Afiya, welcome to JavaScript 💙";
}
console.log(greetAfiya());

// Function With Parameters 
function introduce(name, field) {
  return `My name is ${name} and I am learning ${field}`;
}
console.log(introduce("Afiya", "JavaScript"));

// Arrow Function (Modern JS)
const afiyaStatus = () => "functions in JavaScript";
console.log(afiyaStatus());

// Arrow Function With Calculation
const afiyaScore = (practice, consistency) => practice + consistency;
console.log(afiyaScore(40, 60));

// Function Expression (Anonymous)
const afiyaMotivation = function () {
  return "Afiya never stops learning ";
};

console.log(afiyaMotivation());

// Default Parameters 
function afiyaLevel(skill = "JavaScript") {
  return `Afiya is improving her ${skill} skills`;
}
console.log(afiyaLevel());
console.log(afiyaLevel("Web Development"));


// Rest Parameters (Multiple Inputs)
function afiyaGoals(...goals) {
  return goals;
}
console.log(afiyaGoals("JS", "React", "Career", "Confidence"));

// Object Method Function
const afiya = {
  name: "Afiya",
  field: "IT Student",
  intro() {
    return `Hi, I am ${this.name} and I am an ${this.field}`;
  }
};

console.log(afiya.intro());