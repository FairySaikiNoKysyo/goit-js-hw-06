const elements = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
console.dir(elements.input);
console.dir(elements.output);
elements.input.addEventListener("input", handlerInput);
function handlerInput(evt) {
  elements.output.textContent = evt.currentTarget.value.trim();
  if (evt.currentTarget.value.trim() === "") {
    elements.output.textContent = "Anonymous";
  }
}
