import randomData from './randomdata'
const { expect } = require('@playwright/test')

exports.AuthorizatPage = class AuthorizatPage {

//locators
    constructor(page) {
      this.page = page;
      this.usernameField = page.locator('#username')
      this.passField = page.locator('#password')
      this.loginSelec = page.locator('#autologin')
      this.authorMessage = page.locator('#flash_error')
      this.lostPass = page.locator('[href="/account/lost_password"]')
      this.lostEmail = page.locator('#mail')
    }

//Filling out the fields of the registration form
    async authorInputField() {
        await this.usernameField.type(randomData.makeEmail())
        await this.passField.type(randomData.randomstring(10))
    }
    async loginSelector() {
        await this.loginSelec.check()
    }
//Password recovery
    async lostPassword() {
        await this.lostPass.click()
    }
    async lostInputEmail() {
        await this.lostEmail.type(randomData.makeEmail())
    }
//expect message
    async authorExpectMessage() {
        await expect(this.authorMessage).toContainText('Неправильне')
    }
    async lossPassExpectMessage() {
        await expect(this.authorMessage).toContainText('Невідомий')
    }
  }