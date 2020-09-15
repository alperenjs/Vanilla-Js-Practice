var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var CityName = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=f7d802bae467f912dfaa78e1c3282bdd"
  )
    .then((response) => response.json())
    .then((data) => {
      var nameData = data["name"];
      var country = data["sys"].country;
      var tempValue = data["main"].temp;
      var weatherStatus = data["weather"][0].description; // iconda çekebiliyoruz ?
      var celcius = (tempValue - 273.15).toFixed(1);
      //   console.log(data);
      //

      CityName.innerText = nameData + " / " + country;
      desc.innerText = celcius;
      temp.innerText =
        weatherStatus == "clear sky" ? "gökyüzü açık" : weatherStatus;
    })

    .catch((err) => alert("wrong city name"));
});
