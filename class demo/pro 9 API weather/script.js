const counSelect = document.querySelector("#allCountriesName");
const citySelect = document.querySelector("#allCitiesName");

const API = "7bd87f17b32a0f9cda88052b4fdd97bc";
getCity();

function getCity() {
  let cityName = "";
  $.ajax({
    url: `https://countriesnow.space/api/v0.1/countries`,
    method: "GET",
    async: false,

    success: function (countries) {
      const coun = countries.data;
      let country = "";
      let city = "";

      coun.forEach((coun) => {
        country += `<option value="${coun.country}">${coun.country}</option>`;
      });
      counSelect.innerHTML += country;

      counSelect.addEventListener("change", () => {
        $("#countryName").html(`${counSelect.value}`);

        coun.forEach((coun) => {
          if (coun.country === counSelect.value) {
            const countryCoad = coun.iso2;
            const cities = coun.cities;
            citySelect.innerHTML = `<option value="" selected disabled>Select City</option>`;
            city = ``;

            cities.forEach((allCityName) => {
              city += `<option value="${allCityName}">${allCityName}</option>`;
            });
            citySelect.innerHTML += city;

            citySelect.addEventListener("change", () => {
              cityName = citySelect.value;
              $("#cityName").html(`${cityName}`);

              getLanLon(cityName, countryCoad);
            });
          }
        });
      });
    },
    error: function (error) {
      $("#cityName").html(error);
    },
  });
}

function getLanLon(cityName, countryCoad) {
  country = "in";
  let lat = "";
  let lon = "";

  $.ajax({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCoad}&appid=${API}`,
    method: "GET",
    async: false,

    success: function (data) {
      console.log(data);
      data.forEach((city) => {
        lat = city.lat;
        lon = city.lon;
        getWeatherData(lat, lon);
      });
    },
    error: function (error) {
      $("#cityName").html(error);
    },
  });
}

function getWeatherData(lat, lon) {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`,
    method: "GET",
    async: false,
    success: function (weather) {
      const sunrise = new Date(`${weather.sys.sunrise}` * 1000).toLocaleString("default", `${weather.timeZone}`);
      const sunset = new Date(`${weather.sys.sunset}` * 1000).toLocaleString("default", `${weather.timeZone}`);

      $("#temp").html(weather.main.temp);
      $("#feels_like").html(weather.main.feels_like);
      $("#humidity").html(weather.main.humidity);
      $("#pressure").html(weather.main.pressure);
      $("#windSpeed").html(weather.wind.speed);
      $("#sunrise").html(sunrise);
      $("#sunset").html(sunset);
    },
    error: function (error) {
      $("#cityName").html(error);
    },
  });
}
