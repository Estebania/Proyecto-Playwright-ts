import {Page} from '@playwright/test'
import { LoginPageElements } from './login-page.elements'

export class LoginPageMethods {

    private page: Page
    private loginPageElemente: LoginPageElements
    constructor(page: Page){

        this.page = page
        this.loginPageElemente = new LoginPageElements(page)
    }

    async insertUserName(username: string){
        await this.loginPageElemente.textboxes.username.fill(username)

    }

     async insertUserPassword(password: string){
        await this.loginPageElemente.textboxes.password.fill(password)

    }

     async clickLoginBtn(){
        await this.loginPageElemente.buttons.login.click()

    }


}