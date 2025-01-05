let cart=[];
function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); // Parse the cart data from JSON
    }
    renderCart(); // Render the cart with stored data
}
function saveSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart)); // Store cart data for the session
}
// Save the cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart data as JSON string
}

function updateQuantity(itemId, change) {
    // Find the item in the cart
    let item = cart.find(cartItem => cartItem.id === itemId);

    if (item) {
        item.quantity += change;

        if (item.quantity < 1) {
            item.quantity = 1;
        }

        // Re-render the cart
        renderCart();
    }}
    function removeItem(itemId) {
        // Remove the item from the cart array
        cart = cart.filter(cartItem => cartItem.id !== itemId);
        saveSessionStorage(); 
        saveCart();
        renderCart();
    }
function additem (id){
  let itemID=id;
    let item=document.getElementById(id);
    let image=item.firstElementChild;
    let price=parseInt(item.children[1].children[1].textContent);
        console.log(image); let existingItem = cart.find(cartItem => cartItem.id === id);

        if (existingItem) {
            // If item exists, increase the quantity
            existingItem.quantity++;
        } else {
            // If item doesn't exist, add new item to cart
            let cartItem = {
                id:itemID,
                price: price,
                imageSrc: image.src,
                quantity: 1 // Set initial quantity to 1
            };
            cart.push(cartItem);

        }
        saveSessionStorage(); 
        saveCart() ;
        renderCart();
    }
        function renderCart() {
            let cartItems= document.getElementById("cart");
            cartItems.innerHTML = ''; // Clear existing cart items
        
            cart.forEach(item => {
                // Use a template to render each item in the cart
                let cartItem = `
                    <div class="cart-item">
                        <img src="${item.imageSrc}" alt="">
                        <div style="align-self: center;" >
                            <button onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button  onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                        <p style="align-self: center;" > ${item.price * item.quantity} JD</p>
                        <button class="remove-btn" onclick="removeItem('${item.id}')">
                   delete
                </button>
                    </div>
                `;
        
                cartItems.innerHTML += cartItem; 
                
            });
        
        let totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        // Add the total price to the Total container
        let totalTemplate = `
            <div class="cart-total">
                <p>Total: ${totalPrice} JD</p>
            </div>
        `;
        document.getElementById("Total").innerHTML = totalTemplate; // Render total in the Total div
    }
    window.onload = loadCart;
    

