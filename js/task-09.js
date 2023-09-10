const elements = {
  body: document.body,
  btn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
};

elements.btn.addEventListener("click", handleColor);

function handleColor(evt) {
  const color = getRandomHexColor();
  //  console.dir(color);
  elements.body.style.backgroundColor = `${color}`;
  elements.colorValue.textContent = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
