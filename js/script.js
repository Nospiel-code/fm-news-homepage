const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const shadow = document.getElementById("shadow");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    shadow.classList.toggle("flex");
    shadow.classList.toggle("hidden");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})