const bodyEl=document.querySelector('body');

bodyEl.addEventListener('mousemove',(event)=>{

    //detect the mouse position cordinated (x,y)
    const xPos=event.offsetX;
    const yPos=event.offsetY;

    //creating the new span element 
    const spanEL=document.createElement("span");

    spanEL.style.left=xPos +"px";
    spanEL.style.top=yPos +"px";  

    //creating random size for different heart size

    const size=Math.random()*100;//(size from 0 to 100)

    spanEL.style.width=size+"px";
    spanEL.style.height=size+"px";

    //adding span element to body element using appendChild
    bodyEl.appendChild(spanEL);

    //settimeout is used for remove span element after timerof 3 sec

    setTimeout(()=>{
        spanEL.remove();
    },3000)

})