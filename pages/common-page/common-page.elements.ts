import { Page } from "@playwright/test";

export class CommonPageElements{

    private page: Page

    constructor(page: Page){
        this.page = page
    }
    
    get buttons(){
        return {
           openMenuBtn: this.page.locator('//*[@id="menu_button_container"]/div/div[3]/div/button') 
        }
    }

    get leftMenu(){
        return {
            allItems: this.page.locator('#inventory_sidebar_link'),
            about: this.page.locator('#about_sidebar_link'),
            logout: this.page.locator('#logout_sidebar_link'),
            resetAppState: this.page.locator('#reset_sidebar_link')
        }
    }
}