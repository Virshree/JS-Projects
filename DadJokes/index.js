const button=document.querySelector('.joke-btn');

const jokeContent=document.querySelector('.joke-content');

async function fetchJokes(){
    const url="https://icanhazdadjoke.com";
    const  requestOptions={
        headers:{
            'Accept':'application/json',
           
        },
    }
    const response=await fetch(url,requestOptions)
    const data= await response.json();
//    console.log(data.joke);
    return data.joke;
    
}
button.addEventListener("click",async function (){
   
    let res= await fetchJokes();
    jokeContent.innerHTML=res ;
});
