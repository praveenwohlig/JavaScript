// let account = {
//     name: "Praveen",
//     mobile: 9844961813,
//     bal: 24000
// }
// console.log(account['name']);

let account = {
    name: "Praveen",
    mobile: 9844961813,
    bal: 24000,
    address: {
        city: "Blr",
        pincode: 560041
    }
}
for (let key in account.address) {
    console.log(key, account.address[key]);

}

