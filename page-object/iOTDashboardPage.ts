import { Page, expect } from '@playwright/test'

export class IOTDashboardPage  {

    readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    async clickOnTheLightButton() {
        const lightOnOffButton = this.page.locator('nb-card', {hasText:"Light"});
        await lightOnOffButton.click();
        const textLightButton = this.page.locator('.status.paragraph-2')
        await expect(textLightButton.first()).toContainText('OFF')
    }
}