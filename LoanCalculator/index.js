function calculateLoan() {
   loanAmount = document.getElementById("loanAmt").value;
  interestPercentage = document.getElementById("interest").value;
 monthsToPay = document.getElementById("months").value;
   resultPay = document.getElementById("result");

  interest = (loanAmount * (interestPercentage * 0.01)) / monthsToPay;

  monthlyPayment = (loanAmount / monthsToPay + interest).toFixed(2);

  resultPay.innerHTML = `Montly payment : ${monthlyPayment}`;
}
  