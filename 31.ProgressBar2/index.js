// Add JavaScript code here
const currPercent = document.querySelector(".currPercent");
const button = document.querySelector(".button");
const bar = document.querySelector(".bar");
let interval;
button.addEventListener("click", (e) => {
  if (button.innerText === "Continue" || button.innerText === "Start") {
    interval = setInterval(fillTheBar, 100);
    button.textContent = "Pause";
  } else if (button.innerText === "Pause") {
    clearInterval(interval);
    button.textContent = "Continue";
  } else if (button.innerText === "Finished") {
    button.textContent = "Start";
    currentPercentage = 0;
    currPercent.textContent = currentPercentage + "%";
    bar.style.width = currentPercentage + "%";
  }
});

function fillTheBar() {
  let strCurrentPercentage = currPercent.innerText;
  let currentPercentage = strCurrentPercentage.slice(
    0,
    strCurrentPercentage.length - 1
  );
  currentPercentage++;
  if (currentPercentage === 100) {
    clearInterval(interval);
    button.textContent = "Finished";
  }
  currPercent.textContent = currentPercentage + "%";
  bar.style.width = currentPercentage + "%";
}
