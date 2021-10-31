// Get DOM Element
const currencyElementOne = document.getElementById("currency-one");
const amountCurrencyOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountCurrencyTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch Exchange Rates & Update the DOM
function calculate() {
    // Get the Currency Code for currency 1 and 2
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

    // Send Request to ExchangeRate-API for cnversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/25065ed45f1ba1dfc3bd2532/pair/${currencyOne}/${currencyTwo}`)
        .then(res => res.json())
        .then(data => {
            // Get the Conversion Rate from Currency One to Currency Two
            const conversionRate = data.conversion_rate;
            console.log(data)
            // Update the DOM to display the conversion rate
            rate.innerText = conversionRate
        });
};

// Event listeners
// Recalculate exchange rate when currency 1 change
currencyElementOne.addEventListener("change", calculate);
// Recalculate exchange amount when currency 1 change
amountCurrencyOne.addEventListener("input", calculate);
// Recalculate exchange rate when currency 2 change
currencyElementTwo.addEventListener("change", calculate);
// Recalculate exchange amount when currency 2 change
amountCurrencyTwo.addEventListener("input", calculate);

// Execute calculate function on page load
calculate();