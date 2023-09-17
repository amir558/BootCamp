const cart: string[] = [];

function addToCart(product: string) {
    cart.push(product);
}

addToCart("apple");

function showCart() {
    console.log("orders is:");
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
    }
}

showCart();