const nav = document.querySelector("nav");

function openMenu() {
  document.querySelectorAll(".hide");
  nav.classList.toggle("open").classList.add(".hide");
}

ScrollReveal().reveal("#main", { delay: 300, reset: true });
ScrollReveal().reveal("#skills", { delay: 300, reset: true });
ScrollReveal().reveal("#about", { delay: 300, reset: true });
ScrollReveal().reveal("#portfolio", { delay: 300, reset: true });
ScrollReveal().reveal("#curriculo", { delay: 300, reset: true });
