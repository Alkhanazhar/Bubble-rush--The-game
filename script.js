var score = 0;
var hitrn=0;
function updatescore() {
    document.querySelector("#score").textContent = score;
    score += 10;
}
function makebubble() {
  var clutter = "";
  for (let index = 0; index <= 188; index++) {
    var ran = Math.floor(Math.random() * 10);
    if (ran == 0) {
      ran = 1;
    }

    clutter += ` <div class="bubble">${ran}</div>`;
  }
  document.querySelector("#bottom-panel").innerHTML = clutter;
}
var timer = 60;
var timerint = setInterval(() => {
  if (timer > 0) {
    timer--;
    document.querySelector("#timer").textContent = timer;
  } else {
    clearInterval(timerint);
    document.querySelector("#bottom-panel").innerHTML = `<h1 class="over">game Over</h1><br><button class="btn" onclick=location.reload()>reload</button>`;
  }
}, 1000);
function newhit() {
  hitrn = Math.floor(Math.random() * 10);
  if (hitrn == 0) {
    hitrn = 1;
  }
  console.log(hitrn);
  document.querySelector("#hit").innerHTML = hitrn;
}
makebubble();
document
  .querySelector("#bottom-panel")
  .addEventListener("click", function (event) {
    var clickednumber = Number(event.target.innerHTML);
    if (clickednumber == hitrn) {
        updatescore()
        newhit()
        makebubble()
    }
  });
updatescore();
newhit();
