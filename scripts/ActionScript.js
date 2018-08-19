import BasicInfo from './BasicInfo.js';
import BasicInfoController from './BasicInfoController.js'

window.onload = () => {
    //let basicInfo = new BasicInfo();
    let basicInfoController = new BasicInfoController();
    basicInfoController.logDataFromApi();
};