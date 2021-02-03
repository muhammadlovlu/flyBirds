function handleTicketChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let total = 0;
    if (product == 'economy') {
        total = productNewCount * 100;
    }
    if (product == 'class-A') {
        total = productNewCount * 150;
    }
    calculateTotalPrice();
}


function calculateTotalPrice() {

    const classACount = getInputValue('class-A');
    const economyCount = getInputValue('economy');
    const totalPrice = classACount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = "$" + totalPrice;

    const incTax = totalPrice / 10;
    document.getElementById('tax').innerText = "$" + incTax;

    const grandPrice = totalPrice + incTax;
    document.getElementById('total').innerText = "$" + grandPrice;
}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

document.getElementById('booked').addEventListener('click', function(){
    document.getElementById('booking-section').style.display = "none";
    document.getElementById('purchase-note').style.display = "block";
    document.getElementsByTagName('body').style.backgroundSize = "cover";
})