//stiing variables
const btnincrement= document.getElementById("increment");
const btndeccrement= document.getElementById("decrement");
const btnreset= document.getElementById("reset");
const CurrentCounter= document.getElementById("CurrentCounter");

//intial value for counter
let counter=0
CurrentCounter.textContent=counter

btnincrement.addEventListener("click",()=>{
    counter+=1 //it adds one every time the btn clicked
    CurrentCounter.textContent=counter; //then it updtes current counter
})

btndeccrement.addEventListener("click",()=>{
    //this ensures that counter it does not go below zero
    if(counter !=0 || counter<0 ){
     counter-=1 
     CurrentCounter.textContent=counter;
    }
     
})

//this reset the counter to back in to zero
btnreset.addEventListener("click",()=>{
    counter=0
    CurrentCounter.textContent=counter
})

