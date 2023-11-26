/* <div class="inner">
    <button onclick="Call('Rock')">Rock</button>
    <button onclick="Call('Paper')">Paper</button>
    <button onclick="Call('Scissor')">Scissor</button>
  <h2 id="output"></h2>
  <h2 id="Result"></h2>
</div> */

let Score = {
  Won: 0,
  Loose: 0,
  Tie: 0,
};

function Call(U_Select) {
  const randomForComputer = Math.random();

  let computerSelect = "";
  let Result = "";

  if (randomForComputer >= 0 && randomForComputer < 1 / 3) {
    computerSelect = "Rock";
  } else if (randomForComputer >= 1 / 3 && randomForComputer < 2 / 3) {
    computerSelect = "Paper";
  } else {
    computerSelect = "Scissor";
  }

  if (U_Select === "Rock") {
    if (computerSelect === "Rock") Result = "Tie";
    else if (computerSelect === "Paper") Result = "You Loose";
    else Result = "You Won";
  } else if (U_Select === "Paper") {
    if (computerSelect === "Paper") Result = "Tie";
    else if (computerSelect === "Scissor") Result = "You Loose";
    else Result = "You Won";
  } else {
    if (computerSelect === "Scissor") Result = "Tie";
    else if (computerSelect === "Rock") Result = "You Loose";
    else Result = "You Won";
  }

  document.querySelector("#output").innerHTML = `You Have Selected ${U_Select}. <br />
   And Computer Selected ${computerSelect}. <br />
   ${Result}`;

  if (Result === "You Won") Score.Won += 1;
  if (Result === "You Loose") Score.Loose += 1;
  if (Result === "Tie") Score.Tie += 1;

  Final_Result();
}

function Reset_Score() {
  Score.Won = 0;
  Score.Loose = 0;
  Score.Tie = 0;

  Final_Result();
}

function Final_Result() {
  document.querySelector("#Result").innerHTML = `You Won = ${Score.Won} &nbsp &nbsp
  You Loose = ${Score.Loose} &nbsp &nbsp
  Tie = ${Score.Tie}`;
}
Final_Result();
