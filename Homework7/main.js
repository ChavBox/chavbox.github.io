var step1 = "";
var step2 = "";
var step3 = "";
var count = 1;
var update = document.getElementById('text');
var click = document.getElementById('continue');
click.onclick = changeText;

function changeText() {
  if (count == 1) {
    update.textContent = step1;
    count = 2;
  }else if (count == 2) {
    update.textContent = step2;
  }else if (count == 3) {
    update.textContent = step3;
  }
}
