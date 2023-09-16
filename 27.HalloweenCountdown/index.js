const halloween = new Date(2023, 9, 31);
function countdown() {
  const now = Date.now();
  const daysTillHalloween = halloween - now;
  const daysRemain = Math.floor(daysTillHalloween / (1000 * 60 * 60 * 24));
  const hrsRemain = Math.floor(daysTillHalloween / (1000 * 60 * 60)) % 24;
  const minsRemain = Math.floor(daysTillHalloween / (1000 * 60)) % 60;
  const secsRemain = Math.floor(daysTillHalloween / 1000) % 60;

  const countdown = document.querySelector(".countdown");
  countdown.querySelector(".day").innerText = pad(daysRemain);
  countdown.querySelector(".hour").innerText = pad(hrsRemain);
  countdown.querySelector(".minute").innerText = pad(minsRemain);
  countdown.querySelector(".second").innerText = pad(secsRemain);

  function pad(digit) {
    return digit.toString().padStart(2, "0");
  }
}
setInterval(countdown, 1000);
