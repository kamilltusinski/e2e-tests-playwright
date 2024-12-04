import { Page } from '@playwright/test'
import { IOTDashboardPage } from './iOTDashboardPage'
import { NavigationPage } from './navigationPage'


export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly iOTDashboardPage: IOTDashboardPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.iOTDashboardPage = new IOTDashboardPage(this.page)
    }

    navigateTo(){
        return this.navigationPage
    }
    onIOTDashboardPage(){
        return this.iOTDashboardPage
    }

}