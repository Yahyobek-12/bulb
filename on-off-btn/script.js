const btn = document.querySelector(".btn"),
    bulbRound = document.querySelector(".bulb-round"),
    bulbIn = document.querySelector(".bulb-in");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    bulbRound.classList.toggle("active");
    bulbIn.classList.toggle("active");
})    