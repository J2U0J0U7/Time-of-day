const d = new Date();
let hour = d.getHours();
let greetingText = document.getElementById("greeting-text");

if (hour < 12) {
    greetingText.textContent = "Good Morning!";
    document.querySelector(".afternoon").classList.add("d-none");
    document.querySelector(".night").classList.add("d-none");
    document.querySelector(".morning").classList.remove("d-none");
} else if (hour < 17) {
    greetingText.textContent = "Good Afternoon!";
    document.querySelector("body").classList.add("noon-bg");
    greetingText.parentElement.classList.add("noon-gradient");
    document.querySelector(".morning").classList.add("d-none");
    document.querySelector(".night").classList.add("d-none");
    document.querySelector(".afternoon").classList.remove("d-none");
} else {
    greetingText.textContent = "Good Night!";
    greetingText.parentElement.classList.add("night-gradient");
    document.querySelector(".morning").classList.add("d-none");
    document.querySelector(".afternoon").classList.add("d-none");
    document.querySelector(".night").classList.remove("d-none");
}
