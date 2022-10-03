import { Page } from '@playwright/test'
import { GeneralPage } from '../pageobjects/Page'

//locators

const submitButton = '[type="submit"]'
const searchField = '#q'
const newsCheckbox = '#news'
const forumButton = '[href="/projects/redmine/boards"]'
const discussionBoards = '[href="/projects/redmine/boards/1"]'
const contributeTopics = '[href="/boards/1/topics/4325"]'

export class MainPage extends GeneralPage{
    constructor(page) {
      super(page)
    }
  
    async searchInput(value) {
      await super.fillField(searchField, value)
    }
    async newsCheck() {
      await super.checkElement(newsCheckbox)
      await super.clickElement(submitButton)
    }
    //Forum page
    async forumDiscussionContribute() {
      await super.clickElement(forumButton)
      await super.clickElement(discussionBoards)
      await super.clickElement(contributeTopics)
    }
  }