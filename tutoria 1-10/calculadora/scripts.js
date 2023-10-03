function calcularPropina() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }
    
    var tip = (billAmount * tipPercentage) / 100;
    var totalBill = billAmount + tip;
    
    document.getElementById("totalTip").textContent = "$" + tip.toFixed(2);
}
