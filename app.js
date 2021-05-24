const days = document.querySelector('#days');
const daysDec = document.querySelector('#daysDec');
const hours = document.querySelector('#hours');
const hoursDec = document.querySelector('#hoursDec');
const minutes = document.querySelector('#minutes');
const minutesDec = document.querySelector('#minutesDec');
const seconds = document.querySelector('#seconds');
const secondsDec = document.querySelector('#secondsDec');
const finalDate = new Date('2021-08-24 00:00');

const setTime = () => {
  let now = new Date();
  let diff = finalDate - now;
  let numOfDays = diff / 1000 / 60 / 60 / 24;
  let numOfHours = (numOfDays - Math.floor(numOfDays)) * 24;
  let numOfMinutes = (numOfHours - Math.floor(numOfHours)) * 60;
  let numOfSeconds = (numOfMinutes - Math.floor(numOfMinutes)) * 60;

  daysDec.innerHTML = Math.floor(Math.floor(numOfDays / 10));
  days.innerHTML = Math.floor(numOfDays) % 10;

  hoursDec.innerHTML = Math.floor(Math.floor(numOfHours / 10));
  hours.innerHTML = Math.floor(numOfHours) % 10;

  minutesDec.innerHTML = Math.floor(Math.floor(numOfMinutes / 10));
  minutes.innerHTML = Math.floor(numOfMinutes) % 10;

  secondsDec.innerHTML = Math.floor(Math.floor(numOfSeconds / 10));
  seconds.innerHTML = Math.floor(numOfSeconds) % 10;
};

setInterval(setTime, 1000);
// setTime();
