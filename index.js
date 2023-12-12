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
var notes = ["one", "five", "ten", "twenty", "hundred"];
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
        if (coins.indexOf(item.name) > -1) {
            total += item.quantity;
        }
    });
    return total;
}
console.log(countCoins(drawer));
function countNotes(drawer) {
    var total = 0;
    drawer.forEach(function (item) {
        if (notes.indexOf(item.name) > -1) {
            total += item.quantity;
        }
    });
    return total;
}
console.log(countNotes(drawer));
function sumDrawer(drawer) {
    var total = 0;
    drawer.forEach(function (item) {
        total += (item.quantity * item.value);
    });
    return (total / 100).toFixed(2);
}
console.log(sumDrawer(drawer));
function canMakeAmount(target, drawer) {
    drawer = drawer.reverse();
    console.log(drawer.reverse());
    drawer.forEach(function (item) {
        while (item.quantity > 0 && target >= 0 && target >= item.value) {
            target -= item.value;
            item.quantity -= 1;
        }
    });
    if (target === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(canMakeAmount(613, drawer));
console.log(canMakeAmount(1651, drawer));
