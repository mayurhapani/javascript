{
  /*<button onclick="choice('Heads')">Heads</button>
    <button onclick="choice('Tails')">Tails</button>
    <button onclick="Reset()">Reset</button>
    <h3 id="result"><br /></h3>
    <h3 id="score"><br /></h3>*/
}
const moves = JSON.parse(localStorage.getItem("moves")) || { wons: 0, loses: 0 };

const display = () => {
  score.innerHTML = `Total Win = ${moves.wons} &nbsp Total Lose = ${moves.loses}`;

  localStorage.setItem("moves", JSON.stringify(moves));

  //   console.log(moves);
  //   console.log(localStorage.setItem("moves", JSON.stringify(moves)));
};

function choice(userChoice) {
  const computerMove = Math.random();
  console.log(computerMove);

  let score = document.querySelector("#score");
  const result = document.querySelector("#result");

  if (computerMove > 0.5) computerChoice = "Heads";
  else computerChoice = "Tails";

  if (userChoice === computerChoice) {
    result.innerHTML = "You Win!";
    moves.wons += 1;
  } else {
    result.innerHTML = "You Lose!";
    moves.loses += 1;
  }

  display();

  //with alart

  //   if (userChoice === computerChoice) alert("You Win!");
  //   else alert("You Lose!");

  //AI code

  //   if (userChoice === "Heads") {
  //     if (computerMove < 0.5) {
  //       result.innerHTML = "You Lose";
  //     } else {
  //       result.innerHTML = "You Win";
  //     }
  //   } else if (userChoice === "Tails") {
  //     if (computerMove < 0.5) {
  //       result.innerHTML = "You Win";
  //     } else {
  //       result.innerHTML = "You Lose";
  //     }
  //   }
}

function Reset() {
  moves.wons = 0;
  moves.loses = 0;
  display();
}
display();
