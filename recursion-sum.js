// function recursionSum(num) {
//     let sum = 0;
//     for (i = num; i > 0; i--) {
//         sum = sum + i;
//     }
//     return sum;
// }

// let getSum = recursionSum(5);
// console.log(getSum);


function recursionSum(num) {
    console.log(num);
    if (num == 1) {
        return 1;
    }
    // return num + recursionSum(num - 1);
    return num + recursionSum(--num);
}

let getSum = recursionSum(5);
console.log(getSum);