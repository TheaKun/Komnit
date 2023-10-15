'use strict';

const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navToggleBar = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBar, overlay], "click", toggleNavbar);


const parallaxElement = document.querySelectorAll("[data-parallax]");
window.addEventListener("mouseover", event => {
    for(let i = 0, len = parallaxElement.length; i < len; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElement[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElement[i].dataset.parallaxSpeed);
        parallaxElement[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, {duration: 500, fill: "forwards"});
    }
})