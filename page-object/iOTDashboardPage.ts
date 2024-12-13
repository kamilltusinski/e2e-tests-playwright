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
        const lightOffOnButton = this.page.locator('nb-card', {hasText:"Light"});
        await lightOffOnButton.click();
        const buttonStatus = this.page.locator('nb-card.off', {hasText:"Light"})
        if(await buttonStatus.isVisible()){
            const textLightButtonOff = lightOffOnButton.locator('.status.paragraph-2')
            await expect(textLightButtonOff).toContainText('OFF') 
        } else {
            const textLightButtonOn = lightOffOnButton.locator('.status.paragraph-2')
            await expect(textLightButtonOn).toContainText('ON') 
        }
    }

    /**
     * This method turns off/on the roller shades button and checks if the text equals OFF or ON
     */
    async turnsOffOnTheRollerShades() {
        const rollerShadesOffOnButton = this.page.locator('nb-card', {hasText:"Roller Shades"})
        await rollerShadesOffOnButton.click()
        const buttonStatus = this.page.locator('nb-card.off', {hasText:"Roller Shades"})
        if(await buttonStatus.isVisible()) {
            const textRollerShadesButtonOff = rollerShadesOffOnButton.locator('.status.paragraph-2')
            await expect(textRollerShadesButtonOff).toContainText('OFF')
        } else {
            const textRollerShadesButtonOn = rollerShadesOffOnButton.locator('.status.paragraph-2')
            await expect(textRollerShadesButtonOn).toContainText('ON')
        }
    }

    /**
     * This method turns off/on the wireless audio button and checks if the text equels OFF or ON
     */
    async turnsOffOnTheWirelessAudio(){
        const wirelessAudioOffOnButton = await this.page.locator('nb-card',{hasText:"Wireless Audio"})
        await wirelessAudioOffOnButton.click()
        const buttonStatus = this.page.locator('nb-card.off',{hasText:"Wireless Audio"})
        if(await buttonStatus.isVisible()){
            const textWirelessAudioButtonOff = wirelessAudioOffOnButton.locator('.status.paragraph-2')
            await expect(textWirelessAudioButtonOff).toContainText('OFF')
        } else {
            const textWirelessAudioButtonOn = wirelessAudioOffOnButton.locator('.status.paragraph-2')
            await expect(textWirelessAudioButtonOn).toContainText('ON')
        }
    }

      /**
     * This method turns off/on the coffee maker button and checks if the text equels OFF or ON
     */
      async turnsOffOnTheCoffeeMaker(){
        const coffeeMakerOffOnButton = await this.page.locator('nb-card',{hasText:"Coffee Maker"})
        await coffeeMakerOffOnButton.click()
        const buttonStatus = this.page.locator('nb-card.off',{hasText:"Coffee Maker"})
        if(await buttonStatus.isVisible()){
            const textCoffeeMakerButtonOff = coffeeMakerOffOnButton.locator('.status.paragraph-2')
            await expect(textCoffeeMakerButtonOff).toContainText('OFF')
        } else {
            const textCoffeeMakerButtonOn = coffeeMakerOffOnButton.locator('.status.paragraph-2')
            await expect(textCoffeeMakerButtonOn).toContainText('ON')
        }
    }
}