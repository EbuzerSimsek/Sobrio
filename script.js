const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
