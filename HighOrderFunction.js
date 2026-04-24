function add(a, b) {
    return console.log(a + b);
}
function sub(a, b) {
    return console.log(a - b);
}
function mul(a, b) {
    return console.log(a * b);
}

function calculator(a, b, callback) {
    callback(a, b)
}

calculator(2, 4, add)
calculator(2, 4, sub)
calculator(2, 4, mul)