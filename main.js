
function changeItem() {
  var dropdown = document.getElementById("#color-picker");
  var image = document.getElementById("#product-img");
  image.src = dropdown.options[dropdown.selectedIndex].value
}

/*function changeItem(img) {
  var type = img.id;
  if (type == 'red') {
    img.src='red round pillow.jpeg';

  }
  if (type == 'purple') {
    img.src='purple round pillow.jpg';
  }

  if (type == 'blue') {
    img.src='blue round pillow.jpeg';
  }

    if (type == 'grey') {
    img.src='grey round pillow.jpeg';
  }

} */

/*$( document ).ready( function(){
    $(".color-dropdown").change(function() {
        $(".product-img").attr("value", $(".color-dropdown:selected"))
    });
});

/*

var itemCount = 0;
var priceTotal = 0;



// Add Item to Cart
$('.add-to-cart').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

  // Calculate Total Price
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal += price;
  $('#cartTotal').text("Total: €" + priceTotal);
});



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});



// Remove Item From Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();
  itemCount --;
  $('#itemCount').text(itemCount);

  // Remove Cost of Deleted Item from Total Price
  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Total: €" + priceTotal);

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});