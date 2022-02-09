// function factorialSum(num) {
//     let fact = 1;
//     for (let i = num; i > 0; i--) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(factorialSum(4));

function factorialSum(num) {
    console.log(num);
    if (num == 1) {
        return 1;
    }
    return num * factorialSum(num - 1);
}
console.log(factorialSum(4));