
const currentDate = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// getDay will return us current day, inside days.slice for example if current day is Wednesday it will return us [wed, thu, fir, sat]
let fromCurrentDay = days.slice(currentDate.getDay());

// if fromCurrentDay contains less than 5 day we have to complete the missing elements to get [wed, thu, fir, sat, sun] etc it depends what current day it is
if (fromCurrentDay.length <5)
{
    let tmp = 5 - fromCurrentDay.length;
    for (let i = 0; i < tmp; i++) {
        fromCurrentDay.push(days[i]);
    }  
}

const weekDay = [
 day1 = document.getElementById("day1"),
 day2 = document.getElementById("day2"),
 day3 = document.getElementById("day3"),
 day4 = document.getElementById("day4"),
 day5 = document.getElementById("day5"),
]

weekDay.map( (day, index) =>{
    day.innerHTML = fromCurrentDay[index];
})

const box1Night = document.getElementById("box1_night");
const box2Night = document.getElementById("box2_night");
const box3Night = document.getElementById("box3_night");
const box4Night = document.getElementById("box4_night");
const box5Night = document.getElementById("box5_night");


const box1Day = document.getElementById("box1_day");
const box2Day = document.getElementById("box2_day");
const box3Day = document.getElementById("box3_day");
const box4Day = document.getElementById("box4_day");
const box5Day = document.getElementById("box5_day");

const connect = new XMLHttpRequest();
connect.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=3081368&APPID=6d99186162ab69f549aae9f7f584c075&units=metric");
connect.onload = function() {

    const data = JSON.parse(connect.responseText);
    const weatherData = [];
    for (let i = 0; i < 40; i++) {
        weatherData.push(data.list[i].main.temp)
    }

    const apiPhase = Math.round((((new Date).getHours() / 8) * 3)/2);
    let aggregatedWeatherData =[];
    let counter = 0;
    for(let i=0; i < 10; i++) {
        aggregatedWeatherData[i] = [];
        for(let j=0; j < 4; j++) {
            if(apiPhase - 1 < counter && weatherData.length > 0) {
                aggregatedWeatherData[i].push(weatherData.shift());
                counter += 1;
            } else {
                counter += 1;           
            }
        }
    }

    const averagedWeatherData = aggregatedWeatherData.map(
        (arr) => {
            if (arr.length > 0){
                return Math.round((arr.reduce((x, y) => x + y, 0)) / arr.length || 1);
            } else {
                return "--"
            }      
        }
    );

    box1Day.innerHTML = averagedWeatherData[0];
    box1Night.innerHTML = averagedWeatherData[1];
    box2Day.innerHTML = averagedWeatherData[2];
    box2Night.innerHTML = averagedWeatherData[3]; 
    box3Day.innerHTML = averagedWeatherData[4];
    box3Night.innerHTML = averagedWeatherData[5];
    box4Day.innerHTML = averagedWeatherData[6];
    box4Night.innerHTML = averagedWeatherData[7];
    box5Day.innerHTML = averagedWeatherData[8];
    box5Night.innerHTML = averagedWeatherData[9];
};

connect.send();