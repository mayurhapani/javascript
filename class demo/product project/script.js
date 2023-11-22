function make_card() {
  let card = "";

  for (i = 0; i < 20; i++) {
    card += `<div class="c_card">${i + 1}</div>`;
  }

  document.querySelector("#m_btm").innerHTML = card;
}
make_card();

function run_all() {
  alert("hiii...");
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let card = "";

// arr.forEach((item, idx) => {
//   card += `<div class="c_card">${idx}</div>`;
// });

// document.querySelector("#m_btm").innerHTML = card;
