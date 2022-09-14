import {BasePage} from './basePage'
    import {By} from 'selenium-webdriver' 

    export class SoloPage extends BasePage {
        //Add/Remove Page
        addRemoveLink: By = By.xpath('//a[@href="/add_remove_elements/"]')
        addButton: By = By.css('[onclick="addElement()"]') 
        deleteButton0: By = By.xpath('//button[text()="Delete"][0]')
        deleteButton1: By = By.xpath('//button[text()="Delete"][1]') 
        deleteButton2: By = By.xpath('//button[text()="Delete"][2]') 

        //Dropdown Page
        dropdownLink: By = By.xpath('//a[@href="/dropdown"]')
        dropdownBar: By = By.xpath('//select[@id="dropdown"]')
        option1: By = By.xpath('//option[@value="1"]') 
        option2: By = By.xpath('//option[@value="2"]')

        //Drag and Drop Page 
        dragDropLink: By = By.xpath('//a[@href="/drag_and_drop"]')
        boxA: By = By.css('[id="column-a"]')
        boxB: By = By.css('[id="column-b"]') 

        //Context Menu Page 
        menuPage: By = By.xpath('//a[@href="/context_menu"]')
        contextBox: By = By.xpath('//div[@id="hot-spot"]')
        contextMenuText: By = By.xpath('//script[text()="You selected a context menu"]')  

        //File Upload 
        filePage: By = By.xpath('//a[@href="/upload"]')
        chooseFile: By = By.xpath('//input[@id="file-upload"]')  
        upload: By = By.css('[id="file-submit"]') 
        successBox: By = By.css('[class="dz-success-mark dz-clickable"]') 


        constructor() {
            super({url: 'https://the-internet.herokuapp.com/' })
        }

    }