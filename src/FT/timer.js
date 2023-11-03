let minutes = 25;
let seconds = 0;
let isRunning = false;
let interval;

function updateTimerDisplay() {
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function toggleRunning() {
  if (isRunning) {
    clearInterval(interval);
    document.querySelector('.ph-play-circle').style.display = 'inline-block';
    document.querySelector('.ph-pause-circle').style.display = 'none';
  } else {
    interval = setInterval(updateTimer, 1000);
    document.querySelector('.ph-play-circle').style.display = 'none';
    document.querySelector('.ph-pause-circle').style.display = 'inline-block';
  }
  isRunning = !isRunning;
}

function stopTimer() {
  clearInterval(interval);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
  document.querySelector('.ph-play-circle').style.display = 'inline-block';
  document.querySelector('.ph-pause-circle').style.display = 'none';
}

function addTime() {
  if (!isRunning) {
    minutes += 5;
    updateTimerDisplay();
  }
}

function subTime() {
  if (!isRunning && minutes >= 5) {
    minutes -= 5;
    updateTimerDisplay();
  }
}

function updateTimer() {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else {
    clearInterval(interval);
    isRunning = false;
  }
  updateTimerDisplay();
}

export function initializeTimerControls() {
  const playButton = document.querySelector('.ph-play-circle');
  const pauseButton = document.querySelector('.ph-pause-circle');
  const stopButton = document.querySelector('.ph-stop-circle');
  const plusButton = document.querySelector('.ph-plus-circle');
  const minusButton = document.querySelector('.ph-minus-circle');

  playButton.addEventListener('click', toggleRunning);
  pauseButton.addEventListener('click', toggleRunning);
  stopButton.addEventListener('click', stopTimer);
  plusButton.addEventListener('click', addTime);
  minusButton.addEventListener('click', subTime);

  updateTimerDisplay();
}
