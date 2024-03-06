import { Given } from '@cucumber/cucumber'
import { chromium } from '@playwright/test'


Given('I have a calculator', async function() {
    this.browser = await chromium.launch()
    this.page = await this.browser.newPage()
    await this.page.goto('http://localhost:3000').catch((error) => {
        throw new Error(`Server down: ${error}`)
    })
})

