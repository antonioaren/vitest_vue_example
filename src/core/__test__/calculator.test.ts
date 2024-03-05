import { describe, it, expect } from 'vitest'
import Calculator from '../calculator'

describe('Calculator', () => {
    it('should sum two numbers', () => {
        expect(Calculator.add(1, 2)).toBe(3)
    })
    it('should substract two numbers', () => {
        expect(Calculator.substract(2, 1)).toBe(1)
    })

    it('should substract two numbers uno positive and another negative, and should substract as normal.', () => {
        expect(Calculator.substract(2, -1)).toBe(1)
    })

    it('should substract two numbers and throw error if is negative', () => {
        expect(() => Calculator.substract(5, 10)).toThrow('Resultado negativo')
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
