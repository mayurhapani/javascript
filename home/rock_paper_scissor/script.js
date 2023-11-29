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

function Call(U_Select) {
  const randomForComputer = Math.random();

  let computerSelect = "";
  let Result = "";

  if (randomForComputer >= 0 && randomForComputer < 1 / 3) {
    computerSelect = "✊";
  } else if (randomForComputer >= 1 / 3 && randomForComputer < 2 / 3) {
    computerSelect = "🖐";
  } else {
    computerSelect = "✌";
  }

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

  document.querySelector(
    "#output"
  ).innerHTML = `<span class="result">${Result}</span><br /> <br />
  Your Choice = <span class="icon">${U_Select}</span> &nbsp &nbsp &nbsp &nbsp
  Computer's Choice = <span class="icon">${computerSelect}</span>`;

  if (Result === "You Won") Score.Won += 1;
  if (Result === "You Loose") Score.Loose += 1;
  if (Result === "Tie") Score.Tie += 1;

  // localStorage.setItem("Score", JSON.stringify(Score));

  Final_Result();
}

function Reset_Score() {
  Score.Won = 0;
  Score.Loose = 0;
  Score.Tie = 0;

  document.querySelector(
    "#output"
  ).innerHTML = `<br /> <br /><br /> <br /><br />`;

  // localStorage.setItem("Score", JSON.stringify(Score));

  Final_Result();
}

function Final_Result() {
  localStorage.setItem("Score", JSON.stringify(Score));

  document.querySelector(
    "#Result"
  ).innerHTML = `Wons = ${Score.Won} &nbsp &nbsp
  Looses = ${Score.Loose} &nbsp &nbsp
  Ties = ${Score.Tie}`;
}
Final_Result();
