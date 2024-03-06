import { Then } from '@cucumber/cucumber'
import assert from 'assert'


Then('I will have as a result {int}', async function(int) {
    const result = await this.page.innerText('.display')
    assert.strictEqual(Number(result), int)
})


