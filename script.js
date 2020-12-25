const clock = document.querySelector('.digital-clock');
const clockMs = document.querySelector('.digital-clock-ms');
const milliSecondsArm = document.querySelector('.arm.milliseconds');
const secondsArm = document.querySelector('.arm.seconds');
const minutesArm = document.querySelector('.arm.minutes');
const hoursArm = document.querySelector('.arm.hours');

const MS = 1, SECS = 1000, MINS = 60 * 1000, MILLINC = 360 / 1000

const milliSeconds = () => {
  const ms = new Date().getMilliseconds();
  clockMs.innerHTML = ms.toString().padStart(3, '0');
  const millDegrees = Math.round(Number(ms) * MILLINC);
  milliSecondsArm.style.transform = `rotate(${millDegrees}deg)`;
}
setInterval(milliSeconds, MS);

const seconds = () => {
  const hours = new Date().getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hoursStr = (hours % 12).toString().padStart(2, '0');
  const mins = new Date().getMinutes().toString().padStart(2, '0');
  const secs = new Date().getSeconds().toString().padStart(2, '0');
  clock.innerHTML = `${hoursStr}:${mins}:${secs}:`;
  secondsArm.style.transform = `rotate(${6 * Number(secs)}deg)`;
  minutesArm.style.transform = `rotate(${6 * Number(mins)}deg)`;
  hoursArm.style.transform = `rotate(${30 * Number(hours)}deg)`;
}
seconds();
setInterval(seconds, SECS);