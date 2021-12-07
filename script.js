let randomNum = Math.floor(Math.random() * 20) + 1;
let highscore = document.getElementById("highscore");
highscore.value = 0;
let round = 20;
let roundHtml = (document.getElementById("score").innerHTML =
  "&#128176; Score : " + round);
//Calc Number
const calcValue = function (value) {
  //low-high
  let lowhigh = document.getElementById("lowhigh");
  if (value < randomNum) {
    lowhigh.innerHTML = "&#128185; Too Low!";
    round--;
  } else if (value > randomNum) {
    lowhigh.innerHTML = "&#128185; Too High!";
    round--;
  } else if (value == randomNum) {
    lowhigh.innerHTML = "&#128185; True Guess!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("#input").style.backgroundColor = "green";
    if (highscore.value < round) {
      highscore.value = round;
      console.log(highscore.value);
      highscore.innerHTML = "&#128640; Highscore :" + round;
    }
  }
  //round
  document.getElementById("score").innerHTML = "&#128176; Score : " + round;
};
const resetGame = function () {
  round = 20;
  document.getElementById("input").value = "";
  document.getElementById("lowhigh").innerHTML = "&#128185; Start Guess!";
  document.getElementById("score").innerHTML = "&#128176; Score : " + round;
  randomNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("#input").style.backgroundColor = "black";
};
//EVENTS
document.getElementById("check").addEventListener("click", function () {
  let value = document.getElementById("input").value;
  calcValue(value);
});
document.getElementById("again").addEventListener("click", function () {
  resetGame();
});
