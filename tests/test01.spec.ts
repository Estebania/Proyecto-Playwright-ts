import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/commob-page-methods'
import { LoginPageMethods } from '../pages/Login-page/login-page.methods'
import { LoginPageData } from '../pages/Login-page/login-page.data'

const userCredentials = LoginPageData.credentials;

test('Login', async({page})=> {
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page)
    

    await commonPageMethods.navegateToTheAplication()
    await loginPageMethods.insertUserName(userCredentials.userNames.standarUser)
    await loginPageMethods.insertUserPassword(userCredentials.password)
    await loginPageMethods.clickLoginBtn()
    await page.waitForTimeout(4000)

})