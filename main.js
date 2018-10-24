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
for cart total */

function addItem() {
    var cartList = [];
    cartList.push(options[dropdown.selectedIndex].text);
}