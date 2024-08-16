let login = true;

if (login) {
    console.log("Thank you for logging in.");    
} else {
    console.log("Please log in to continue.");
}

const items = ["milk", "bread", "honey"];
for (const food of items) {
    console.log("Items:", food);
}

let cart = {};

function addToCart(product) {
    if (cart[product]) { 
        cart[product]++;
    } else {
        cart[product] = 1;
    }
}

const products = [
    { name: "milk", price: 1.5 },
    { name: "bread", price: 2.0 },
    { name: "honey", price: 3.5 }
];

function calculateTotalPrice() {
    let total = 0;
    for (const [product, quantity] of Object.entries(cart)) {
        const productInfo = products.find(p => p.name === product);
        if (productInfo) {
            total += productInfo.price * quantity;
        }
    }
    return total;
}


addToCart("milk");
addToCart("bread");
addToCart("honey");
addToCart("honey"); 


const totalCost = calculateTotalPrice();
console.log(`Total cost: $${totalCost}`);


console.log("Cart:", cart);
