import {test} from '@playwright/test'
import { PageManager } from '../page-object/pageManager'

test.beforeEach( async({page}) => {
    await page.goto('/')
})

test('turns off/on the light button', async({page}) => { 
    const pm = new PageManager(page)
    await pm.onIOTDashboardPage().turnsOffOnTheLightButton()
    await pm.onIOTDashboardPage().turnsOffOnTheLightButton()
})  

test('turns off/on the roller shades button', async({page}) =>{
    const pm = new PageManager(page)
    await pm.onIOTDashboardPage().turnsOffOnTheRollerShades()
    await pm.onIOTDashboardPage().turnsOffOnTheRollerShades()

})

test('turns off/on the wireless audio button', async({page}) =>{
    const pm = new PageManager(page)
    await pm.onIOTDashboardPage().turnsOffOnTheWirelessAudio()
    await pm.onIOTDashboardPage().turnsOffOnTheWirelessAudio()
})

test('turns off/on the coffee maker button', async({page}) =>{
    const pm = new PageManager(page)
    await pm.onIOTDashboardPage().turnsOffOnTheCoffeeMaker()
    await pm.onIOTDashboardPage().turnsOffOnTheCoffeeMaker()
})