function getWeather(location){
    function handleError(response){
        if(!response.ok){
            throw Error;
        } else {
            return response.json();
        }
    };

    return new Promise((resolve, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=2f1611fd371334508c8d8b63d53a391c&units=imperial', {mode: 'cors'})
            .then(handleError)
            /*.then(function(response) {
                return response.json();
            })*/
            .then(function(response){
                resolve(response);
            })
            .catch(reject);
    })
}

function displayWeather1(location){
    const temperature = document.getElementById('temperature-1');
    const weather = document.getElementById('weather-1');
    const city = document.getElementById('city-1');
    temperature.innerText = '';
    weather.innerText = '';
    city.innerText = '';
    getWeather(location)
        .then(response => {
            city.innerText = location;
            temperature.innerText = response.main.temp + "°F"; 
            weather.innerText = "Weather: " + response.weather[0].main;
            })
        .catch(() => city.innerText = "City not recognized");
}

function findLocation1(){
    const location = document.getElementById('location-1');
    displayWeather1(location.value);
}

function displayWeather2(location){
    const temperature = document.getElementById('temperature-2');
    const weather = document.getElementById('weather-2');
    const city = document.getElementById('city-2');
    temperature.innerText = '';
    weather.innerText = '';
    city.innerText = '';
    getWeather(location)
        .then(response => {
            city.innerText = location;
            temperature.innerText = response.main.temp + "°F"; 
            weather.innerText = "Weather: " + response.weather[0].main;
            })
        .catch(() => city.innerText = "City not recognized");
}

function findLocation2(){
    const location = document.getElementById('location-2');
    displayWeather2(location.value);
}

function displayWeather3(location){
    const temperature = document.getElementById('temperature-3');
    const weather = document.getElementById('weather-3');
    const city = document.getElementById('city-3');
    temperature.innerText = '';
    weather.innerText = '';
    city.innerText = '';
    getWeather(location)
        .then(response => {
            city.innerText = location;
            temperature.innerText = response.main.temp + "°F"; 
            weather.innerText = "Weather: " + response.weather[0].main;
            })
        .catch(() => city.innerText = "City not recognized");
}

function findLocation3(){
    const location = document.getElementById('location-3');
    displayWeather3(location.value);
}