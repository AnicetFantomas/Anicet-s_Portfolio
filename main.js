const hamburgerButton = document.querySelector(".nav-btn");
const slider = document.querySelector(".x-nav");
const display = document.querySelector(".desktop-nav");
const listEl = document.querySelectorAll("ul li")
const body = document.querySelector("body")


hamburgerButton.addEventListener("click", (e) => {
    display.style.display = "block";
    hamburgerButton.style.display = "none";
    slider.style.display = "block";
    body.style.overflow = "hidden"
})

slider.addEventListener("click", (e) => {
    display.style.display = "none";
    hamburgerButton.style.display = "block";
    slider.style.display = "none";
    body.style.overflow = "scroll"
})


listEl.forEach(
    clickForClose => {
        clickForClose.addEventListener("click", (e) => {
            display.style.display = "none";
            hamburgerButton.style.display = "block";
            body.style.overflow = "scroll"
        })
    }
)
