const greenColor=document.querySelector(".green");
const orangeColor=document.querySelector(".orange");
const redColor=document.querySelector(".red");


function greenSignal(){
    greenColor.style.backgroundColor='green';

    setTimeout(()=>{
        greenColor.style.backgroundColor='black';
        orangeSignal();
    },5000)
   
}
greenSignal();

function orangeSignal(){
    orangeColor.style.backgroundColor="orange";

    setTimeout(()=>{
        orangeColor.style.backgroundColor="black";
        redSignal();
    },3000)
     
}
function  redSignal(){
    redColor.style.backgroundColor="red";
    setTimeout(()=>{
        redColor.style.backgroundColor="black";
        greenSignal();
    },2000)
   
}


