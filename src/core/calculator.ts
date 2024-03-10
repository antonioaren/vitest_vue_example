class Calculator {
    public add(a: number, b: number): number {
        return a + b
    }

    public subtract(a: number, b: number): number {
        if (a - b < 0) throw new Error('Resultado negativo')
        if (Math.sign(b) === -1) {
            b = Math.abs(b)
        }
        return a - b
    }

    public multiply(a: number, b: number): number {
        return a * b
    }

    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero')
        }
        return a / b
    }

    public factorial(n: number): number {
        if (n === 0) return 1
        if (n < 0) throw new Error('Cannot factorial a negative number')

        const numbersInvolved = Array.from(Array(n).keys())
        return numbersInvolved.reduce((acc, curr) => acc * (curr + 1), 1)
    }
}

export default new Calculator()
