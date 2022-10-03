import { Page } from '@playwright/test'

export class GeneralPage {

    constructor(page) {
        this.page = page;
    }

    async gotoWebSite(element) {
        await this.page.goto(element)
    }

    async getElement (element) {
        return this.page.locator(element)
    }

    async fillField (element, value) {
        await this.page.locator(element).type(value)
    }

    async checkElement (element) {
        await this.page.locator(element).check()
    }

    async clickElement (element) {
        await this.page.locator(element).click()
    }
    async dropDownOptions (element, value) {
        await this.page.locator(element).selectOption(value)
    }
    async clickEnter () {
        await page.keyboard.press('Enter')
    }
}