const degrees = document.querySelector('.degrees')
const weather = document.querySelector('.weather')
const img = document.querySelector('img')
const city = document.querySelector('.city')
const key = '7a499d72c4b491361a108e11f16c0a7a';

navigator.geolocation.getCurrentPosition(function getLocation (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
        .then(res => {
            const body = res.data; 
            img.src = `http://openweathermap.org/img/w/${body.weather[0].icon}.png`;
            let tempInCelsius = Math.floor(body.main.temp - 273.15);
            degrees.textContent = `${tempInCelsius}°C`;
            weather.textContent = body.weather[0].main + ", " + body.weather[0].description + "";
            city.textContent = body.name + ", " + body.sys.country;
        })
        .catch(e => console.error(e));
});
