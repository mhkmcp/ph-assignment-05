// Utility Functions 
function calculateTotal(costTypes) {
    let sum = 0;

    for (const costType of costTypes) {
        sum += parseFloat(document.getElementById(costType + '-cost').innerText);
    }
    document.getElementById('total-cost').innerText = sum;
    document.getElementById('final-total').innerText = sum;
}

function updateCost(costType, amount) {
    const costField = document.getElementById(costType + '-cost');
    costField.innerText = amount;

    // update costs table 
    calculateTotal(['best', 'memory', 'storage', 'delivery']);
}

function styleSelected(style, unstyleList) {
    // style the clicked one
    document.getElementById(style).classList.add('selected');

    // remove style from rest of the same category 
    for (const element of unstyleList) {
        document.getElementById(element).classList.remove('selected');
    }
}

// Memory 
document.getElementById('ram-8').addEventListener('click', function () {
    // change style to selected 
    styleSelected('ram-8', ['ram-16']);

    // update memory cost 
    updateCost('memory', 0);
})

document.getElementById('ram-16').addEventListener('click', function () {
    // change style to selected 
    styleSelected('ram-16', ['ram-8']);

    // update memory cost 
    updateCost('memory', 180);
})

// Storage 
document.getElementById('ssd-256').addEventListener('click', function () {
    // change style to selected 
    styleSelected('ssd-256', ['ssd-512', 'ssd-1tb']);

    // update storage cost 
    updateCost('storage', 0);
})

document.getElementById('ssd-512').addEventListener('click', function () {
    // change style to selected 
    styleSelected('ssd-512', ['ssd-256', 'ssd-1tb']);

    // update storage cost 
    updateCost('storage', 100);
})

document.getElementById('ssd-1tb').addEventListener('click', function () {
    // change style to selected 
    styleSelected('ssd-1tb', ['ssd-256', 'ssd-512']);

    // update storage cost 
    updateCost('storage', 180);
})

// Delivery 
document.getElementById('delivery-free').addEventListener('click', function () {
    // change style to selected 
    styleSelected('delivery-free', ['delivery-paid']);

    // update delivery cost 
    updateCost('delivery', 0);
})

document.getElementById('delivery-paid').addEventListener('click', function () {
    // change style to selected 
    styleSelected('delivery-paid', ['delivery-free']);

    // update storage cost 
    updateCost('delivery', 20);
})

// 20% OFF on promo code submit 
document.getElementById('promo-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code')

    if (promoCode.value == 'stevekaku') {
        const totalCost = document.getElementById('total-cost').innerText;
        let totalAmount = parseFloat(totalCost);
        document.getElementById('final-total').innerText = totalAmount - (totalAmount * 0.2);
        promoCode.value = '';
    }
})