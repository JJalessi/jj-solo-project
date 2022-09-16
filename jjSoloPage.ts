import {BasePage} from "./basePage"
import {By} from 'selenium-webdriver'

export class interWebs extends BasePage {
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
      boxA: By = By.css('#column-a')
      boxB: By = By.css('#column-b') 

      //Inputs Page 
      inputLink: By = By.xpath('//a[@href="/inputs"]')
      numberInput: By = By.xpath('//input[@*]')

      //Hovers Page
      hoverLink: By = By.xpath('//a[@href="/hovers"]')
      user1: By = By.xpath('(//div[@class="figure"])[1]')
      nameBox: By = By.xpath('//h5[text()="name: user1"]')
      viewProfile: By = By.xpath('//a[@href="/users/1"]')

      //Context Menu Page 
      menuPage: By = By.xpath('//a[@href="/context_menu"]')
      contextBox: By = By.xpath('//div[@id="hot-spot"]')
      contextMenuText: By = By.xpath('//script[text()="You selected a context menu"]')  

      //File Upload 
      filePage: By = By.xpath('//a[@href="/upload"]')
      chooseFile: By = By.xpath('//input[@id="file-upload"]')  
      upload: By = By.css('[id="file-submit"]') 
      successBox: By = By.css('[class="dz-success-mark dz-clickable"]')  

      //Geolocation Page
      geoLink: By = By.xpath('//a[@href="/geolocation"]')
      whereBtn: By = By.xpath('//button[text()="Where am I?"]')
      googleLink: By = By.xpath('//a[@href="http://maps.google.com/?q=40.8389688,-115.7674698"]')
      
      constructor() {
          super({url: "https://the-internet.herokuapp.com/"})
      }
}