import randomData from './randomdata'
const { expect } = require('@playwright/test')

exports.RegisterPage = class RegisterPage {

//locators
    constructor(page) {
      this.page = page;
      this.registerButton = page.locator('.register')
      this.registerMessage = page.locator('#flash_notice')
      this.loginField = page.locator('#user_login')
      this.passField = page.locator('#user_password')
      this.passConfirmField = page.locator('#user_password_confirmation')
      this.fNameField = page.locator('#user_firstname')
      this.lNameField = page.locator('#user_lastname')
      this.mailField = page.locator('#user_mail')
      this.customField = page.locator('#user_custom_field_values_3')
      this.droodown = page.locator('#user_language')
    }

//Filling out the fields of the registration form
    async inputField() {
        await this.loginField.type(randomData.randomstring(10))
        await this.passField.type("password-invalide")
        await this.passConfirmField.type("password-invalide")
        await this.fNameField.type(randomData.randomstring(10))
        await this.lNameField.type(randomData.randomstring(10))
        await this.mailField.type(randomData.makeEmail())
        await this.customField.type(randomData.randomstring(10))
        await this.droodown.selectOption("uk")
    }
//expect message
    async expectMessage() {
        await expect(this.registerMessage).toContainText('Обліковий запис успішно створений.')
    }
  }