function BMI(height, weight) {
    return weight / (height * height);
}
console.log(`Your BMI is ${BMI(62, 45.8).toFixed(4)}`);


function disCountCal(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}
let ten = disCountCal(10);
let twenty =disCountCal(20);
console.log(twenty(2000));


function sum(...val){
    let total=0;
    for(let i =0 ; i<val.length;i++){
        total +=val[i];
    }
    return total
}
console.log(sum(1,2,3,4,5,55,4,3,2));