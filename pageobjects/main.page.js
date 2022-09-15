const { expect } = require('@playwright/test')

exports.MainPage = class MainPage {

//locators
    constructor(page) {
      this.page = page;
      this.registerButton = page.locator('.register')
      this.submitButton = page.locator('[type="submit"]')
      this.authorizatButton = page.locator('.login')
      this.searchField = page.locator('#q')
      this.newsCheckbox = page.locator('#news')
      this.searchResult = page.locator('.news > a')
      this.forumButton = page.locator('[href="/projects/redmine/boards"]')
      this.discussionBoards = page.locator('[href="/projects/redmine/boards/1"]')
      this.contributeTopics = page.locator('[href="/boards/1/topics/4325"]')
    }
  
    async goto() {
      await this.page.goto('https://www.redmine.org/') //Main page
    }
  
    async userRegister() {
      await this.registerButton.click() //Register button
    }
    async userSubmit() {
      await this.submitButton.click() //Login/Confirm button
    }
    async userAuthorizat() {
      await this.authorizatButton.click() //Authorization button
    }
    async searchInput() {
      await this.searchField.type("Redmine") //In the search field enter the word "Redmine"
    }
    async newsCheck() {
      await this.newsCheckbox.check() //Switch
    }
    //Forum page
    async enterForum() {
      await this.forumButton.click() //Go to the forum
    }
    async enterDiscussion() {
      await this.discussionBoards.click()
    }
    async enterContribute() {
      await this.contributeTopics.click()
    }

//Expext result search
    async expectResultSearch() {
      await expect(this.searchResult).toContainText(['Redmine'])
    }
  }