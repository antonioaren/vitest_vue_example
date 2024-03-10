import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Calculator from '@components/Calculator.vue'
import { findCharacterIndex } from '@/utils/helpers'

const calculator = [
    ['A', 'C', '%', '!'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
]

describe('Calculator', () => {

    it('renders the component', () => {
        const wrapper = mount(Calculator)
        expect(wrapper.exists()).toBe(true)
    })

    it('renders the title', () => {
        const wrapper = mount(Calculator)
        expect(wrapper.find('h1').text()).toBe('Calculator')
    })

    it('renders the display', () => {
        const wrapper = mount(Calculator)
        expect(wrapper.find('input').exists()).toBe(false)
        expect(wrapper.find('.display').text()).toBe('0')
    })

    it('renders the buttons', () => {
        const wrapper = mount(Calculator)
        expect(wrapper.findAll('button').length).toBe(20)
    })

    it('renders the buttons with the correct text and order', () => {
        const wrapper = mount(Calculator)
        const buttons = wrapper.findAll('button')

        for (let i = 0; i < buttons.length; i++) {
            expect(calculator.flat()[i]).toBe(buttons.at(i).text())
        }
    })

    it('should display a number when a click a number button', async () => {
        const wrapper = mount(Calculator)
        const button = wrapper.findAll('button').at(5)
        await button.trigger('click')
        expect(wrapper.find('.display').text()).toBe(button.text())
    })

    it('when I click in number and !, should be shown n!', async () => {
        const wrapper = mount(Calculator)
        const allButtons = wrapper.findAll('button')
        const button = allButtons.at(5)
        await button.trigger('click')
        const exclamation = allButtons.at(3)
        await exclamation.trigger('click')
        expect(wrapper.find('.display').text()).toBe(button.text() + exclamation.text())
    })

    it('when I click in number and !, should be shown n! and the =, get result', async () => {
        const wrapper = mount(Calculator)
        const allButtons = wrapper.findAll('button')
        const button = allButtons.at(findCharacterIndex(allButtons, '5'))
        await button.trigger('click')
        const exclamation = allButtons.at(findCharacterIndex(allButtons, '!'))
        await exclamation.trigger('click')
        const equal = allButtons.at(findCharacterIndex(allButtons, '='))
        await equal.trigger('click')
        expect(wrapper.find('.display').text()).toBe('120')
    })
})
