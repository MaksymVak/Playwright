import { Page } from '@playwright/test'
import { GeneralPage } from '../pageobjects/Page'

//locators
const submitButton = '[type="submit"]'
const authorizatButton = '.login'
const usernameField = '#username'
const passField = '#password'
const loginSelec = '#autologin'
const lostPass = '[href="/account/lost_password"]'
const lostEmail = '#mail'

export class AuthorizatPage extends GeneralPage {

    constructor(page) {
        super(page)
    }

    async userAuthorizat() {
        await super.clickElement(authorizatButton)
    }

//Filling out the fields of the registration form

    async authorInputField(username, password) {
        await super.fillField(usernameField, username)
        await super.fillField(passField, password)
        await super.checkElement(loginSelec)
        await super.clickElement(submitButton)
    }
//Password recovery
    async lostPassword(value) {
        await super.clickElement(lostPass)
        await super.fillField(lostEmail, value)
        await super.clickElement(submitButton)
    }
  }