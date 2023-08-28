let gameSeq = [];
let userSeeq = [];

let btns = ["clr1", "clr2", "clr3", "clr4"];

let level = 0;
let h3 = document.querySelector("h3");

let start = false;
document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("game started");
    start = true;
    levelUp();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  userSeeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let rand = Math.floor(Math.random() * 4);
  let randomcolor = btns[rand];

  gameSeq.push(randomcolor);
  console.log(gameSeq);

  let randBtn = document.querySelector(`.${randomcolor}`);
  btnflash(randBtn);
}

function checkAns(idx) {
  if (userSeeq[idx] === gameSeq[idx]) {
    if (userSeeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h3.innerHTML = `Game over !! Your Score <b> ${level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    Reset();
  }
}
function btnpress() {
  let btn = this;
  btnflash(btn);

  userColor = btn.getAttribute("id");
  userSeeq.push(userColor);

  checkAns(userSeeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnpress);
}
function Reset() {
  start = false;
  gameSeq = [];
  userSeeq = [];
  level = 0;
}
