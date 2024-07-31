let startTime;
let elapsedTime = 0;
let timerInterval;

function startStop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("startStopButton").innerText = "Start";
    document.getElementById("stopButton").disabled = true;
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    document.getElementById("startStopButton").innerText = "Pause";
    document.getElementById("stopButton").disabled = false;
  }
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("startStopButton").innerText = "Resume";
  document.getElementById("stopButton").disabled = true;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStopButton").innerText = "Start";
  document.getElementById("stopButton").disabled = true;
  elapsedTime = 0;
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("display").innerText = formattedTime;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  const centiseconds = Math.floor((milliseconds % 1000) / 10).toString().padStart(2, "0");
  return `${minutes}:${seconds}:${centiseconds}`;
}
