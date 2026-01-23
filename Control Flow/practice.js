let accountBalance = 22000;
let withdrawalAmount = 9000;

if (withdrawalAmount <= 0) {
  console.log("Invalid amount");
} else if (withdrawalAmount % 500 !== 0) {
  console.log("Amount must be multiple of 500");
} else if (withdrawalAmount > accountBalance) {
  console.log("Insufficient balance");
} else {
  console.log("Withdrawal Successful");
}

// task 2
let uname = "afiya";
let password = "000";
if (uname !== "" && !password !== "") {
  console.log("Login Successfully");
} else {
  console.log("Please Enter Paswword and Username");
}
// task 3

let lightColor = "yellow";
if (lightColor == "green") {
  console.log("Go");
} else if (lightColor == "yellow") {
  console.log("Get Ready");
} else if (lightColor == "red") {
  console.log("Stop");
} else {
  console.log("“Invalid signal”");
}

// ELse if and Switch Mix
let age = 20;
let ticketype = "premium";
if (age <= 10) {
  console.log("Invalid Age");
} else {
  switch (ticketype) {
    case "regular":
      console.log("100");
      break;
    case "premium":
      console.log("200");
      break;
    default:
      console.log("“Invalid ticket type”");
  }
}
// Simple Tip Calculator
let billAmount = 1000;
let service = "poor"; // test different service types

if (billAmount <= 0) {
  console.log("Invalid bill amount");
} else {
  switch (service) {
    case "good":
      console.log(`Total amount to pay: ${billAmount - billAmount * 0.2}`); // 20% tip
      break;
    case "average":
      console.log(`Total amount to pay: ${billAmount - billAmount * 0.1}`); // 10% tip
      break;
    case "poor":
      console.log(`Total amount to pay: ${billAmount - billAmount * 0.05}`); // 5% tip
      break;
    default:
      console.log("Invalid service type");
  }
}
let userRole = "Admin";
let message;

switch (userRole) {
  case "Admin":
    message = "Admin permissions";
    break;
  case "Moderator":
    message = "Moderator permissions";
    break;
  case "User":
    // if inside switch (correct)
    if (userRole === "User") {
      console.log(`Hello ${userRole}`);
    }
    message = "User permissions";
    break;

    // break;
  default:
    message = "Unknown role";
}

console.log(message); 
