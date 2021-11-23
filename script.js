let priceSlider = document.querySelector('#priceSlider')
let price = document.querySelector('.price')
let priceFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

priceSlider.addEventListener('input', () => {
    console.log(priceSlider.value)
    price.innerText = priceFormat.format(priceSlider.value)
})