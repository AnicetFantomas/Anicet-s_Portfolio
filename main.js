const hamburgerButton = document.querySelector(".nav-btn");
const slider = document.querySelector(".x-nav");
const display = document.querySelector(".desktop-nav");
const listEl = document.querySelectorAll("ul li")


hamburgerButton.addEventListener("click", (e) => {
    display.style.display = "block";
    hamburgerButton.style.display = "none";
    slider.style.display = "block";
})

slider.addEventListener("click", (e) => {
    display.style.display = "none";
    hamburgerButton.style.display = "block";
    slider.style.display = "none";
})


listEl.forEach(
    clickForClose => {
        clickForClose.addEventListener("click", (e) => {
            display.style.display = "none";
            hamburgerButton.style.display = "block";
        })
    }
)
