import { When } from '@cucumber/cucumber'


When('I click on button {int}', async function(int) {
    await this.page.click(`button:has-text("${int}")`)
})

When('I click on operation button {string}', async function(string) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.click(`button:has-text("${string}")`)
})


