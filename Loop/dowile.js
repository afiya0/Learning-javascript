// ========================================
// Basic Do-While Loop
// ========================================

let i = 0;

do {
    console.log(i); // Prints 0 to 10
    i++;
} while (i <= 10);


// ========================================
// Reverse Counting with Continue
// Skip a specific number (3) using continue
// ========================================

let j = 10;

do {
    if (j === 3) {
        j--; // Decrease before skipping to avoid infinite loop
        continue; // Skip this iteration
    }
    console.log(`Reverse Counting ${j}`);
    j--;
} while (j >= 0);


// ========================================
// Reverse Counting with Break
// Stop the loop immediately when k reaches 5
// ========================================

let k = 10;

do {
    if (k === 5) {
        break; // Exit the loop
    }
    console.log(`Reverse Counting ${k}`);
    k--;
} while (k >= 0);
