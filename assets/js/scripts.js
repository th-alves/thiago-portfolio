const nav = document.querySelector("nav");

function openMenu() {
  document.querySelectorAll(".hide");
  nav.classList.toggle("open").classList.add(".hide");
}

// Reveal
ScrollReveal().reveal(".left", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});
ScrollReveal().reveal(".left h3", {
  origin: "left",
  duration: 1000,
  distance: "20%",
});
ScrollReveal().reveal(".right", {
  origin: "right",
  duration: 1000,
  distance: "20%",
});

ScrollReveal().reveal("#skills", {
  origin: "right",
  duration: 2000,
  distance: "20%",
});
ScrollReveal().reveal(".item", {
  origin: "right",
  duration: 2000,
  distance: "20%",
});
