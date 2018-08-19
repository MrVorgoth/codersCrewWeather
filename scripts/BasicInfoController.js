//import BasicInfo from "./BasicInfo";

class BasicInfoController {
    constructor(){
        //this.basicInfo = new BasicInfo();
        this.CONFING = {
            CITY_ID: "3081368",
            API_KEY: "760aed7e289ca1fce93475faf5a1f920",
            API_TYPES: ['weather', 'forecast'],
            FULL_API_URL: "http://api.openweathermap.org/data/2.5/weather?id=3081368&&appid=760aed7e289ca1fce93475faf5a1f920"
        }
    }
    logDataFromApi() {
        fetch(this.CONFING.FULL_API_URL)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

}
export default BasicInfoController;