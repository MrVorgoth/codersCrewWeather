const box1Night = document.getElementById("box1_night");
const box2Night = document.getElementById("box2_night");
const box3Night = document.getElementById("box3_night");
const box4Night = document.getElementById("box4_night");
const box5Night = document.getElementById("box5_night");
const box6Night = document.getElementById("box6_night");
const box7Night = document.getElementById("box7_night");

const box1Day = document.getElementById("box1_day");
const box2Day = document.getElementById("box2_day");
const box3Day = document.getElementById("box3_day");
const box4Day = document.getElementById("box4_day");
const box5Day = document.getElementById("box5_day");
const box6Day = document.getElementById("box6_day");
const box7Day = document.getElementById("box7_day");



const connect = new XMLHttpRequest();
connect.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=3081368&APPID=6d99186162ab69f549aae9f7f584c075&units=metric");
connect.onload = function() {
  const data = JSON.parse(connect.responseText);
  box1Night.innerHTML = Math.round(data.list[0].main.temp) + "&deg;C";
  box2Night.innerHTML = Math.round(data.list[8].main.temp) + "&deg;C";
  box3Night.innerHTML = Math.round(data.list[16].main.temp) + "&deg;C";
  box4Night.innerHTML = Math.round(data.list[24].main.temp) + "&deg;C";
  box5Night.innerHTML = Math.round(data.list[32].main.temp) + "&deg;C";
  box6Night.innerHTML = Math.round(data.list[0].main.temp) + "&deg;C";
  box7Night.innerHTML = Math.round(data.list[8].main.temp) + "&deg;C";

  box1Day.innerHTML = Math.round(data.list[5].main.temp) + "&deg;C";
  box2Day.innerHTML = Math.round(data.list[13].main.temp) + "&deg;C";
  box3Day.innerHTML = Math.round(data.list[21].main.temp) + "&deg;C";
  box4Day.innerHTML = Math.round(data.list[29].main.temp) + "&deg;C";
  box5Day.innerHTML = Math.round(data.list[37].main.temp) + "&deg;C";
  box6Day.innerHTML = Math.round(data.list[5].main.temp) + "&deg;C";
  box7Day.innerHTML = Math.round(data.list[7].main.temp) + "&deg;C";
};

connect.send();
