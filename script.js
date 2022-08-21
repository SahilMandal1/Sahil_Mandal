let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
});

