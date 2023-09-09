const currentDate = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = daysOfWeek[currentDate.getDay()];

const utcTime = currentDate.getTime();

const dayOfWeekEl = document.getElementById("dayOfWeek");
dayOfWeekEl.textContent = `${today}`;

const currUTCTime = document.getElementById("currUTCTime");
currUTCTime.textContent = `${utcTime}`;

function updateUTCTime() {
  const currentDate = new Date();
  const utcTime = currentDate.getTime();

  const currUTCTime = document.getElementById("currUTCTime");
  currUTCTime.textContent = `${utcTime}`;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);
