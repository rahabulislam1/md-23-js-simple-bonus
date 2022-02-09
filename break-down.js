const products = [
    { name: 'asus laptop', price: 35000 },
    { name: 'apple laptop', price: 96000 },
    { name: 'samsung mobile', price: 60000 },
    { name: 'ear bud apple', price: 15000 },
    { name: 'nokia mobile', price: 3500 },
    { name: 'dell laptop', price: 82000 },
    { name: 'huawei watch', price: 22000 },
    { name: 'oneplus mobile', price: 30000 },
    { name: 'dell watch', price: 5000 }
];

// for (const product of products) {
//     if (product.price < 20000) {
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 30000) {
        continue;
    }
    console.log(product);
}