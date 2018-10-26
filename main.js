
function changeItem(selectId, imageId) {
     var dropdown = document.getElementById(selectId);
     var image = document.getElementById(imageId);
     image.src = dropdown.options[dropdown.selectedIndex].value;
}

var cartList = [];
function addItem(colorSelectId, fillSelectId, qtySelectId) {
    var dropdownColor = document.getElementById(colorSelectId);
    var dropdownFill = document.getElementById(fillSelectId);
    var dropdownQty = document.getElementById(qtySelectId);
    var cartItem = {
        "img": dropdownColor.options[dropdownColor.selectedIndex].value,
        "color": dropdownColor.options[dropdownColor.selectedIndex].text,
        "fill": dropdownFill.options[dropdownFill.selectedIndex].value,
        "qty": dropdownQty.options[dropdownQty.selectedIndex].text,
    };
    cartList.push(cartItem);
    localStorage.setItem('items', JSON.stringify(cartList));
    console.log(localStorage.getItem('items'));
};


function openCart() {
    var cartStorage = localStorage.getItem('items');
    console.log("cart storage [unparsed]:", cartStorage);
    if (cartStorage) {
        var currentCart = JSON.parse(cartStorage); //list of arrays in one variable
        console.log("current cart [parsed]:", currentCart);
        for (var i= 0; i < currentCart.length; i++) {
            addItemToCartPage(currentCart[i]);
        }
    }
    /* for item in currentCart:
        create new div
    */
}

function addItemToCartPage(item) {
    console.log("adding item:", item);

    var template =
    `
    <div class="cart-item">
        <div class="cart-image">
            <img src="${item.img}">
        </div>
        <div class="cart-description">
          <p>Round Pillow, ${item.color}<br>
          Fill: ${item.fill}</p>
        </div>
        <div class="cart-qty">${item.qty}</div>
        <div class="cart-price">$30</div>
    </div>
    `;
    var holder = document.getElementById('cartItemHolder');
    if (holder) {
        var element = document.createElement('div');
        element.innerHTML = template;
        holder.appendChild(element);
    }
}
