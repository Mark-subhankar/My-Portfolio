document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener("click", function () {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
  });

  window.addEventListener("scroll", function () {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
  });
});
