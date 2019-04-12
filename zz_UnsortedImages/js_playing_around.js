
/*ADD "Remove" buttons
1. Find the class name of the buttons in the cart section in the html (class defines all these buttons as a group)
2. Need to find all the buttons in the document and add functionality
3. Select buttons and add event to them */

var removeCartItemButtons document.getElementsByClassName("btn-danger");
//test to see if all buttons are picked up
console.log(removeCartItemButtons);

//create loop to replace all instances
for (var i=0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]  
}
button.addEventListener("click"), function(){
var buttonClicked = event.target
buttonClicked.parentElement.parentElement.remove() //item sits within parent item, and whole item in cart sits in another parent item

updateCartTotal()
})
}

//How to update the cart total

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row")
    var total = 0
        for (var i=0; i < cartRows.length; i++){
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName("cart-price")[0];
            var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
           // console.log(priceElement, quantityElement); TEST TO SEE IF LOOP PICKS UP ITEMS
           var price = parseFloat(priceElement.innerText.replace("$", ""))
           var quantity = quantityElement.value 
           total = total + (price * quantity)
        }
        document.getElementsByClassName("cart-total-price")[0]innerText = ("$") + total
}

var addToCartButtons = document.getElementsByClassName("shop-item-button");
    for (var i=0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
    }

    function addToCartClicked(event){
        var button = event.target
        var shopItem = button.parentElement.parentElement
        var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
        //consol.log(title) TEST IF 
    }