const elements = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
elements.input.addEventListener("input", handleStl);
function handleStl(evt) {
  console.log(elements.input.value);
  elements.span.style.fontSize = `${elements.input.value}px`;
}
