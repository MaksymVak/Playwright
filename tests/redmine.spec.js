const { test, expect } = require('@playwright/test')
import randomData from '../helper/randomdata'
import { MainPage } from '../pageobjects/main.page'
import { AuthorizatPage } from '../pageobjects/author.page'
import { GeneralPage }  from '../pageobjects/Page'
import { RegisterPage } from '../pageobjects/register.page'

const locatorRegistrMessage = '#flash_notice'
const locatorAutorMessage = '#flash_error'
const searchResult = '.news > a'

test.describe.configure({ mode: 'parallel' })

test.beforeEach(async ({page}) => {
  const generalPage = new GeneralPage(page)
  await generalPage.gotoWebSite('https://www.redmine.org/')
})

test('TC-01 - Registration on the website Redmine.com', async ({page}) => {
  const registerPage = new RegisterPage(page)
  
  await registerPage.userRegister()
  await registerPage.inputField(randomData.randomstring(10), "password-invalide", "password-invalide", randomData.randomstring(10), randomData.randomstring(10), randomData.makeEmail(), randomData.randomstring(10), "uk")
  await expect(page.locator(locatorRegistrMessage)).toContainText('Обліковий запис успішно створений.')

})

test('TC-02 - Authorization on the website Redmine.com', async ({page}) => {
  const authorizatPage = new AuthorizatPage(page)

  await authorizatPage.userAuthorizat()
  await authorizatPage.authorInputField(randomData.randomstring(10), randomData.randomstring(10))
  await expect(page.locator(locatorAutorMessage)).toContainText('Неправильне')

})

test('TC-03 - Password recovery', async ({page}) => {
  const authorizatPage = new AuthorizatPage(page)

  await authorizatPage.userAuthorizat()
  await authorizatPage.lostPassword(randomData.makeEmail())
  await expect(page.locator(locatorAutorMessage)).toContainText('Невідомий')
})

test('TC-04 - Testing the search', async ({page}) => {
  const mainPage = new MainPage(page)

  await mainPage.searchInput("Redmine")
  await page.keyboard.press('Enter')
  await mainPage.newsCheck()
  await expect(page.locator(searchResult)).toContainText(['Redmine'])
})

test('TC-05 - Checking the forum', async ({page}) => {
  const mainPage = new MainPage(page)

  await mainPage.forumDiscussionContribute()
  await expect(page).toHaveTitle("How to contribute - Redmine")
})
