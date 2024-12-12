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
            const textLightButtonOff = this.page.locator('.status.paragraph-2')
            await expect(textLightButtonOff.first()).toContainText('OFF') 
        } else {
            const textLightButtonOn = this.page.locator('.status.paragraph-2')
            await expect(textLightButtonOn.first()).toContainText('ON') 
        }
    }
}