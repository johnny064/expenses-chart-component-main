// export data from JSON file to an object
import data from '../data.json' assert{type:'json'};
// declare variables
let expenseData = data;
let chartBar = document.querySelectorAll(".charts .chartBar");
let exAmount = document.querySelectorAll(".exp-amount");
// mouse in and mouse out hover for see the expense daily 
for(let i=0;i<chartBar.length;i++){
    chartBar[i].addEventListener("mouseover", function(){ 
        exAmount[i].textContent = "$" + expenseData[i].amount; 
        exAmount[i].style.opacity = "1"; 
    })
    chartBar[i].addEventListener("mouseout", function(){
        exAmount[i].style.opacity = "0";
    })
}