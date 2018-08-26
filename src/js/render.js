import BasicInfo from './BasicInfo.js';
import BasicInfoController from './BasicInfoController.js';


window.onload = () => {
    let basicInfoController = new BasicInfoController();
    let renderHTML = basicInfoController.renderHTML.bind(basicInfoController);
    let buttonLoadData = document.querySelector('#buttonLoadData');
    buttonLoadData.addEventListener("click",renderHTML);
}
