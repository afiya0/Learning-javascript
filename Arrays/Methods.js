// arrayMethods.js

// Sample array for demonstration
let arr = [1, 2, 3, 4, 5, 2, 3];

// 1. push() - Adds item(s) to the end
arr.push(6);
console.log("push:", arr);

// 2. pop() - Removes last item
arr.pop();
console.log("pop:", arr);

// 3. shift() - Removes first item
arr.shift();
console.log("shift:", arr);

// 4. unshift() - Adds item(s) to the start
arr.unshift(0);
console.log("unshift:", arr);

// 5. splice() - Add / remove / replace items at specific index
arr.splice(2, 1, 99); // remove 1 at index 2, insert 99
console.log("splice:", arr);

// 6. sort() - Sort array
arr.sort((a, b) => a - b);
console.log("sort:", arr);

// 7. reverse() - Reverse array
arr.reverse();
console.log("reverse:", arr);

// 8. copyWithin() - Copy part of array within same array
arr.copyWithin(1, 3, 5); // copy index 3-4 to start at index 1
console.log("copyWithin:", arr);

// 9. fill() - Fill array with static value
arr.fill(0, 2, 4); // fill from index 2 to 3
console.log("fill:", arr);

// 10. concat() - Merge arrays
let arr2 = [7, 8];
let merged = arr.concat(arr2);
console.log("concat:", merged);

// 11. slice() - Copy portion of array
let sliced = arr.slice(1, 4);
console.log("slice:", sliced);

// 12. includes() - Check if value exists
console.log("includes 99:", arr.includes(99));

// 13. indexOf() - First index of value
console.log("indexOf 2:", arr.indexOf(2));

// 14. lastIndexOf() - Last index of value
console.log("lastIndexOf 2:", arr.lastIndexOf(2));

// 15. join() - Array to string with separator
console.log("join:", arr.join(" - "));

// 16. toString() - Array to comma-separated string
console.log("toString:", arr.toString());

// 17. toLocaleString() - String conversion based on locale
console.log("toLocaleString:", arr.toLocaleString());

// 18. flat() - Flatten nested arrays
let nested = [1, [2, 3], [4, [5]]];
console.log("flat:", nested.flat(2));

// 19. flatMap() - map() + flat() together
let flatMapped = nested.flatMap(x => (Array.isArray(x) ? x : [x]));
console.log("flatMap:", flatMapped);

// 20. forEach() - Loop through array
arr.forEach((val, i) => console.log(`forEach: index ${i}, value ${val}`));

// 21. map() - Transform each element → new array
let mapped = arr.map(x => x * 2);
console.log("map:", mapped);

// 22. filter() - Keep elements matching condition
let filtered = arr.filter(x => x > 2);
console.log("filter:", filtered);

// 23. reduce() - Combine array into one value
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log("reduce sum:", sum);

// 24. reduceRight() - Reduce from right to left
let sumRight = arr.reduceRight((acc, val) => acc + val, 0);
console.log("reduceRight sum:", sumRight);

// 25. some() - True if any element passes condition
console.log("some > 3:", arr.some(x => x > 3));

// 26. every() - True if all elements pass condition
console.log("every > 0:", arr.every(x => x > 0));

// 27. find() - First matching value
console.log("find > 2:", arr.find(x => x > 2));

// 28. findIndex() - Index of first match
console.log("findIndex > 2:", arr.findIndex(x => x > 2));

// 29. findLast() - Last matching value
console.log("findLast > 2:", arr.at(-1)); // Modern approach (JS doesn't have native findLast in all engines)

// 30. findLastIndex() - Index of last match
console.log("findLastIndex > 2:", arr.map((x, i) => x > 2 ? i : -1).filter(i => i !== -1).pop());

// 31. entries() - Iterator of [index, value]
for (let [i, val] of arr.entries()) {
  console.log("entries:", i, val);
}

// 32. keys() - Iterator of indexes
for (let key of arr.keys()) console.log("keys:", key);

// 33. values() - Iterator of values
for (let val of arr.values()) console.log("values:", val);

// 34. Array.isArray() - Check if value is array
console.log("Array.isArray:", Array.isArray(arr));

// 35. Array.from() - Create array from iterable
console.log("Array.from:", Array.from("hello"));

// 36. Array.of() - Create array from arguments
console.log("Array.of:", Array.of(1, 2, 3));

// Modern immutable methods
let orig = [5, 3, 1, 4, 2];

// toSorted()
console.log("toSorted:", orig.toSorted());

// toReversed()
console.log("toReversed:", orig.toReversed());

// toSpliced()
console.log("toSpliced:", orig.toSpliced(1, 2, 99)); // remove 2 items at index 1, insert 99

// with()
console.log("with:", orig.with(2, 100)); // replace index 2 with 100
