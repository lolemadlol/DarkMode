const toggle = document.querySelector(".toggle");
const toggle2 = document.querySelector(".toggle2");
const body = document.querySelector("body");
const darkMode = document.querySelector(".darkMode");
const container = document.querySelector(".container");
const text = document.querySelector(".Text");

toggle.style.cursor = "pointer";
toggle2.style.cursor = "pointer";

toggle.addEventListener("click", () => {

    toggle.style.left = "200px";
    toggle.style.backgroundColor = "white";
    darkMode.style.border = "5px solid white";
    body.style.backgroundColor = "black";
    container.style.border = "3px solid white";
    text.textContent = "Good Night";
    text.style.color = "white";
    toggle.style.display = "none";
    toggle2.style.display = "block";
});

toggle2.addEventListener("click", () => {

    toggle.style.left = "0";
    toggle.style.backgroundColor = "black";
    darkMode.style.border = "5px solid black";
    body.style.backgroundColor = "white";
    container.style.border = "3px solid black";
    text.textContent = "Good Morning";
    text.style.color = "black";
    toggle2.style.display = "block";
    light = true;
    toggle.style.display = "block";
    toggle2.style.display = "none";
});