const imgPablo = document.querySelector(".img-pablo");
const imgVincent = document.querySelector(".img-vincent");
const leftClick = document.querySelector(".left");
const rightClick = document.querySelector(".right");
rightClick.addEventListener("click", (e) => {
  imgPablo.classList.toggle("hidden");
  imgVincent.classList.toggle("hidden");
});
leftClick.addEventListener("click", (e) => {
  imgPablo.classList.toggle("hidden");
  imgVincent.classList.toggle("hidden");
});
