class BasicInfo {
    constructor() {
        this.descriptionL = [...document.querySelectorAll('basic-info-boxL basic-info-description')];
        this.postalCodeAndCity = this.descriptionL[0];
        this.weekdayAndHour = this.descriptionL[1];
        this.insoltation = this.descriptionL[2];
        this.icon = [...document.querySelectorAll('basic-info-icon')][0];
        this.temperature = [...document.querySelectorAll('basic-info-temperature')][0];

        this.descriptionR = [...document.querySelectorAll('basic-info-boxR basic-info-description')];
        this.precipitation = this.descriptionR[0];
        this.humidity = this.descriptionR[1];
        this.wind = this.descriptionR[2];
    }
}

export default BasicInfo;