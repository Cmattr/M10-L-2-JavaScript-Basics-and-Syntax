let login = true;

if (login)
{
    console.log("Thank you for logining in.")    
}
else
{
    console.log("Please log in to continue.")
}

const items = ["milk", "bread", "honey"]
for (const food in items) {
    console.log("Items:", items[food])
}

let cart = {};

function addToCart(product)
{
    if (cart[product])
        { 
            cart[product]++;
        }
    else{
            cart[product] = 1
        }
}   

function calculateTotalPrice() {
    let total = 0;
    for (const [product, quantity] of Object.entries(cart)) {
        const productInfo = products.find(p => p.name === product);
        if (productInfo) {
            total += productInfo.price * quantity;
        }
    }
    return total;}

const totalCost = calculateTotalPrice();
console.log(`Total cost: $${totalCost}`);

const viewCart = addToCart()
console.log(viewCart)