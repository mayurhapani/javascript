/* <button onclick="Call('✊')">✊</button>
    <button onclick="Call('🖐')">🖐</button>
    <button onclick="Call('✌')">✌</button>
  <h2 id="output"></h2>
  <h2 id="Result"></h2> */

// let Score = {
//   Won: 0,
//   Loose: 0,
//   Tie: 0,
// };

let Score = JSON.parse(localStorage.getItem("Score")) || {
  Won: 0,
  Loose: 0,
  Tie: 0,
};
// console.log(Score);
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const userMove = pickComputerMove();
      Call(userMove);
    }, 1000);
    document.querySelector("#autoPlay").innerHTML = "Stop Auto Play";
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    document.querySelector("#autoPlay").innerHTML = "Start Auto Play";
    isAutoPlaying = false;
  }
}

function pickComputerMove() {
  const randomForComputer = Math.random();

  let computerSelect = "";

  if (randomForComputer >= 0 && randomForComputer < 1 / 3) {
    computerSelect = "✊";
  } else if (randomForComputer >= 1 / 3 && randomForComputer < 2 / 3) {
    computerSelect = "🖐";
  } else {
    computerSelect = "✌";
  }
  return computerSelect;
}

document.body.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (event.key === "r") Call("✊");
  else if (event.key === "p") Call("🖐");
  else if (event.key === "s") Call("✌");
  else if (event.key === "a") autoPlay();
  else if (event.key === "Backspace") Reset_Score()();
});

function Call(U_Select) {
  const computerSelect = pickComputerMove();

  let Result = "";

  if (U_Select === "✊") {
    if (computerSelect === "✊") Result = "Tie";
    else if (computerSelect === "🖐") Result = "You Loose";
    else Result = "You Won";
  } else if (U_Select === "🖐") {
    if (computerSelect === "🖐") Result = "Tie";
    else if (computerSelect === "✌") Result = "You Loose";
    else Result = "You Won";
  } else {
    if (computerSelect === "✌") Result = "Tie";
    else if (computerSelect === "✊") Result = "You Loose";
    else Result = "You Won";
  }

  document.querySelector("#output").innerHTML = `<span class="result">${Result}</span><br /> <br />
  Your Choice = <span class="icon">${U_Select}</span> &nbsp &nbsp &nbsp &nbsp
  Computer's Choice = <span class="icon">${computerSelect}</span>`;

  if (Result === "You Won") Score.Won += 1;
  if (Result === "You Loose") Score.Loose += 1;
  if (Result === "Tie") Score.Tie += 1;

  // localStorage.setItem("Score", JSON.stringify(Score));

  Final_Result();
}

function Reset_Score() {
  const confirmReset = document.querySelector("#confirmReset");
  confirmReset.innerHTML = `<div id="resetMsg">
          <p>Are You Sure You Want To Reset Score?</p>
          <button id="resetYes">Yes</button>
          <button id="resetNo">No</button>
        </div>`;

  const resetYes = document.querySelector("#resetYes");
  resetYes.addEventListener("click", () => {
    // console.log("hii");
    Confirm_Reset_Score();
    confirmReset.innerHTML = "";
  });
  const resetNo = document.querySelector("#resetNo");
  resetNo.addEventListener("click", () => {
    confirmReset.innerHTML = "";
  });
}

function Confirm_Reset_Score() {
  Score.Won = 0;
  Score.Loose = 0;
  Score.Tie = 0;

  document.querySelector("#output").innerHTML = `<br /> <br /><br /> <br /><br />`;

  // localStorage.setItem("Score", JSON.stringify(Score));

  Final_Result();
}

function Final_Result() {
  localStorage.setItem("Score", JSON.stringify(Score));

  document.querySelector("#Result").innerHTML = `Wons = ${Score.Won} &nbsp &nbsp
  Looses = ${Score.Loose} &nbsp &nbsp
  Ties = ${Score.Tie}`;
}
Final_Result();
