"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var calculator_1 = require("../calculator");
(0, vitest_1.describe)('Calculator', function () {
    (0, vitest_1.it)('should sum two numbers', function () {
        (0, vitest_1.expect)(calculator_1.default.add(1, 2)).toBe(3);
    });
    (0, vitest_1.it)('should substract two numbers', function () {
        (0, vitest_1.expect)(calculator_1.default.subtract(2, 1)).toBe(1);
    });
    (0, vitest_1.it)('should substract integer positive and interger negative.', function () {
        (0, vitest_1.expect)(calculator_1.default.subtract(2, -1)).toBe(1);
    });
    (0, vitest_1.it)('should substract two numbers and throw error if is negative', function () {
        (0, vitest_1.expect)(function () { return calculator_1.default.subtract(5, 10); }).toThrow('Resultado negativo');
    });
    (0, vitest_1.it)('multiply positive integer numbers', function () {
        (0, vitest_1.expect)(calculator_1.default.multiply(2, 3)).toBe(6);
    });
    (0, vitest_1.it)('multiply positive float numbers', function () {
        (0, vitest_1.expect)(calculator_1.default.multiply(2.5, 4.5)).toBe(11.25);
        (0, vitest_1.expect)(calculator_1.default.multiply(2.5, 4)).toBe(10);
    });
    (0, vitest_1.it)('multiply negatives integer and float numbers', function () {
        (0, vitest_1.expect)(calculator_1.default.multiply(2, -3)).toBe(-6);
        (0, vitest_1.expect)(calculator_1.default.multiply(-2.5, 4)).toBe(-10);
        (0, vitest_1.expect)(calculator_1.default.multiply(-2, -2)).toBe(4);
    });
    (0, vitest_1.it)('divide', function () {
        (0, vitest_1.expect)(calculator_1.default.divide(6, 3)).toBe(2);
    });
    (0, vitest_1.it)('divide by zero', function () {
        (0, vitest_1.expect)(function () { return calculator_1.default.divide(6, 0); }).toThrow('Cannot divide by zero');
    });
    (0, vitest_1.it)('factorial n > 0', function () {
        (0, vitest_1.expect)(calculator_1.default.factorial(5)).toBe(120);
        (0, vitest_1.expect)(calculator_1.default.factorial(2)).toBe(2);
        (0, vitest_1.expect)(calculator_1.default.factorial(8)).toBe(40320);
    });
    (0, vitest_1.it)('factorial n = 0', function () {
        (0, vitest_1.expect)(calculator_1.default.factorial(0)).toBe(1);
    });
    (0, vitest_1.it)('factorial n < 0', function () {
        (0, vitest_1.expect)(function () { return calculator_1.default.factorial(-2); }).toThrow('Cannot factorial a negative number');
    });
});
