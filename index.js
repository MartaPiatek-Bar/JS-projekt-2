const currency = document.querySelector(".currency");
const amount = document.querySelector(".amount");
const btn = document.querySelector(".btn");
const result = document.querySelector(".equals");

const url = "http://api.nbp.pl/api/exchangerates/tables/a/today/";

btn.addEventListener("click", getCurriencies);

function getCurriencies(event) {
  event.preventDefault();
  fetch(url)
    .then((response) => response.json())
    .then((data) => calculateVal(data))
    .catch((error) => console.log(error));
}

function calculateVal(data) {
  const amountVal = amount.value;
  const mid = data[0].rates.find(
    (element) => element.code === currency.value
  ).mid;
  const currencyCalculate = (amountVal * mid).toFixed(2);
  result.innerHTML = `Result: ${currencyCalculate} PLN`;
}
