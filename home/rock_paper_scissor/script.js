/* <div class="inner">
    <button onclick="Call('Rock')">Rock</button>
    <button onclick="Call('Paper')">Paper</button>
    <button onclick="Call('Scissor')">Scissor</button>
  <h2 id="output"></h2>
  <h2 id="Result"></h2>
</div> */
let Won = 0;
let Loose = 0;
let Tie = 0;

function Call(U_Select) {
  const randomForComputer = Math.random();
  //   console.log(randomForComputer);

  let computerSelect = "";
  let Result = "";

  if (randomForComputer >= 0 && randomForComputer < 1 / 3) {
    computerSelect = "Rock";
  } else if (randomForComputer >= 1 / 3 && randomForComputer < 2 / 3) {
    computerSelect = "Paper";
  } else {
    computerSelect = "Scissor";
  }
  //   console.log(computerSelect);

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

  if (Result === "You Won") Won++;
  if (Result === "You Loose") Loose++;
  if (Result === "Tie") Tie++;

  document.querySelector("#Result").innerHTML = `You Won = ${Won} &nbsp &nbsp
   You Loose = ${Loose} &nbsp &nbsp
   Tie = ${Tie}`;
}
document.querySelector("#Result").innerHTML = `You Won = ${Won} &nbsp &nbsp
   You Loose = ${Loose} &nbsp &nbsp
   Tie = ${Tie}`;
