let timer;
let isRunning = false;
let seconds = 0;
let laps = [];
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('display').innerHTML = formatTime(seconds);
    document.querySelector('button:nth-child(1)').innerHTML = 'Start';
  } else {
    timer = setInterval(updateTime, 1000);
    document.querySelector('button:nth-child(1)').innerHTML = 'Pause';
  }
  isRunning = !isRunning;
}

function updateTime() {
  seconds++;
  document.getElementById('display').innerHTML = formatTime(seconds);
}

function lap() {
  laps.push(formatTime(seconds));
  const lapsList = document.getElementById('laps');
  const li = document.createElement('li');
  li.innerHTML = `Lap ${lapCounter}: ${formatTime(seconds)}`;
  lapsList.appendChild(li);
  lapCounter++;
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  laps = [];
  lapCounter = 1;
  document.getElementById('display').innerHTML = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  document.querySelector('button:nth-child(1)').innerHTML = 'Start';
  isRunning = false;
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
