console.log("Control Flow");
console.log("IF Condition");

if (10 <= 12) {
  console.log("I am If");
}
console.log("IF Else ");
if ("afiya" == "afiya") {
  console.log("yes i am afiya");
} else {
  console.log("You are lying");
}

console.log("IF Else If Condition");

let age = 20;
if (age > 18) {
  console.log("you can run this site");
} else if (age < 18) {
  console.log("You are in danger");
} else {
  console.log("you are not an adult ");
}

console.log("Switch");
let date = new Date().getDay(); // 0–6
let day;

switch (date) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
    break;

  default:
    day = "Not a day";
}

console.log(day);
