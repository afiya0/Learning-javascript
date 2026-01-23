// ========================================
// Basic While Loop: Counting Down
// ========================================

let i = 10;

while (i > 0) {
    console.log(i); // Prints 10 down to 1
    i--;
}


// ========================================
// Energy Level Example
// Prints a warning when energy is low
// ========================================

let energy = 50;

while (energy > 0) {
    if (energy <= 20) {
        console.log("Low energy warning!");
    } else {
        console.log(`Energy left: ${energy}`);
    }
    energy -= 10;
}


// ========================================
// Snooze Alarm Example
// Prints snooze count, then wake up message
// ========================================

let snoozeCount = 1;
const maxSnoozes = 6;

while (snoozeCount <= maxSnoozes) {
    if (snoozeCount < maxSnoozes) {
        console.log(`Snooze ${snoozeCount}`);
    } else {
        console.log("Wake up!");
    }
    snoozeCount++;
}
