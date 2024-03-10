import { describe, it, expect } from 'vitest'
import Calculator from '../calculator'

describe('Calculator', () => {
  it('should sum two numbers', () => {
    expect(Calculator.add(1, 2)).toBe(3)
  })
  it('should substract two numbers', () => {
    expect(Calculator.subtract(2, 1)).toBe(1)
  })

  it('should substract integer positive and interger negative.', () => {
    expect(Calculator.subtract(2, -1)).toBe(1)
  })

  it('should substract two numbers and throw error if is negative', () => {
    expect(() => Calculator.subtract(5, 10)).toThrow('Resultado negativo')
  })

  it('multiply positive integer numbers', () => {
    expect(Calculator.multiply(2, 3)).toBe(6)
  })
  it('multiply positive float numbers', () => {
    expect(Calculator.multiply(2.5, 4.5)).toBe(11.25)
    expect(Calculator.multiply(2.5, 4)).toBe(10)
  })
  it('multiply negatives integer and float numbers', () => {
    expect(Calculator.multiply(2, -3)).toBe(-6)
    expect(Calculator.multiply(-2.5, 4)).toBe(-10)
    expect(Calculator.multiply(-2, -2)).toBe(4)
  })

  it('divide', () => {
    expect(Calculator.divide(6, 3)).toBe(2)
  })
  it('divide by zero', () => {
    expect(() => Calculator.divide(6, 0)).toThrow('Cannot divide by zero')
  })
  it('factorial n > 0', () => {
    expect(Calculator.factorial(5)).toBe(120)
    expect(Calculator.factorial(2)).toBe(2)
    expect(Calculator.factorial(8)).toBe(40320)
  })
  it('factorial n = 0', () => {
    expect(Calculator.factorial(0)).toBe(1)
  })
  it('factorial n < 0', () => {
    expect(() => Calculator.factorial(-2)).toThrow('Cannot factorial a negative number')
  })
})
