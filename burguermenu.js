// script.js
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    burger.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
        });
    });
});

//cambio//
