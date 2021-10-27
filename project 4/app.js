// Get DOM Element
const currencyElementOne = document.getElementById("currency-one");
const amountCurrencyOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountCurrencyTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch Exchange Rates & Update the DOM
function calculate() {
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

    fetch();
    // console.log(currencyOne, currencyTwo);
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