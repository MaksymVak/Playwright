import { Page } from '@playwright/test'
import { GeneralPage } from '../pageobjects/Page'

//locator

      const registerButton = '.register'
      const submitButton = '[type="submit"]'
      const loginField = '#user_login'
      const passField = '#user_password'
      const passConfirmField = '#user_password_confirmation'
      const fNameField = '#user_firstname'
      const lNameField = '#user_lastname'
      const mailField = '#user_mail'
      const customField = '#user_custom_field_values_3'
      const droodown = '#user_language'

      export class RegisterPage extends GeneralPage{

    constructor(page) {
        super(page)
    }
    async userRegister() {
        await super.clickElement(registerButton)
      }

//Filling out the fields of the registration form
    async inputField(login, pass, passConfirm, fName, lName, mail, customF, country) {
        await super.fillField(loginField, login)
        await super.fillField(passField, pass)
        await super.fillField(passConfirmField, passConfirm)
        await super.fillField(fNameField, fName)
        await super.fillField(lNameField, lName)
        await super.fillField(mailField, mail)
        await super.fillField(customField, customF)
        await super.dropDownOptions(droodown, country)
        await super.clickElement(submitButton)
    }
  }