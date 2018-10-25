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
var cartCount = 0;
function addItem(colorSelectId, fillSelectId, qtySelectId) {
    var dropdownColor = document.getElementById(colorSelectId);
    var dropdownFill = document.getElementById(fillSelectId);
    var dropdownQty = document.getElementById(qtySelectId);
    var cartItem = {
        "color": dropdownColor.options[dropdownColor.selectedIndex].value,
        "fill": dropdownFill.options[dropdownFill.selectedIndex].value,
        "qty": dropdownQty.options[dropdownQty.selectedIndex].text
    };
    cartList.push(cartItem);
};


function pushToCart() {
    localStorage.setItem('items', JSON.stringify(cartList));
    var checkoutCart = JSON.parse(localStorage.getItem('items'));
}




