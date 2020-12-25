const $ = (selector) => document.querySelector(selector);

const MS = 1, SECS = 1000, MINS = 60 * 1000, MILLINC = 360 / 1000

const runClock = () => {
  const ms = new Date().getMilliseconds();
  const millDegrees = Math.round(Number(ms) * MILLINC);
  const secs = new Date().getSeconds().toString().padStart(2, '0');
  const mins = new Date().getMinutes().toString().padStart(2, '0');
  const hours = new Date().getHours();
  const hoursStr = (hours % 12).toString().padStart(2, '0');
  $('.digital-clock').innerHTML = `${hoursStr}:${mins}:${secs}:`;
  $('.digital-clock-ms').innerHTML = ms.toString().padStart(3, '0');
  $('.arm.milliseconds').style.transform = `rotate(${millDegrees}deg)`;
  $('.arm.seconds').style.transform = `rotate(${6 * Number(secs)}deg)`;
  $('.arm.minutes').style.transform = `rotate(${6 * Number(mins)}deg)`;
  $('.arm.hours').style.transform = `rotate(${30 * Number(hours)}deg)`;
}

setInterval(runClock, MS);