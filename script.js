// let googleLink = document.getElementById("link");
// console.log(googleLink);

// let coolButton = document.getElementById("btn");
// console.log(coolButton);

// let textField = document.getElementById("txt");
// console.log(textField);

// googleLink.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   console.log(e.type);
// });

// textField.addEventListener("change", function (e) {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
// });

// console.log("/////////////////////////");
// textField.addEventListener("input", (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target.value);
// });

// coolButton.addEventListener("click", buttonClicked);

// function buttonClicked(e) {
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

///////////////////////////////////////////////////////

let currencyEl1 = document.getElementById("currency1");
// console.log(currencyEl1)
let amountEl1 = document.getElementById("amount1");
// console.log(amountEl1);
let currencyEl2 = document.getElementById("currency2");
// console.log(currencyEl2);
let amountEl2 = document.getElementById("amount2");
// console.log(amountEl2);

let rateEl = document.getElementById("rate");
let swap = document.getElementById("swap");

function calculate() {
  let currency1 = currencyEl1.value;
  let currency2 = currencyEl2.value;
  //   console.log(currency2);
  //   fetch(
  //     `https://v6.exchangerate-api.com/v6/4b882bb6e9e03738c89d9a6a/latest/${currency1}`
  //   )
  fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let rates = data.rates[currency2];
      //   console.log(rates);

      //   console.log();
      rateEl.innerText = `1${currency1} : ${rates.toFixed(4)}${currency2}`;
      amountEl2.value = (amountEl1.value * rates).toFixed(2);
    });
}

amountEl1.addEventListener("input", calculate);
amountEl2.addEventListener("input", calculate);

currencyEl1.addEventListener("change", calculate);
currencyEl2.addEventListener("change", calculate);

swap.addEventListener("click", () => {
  let temp = currencyEl1.value;
  currencyEl1.value = currencyEl2.value;
  currencyEl2.value = temp;
  calculate();
});
calculate();
