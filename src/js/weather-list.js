
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

const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const day4 = document.getElementById('day4');
const day5 = document.getElementById('day5');

const weekDay = [day1, day2, day3, day4, day5];

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

    //aggregates and avergages tempreature for 5 days and nights out of 40 datapoints
    const tempreatureData = [];
    for (let i = 0; i < 40; i++) {
        tempreatureData.push(data.list[i].main.temp)
    }
    const apiPhase = Math.round((((new Date).getHours() / 8) * 3)/2);
    let aggregatedtempreatureData =[];
    let counter = 0;
    for(let i=0; i < 10; i++) {
        aggregatedtempreatureData[i] = [];
        for(let j=0; j < 4; j++) {
            if(apiPhase - 1 < counter && tempreatureData.length > 0) {
                aggregatedtempreatureData[i].push(tempreatureData.shift());
                counter += 1;
            } else {
                counter += 1;
            }
        }
    }
    const averagedtempreatureData = aggregatedtempreatureData.map(
        (arr) => {
            if (arr.length > 0){
                return Math.round((arr.reduce((x, y) => x + y, 0)) / arr.length || 1);
            } else {
                return "--"
            }
        }
    );

    //decides about icon to assign for 5 days out of 40 datapoints
    let iconData = [];
    for (let i = 0; i < 40; i++) {
        iconData.push(data.list[i]["weather"][0]["icon"])
    }

    let aggregatedIconData = [];
    let iconDataCounter = 0;
    for(let i = 0; i < 5; i++) {
        aggregatedIconData[i] = [];
        if(i === 0 && iconData[iconDataCounter].includes('n')) {
            while (iconData[iconDataCounter].includes('n')) {
                iconDataCounter += 1;
            }
        } else {
            while(iconData[iconDataCounter].includes('n')) {
                iconDataCounter += 1;
            }
            while(iconData[iconDataCounter].includes('d')) {
                aggregatedIconData[i].push(iconData[iconDataCounter]);
                iconDataCounter += 1;
            }
        }
    }

    box1Day.innerHTML = averagedtempreatureData[0];
    box1Night.innerHTML = averagedtempreatureData[1];
    box2Day.innerHTML = averagedtempreatureData[2];
    box2Night.innerHTML = averagedtempreatureData[3];
    box3Day.innerHTML = averagedtempreatureData[4];
    box3Night.innerHTML = averagedtempreatureData[5];
    box4Day.innerHTML = averagedtempreatureData[6];
    box4Night.innerHTML = averagedtempreatureData[7];
    box5Day.innerHTML = averagedtempreatureData[8];
    box5Night.innerHTML = averagedtempreatureData[9];
};

connect.send();