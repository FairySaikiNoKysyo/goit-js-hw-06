const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list =document.querySelector("#ingredients")

const addLi = ingredients.map(element=>{
 const li  =  document.createElement("li");
 
 li.textContent = element;
 li.classList.add("item");
//  console.log(li)
// list.append(li)
return li
});
console.log(addLi)
list.append(...addLi)


