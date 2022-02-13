// grab everything we need
const btn = document.getElementById("x");
const menu = document.getElementById("y")

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
