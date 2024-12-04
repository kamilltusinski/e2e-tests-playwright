import {test} from '@playwright/test'
import { PageManager } from '../page-object/pageManager'

test.beforeEach( async({page}) => {
    await page.goto('/')
})

test('click on the light button', async({page}) => { 
    const pm = new PageManager(page)
    await pm.onIOTDashboardPage().clickOnTheLightButton()
    
})  