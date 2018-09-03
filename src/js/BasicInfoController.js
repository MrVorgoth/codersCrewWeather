import axios from 'axios';
import BasicInfo from "./BasicInfo.js";

class BasicInfoController {
    constructor(){
        this.basicInfo = new BasicInfo();
        this.CONFING = {
            CITY_ID: "3081368",
            API_KEY: "760aed7e289ca1fce93475faf5a1f920",
            API_TYPES: ['weather', 'forecast'],
            FULL_API_URL: "https://api.openweathermap.org/data/2.5/weather?id=3081368&&appid=760aed7e289ca1fce93475faf5a1f920"
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
                this.basicInfo.icon.src = `https://openweathermap.org/img/w/${res.data.weather[0]["icon"]}.png`;
                this.basicInfo.temperatureMin.innerHTML = `Temp min: ${Math.round(((res.data.main["temp_min"] - 273) * 10) / 10)} &deg;C`;
                this.basicInfo.temperatureMax.innerHTML = `Temp max: ${Math.round(((res.data.main["temp_max"] - 273) * 10) / 10)} &deg;C`;
            }
        )};
}
export default BasicInfoController;