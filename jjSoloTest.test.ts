import { WebDriver, WebElement } from "selenium-webdriver";
import { Keyboard } from "selenium-webdriver/lib/input";
import { elementIsNotVisible, elementIsVisible } from "selenium-webdriver/lib/until";
import {SoloPage} from "./jjSoloPage";
const page = new SoloPage()
const fs = require ('fs') 


describe("the-internet test", () => {
    beforeEach(async () => {
        await page.navigate();
    })
    afterAll(async () => {
        await page.driver.sleep(7000)
        await page.driver.quit()
    }) 

    test("Add/Remove Page", async () => {
        await page.getElement(page.addRemoveLink)
        await page.click(page.addRemoveLink)
        await page.click(page.addButton)
        await page.click(page.addButton)
        await page.click(page.addButton) 
        await page.click(page.deleteButton2)
        //let deleteResults = await page.getElement(page.deleteButton2)
        //expect(page.deleteButton2).toBe(elementIsNotVisible)
    }) 
    test("Dropdown Page", async () => {
        await page.getElement(page.dropdownLink) 
        await page.click(page.dropdownLink) 
        await page.click(page.dropdownBar)
        await page.click(page.option1)
        await page.click(page.dropdownBar)
        await page.click(page.option2) 
        //await page.getElement(page.dropdownBar)
        //    expect(page.dropdownBar).toContain("Option2") 
    }) 
    test("Inputs Page", async () => {
        await page.getElement(page.inputLink)
        await page.click(page.inputLink)
        await page.getElement(page.numberInput)
        await page.setInput(page.numberInput, '135') 
        //How to sendKeys an up or down arrow click? 
    }) 
    test("Hovers Page", async () => {
        await page.click(page.hoverLink)
        await page.getElement(page.user1)
        //is the user1 selector wrong? how to hover? 
        await page.getElement(page.nameBox)
        await page.click(page.viewProfile)
        //should maybe fail profile page doesn't exist
    })
    test("Geolocation Page", async () => {
        await page.getElement(page.geoLink)
        await page.click(page.geoLink)
        await page.click(page.whereBtn)
        await page.click(page.googleLink)
        //screenshot
    })
    test("Drag and Drop Page", async () => {
        await page.getElement(page.dragDropLink)
        await page.click(page.dragDropLink)
        await page.getElement(page.boxA)
        await page.getElement(page.boxB)
        //don't know how to click and hold an element (and or) drag and drop
    }) 
    test("Context Menu Page", async () => {
        await page.getElement(page.menuPage)
        await page.click(page.menuPage)
        await page.getElement(page.contextBox)
        //how do you right click? also how do you verify a context menu, screenshot or getText? can you automate clicking the button in it?
    }) 
    test("File Upload Page", async () => {
        await page.getElement(page.filePage)
        await page.click(page.filePage)
        await page.click(page.chooseFile)
        //is the chooseFile selector wrong or is it even possible for selenium to recognize the file manager? 
        //can you actually automate something like this? 
    })
    //how do you automate the mouse exiting the viewport pane?
}) 
