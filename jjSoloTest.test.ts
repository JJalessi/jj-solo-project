import { buildPath } from 'selenium-webdriver/http'
import {interWebs} from './jjSoloPage'

const page = new interWebs() 

test("internet test ", async () => {
  await page.navigate()
  await page.getElement(page.addRemoveLink)
  await page.click(page.addRemoveLink)
  await page.click(page.addButton)
  await page.click(page.addButton)
  await page.click(page.addButton) 
  await page.click(page.deleteButton2)
  let deleteResults = await page.getElement(page.deleteButton2)
  expect(deleteResults).not.toContain("results")
 
})
test("Dropdown Page", async () => {
    await page.navigate()
    await page.getElement(page.dropdownLink) 
    await page.click(page.dropdownLink) 
    await page.click(page.dropdownBar)
    await page.click(page.option1)
    await page.click(page.dropdownBar)
    await page.click(page.option2) 
    let dropdown = await page.getText(page.dropdownBar)
    expect(dropdown).not.toContain("Please select an option Option 1 Option 2") 
}) 
test("Inputs Page", async () => {
    await page.navigate()
    await page.getElement(page.inputLink)
    await page.click(page.inputLink)
    await page.getElement(page.numberInput)
    await page.setInput(page.numberInput, '135') 
    //await page.setInput(page.numberInput, `\uE012`)
}) 
test("Drag and Drop Page", async () => {
    await page.navigate()
    await page.getElement(page.dragDropLink)
    await page.click(page.dragDropLink)
    await page.getElement(page.boxA)
    await page.getElement(page.boxB)
}) 
test("Context Menu Page", async () => {
    await page.navigate()
    await page.getElement(page.menuPage)
    await page.click(page.menuPage)
    await page.getElement(page.contextBox)
    await page.driver.quit()
}) 