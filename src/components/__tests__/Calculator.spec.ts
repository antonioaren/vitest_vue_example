import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

// @ts-ignore
import Calculator from '../Calculator.vue'

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
})
