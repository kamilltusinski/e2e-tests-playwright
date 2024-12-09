import { Page, expect } from '@playwright/test'

export class IOTDashboardPage  {

    readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    /**
     * This is a function which clicks on the light button and checks if the text if OFF
     */
    async clickOnTheLightButton() {
        const lightOnOffButton = this.page.locator('nb-card', {hasText:"Light"});
        await lightOnOffButton.click();
        const textLightButton = this.page.locator('.status.paragraph-2')
        await expect(textLightButton.first()).toContainText('OFF')
    }
}