const home = document.getElementById("home");
const inbox = document.getElementById("inbox");
const collapse = document.getElementById("collapse");
const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");

home.addEventListener("click", () => {
  home.classList.add("hidden");
  inbox.classList.remove("hidden");
});

collapse.addEventListener("click", () => {
  home.classList.remove("hidden");
  inbox.classList.add("hidden");
});
star1.addEventListener("click", () => {
  toggleStar(star1);
});
star2.addEventListener("click", () => {
  toggleStar(star2);
});
star3.addEventListener("click", () => {
  toggleStar(star3);
});
star4.addEventListener("click", () => {
  toggleStar(star4);
});
star5.addEventListener("click", () => {
  toggleStar(star5);
});

function toggleStar(star) {
  if (star.classList.contains("fa-regular")) {
    star.classList.toggle("fa-solid");
    star.classList.toggle("text-[#edbc5e]");
  }
}
