const expand1 = document.getElementById("expand-container-1");
expand1.addEventListener("click", (e) => {
  expand1.querySelector(".expand-1").classList.toggle("fa-plus");
});
const expand2 = document.getElementById("expand-container-2");
expand2.addEventListener("click", (e) => {
  expand2.querySelector(".expand-2").classList.toggle("fa-plus");
});
const expand3 = document.getElementById("expand-container-3");
expand3.addEventListener("click", (e) => {
  expand3.querySelector(".expand-3").classList.toggle("fa-plus");
  const element = document.getElementById("toggle-div-3");
  element.classList.toggle("hidden");
});
const expand4 = document.getElementById("expand-container-4");
expand4.addEventListener("click", (e) => {
  expand4.querySelector(".expand-4").classList.toggle("fa-plus");
});
