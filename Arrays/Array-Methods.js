let array = ["Afiya", "Information Technology", 22, 3.99, 5, 3];
// console.log(array);
for (let i in array) {
    console.log(array[i]);
}
array.push("Focus Focus", "Javascript");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift("Afiya siddiqui");
console.log(array);

array.splice(5, 0, "Spliceeeee");
console.log(` ${array}`);


array.reverse();
console.log(array);


array.copyWithin(0,3,4);
console.log(array);


let marks=[11,11,32,44,54,65,32,57,86,54,32,11,45,76,7];
marks.sort((a,b)=>b-a);
console.log(marks);


let movies=['haq','fall','pink','fito'];
movies.copyWithin(2,3);
// 2 paste at index
// 3 from index
console.log(movies);

let score=new Array(10);
score.fill(0);
console.log(score);


console.log(score.concat(marks,array));

console.log(array.slice(2,6));
console.log(array.includes(22));
console.log(array.indexOf());
