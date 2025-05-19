import {Page} from '@playwright/test'

export class loginPageElements {
    private page: Page

    constructor (page: Page){
        this.page = page
    }

    get textboxes(){

        return {
            username: this.page.locator('#user-name'),
            password: this.page.locator('#password')
        }
    }

    get button(){
        return {
            login: this.page.locator('login-button')
        }
    }
}