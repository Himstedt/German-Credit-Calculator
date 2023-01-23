document.getElementById("calculate-btn").addEventListener("click", calculate);


function calculate() {
    var loanAmount = document.getElementById("loan-amount").value;
    var interestRate = document.getElementById("interest-rate").value/100;
    var loanTerm = document.getElementById("loan-term").value;

    var faktor = ((1 + interestRate) ** loanTerm * interestRate) / ((1 + interestRate) ** loanTerm - 1)

    var annu = loanAmount * faktor

    var monthlyPayment = annu / 12;

    var totalInterest = loanAmount * interestRate * loanTerm;

    var totalPayment = Number(loanAmount) + totalInterest;




    document.getElementById("monthly-payment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("total-interest").innerHTML = totalInterest.toFixed(2);
    document.getElementById("total-payment").innerHTML = totalPayment.toFixed(2);
}

var interestRateSlider = document.getElementById("interest-rate");
var interestRateValue = document.getElementById("interest-rate-value");

interestRateValue.innerHTML = interestRateSlider.value + "%";

interestRateSlider.oninput = function() {
  interestRateValue.innerHTML = this.value + "%";
}
