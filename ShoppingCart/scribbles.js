function remove_selection(x) {
    for (x = 0; x > 0; x--) 
        if (x < 0) {break;
        }   
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt += prices[x];
        display_all();

        }

}function displayTotal() {

    document.getElementById("total").innerHTML += "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}