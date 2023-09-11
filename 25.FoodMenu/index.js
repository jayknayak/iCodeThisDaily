const bfExpand = document.querySelector(".bf");
bfExpand.addEventListener("click", (e) => {
  document.querySelector(".bf_plus").classList.toggle("fa-plus");
  document.querySelector(".bf_content").classList.toggle("hidden");
});
const lunchExpand = document.querySelector(".lunch");
lunchExpand.addEventListener("click", (e) => {
  document.querySelector(".lunch_plus").classList.toggle("fa-plus");
  document.querySelector(".lunch_content").classList.toggle("hidden");
});
