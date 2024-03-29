// const counSelect = document.querySelector("#allCountriesName");
const stateSelect = document.querySelector("#allStatesName");
const citySelect = document.querySelector("#allCitiesName");

const key1 = "ajNRWUduTGYza04ydmdPeUh1UFFab21OUEY5RWV3UkNUT2dkTmkyRw==";

getCity();

function getCity() {
  let states = "";
  let stateCode;

  let cities = "";

  $.ajax({
    url: `https://api.countrystatecity.in/v1/countries/IN/states`,
    method: "GET",
    async: false,
    headers: {
      "X-CSCAPI-KEY": key1,
    },
    success: function (allStates) {
      //   console.log(allStates);
      states = `<option value="" selected disabled>Select State</option>`;
      printAria(allStates, stateSelect, states);

      stateSelect.addEventListener("change", () => {
        $("#stateName").html(`${stateSelect.value}`);

        allStates.forEach((state) => {
          if (stateSelect.value === state.name) {
            stateCode = state.iso2;

            searchCoronaState(stateCode);

            $.ajax({
              url: `https://api.countrystatecity.in/v1/countries/IN/states/${stateCode}/cities`,
              method: "GET",
              async: false,
              headers: {
                "X-CSCAPI-KEY": key1,
              },
              success: function (allCities) {
                cities = `<option value="" selected disabled>Select City</option>`;
                printAria(allCities, citySelect, cities);

                citySelect.addEventListener("change", () => {
                  $("#cityName").html(`${citySelect.value}`);

                  searchCoronaCity(stateCode, citySelect.value);
                });
              },
            });
          }
        });
      });
    },
  });
}

function searchCoronaState(state) {
  $.ajax({
    url: `https://data.covid19india.org/v4/min/data.min.json`,
    method: "GET",
    type: "JSON",
    async: false,
    crossDomain: true,

    success: function (coronaData) {
      const coronaStateData = coronaData[state];
      $("#confirmed").html(coronaStateData.total.confirmed);
      $("#deceased").html(coronaStateData.total.deceased);
      $("#recovered").html(coronaStateData.total.recovered);
      $("#tested").html(coronaStateData.total.tested);

      //   searchCoronaCity(coronaStateData, "Surat");
    },
  });
}
function searchCoronaCity(state, city) {
  $.ajax({
    url: `https://data.covid19india.org/v4/min/data.min.json`,
    method: "GET",
    type: "JSON",
    async: false,
    crossDomain: true,

    success: function (coronaData) {
      const coronaStateData = coronaData[state];
      const coronaCityData = coronaStateData.districts[city];

      if (coronaStateData.districts[city] != undefined) {
        $("#error").html(``);
        $("#cityConfirmed").html(coronaCityData.total.confirmed);
        $("#cityDeceased").html(coronaCityData.total.deceased);
        $("#cityRecovered").html(coronaCityData.total.recovered);
        $("#cityTested").html(coronaCityData.total.tested);
      } else {
        $("#error").html(`${city}'s Data Not Found Please Select Other City`);
        $("#cityConfirmed").html("");
        $("#cityDeceased").html("");
        $("#cityRecovered").html("");
        $("#cityTested").html("");
      }
    },
  });
}

function printAria(arr, location, newVar) {
  arr.forEach((data) => {
    newVar += `<option value="${data.name}">${data.name}</option>`;
  });
  location.innerHTML = newVar;
}
