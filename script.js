var timer;
var timeLeft;
var isTimerRunning = false;

function setTimer() {
  var inputDuration = document.getElementById("duration").value;
  if (inputDuration && !isTimerRunning) {
    timeLeft = inputDuration * 60;
    isTimerRunning = true;

    var minutesDisplay = Math.floor(timeLeft / 60);
    var secondsDisplay = timeLeft % 60;

    document.getElementById("countdown").innerHTML = minutesDisplay + "m " + secondsDisplay + "s ";

    timer = setInterval(function () {
      var minutesDisplay = Math.floor(timeLeft / 60);
      var secondsDisplay = timeLeft % 60;

      document.getElementById("countdown").innerHTML = minutesDisplay + "m " + secondsDisplay + "s ";

      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        isTimerRunning = false;
      }

      timeLeft--;
    }, 1000);
  }
}

function startTimer() {
  setTimer(); // You can use the setTimer function to start the timer as well
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
