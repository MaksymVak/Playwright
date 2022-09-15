const { test, expect } = require('@playwright/test')
const { MainPage } = require('../pageobjects/main.page')
const { RegisterPage } = require('../pageobjects/register.page')
const { AuthorizatPage } = require('../pageobjects/author.page')
test.describe.configure({ mode: 'parallel' })

test('TC-01 - Registration on the website Redmine.com', async ({page}) => {
  const mainPage = new MainPage(page)
  const registerPage = new RegisterPage(page)

  await mainPage.goto()  //1. Open site https://www.redmine.org/
  await mainPage.userRegister()  //2. Click on the "Зареєструватися"
  await registerPage.inputField() //3. Enter a random value in the fields
  await mainPage.userSubmit()  //4. Click on the "Відправити"
  await registerPage.expectMessage() //Result - Checking the text of successful registration

})

test('TC-02 - Authorization on the website Redmine.com', async ({page}) => {
  const mainPage = new MainPage(page)
  const authorizatPage = new AuthorizatPage(page)

  await mainPage.goto() //1. Open site https://www.redmine.org/
  await mainPage.userAuthorizat()  //2. Click on the "Увійти"
  await authorizatPage.authorInputField()  //3. Enter a random value in the fields
  await authorizatPage.loginSelector()  //4. Select "Залишатися в системі"
  await mainPage.userSubmit()  //5. Click on the "Вхід"
  await authorizatPage.authorExpectMessage() //Result - The message must contain "Неправильне"

})

test('TC-03 - Password recovery', async ({page}) => {
  const mainPage = new MainPage(page)
  const authorizatPage = new AuthorizatPage(page)

  await mainPage.goto() //1. Open site https://www.redmine.org/
  await mainPage.userAuthorizat()  //2. Click on the "Увійти"
  await authorizatPage.lostPassword() //3. Click on the "Забули пароль"
  await authorizatPage.lostInputEmail()  //4. Enter a random value in the field
  await mainPage.userSubmit()  //5. Click on the "Відправити"
  await authorizatPage.lossPassExpectMessage() //Result - The message must contain "Невідомий"
})

test.only('TC-04 - Testing the search', async ({page}) => {
  const mainPage = new MainPage(page)

  await mainPage.goto() //1. Open site https://www.redmine.org/
  await mainPage.searchInput()  //2. In the search field enter the word "Redmine"
  await page.keyboard.press('Enter')  //3. Click on the "Enter"
  await mainPage.newsCheck() //4. Select "Новини"
  await mainPage.userSubmit() //5. Click on the "Відправити"
  await mainPage.expectResultSearch() //Result - Search result should contain "Redmine"
})

test('TC-05 - Checking the forum', async ({page}) => {
  const mainPage = new MainPage(page)

  await mainPage.goto() //1. Open site https://www.redmine.org/
  await mainPage.enterForum() //2 Click on the "Форум"
  await mainPage.enterDiscussion() //3 Click on the "Open discussion"
  await mainPage.enterContribute()  //4 Click on the "How to contribute"
  await expect(page).toHaveTitle("How to contribute - Redmine") //Result - The page title should be "How to contribute - Redmine"
})
