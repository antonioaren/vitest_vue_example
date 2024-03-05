class Calculator {
    public add(a: number, b: number): number {
        return a + b
    }

    public substract(a: number, b: number): number {
        if (a - b < 0) throw new Error('Resultado negativo')
        if(Math.sign(b) === -1) {
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
}

export default new Calculator()
