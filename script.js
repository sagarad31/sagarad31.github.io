const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

let i = 0;
function type() {
  if (i < text.length) {
    introEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 45); // typing speed (ms per character)
  }
}
window.addEventListener("DOMContentLoaded", type);
