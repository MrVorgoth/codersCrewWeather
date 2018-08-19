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
    }
    logDataFromApi() {
        //TODO: fix problems with axios or fetch or implement an alternative solution
        axios.get(this.CONFING.FULL_API_URL)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

}
export default BasicInfoController;