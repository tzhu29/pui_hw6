function changeItem(selectId, imageId) {
     var dropdown = document.getElementById(selectId);
     var image = document.getElementById(imageId);
     image.src = dropdown.options[dropdown.selectedIndex].value;
}

function changePrice(qtySelectId) {
    var dropdownQty = document.getElementById(qtySelectId);
    var totalPrice = dropdownQty.options[dropdownQty.selectedIndex].text * document.getElementById("price").getAttribute("data-price");
    document.getElementById("price").innerHTML="$"+totalPrice;
}


function addItem(colorSelectId, fillSelectId, qtySelectId, typeId) {
    var cartList = loadCartFromStorage();
    var dropdownColor = document.getElementById(colorSelectId);
    var dropdownFill = document.getElementById(fillSelectId);
    var dropdownQty = document.getElementById(qtySelectId);
    var typeName = document.getElementById('type');
    var cartItem = {
        "img": dropdownColor.options[dropdownColor.selectedIndex].value,
        "type": typeName.text,
        "color": dropdownColor.options[dropdownColor.selectedIndex].text,
        "fill": dropdownFill.options[dropdownFill.selectedIndex].value,
        "qty": dropdownQty.options[dropdownQty.selectedIndex].text,
    };
    cartList.push(cartItem);
    localStorage.setItem('items', JSON.stringify(cartList));
    console.log(localStorage.getItem('items'));
};

function updateCartCount(cartCountId) {
    var currentCart= loadCartFromStorage();
    var count = 0;
    for (var i = 0; i < currentCart.length; i++) {
        count += parseInt(currentCart[i].qty);
    }
    document.getElementById(cartCountId).innerHTML=count;
}

function loadCartFromStorage() {
  var cartStorage = localStorage.getItem('items');
  console.log("cart storage:", cartStorage);
  if (cartStorage) {
    return JSON.parse(cartStorage); // list of objects
  } else {
    return [];
  }
}

function openCart() {
    var currentCart = loadCartFromStorage();
    console.log("current cart:", currentCart);
    for (var i= 0; i < currentCart.length; i++) {
        addItemToCartPage(currentCart[i], i);
    }
}

function addItemToCartPage(item, index) {
    console.log("adding item:", item);

    var template =
    `
    <div class="cart-item">
        <div class="cart-image">
            <img src="${item.img}">
        </div>
        <div class="cart-description">
          <p>${item.type}, ${item.color}<br>
          Fill: ${item.fill}</p>
        </div>
        <div class="cart-qty">${item.qty}</div>
        <div class="cart-price">$30</div>
        <button onclick="removeFromCart(${index})">X</button>
    </div>
    `;
    var holder = document.getElementById('cartItemHolder');
    if (holder) {
        var element = document.createElement('div');
        element.innerHTML = template;
        holder.appendChild(element);
    }
}

function removeFromCart(index) {
    // loads the cart, updates it, and then reloads the page.
    var currentCart = loadCartFromStorage();
    currentCart.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(currentCart));
    location.reload();
}