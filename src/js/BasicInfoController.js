import axios from 'axios';
import BasicInfo from "./BasicInfo.js";

class BasicInfoController {
    constructor(){
        this.basicInfo = new BasicInfo();
        this.CONFING = {
            CITY_ID: "3081368",
            API_KEY: "760aed7e289ca1fce93475faf5a1f920",
            API_TYPES: ['weather', 'forecast'],
            FULL_API_URL: "http://api.openweathermap.org/data/2.5/weather?id=3081368&&appid=760aed7e289ca1fce93475faf5a1f920"
        }
        this.time = {
            hours: (new Date).getHours(),
            minutes: (new Date).getMinutes()      
        }

        this.formattedTime = {
            formattedHours: (this.time.hours < 10 ? "0" : "") + this.time.hours,
            formattedMinutes: (this.time.minutes < 10 ? "0" : "") + this.time.minutes
        }
    }
    // logDataFromApi() {
    //     axios.get(this.CONFING.FULL_API_URL)
    //     .then((res) => {
    //       //log whole object
    //       console.log(res.data);

    //       //log city
    //       console.log(res.data.name);

    //       //log tempreature
    //       console.log(res.data.main["temp"]);

    //       //log pressure
    //       console.log(res.data.main["pressure"]);

    //       //log humidity
    //       console.log(res.data.main["humidity"]);

    //       //log tempreature
    //       console.log((res.data.main["temp_min"] + res.data.main["temp_max"])/2 - 273);
    //     });
    // }
    renderHTML() {
        axios.get(this.CONFING.FULL_API_URL)
            .then((res) => {
                this.basicInfo.city.innerHTML = res.data.name;
                this.basicInfo.temperature.innerHTML = ` ${Math.round(((res.data.main["temp_min"] + res.data.main["temp_max"]) / 2 - 273)*10)/10}&deg;C`;
                this.basicInfo.pressure.innerHTML = `Pressure: ${res.data.main["pressure"]} hPa`;
                this.basicInfo.humidity.innerHTML = `Humidity: ${res.data.main["humidity"]} %`;
                this.basicInfo.weatherDescription.innerHTML = res.data.weather[0]["description"];
                this.basicInfo.wind.innerHTML = `Wind: ${res.data.wind.speed} kmh`;
                this.basicInfo.currentTime.innerHTML = `${this.formattedTime.formattedHours}:${this.formattedTime.formattedMinutes}`;
            }
        )};
}
export default BasicInfoController;