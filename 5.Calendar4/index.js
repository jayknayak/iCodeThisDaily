const month = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const weekDays = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
let date = new Date();

const goLeft = document.querySelector(".go-left");
const goRight = document.querySelector(".go-right");
const selectedDay = document.querySelector(".selected-day");
const selectedDate = document.querySelector(".selected-date");

const classList = [
  "hover:bg-violet-600",
  "active:bg-violet-700",
  "focus:outline-none",
  "focus:ring",
  "focus:ring-violet-300",
  "cursor-pointer",
];

const renderCalendar = () => {
  const days = document.querySelector(".days");
  days.textContent = "";
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const currentDate = document.querySelector(".current-date");
  currentDate.innerText = month[date.getMonth()] + "," + date.getFullYear();

  for (let i = 0; i < firstDay; i++) {
    const newDiv = document.createElement("div");
    days.appendChild(newDiv);
  }

  for (let i = 1; i <= lastDate; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerText = i;
    newDiv.addEventListener("click", () => {
      selectedDay.innerText =
        weekDays[new Date(date.getFullYear(), date.getMonth(), i).getDay()];
      selectedDate.innerText =
        month[new Date(date.getFullYear(), date.getMonth(), i).getMonth()] +
        " " +
        i;
    });

    newDiv.classList.add(...classList);
    newDiv.classList.add("active:bg-violet-700");
    days.appendChild(newDiv);
  }
};
renderCalendar();
goLeft.addEventListener("click", (e) => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
goRight.addEventListener("click", (e) => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
