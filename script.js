const API_KEY = "3e62bc961523fa19d681b9817aa9b032";

function getWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {return data;})
    .catch(error => alert('You entered Wrong city name'))
}

const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const daysForecastDiv = document.querySelector(".days-forecast");

searchButton.addEventListener("click", () => {
  const cityName = cityInput.value;

  getWeatherData(cityName)
    .then(data => {
        const currentcity = data;
        const currentWeather = data.main;
      
        const currentWeatherDes = data.weather[0];

        currentWeatherDiv.innerHTML = `
            <h3>Current Weather Info</h3>
            <p>Country/City Name: ${currentcity.name}</p>
            <p>Temperature: ${currentWeather.temp} °C</p>
            <p>Description: ${currentWeatherDes.description}</p>        
            <p>Humidity: ${currentWeather.humidity} %</p>
        `;
    });
});