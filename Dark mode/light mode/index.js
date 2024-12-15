const btnModes=document.getElementById("btnToggle");

const body=document.querySelector('body');

let active=false;

 btnModes.addEventListener('click',function (event){
    
    active=!active;

    if(active){
        event.target.innerHTML="Light";
        body.style.backgroundColor="white";
    }
    else{
        event.target.innerHTML="Dark";
        body.style.backgroundColor="black";

    }
 })
