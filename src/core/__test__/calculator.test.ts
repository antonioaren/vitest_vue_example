import { describe, it, expect } from 'vitest'
import Calculator from '../calculator'

describe('Calculator', () => {
    it('add', () => {
        expect(Calculator.add(1, 2)).toBe(3)
    })
    it('substract', () => {
        expect(Calculator.substract(2, 1)).toBe(1)
    })
    it('multiply', () => {
        expect(Calculator.multiply(2, 3)).toBe(6)
    })
    it('divide', () => {
        expect(Calculator.divide(6, 3)).toBe(2)
    })
    it('divide by zero', () => {
        expect(() => Calculator.divide(6, 0)).toThrow('Cannot divide by zero')
    })
})
