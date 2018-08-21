import BasicInfo from './BasicInfo.js';
import BasicInfoController from './BasicInfoController.js';
 
window.onload = () => {
    let basicInfoController = new BasicInfoController();
    let loadData = basicInfoController.logDataFromApi.bind(basicInfoController);
    let buttonLoadData = document.querySelector('#buttonLoadData');
    buttonLoadData.addEventListener("click",loadData);
}
