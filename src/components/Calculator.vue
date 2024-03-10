<script lang="ts" setup>

import { ref } from 'vue'
import Calculator from '../core/calculator.ts'


const calculator = [
    ['A', 'C', '%', '!'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
]

let accumulate = ref('0')
let aux = ''
let operation: string | null = null
let isFirstTime = true
let isOperationResult = false

interface Relation {
    '+': (a: number, b: number) => number
    '-': (a: number, b: number) => number
    'x': (a: number, b: number) => number
    '/': (a: number, b: number) => number
    '!': (a: number) => number
}

const relation: Relation = {
    '+': Calculator.add,
    '-': Calculator.subtract,
    'x': Calculator.multiply,
    '/': Calculator.divide,
    '!': Calculator.factorial,
}

function resolveOperation() {
    if (operation === '!') {
        accumulate.value = relation[operation](parseFloat(accumulate.value.split('!')[0])).toString()
        isOperationResult = true
        return
    }
    if (!aux || !operation) return
    accumulate.value = relation[operation as keyof Relation](parseFloat(aux), parseFloat(accumulate.value)).toString()
    aux = '0'
    operation = null
    isFirstTime = true
}

function reset() {
    accumulate.value = '0'
    aux = '0'
    operation = null
    isFirstTime = true
    isOperationResult = false
}

function handleOperation(keyup: string) {
    if (keyup === '+' || keyup === '-' || keyup === 'x' || keyup === '/') {
        aux = accumulate.value
        accumulate.value = '0'
        isFirstTime = true
        operation = keyup
    } else if (keyup === '!') {
        accumulate.value = accumulate.value + keyup
        operation = keyup
    } else if (keyup === 'A') {
        reset()
    } else if (keyup === 'C') {
        accumulate.value = accumulate.value.slice(0, -1)
    } else if (keyup === '=') {
        resolveOperation()
    }
}

function handleNumber(keyup: string) {
    if (keyup === ' ') return

    if (isFirstTime) {
        accumulate.value = keyup
        isFirstTime = false
        return
    }
    accumulate.value += keyup
}

function catchInput(keyup: string) {
    if (isNaN(Number(keyup))) {
        handleOperation(keyup)
    } else {
        if (isOperationResult) {
            reset()
            isOperationResult = false
        }
        handleNumber(keyup)
    }
}
</script>

<template>
    <div class="calculator">
        <h1 class="title">Calculator</h1>
        <div class="container">
            <div class="display">
                {{ accumulate }}
            </div>
            <div
                v-for="(row, index) in calculator"
                :key="index"
                class="row"
            >
                <button
                    v-for="(keyup, idx) in row"
                    :key="idx"
                    class="keyup"
                    @click="catchInput(keyup)"
                >
                    {{ keyup }}
                </button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.calculator {
    display: flex;
    flex-direction: column;
    max-width: calc(80px * 4);
    width: 100%;
    margin: 0 auto;

    .title {
        text-align: center;
    }
    .container {
        .display {
            padding: 20px;
            border-radius: 10px;
            border: 1px solid grey;
            box-sizing: border-box;
            margin-bottom: 20px;
            display: flex;
            justify-content: flex-end;
            font-size: 32px;
        }

        .row {
            display: grid;
            grid-template-columns: repeat(4, 80px);

            .keyup {
                padding: 20px 30px;
                box-sizing: border-box;
                border-radius: 10px;
                border: 1px solid grey;
            }
        }
    }

}
</style>
