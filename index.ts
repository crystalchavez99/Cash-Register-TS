let drawer: any= [
    { name: 'penny', value: 1, quantity: 2 },
    { name: 'nickel', value: 5, quantity: 0 },
    { name: 'dime', value: 10, quantity: 0 },
    { name: 'quarter', value: 25, quantity: 3 },
    { name: 'one', value: 100, quantity: 2 },
    { name: 'five', value: 500, quantity: 1 },
    { name: 'ten', value: 1000, quantity: 1 }
];
let coins: string[] = ["penny", "nickel", "dime", "quarter"] ;
let notes: string[] = ["one", "five", "ten", "twenty", "hundred"];
function removeItem(name: string, drawer){
    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i];
        if(obj["name"] == name){
            obj["quantity"] -= 1;
        }
    }
    return drawer;
}

console.log(removeItem("penny", drawer));

function addItem(name: string, drawer){
    for(let i = 0; i < drawer.length; i++){
        let obj = drawer[i];
        if(obj["name"] == name){
            obj["quantity"] += 1;
        }
    }
    return drawer;
}

console.log(addItem("nickel", drawer))

function countCoins(drawer): number{
    let total : number = 0;
    drawer.forEach(item =>{
        if(coins.indexOf(item.name) > -1){
            total += item.quantity;
        }
    })
    return total;
}

console.log(countCoins(drawer));

function countNotes(drawer): number{
    let total : number = 0;
    drawer.forEach(item =>{
        console.log(`Total: ${total}`)
        console.log(`${item.name}, ${item.quantity}`)
        if(notes.indexOf(item.name) > -1){
            total += item.quantity;
        }
    })
    return total;
}

console.log(countNotes(drawer))