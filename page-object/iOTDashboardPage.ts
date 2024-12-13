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
}