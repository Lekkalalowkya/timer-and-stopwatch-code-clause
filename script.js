// Timer and Stopwatch code
let timerInterval;
let stopwatchInterval;
let timerDisplay = document.querySelector('.timer .display');
let timerHours = document.querySelector('.timer .hours');
let timerMinutes = document.querySelector('.timer .minutes');
let timerSeconds = document.querySelector('.timer .seconds');
let startTimerButton = document.querySelector('#start-timer');
let pauseTimerButton = document.querySelector('#pause-timer');
let resetTimerButton = document.querySelector('#reset-timer');

let stopwatchDisplay = document.querySelector('.stopwatch .display');
let stopwatchMinutes = document.querySelector('.stopwatch .minutes');
let stopwatchSeconds = document.querySelector('.stopwatch .seconds');
let stopwatchMilliseconds = document.querySelector('.stopwatch .milliseconds');
let startStopwatchButton = document.querySelector('#start-stopwatch');
let pauseStopwatchButton = document.querySelector('#pause-stopwatch');
let resetStopwatchButton = document.querySelector('#reset-stopwatch');

let timer = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

let stopwatch = {
  minutes: 0,
  seconds: 0,
  milliseconds: 0
};

function startTimer() {
  clearInterval(timerInterval);
  clearInterval(stopwatchInterval);
  timerInterval = setInterval(incrementTimer, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timer.hours = 0;
  timer.minutes = 0;
  timer.seconds = 0;
  updateTimerDisplay();
}

function incrementTimer() {
  timer.seconds++;

  if (timer.seconds >= 60) {
    timer.seconds = 0;
    timer.minutes++;

    if (timer.minutes >= 60) {
      timer.minutes = 0;
      timer.hours++;
    }
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  timerHours.textContent = padZero(timer.hours);
  timerMinutes.textContent = padZero(timer.minutes);
  timerSeconds.textContent = padZero(timer.seconds);
}

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function startStopwatch() {
  clearInterval(timerInterval);
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(incrementStopwatch, 10);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatch.minutes = 0;
  stopwatch.seconds = 0;
  stopwatch.milliseconds = 0;
  updateStopwatchDisplay();
}

function incrementStopwatch() {
  stopwatch.milliseconds++;

  if (stopwatch.milliseconds >= 100) {
    stopwatch.milliseconds = 0;
    stopwatch.seconds++;

    if (stopwatch.seconds >= 60) {
      stopwatch.seconds = 0;
      stopwatch.minutes++;
    }
  }

  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  stopwatchMinutes.textContent = padZero(stopwatch.minutes);
  stopwatchSeconds.textContent = padZero(stopwatch.seconds);
  stopwatchMilliseconds.textContent = padZero(stopwatch.milliseconds);
}

startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
resetTimerButton.addEventListener('click', resetTimer);

startStopwatchButton.addEventListener('click', startStopwatch);
pauseStopwatchButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);
