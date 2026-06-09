let baricon = document.querySelector(".bar i");
let ul = document.querySelector("ul");
let closeicon = document.querySelector(".close i");
let mood = document.querySelector(".moon");
let iconmood = document.querySelector(".moon i");

function showUl() {
  ul.classList.remove("hidden");
  ul.classList.add("flex");
}

function closeUl() {
  ul.classList.remove("flex");
  ul.classList.add("hidden");
}
function changemood() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theam", "dark");
  } else {
    localStorage.setItem("theam", "light");
  }
  iconmood.classList.toggle("fa-moon");
  iconmood.classList.toggle("fa-sun");
}
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  iconmood.classList.toggle("fa-moon");
  iconmood.classList.toggle("fa-sun");
}

baricon.addEventListener("click", showUl);
closeicon.addEventListener("click", closeUl);
mood.addEventListener("click", changemood);
console.log(mood);
