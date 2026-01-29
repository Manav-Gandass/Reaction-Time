const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const result = document.getElementById("result");
const statusText = document.getElementById("statusText");
const distractionToggle = document.getElementById("distractionToggle");

const attemptsEl = document.getElementById("attempts");
const streakEl = document.getElementById("streak");
const leaderboardEl = document.getElementById("leaderboard");
const leaderboardList = document.getElementById("leaderboardList");

let minWait = 1000;
let maxWait = 2600;
let startTime = 0;
let active = false;
let timeoutId;

let attempts = 0;
let streak = 0;
let leaderboard = [];

const failMessages = [
  "Wrong target! Stay focused 👀",
  "That was a distraction 😬",
  "Oops! Not the right one",
  "Focus broken! Try again",
  "Nice reflexes — wrong circle 😅"
];

startBtn.addEventListener("click", startTest);
gameArea.addEventListener("click", handleGameClick);

function startTest() {
  resetRound();
  statusText.textContent = "WAIT";
  const delay = random(minWait, maxWait);
  timeoutId = setTimeout(() => {
    statusText.textContent = "";
    spawnTarget();
    if (distractionToggle.checked) spawnDistractions();
    startTime = performance.now();
    active = true;
  }, delay);
}

function handleGameClick(e) {
  if (!active && statusText.textContent === "WAIT") {
    result.textContent = "Too soon!";
    streak = 0;
    updateStats();
    return;
  }

  if (active && e.target.classList.contains("distraction")) {
    handleDistractionClick();
    return;
  }

  if (active && !e.target.classList.contains("target")) {
    result.textContent = "Missed it! Click the circle 👀";
    streak = 0;
    updateStats();
  }
}

function spawnTarget() {
  const t = document.createElement("div");
  t.className = "target";
  t.textContent = "CLICK";
  const pos = randomPosition();
  t.style.left = pos.x + "px";
  t.style.top = pos.y + "px";
  t.addEventListener("click", handleSuccess);
  gameArea.appendChild(t);
}

function handleSuccess(e) {
  e.stopPropagation();
  if (!active) return;
  active = false;
  const time = Math.round(performance.now() - startTime);
  attempts++;
  streak++;
  leaderboard.push(time);
  leaderboard.sort((a, b) => a - b);
  leaderboard = leaderboard.slice(0, 5);
  updateLeaderboard();
  updateStats();
  increaseDifficulty();
  result.textContent = `Reaction time: ${time} ms`;
  clearGameArea();
}

function handleDistractionClick() {
  const msg = failMessages[Math.floor(Math.random() * failMessages.length)];
  result.textContent = msg;
  streak = 0;
  updateStats();
  clearGameArea();
}

function spawnDistractions() {
  const count = Math.min(6, Math.floor((2600 - minWait) / 300));
  for (let i = 0; i < count; i++) {
    const d = document.createElement("div");
    d.className = "distraction";
    const pos = randomPosition();
    d.style.left = pos.x + "px";
    d.style.top = pos.y + "px";
    gameArea.appendChild(d);
  }
}

function updateLeaderboard() {
  leaderboardList.innerHTML = "";
  leaderboard.forEach(time => {
    const li = document.createElement("li");
    li.textContent = time + " ms";
    leaderboardList.appendChild(li);
  });
}

function increaseDifficulty() {
  minWait = Math.max(350, minWait - 70);
  maxWait = Math.max(700, maxWait - 120);
}

function resetRound() {
  clearTimeout(timeoutId);
  active = false;
  result.textContent = "";
  clearGameArea();
}

function clearGameArea() {
  gameArea.innerHTML = "";
  gameArea.appendChild(statusText);
  gameArea.appendChild(leaderboardEl);
}

function updateStats() {
  attemptsEl.textContent = attempts;
  streakEl.textContent = streak;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPosition() {
  const size = 64;
  return {
    x: random(10, gameArea.clientWidth - size - 10),
    y: random(10, gameArea.clientHeight - size - 10)
  };
}
