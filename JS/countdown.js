const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h2');
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const date = new Date(tempYear, tempMonth + 1, tempDay, 18, 44);
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();
const month = date.getMonth();
const weekday = date.getDay();
const dates = date.getDate();
// giveaway.textContent = `giveaway ends on ${weekdays[weekday]},${dates} ${months[month]} ${year} ${hour}:${minutes}pm`;
const futureTime = date.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = date - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  //   const seconds = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes];
  //   const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry, this offer has expired</h4>`;
  }
}
const countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

