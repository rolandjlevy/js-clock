const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const speed = 15, millInc = 360 / 1000;

$$('.arm').forEach(item => item.classList.add('init'));

const runClock = () => {
  const ms = new Date().getMilliseconds();
  const secs = new Date().getSeconds().toString().padStart(2, '0');
  const mins = new Date().getMinutes().toString().padStart(2, '0');
  const hours = new Date().getHours();
  const hoursStr = (hours).toString().padStart(2, '0');
  $('.digital-clock').innerHTML = `${hoursStr}:${mins}:${secs}:`;
  $('.digital-clock-ms').innerHTML = ms.toString().padStart(3, '0');
  const millDegrees = Math.round(Number(ms) * millInc);
  const accurateHour = hours + parseFloat(mins / 60) + parseFloat(secs / 3600);
  $('.arm.milliseconds').style.transform = `rotate(${millDegrees}deg)`;
  $('.arm.seconds').style.transform = `rotate(${6 * secs}deg)`;
  $('.arm.minutes').style.transform = `rotate(${6 * mins}deg)`;
  $('.arm.hours').style.transform = `rotate(${30 * accurateHour}deg)`;
}

setInterval(runClock, speed);