let daysContainer = document.querySelector(".days");
for (let i = 1; i < 32; i++) {
  let daysDiv = document.createElement("div");
  daysDiv.innerText = i;
  daysContainer.appendChild(daysDiv);
}
