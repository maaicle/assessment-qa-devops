
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clickign the Draw button displays the div with id = "choices"', async () => {
    const draw = await driver.findElement(By.id('draw'));
    draw.click();
    const choices = await driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
})

test('Check that clicking an “Add to Duo” button displays the div with id = “player-id”', async () => {
    const draw = await driver.findElement(By.id('draw'));
    draw.click();

    await driver.sleep(2000);

    const botBtn = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
    const displayed = await botBtn.isDisplayed();
    expect(displayed).toBe(true);
})