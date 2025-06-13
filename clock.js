const button = document.getElementById("toggle-btn");

function showTime() {
  const currentTime = new Date();
  const time = `${pad(currentTime.getHours())}:${pad(currentTime.getMinutes())}:${pad(currentTime.getSeconds())}`;
  document.getElementById("time").innerText = time;
}

function pad(num) {
  return num.toString().padStart(2, '0'); 
}

let interval = setInterval(showTime, 1000);
let isRunning = true;


showTime();

button.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(interval);
    button.innerText = "Start Timer";
    isRunning = false;
  } else {
    interval = setInterval(showTime, 1000);
    button.innerText = "Stop Timer";
    isRunning = true;
  }
});
