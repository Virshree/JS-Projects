let billAmt=document.getElementById("bill");
let percentage=document.getElementById("percentage");
let resultbtn=document.getElementById('.btn-calculate');

//formula tip -(billAmt*(1+percentage/100))
billAmt.addEventListener('input',function (e){
    // console.log(e.target.value);
    billAmt=e.target.value;
})
percentage.addEventListener('input',function (e){
    percentage=e.target.value;
})

function calculateTip(){


  let res= (billAmt*(1+percentage/100)).toFixed(2);

document.getElementById("total").innerText="Total is: "+res;

}
