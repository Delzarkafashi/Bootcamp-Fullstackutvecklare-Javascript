const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-small", window.scrollY > 50);
});
