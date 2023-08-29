const categories = document.querySelector("#categories");
const items = [...categories.children];



console.log(`Number of categories: ${items.length}`);

items.forEach( function(item,index,array){
const firstItem = item.firstElementChild.textContent;
const lastItem = item.lastElementChild.children.length;
console.log(`Category: ${firstItem}`);
console.log(`Elements: ${lastItem}`);
} )





