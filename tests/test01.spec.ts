import {test} from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/commob-page-methods'

test('Login', async({page})=> {
    const commonPageMethods = new CommonPageMethods(page)
    await commonPageMethods.navegateToTheAplication()
})