// for (i = 1; i <= 5; i++) {
//     console.log(i);
// }

function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    // consoleNumber(i++); if you use i++ , you can't increment value because i++ increment next value(Know more details ,google i++)
    consoleNumber(i + 1);
}

consoleNumber(1);