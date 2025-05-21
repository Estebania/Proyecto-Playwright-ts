import {Page} from '@playwright/test'
export class CommonPageMethods {
private page: Page

constructor (page: Page){
    this.page = page
}

async navegateToTheAplication (){
    await this.page.goto('https://www.saucedemo.com/v1/index.html')
}
}