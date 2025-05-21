import {Page} from '@playwright/test'
import { CommonPageElements } from './common-page.elements'
export class CommonPageMethods {
private page: Page
private commonPageElements: CommonPageElements

constructor (page: Page){
    this.page = page
    this.commonPageElements = new CommonPageElements(page)
}

async navegateToTheAplication (){
    await this.page.goto('https://www.saucedemo.com/v1/index.html')
}

async openMenu(){
    await this.commonPageElements.buttons.openMenuBtn.click()
}

async clickAllItemsOption(){
    await this.commonPageElements.leftMenu.allItems.click()
}

async clickAboutOption(){
    await this.commonPageElements.leftMenu.about.click()
}

async clickLogoutOption(){
    await this.commonPageElements.leftMenu.logout.click()
}

async clickRestAppStateOption(){
    await this.commonPageElements.leftMenu.logout.click()
}
}