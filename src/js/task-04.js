
const elements ={
    decrementBtn : document.querySelector('button[data-action="decrement"]'),
    incrementBtn : document.querySelector('button[data-action = "increment"]'),
     value : document.querySelector("#value")
}

let counterValue = 0;
// value.textContent = counterValue;
 const arr =  elements.decrementBtn.addEventListener('click',handlerDecrement);
elements.incrementBtn.addEventListener('click',handlerIncrement);
function handlerDecrement(evt){
    // console.log(counterValue)
     counterValue-= 1;
     value.textContent = counterValue;
return
   }


   function handlerIncrement (evt){
    // console.log(counterValue)
     counterValue += 1;
     value.textContent = counterValue;
     return;
  }
  
