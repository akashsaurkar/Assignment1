var getDiscount = function (price, disc) {
    var totalValue = price - (price * disc / 100);
    console.log("Total Price with Discount : " + totalValue);
};
getDiscount(1000, 50);
