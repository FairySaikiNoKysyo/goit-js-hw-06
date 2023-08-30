const elements = {
  input: document.querySelector("#validation-input"),
};
// console.dir(elements.input.dataset.length)
// console.dir(elements.input.value)
elements.input.addEventListener("blur", handleCheck);
function handleCheck(evt) {
  // console.dir(elements.input.value.length)
  if (elements.input.value.length > elements.input.dataset.length) {
    elements.input.classList.add("invalid");
  } else if (elements.input.value.length == elements.input.dataset.length) {
    // console.dir(elements.input.value.length)
    // console.dir  (elements.input.dataset.length)
    elements.input.classList.add("valid");
  }
}
