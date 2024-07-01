// Seleção de elementos
const openMenu = document
  .querySelector("#openMenu")
  .addEventListener("click", () => {
    menu.style.transform = "translate(0)";
  });
const closeMenu = document
  .querySelector("#closeMenu")
  .addEventListener("click", () => {
    menu.style.transform = "translate(-100%)";
  });
const menu = document.querySelector("#menu");
