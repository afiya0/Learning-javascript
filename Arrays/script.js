// Arrays

let des = ["Afiya", 20, "CS", 1, 2, 4, 7, 86, 32, 2];
console.log(des);
console.log(des[0]);
console.log(des[8]); //output Undefined
des[2] = "Graphics";
console.log(des);


// accept function
des.sort(function (a, b) {
    return a - b;
})
console.log(des);


des.forEach(function (val) {
    console.log(val + 52);
});

let newarr = des.map(function (val) {
    return "Hello It is the Map";
})
console.log(newarr);


des = [1, 3, 4, 5, 66, 77, 865, 3, 21];
let gt = des.map(function (val) {
    if (val > 4) return val
})
console.log(gt);



let marks = [1, 66, 75, 4, 32, 1, 4, 56, 88, 8, 65];
let newM = marks.filter(function (val) {
    if (val > 6) return true;
})
console.log(newM);


let reduce =marks.reduce(function(acc,val){
    return acc+val;
});
console.log(reduce);
