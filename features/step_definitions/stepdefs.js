
import assert from 'assert'
import { Given, When, Then } from '@cucumber/cucumber'
import { chromium } from '@playwright/test'

Given('I have a calculator', async function() {
     this.browser = await chromium.launch();
     this.page = await this.browser.newPage();
     await this.page.goto('http://localhost:3000').catch((error) => {
        throw new Error(`Server down: ${error}`);
     });
})

When('I click on button {int}', async function(int) {
    await this.page.click(`button:has-text("${int}")`);
})

When('I click on operation button {string}', async function(string) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.click(`button:has-text("${string}")`);
})

Then('I will have as a result {int}', async function(int) {
    // Then('I will have as a result {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    const result = await this.page.innerText('.display')
    assert.strictEqual(Number(result), int)
})


