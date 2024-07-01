// Seleção dos elementos
const body = document.querySelector("body");
let switchButton = document.getElementById("mode-switcher");

// Eventos

switchButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
