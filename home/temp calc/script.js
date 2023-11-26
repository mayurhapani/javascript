/* <input id="temp_num" type="number" />
      <select id="u_option"></select> 
      <h3 id="result"></h3>*/

const result = document.querySelector("#result");
const Submit = document.querySelector("#Submit");

Submit.addEventListener("click", () => {
  const temp_num = +document.querySelector("#temp_num").value;
  const u_option = document.querySelector("#u_option").value;

  if (u_option === "celsius") {
    const fahr = (temp_num * 9) / 5 + 32;
    result.innerHTML = `= ${fahr} fahrenheit`;
  } else if (u_option === "fahrenheit") {
    const cels = ((temp_num - 32) * 5) / 9;
    result.innerHTML = `= ${cels} celsius`;
  }

  //   console.log(u_option, temp_num);
});
