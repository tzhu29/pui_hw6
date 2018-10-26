//localStorage.clear();

function changeItem(selectId, imageId) {
     var dropdown = document.getElementById(selectId);
     var image = document.getElementById(imageId);
     image.src = dropdown.options[dropdown.selectedIndex].value;
}

/*Pseudo-code
On event "click add to cart," retrieve the selected
element by ID and the imageID and price and qty and
and store as an array in localstorage

Then on the cart page, retrieve all items in
localstorage and display all items

Then sum all the prices, multiplied by quantity
for cart total

var cartList = [];
function addItem(selectId) {
    var dropdown = document.getElementById(selectId);
    var cartItem = {
    "name": "dfg",
    "qty": 3,
    "fill": dropdown.options[dropdown.selectedIndex].text
};

    */

var cartList = [];

function addItem(imgSelectId, colorSelectId, fillSelectId, qtySelectId) {
    var dropdownImg = document.getElementById(imgSelectId);
    var dropdownColor = document.getElementById(colorSelectId);
    var dropdownFill = document.getElementById(fillSelectId);
    var dropdownQty = document.getElementById(qtySelectId);
    var cartItem = {
        "img": dropdownImg.options[dropdownImg.selectedIndex].value,
        "color": dropdownColor.options[dropdownColor.selectedIndex].text,
        "fill": dropdownFill.options[dropdownFill.selectedIndex].value,
        "qty": dropdownQty.options[dropdownQty.selectedIndex].text,
    };
    cartList.push(cartItem);
    localStorage.setItem('items', JSON.stringify(cartList));
    console.log(localStorage.getItem('items'));
};


/*function pushToCart() {
    localStorage.setItem('items', JSON.stringify(cartList));
    var checkoutCart = JSON.parse(localStorage.getItem('items'));
}*/
var currentCart;
// doc.ready
function openCart() {
    var cartStorage = localStorage.getItem('items');
    console.log(cartStorage);
    if (cartStorage) {
        currentCart = JSON.parse(cartStorage); //list of arrays in one variable
        console.log(currentCart);
        for (var i= 0; i < currentCart.length; i++) {
            addItemToCartPage();
        }
    }
    /* for item in currentCart:
        create new div
    */
}

function addItemToCartPage() {
    for (var i= 0; i < currentCart.length; i++) {
        var imgName = currentCart[i].img;
        var colorName = currentCart[i].color;
        var fillName = currentCart[i].fill;
        var qtyNum = currentCart[i].qty;
        var template =
        `
        <div class="cart-item">
            <div class="cart-image">
                <img src="${imgName}">
            </div>
            <div class="cart-description">
              <p>Round Pillow, ${colorName}<br>
              Fill: ${fillName}</p>
            </div>
            <div class="cart-qty">${qtyNum}</div>
            <div class="cart-price">$30</div>
        </div>
        `;
        console.log(currentCart);
        var holder = document.getElementById('cartItemHolder');
        if (holder) {
            var element = document.createElement('div');
            element.innerHTML = template;
            holder.appendChild(element);
        }
    }
}

 window.addEventListener("load", function(event) {
    openCart();
  });



