let celsiusInput=document.getElementById("celsius");
let fahrenhitInput=document.getElementById("fahrenhit");
let kelvinInput=document.getElementById("kelvin");

function convertTemp(event){
    const userTypeValue= +event.target.value;    

    if(event.target.name=="celsius"){

       fahrenhitInput.value=(userTypeValue*1.8+32).toFixed(2);
       kelvinInput.value=(userTypeValue+273.32).toFixed(2);
    }
   else if(event.target.name=="fahrenhit")
    {
        celsiusInput.value=((userTypeValue-32)/1.8).toFixed(2);
        kelvinInput.value=((userTypeValue-32)/1.8+273.32).toFixed(2);
       
    }
   else if(event.target.name=="kelvin") 
   {
    celsiusInput.value=((userTypeValue-273.32)).toFixed(2);

    fahrenhitInput.value=((userTypeValue-273.32)*1.8+32).toFixed(2);
    }
}
//celsius to kelvin     
// 0°C + 273.15
