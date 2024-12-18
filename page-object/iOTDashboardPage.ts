import { Page, expect } from '@playwright/test'

export class IOTDashboardPage  {

    readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    /**
     * This method turns off/on the light button and checks if the text equals OFF or ON
     */
    async turnsOffOnTheLightButton() {
       await this.turnsOffOnButton('Light')
    }

    /**
     * This method turns off/on the roller shades button and checks if the text equals OFF or ON
     */
    async turnsOffOnTheRollerShades() {
        await this.turnsOffOnButton('Roller Shades')
    }

    /**
     * This method turns off/on the wireless audio button and checks if the text equels OFF or ON
     */
    async turnsOffOnTheWirelessAudio(){
        await this.turnsOffOnButton('Wireless Audio')
    }

      /**
     * This method turns off/on the coffee maker button and checks if the text equels OFF or ON
     */
      async turnsOffOnTheCoffeeMaker(){
        await this.turnsOffOnButton('Coffee Maker')
    }

     /**
     * This method turns off/on the button on the page and checks if the text equls OFF or ON
     * @param buttonName name of the button
     */
    private async turnsOffOnButton(buttonName:string){
        const offOnButton = this.page.locator('nb-card', {hasText:buttonName});
        await offOnButton.click();
        const buttonStatus = this.page.locator('nb-card.off', {hasText:buttonName})
        if(await buttonStatus.isVisible()){
            const textButtonOff = offOnButton.locator('.status.paragraph-2')
            await expect(textButtonOff).toContainText('OFF') 
        } else {
            const textButtonOn = offOnButton.locator('.status.paragraph-2')
            await expect(textButtonOn).toContainText('ON') 
        }
    }

    /**
     * This method changes the temperature to 30 degree Celsius with the slider
     */
    async changeTheTemperatureWithTheSlider(){
        const temperatureBox = this.page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
        await temperatureBox.scrollIntoViewIfNeeded()
        const boundingBox = await temperatureBox.boundingBox()
        const x = boundingBox.x + boundingBox.width / 2
        const y = boundingBox.y + boundingBox.height / 2
        await this.page.mouse.move(x,y)
        await this.page.mouse.down()
        await this.page.mouse.move(x + 100, y)
        await this.page.mouse.move(x + 100, y + 100)
        await this.page.mouse.up()
        await expect(temperatureBox).toContainText('30')

    }

    /**
     * This method changes the humidity to 50% with the slider 
     */
    async changeTheHumidityWithTheSlider() {
        const humidityTab = this.page.locator('nb-card li .ng-star-inserted', {hasText:"Humidity"})
        await humidityTab.click()
        const humidityBox = this.page.locator('[tabtitle="Humidity"] ngx-temperature-dragger')
        await humidityBox.scrollIntoViewIfNeeded()
        const boundingBox = await humidityBox.boundingBox()
        const x = boundingBox.x + boundingBox.width / 2
        const y = boundingBox.y + boundingBox.height / 2
        await this.page.mouse.move(x,y)
        await this.page.mouse.down()
        await this.page.mouse.move(x, y - 100)
        await this.page.mouse.up()
        await expect(humidityBox).toContainText('50')
    }
}