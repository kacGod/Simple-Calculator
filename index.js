let buttons = document.querySelectorAll(".calculator-item")
let calculatorDisplay = document.querySelector(".calculator-display")
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
buttons.forEach(function (item) {
    item.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        calculatorDisplay.value += value;
    })
})

equal.addEventListener("click", function (e) {
    let sum = eval(calculatorDisplay.value);
    calculatorDisplay.value = sum;
})

clear.addEventListener("click", function (e) {
    calculatorDisplay.value = "";
})


