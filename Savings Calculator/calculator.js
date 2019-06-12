//Calculate Savings
function calculateSavings() {
    var wage = document.getElementById("wage").value;
    var goal = document.getElementById("goal").value;
    var numMonths = document.getElementById("months").value;

//validate inputs
if(wage ==="" || goal == 0){
    alert("Please enter values");
return;
}

//Check to see if the input is empty or less than or equal to 1
if(numMonths === "" || numMonths <=1){
numMonths = 1;
document.getElementById("each").style.display = "none";
} else {
    document.getElementById("each").style.display = "block";
}

//Calculate monthly
var total = (wage * goal) / numMonths;
//round to two decimal places
total = Math.round(total *100) / 100
//always have two digits after the decimal
total = total.toFixed(2);

//Display the monthly savings goal
document.getElementById("monthlySavings").style.display = "block";
document.getElementById("save").style.display = "none";

//Hide the savings amount on load
document.getElementById("monthlySavings").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateSavings();

};
}
