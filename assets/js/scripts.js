const nav = document.querySelector("nav");

function openMenu() {
  document.querySelectorAll(".hide");
  nav.classList.toggle("open").classList.add(".hide");
}

ScrollReveal().reveal("#main", { delay: 200, reset: true });
ScrollReveal().reveal("#skills", { delay: 200, reset: true });
ScrollReveal().reveal("#about", { delay: 200, reset: true });
ScrollReveal().reveal("#portfolio", { delay: 200, reset: true });
ScrollReveal().reveal("#curriculo", { delay: 200, reset: true });
