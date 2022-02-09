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

function getMyProducts(products, searchTex) {
    let result = [];
    for (const product of products) {
        // if (product.price > 50000 && product.name.includes(searchTex)) {
        //     console.log(product);
        // }
        if (product.name.includes(searchTex)) {
            // return product;
            // console.log(product.name);
            result.push(product);
        }
    }
    return result;
}
// let searchTex;
let myProduct = getMyProducts(products, 'laptop');
console.log(myProduct);