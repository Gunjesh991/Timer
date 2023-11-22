var timer;
var timeLeft;
var isTimerRunning = false;
var minutesDisplay;
var secondsDisplay;

function setTimer() {
  var inputDuration = document.getElementById("duration").value;

  if (inputDuration && !isTimerRunning) {
    isTimerRunning = true;

    timeLeft = inputDuration * 60;
    updateDisplay();

    timer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        isTimerRunning = false;
      } else {
        timeLeft--;
        updateDisplay();
      }
    }, 1000);
  }
}

function updateDisplay() {
  minutesDisplay = Math.floor(timeLeft / 60);
  secondsDisplay = timeLeft % 60;

  document.getElementById("countdown").innerHTML = padWithZero(minutesDisplay) + "m " + padWithZero(secondsDisplay) + "s ";
}

function padWithZero(value) {
  return value < 10 ? "0" + value : value;
}

function startTimer() {
  setTimer();
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  document.getElementById("countdown").innerHTML = "";
}
