"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        if (a - b < 0)
            throw new Error('Resultado negativo');
        if (Math.sign(b) === -1) {
            b = Math.abs(b);
        }
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    };
    Calculator.prototype.factorial = function (n) {
        if (n === 0)
            return 1;
        if (n < 0)
            throw new Error('Cannot factorial a negative number');
        var numbersInvolved = Array.from(Array(n).keys());
        return numbersInvolved.reduce(function (acc, curr) { return acc * (curr + 1); }, 1);
    };
    return Calculator;
}());
exports.default = new Calculator();
