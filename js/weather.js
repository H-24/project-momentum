const API_KEY = "db18589059b4f162e754ff2de4c04875";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;  // 경도
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)      // 비동기 (API 호출)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather");
        const temperature = document.querySelector("#temperature");
        const location = document.querySelector("#location");
        location.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temperature.innerText = Math.round(data.main.temp);
    })
}
function onGeoError() {
    alert("Can't find your location. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);