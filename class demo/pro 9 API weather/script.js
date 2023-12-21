let cityName;

let lat = "21.1418";
let lon = "72.7709";
const API = "7bd87f17b32a0f9cda88052b4fdd97bc";

$.ajax({
  url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`,

  method: "GET",
  success: function (weather) {
    const sunrise = new Date(`${weather.sys.sunrise}` * 1000).toLocaleString("default", `${weather.timeZone}`);
    const sunset = new Date(`${weather.sys.sunset}` * 1000).toLocaleString("default", `${weather.timeZone}`);

    // $("#cityName").html(`${weather.name}  ${weather.sys.country}`);
    $("#temp").html(weather.main.temp);
    $("#feels_like").html(weather.main.feels_like);
    $("#humidity").html(weather.main.humidity);
    $("#pressure").html(weather.main.pressure);
    $("#windDeg").html(weather.wind.deg);
    $("#windSpeed").html(weather.wind.speed);
    // $("#sunrise").html(12 - [weather.sys.sunrise / 15]);
    $("#sunrise").html(sunrise);
    // 12 - [ω / 15];
    // new Date(sunriseUnix * 1000).toLocaleString("default", { timeZone });
    $("#sunset").html(sunset);
    // console.log(cityName);

    // console.log(weather);
  },
  error: function (error) {
    $("#cityName").html(error);
  },
});

$.ajax({
  url: `https://countriesnow.space/api/v0.1/countries`,
  method: "GET",
  type: "JSON",

  success: function (countries) {
    // console.log(countries);
    const coun = countries.data;
    let country = "";
    let city = "";
    let allCountryNames;

    coun.forEach((coun) => {
      country += `<option value="${coun.country}">${coun.country}</option>`;

      //   console.log(coun.country);
    });
    // console.log(allCountryNames);
    // $("#allCountriesName").html(country);
    document.querySelector("#allCountriesName").innerHTML += country;

    const counSelect = document.querySelector("#allCountriesName");
    counSelect.addEventListener("change", () => {
      $("#countryName").html(`${counSelect.value}`);
      coun.forEach((coun) => {
        // console.log(coun.country);
        if (coun.country === counSelect.value) {
          //   console.log(coun.cities);
          const cities = coun.cities;

          cities.forEach((allCityName) => {
            console.log(allCityName);
            city += `<option value="${allCityName}">${allCityName}</option>`;
          });
          document.querySelector("#allCitiesName").innerHTML += city;

          const citySelect = document.querySelector("#allCitiesName");
          citySelect.addEventListener("change", () => {
            $("#cityName").html(`${citySelect.value}`);
          });
        }
      });
    });
  },
  error: function (error) {
    $("#cityName").html(error);
  },
});
