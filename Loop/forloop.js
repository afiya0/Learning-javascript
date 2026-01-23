// ========================================
// Basic For Loops
// ========================================

// Loop from 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(`Hello ${i}`);
}

// Loop from 0 to 100
for (let j = 0; j <= 100; j++) {
    console.log(`${j} running loops`);
}

// Simple counting loop
for (let m = 0; m <= 10; m++) {
    console.log(m);
}


// ========================================
// Conditional Inside Loops
// ========================================

// Example: Chicken loop with condition
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log(`Chicken ${i} is tired now`);
    } else {
        console.log(`Chicken ${i}`);
    }
}

// Pizza eating loop
for (let i = 0; i <= 8; i++) {
    if (i === 3) {
        console.log(`${i} Drop the Pizza`);
    } else if (i >= 6) {
        console.log(`${i} Stop eating completely after slice`);
    } else {
        console.log(`Eat it ${i}`);
    }
}


// ========================================
// Decrement Loop Example
// Brain battery decreasing
// ========================================

for (let battery = 100; battery >= 0; battery -= 10) {
    if (battery === 30) {
        console.log(`Battery at ${battery}% - Brain overheating`);
    } else {
        console.log(`Battery at ${battery}%`);
    }
}


// ========================================
// Loops with Modulus Operator
// ========================================

// Boss fight every 3 levels
for (let g = 0; g <= 10; g++) {
    if (g % 3 === 0) {
        console.log(`${g} Boss Fight`);
    } else {
        console.log(`${g} Game`);
    }
}

// Even or Odd numbers
for (let n = 0; n <= 10; n++) {
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
}


// ========================================
// Multiplication Table Example
// ========================================

for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}


// ========================================
// Sum of Numbers Example
// ========================================

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(`Sum up to ${i} is ${sum}`);
}


// ========================================
// Even or Odd up to n
// ========================================

let limit = 10;
// let limit = prompt("Please enter the number");
for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
        console.log(`${i} Number is Even`);
    } else {
        console.log(`${i} Number is Odd`);
    }
}


// ========================================
// Numbers divisible by both 2 and 9
// ========================================

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 9 === 0) {
        console.log(i);
    }
}
