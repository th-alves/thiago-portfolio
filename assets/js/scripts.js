const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let navbarLinks = document.querySelectorAll(".navbar a");
  let fromTop = window.scrollY;

  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

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
