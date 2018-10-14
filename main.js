
function changeItem() {
  var dropdown = document.getElementById("color-picker");
  var image = document.getElementById("product-img");
  image.src = dropdown.options[dropdown.selectedIndex].value
}