let std_info_arr = [
  { img: `img/male.png`, Name: `Mayur`, Gender: `Male`, Std: `Fullstack`, City: `Surat` },
  { img: `img/Female.png`, Name: `Niru`, Gender: `Female`, Std: `Fullstack`, City: `Surat` },
  { img: `img/male.png`, Name: `Divyang`, Gender: `Male`, Std: `Fullstack`, City: `Surat` },
  { img: `img/male.png`, Name: `Deep`, Gender: `Male`, Std: `Fullstack`, City: `Surat` },
  { img: `img/Female.png`, Name: `Sonu`, Gender: `Female`, Std: `Fullstack`, City: `Surat` },
  { img: `img/Female.png`, Name: `Miru`, Gender: `Female`, Std: `Fullstack`, City: `Surat` },
  { img: `img/male.png`, Name: `Ravi`, Gender: `Male`, Std: `Fullstack`, City: `Surat` },
  { img: `img/Female.png`, Name: `Deepika`, Gender: `Female`, Std: `Fullstack`, City: `Surat` },
  { img: `img/male.png`, Name: `Samadhan`, Gender: `Male`, Std: `Fullstack`, City: `Surat` },
  { img: `img/Female.png`, Name: `Aalia`, Gender: `Female`, Std: `Fullstack`, City: `Surat` },
  { img: `img/Female.png`, Name: `Katrina`, Gender: `Female`, Std: `Fullstack`, City: `Surat` },
  { img: `img/male.png`, Name: `hardik`, Gender: `Male`, Std: `Fullstack`, City: `Surat` },
];

function make_card() {
  let card = "";

  for (i = 0; i < std_info_arr.length; i++) {
    card += `<div class="c_card">
          <img src=${std_info_arr[i].img} alt="" />
          <div class="about_u">
            <span class="U_title">Name :</span><span id="Name"> ${std_info_arr[i].Name}</span> <br />
            <span class="U_title">Gender :</span><span id="Gender"> ${std_info_arr[i].Gender}</span> <br />
            <span class="U_title">Std :</span><span id="Std"> ${std_info_arr[i].Std}</span> <br />
            <span class="U_title">City :</span><span id="City"> ${std_info_arr[i].City}</span>
          </div>
        </div>`;
  }

  document.querySelector("#m_btm").innerHTML = card;
}
make_card();

// function run_all() {
// alert("hiii...");
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let card = "";

// arr.forEach((item, idx) => {
//   card += `<div class="c_card">${idx}</div>`;
// });

// document.querySelector("#m_btm").innerHTML = card;
