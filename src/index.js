

var currentDate = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


console.log(days[currentDate.getDay()]);



// getDay will return us current day, inside days.slice for example if current day is Wednesday it will return us [wed, thu, fir, sat]
let fromCurrentDay = days.slice(currentDate.getDay());


// if fromCurrentDay contains less than 5 day we have to complete the missing elements to get [wed, thu, fir, sat, sun] etc it depends what current day it is
if (fromCurrentDay.length <5)
{
    let tmp = 5 - fromCurrentDay.length;
    console.log(tmp);

    for (let i = 0; i < tmp; i++) {

        fromCurrentDay.push(days[i]);
    }
    console.log(fromCurrentDay);
    
}



const weekDay = [
 day1 = document.getElementById("day1"),
 day2 = document.getElementById("day2"),
 day3 = document.getElementById("day3"),
 day4 = document.getElementById("day4"),
 day5 = document.getElementById("day5"),
]


weekDay.map( (day, index) =>{
    console.log(index);
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
    console.log(data.list);


    box1Night.innerHTML = Math.round(data.list[0].main.temp) + "&deg;C";
    box2Night.innerHTML = Math.round(data.list[8].main.temp) + "&deg;C";
    console.log(data.list[16].main.temp);
    box3Night.innerHTML = Math.round(data.list[16].main.temp) + "&deg;C";
    box4Night.innerHTML = Math.round(data.list[24].main.temp) + "&deg;C";
    box5Night.innerHTML = Math.round(data.list[32].main.temp) + "&deg;C";


    box1Day.innerHTML = Math.round(data.list[5].main.temp) + "&deg;C";
    box2Day.innerHTML = Math.round(data.list[13].main.temp) + "&deg;C";
    box3Day.innerHTML = Math.round(data.list[21].main.temp) + "&deg;C";
    box4Day.innerHTML = Math.round(data.list[29].main.temp) + "&deg;C";
    box5Day.innerHTML = Math.round(data.list[37].main.temp) + "&deg;C";

};





connect.send();