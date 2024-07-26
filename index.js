const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secsEl = document.getElementById("sec");

function upDateClock() {
  const currentDate = new Date();
  setTimeout(upDateClock, 1000)
   const hour = currentDate.getHours();
   const minute = currentDate.getMinutes();
   const seconds = currentDate.getSeconds();
   const hourDeg = (hour / 12) * 360;
   hourEl.style.transform = `rotate(${hourDeg}deg)`;
   const minutesDeg = (minute / 60) * 360;
   minEl.style.transform = `rotate(${minutesDeg}deg)`;
   const secondsDeg = (seconds / 60) * 360;
   secsEl.style.transform = `rotate(${secondsDeg}deg)`;
   

    console.log(currentDate)
  
}

upDateClock();
