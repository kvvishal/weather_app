const apiKey = "a381173dd75548cc9b2171012250207"; // Replace with your WeatherAPI key

function getWeather(city) {
  const input = document.getElementById("cityInput");
  const cityName = city || input.value.trim();

  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("City not found!");
        return;
      }

      document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temp").textContent = data.current.temp_c;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("wind").textContent = data.current.wind_kph;
      document.getElementById("weatherInfo").classList.remove("hidden");
    })
    .catch(err => {
      alert("Something went wrong.");
      console.error(err);
    });
}

// Autofocus input and fetch default city on load
window.onload = () => {
  document.getElementById("cityInput").focus();
  getWeather("Delhi");
};
