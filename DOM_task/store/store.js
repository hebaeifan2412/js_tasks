let cart=[];
function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); 
    }
    renderCart(); 
}
function saveSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart)); 
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); 
}

function updateQuantity(itemId, change) {
    let item = cart.find(cartItem => cartItem.id === itemId);

    if (item) {
        item.quantity += change;

        if (item.quantity < 1) {
            item.quantity = 1;
        }

        renderCart();
    }}
    function removeItem(itemId) {
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
            existingItem.quantity++;
        } else {
            let cartItem = {
                id:itemID,
                price: price,
                imageSrc: image.src,
                quantity: 1 
            };
            cart.push(cartItem);

        }
        saveSessionStorage(); 
        saveCart() ;
        renderCart();
    }
        function renderCart() {
            let cartItems= document.getElementById("cart");
            cartItems.innerHTML = ''; 
        
            cart.forEach(item => {
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

        let totalTemplate = `
            <div class="cart-total">
                <p>Total: ${totalPrice} JD</p>
            </div>
        `;
        document.getElementById("Total").innerHTML = totalTemplate; 
    
        }
