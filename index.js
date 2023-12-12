var drawer = [
    { name: 'penny', value: 1, quantity: 2 },
    { name: 'nickel', value: 5, quantity: 0 },
    { name: 'dime', value: 10, quantity: 0 },
    { name: 'quarter', value: 25, quantity: 3 },
    { name: 'one', value: 100, quantity: 2 },
    { name: 'five', value: 500, quantity: 1 },
    { name: 'ten', value: 1000, quantity: 1 }
];
var coins = ["penny", "nickel", "dime", "quarter"];
function removeItem(name, drawer) {
    for (var i = 0; i < drawer.length; i++) {
        var obj = drawer[i];
        if (obj["name"] == name) {
            obj["quantity"] -= 1;
        }
    }
    return drawer;
}
console.log(removeItem("penny", drawer));
function addItem(name, drawer) {
    for (var i = 0; i < drawer.length; i++) {
        var obj = drawer[i];
        if (obj["name"] == name) {
            obj["quantity"] += 1;
        }
    }
    return drawer;
}
console.log(addItem("nickel", drawer));
function countCoins(drawer) {
    var total = 0;
    drawer.forEach(function (item) {
        console.log("Total: ".concat(total));
        console.log("".concat(item.name, ", ").concat(item.quantity));
        if (coins.indexOf(item.name) > -1) {
            total += item.quantity;
        }
    });
    return total;
}
console.log(countCoins(drawer));
