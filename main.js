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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = daysOfWeek[currentDate.getDay()];
const dayOfMonth = currentDate.getDate();
const monthName = months[currentDate.getMonth()];

const utcTime = currentDate.getTime();

const dayOfWeekEl = document.getElementById("dayOfWeek");
dayOfWeekEl.textContent = `${today} ${dayOfMonth} ${monthName}`;

const currUTCTime = document.getElementById("currUTCTime");
currUTCTime.textContent = `${utcTime}`;
