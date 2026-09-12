let rotations = 0;
const counter = document.getElementById("counter");
function tick() {
  rotations += 1;
  counter.textContent = rotations.toLocaleString("cs-CZ");
}
setInterval(tick, 3000);
