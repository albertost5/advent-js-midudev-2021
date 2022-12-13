function shouldBuyFidelity(times) {
    const regularPrice = 12;
    const discount = 0.75;
    let fidelityTotalPrice = 250;
    let regularTotalPrice = regularPrice * times;

    for(let i = 1; i <= times; i++) {
        fidelityTotalPrice += regularPrice * Math.pow(discount,i);
    }
    return fidelityTotalPrice < regularTotalPrice;
}