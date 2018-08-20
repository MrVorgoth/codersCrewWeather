let btn1 = document.getElementById('day0');
let btn2 = document.getElementById('day1');
let btn3 = document.getElementById('day2');
let btn4 = document.getElementById('day3');
let btn5 = document.getElementById('day4');


let windHour = document.getElementById('');
let windSpeed = document.getElementById('');
let windDirection = document.getElementById('');

let weatherData;

function getWeatherData() {

    let weatherDataRequest = new XMLHttpRequest();
    weatherDataRequest.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&APPID=3e24be1c9ae9884f5c4b004021a7278b');
    weatherDataRequest.onload = function () {
        weatherData = weatherDataRequest.responseText;
        weatherData = JSON.parse(weatherData);
        console.log("inside onload function"+weatherData);
    };
    weatherDataRequest.send();

    return weatherData;
}

console.log("outside block");
console.log(getWeatherData());

function renderHTML(JSON, num) {

    for (let i = num; i < num + 8; i++) {

        windHour = document.getElementById('wind' + i % 8 + '-hour');
        windSpeed = document.getElementById('wind' + i % 8 + '-speed');
        windDirection = document.getElementById('wind' + i % 8 + '-img');


        windHour.textContent = returnTime(JSON, i);
        rotateWind(windDirection, returnWindDirection(JSON, i));
        windSpeed.textContent = returnWindSpeed(JSON, i);

    }
}


function returnTime(JSON, i) {
    let date = new Date(JSON.list[i].dt_txt);
    return date.getHours() + ":00";
}

function returnWindSpeed(JSON, i) {
    return JSON.list[i].wind.speed + " km/h";
}

function returnWindDirection(JSON, i) {
    return JSON.list[i].wind.deg;
}

function rotateWind(el, deg) {
    deg -= 90;
    el.style.webkitTransform = "rotate(" + deg + "deg)";
}

btn1.onclick = function () {
    renderHTML(weatherData, 0);
};
btn2.onclick = function () {
    renderHTML(weatherData, 8);
};
btn3.onclick = function () {
    renderHTML(weatherData, 16);
};
btn4.onclick = function () {
    renderHTML(weatherData, 24);
};
btn5.onclick = function () {
    renderHTML(weatherData, 32);
};


