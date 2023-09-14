const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7eec59d2ecmsh245fcdfacea217fp12160djsn3d69399d0acb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  alert(city);
  document.getElementById("cityName").innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("Cloud_pct").innerHTML = response.cloud_pct;
      document.getElementById("temp").innerHTML = response.temp;
      document.getElementById("feels_like").innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      min_temp.innerHTML = response.min_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
document.getElementById("submit").addEventListener("click", () => {
  getWeather(document.getElementById("city").value);
});

getWeather("Delhi");
