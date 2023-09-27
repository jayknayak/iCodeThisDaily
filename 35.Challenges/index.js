const mainPage = document.getElementById("mainPage");
const childPage = document.getElementById("child");
const closeChild = document.getElementById("closeChild");
const childHeader = document.getElementById("childHeader");
const voteButton = document.getElementById("voteButton");
const dashChallenge = document.getElementById("dashChallenge");
const fbChallenge = document.getElementById("fbChallenge");
const aiChallenge = document.getElementById("aiChallenge");
const codingChallenge = document.getElementById("codingChallenge");
const designChallenge = document.getElementById("designChallenge");
const viewAll = document.getElementById("viewAll");

let currOpenElem;

viewAll.addEventListener("click", () => {
  viewAll.innerText === "View All"
    ? (viewAll.textContent = "View less")
    : (viewAll.textContent = "View All");

  codingChallenge.classList.toggle("hidden");
  designChallenge.classList.toggle("hidden");
});
dashChallenge.addEventListener("click", () => {
  currOpenElem = dashChallenge;
  openChildPage("Dashboard Challenge");
});
fbChallenge.addEventListener("click", () => {
  currOpenElem = fbChallenge;
  openChildPage("Facebook Redesign Challenge");
});
aiChallenge.addEventListener("click", () => {
  currOpenElem = aiChallenge;
  openChildPage("AI Challenge");
});
function openChildPage(header) {
  mainPage.classList.add("hidden");
  childPage.classList.toggle("hidden");
  childHeader.textContent = header;
}
closeChild.addEventListener("click", () => {
  closeChildPage();
});
voteButton.addEventListener("click", () => {
  if (voteButton.innerText.includes("Vote Now")) {
    let currCount = parseInt(currOpenElem.children[1].innerText.split(" ")[0]);
    currCount = currCount + 1;
    currOpenElem.children[1].textContent = currCount + " submissions";
    modifyButtonStyles();
  }
  setTimeout(() => {
    closeChildPage();
  }, 1000);
});
function modifyButtonStyles() {
  voteButton.textContent = "Voted!";
  voteButton.classList.add("bg-green-600");
  voteButton.classList.add("transition-all");
  voteButton.classList.add("delay-300");
  voteButton.classList.add("disabled");
  voteButton.classList.remove("bg-gradient-to-r");
  voteButton.classList.remove("animate-bounce");
  voteButton.classList.remove("hover:scale-110");
}
function closeChildPage() {
  mainPage.classList.remove("hidden");
  childPage.classList.toggle("hidden");
  voteButton.textContent = "Vote Now!";
  voteButton.classList.remove("bg-green-600");
  voteButton.classList.remove("transition-all");
  voteButton.classList.remove("delay-300");
  voteButton.classList.remove("disabled");
  voteButton.classList.add("bg-gradient-to-r");
  voteButton.classList.add("animate-bounce");
  voteButton.classList.add("hover:scale-110");
}
