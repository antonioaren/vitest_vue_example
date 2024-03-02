<script lang="ts" setup>

import { ref } from 'vue'

const calculator = [
  ['A', 'C', '%', ' '],
  ['7', '8', '9', '/'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+']
]

let accumulate = ref('0')
let aux = ''
let operation = null
let isFirstTime = true
let isOperationResult = false

const relation = {
  '+': sum,
  '-': subtract,
  'x': multiply,
  '/': divide
}


function sum(a, b) {
  accumulate.value = (parseFloat(a) + parseFloat(b)).toString()
}

function subtract(a, b) {
  accumulate.value = (parseFloat(a) - parseFloat(b)).toString()
}

function multiply(a, b) {
  accumulate.value = (parseFloat(a) * parseFloat(b)).toString()
}

function divide(a, b) {
  if(b === '0') throw new Error('No possible to divide by 0')
  accumulate.value = (parseFloat(a) / parseFloat(b)).toString()
}

function resolveOperation() {
  if (!aux || !operation) return
  accumulate.value = relation[operation](aux, accumulate.value)
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


function handleOperation(keyup) {
  if(keyup === '+' || keyup === '-' || keyup === 'x' || keyup === '/') {
    aux = accumulate.value
    reset()
    operation = keyup
  } else if (keyup === 'A') {
    reset()
  } else if (keyup === 'C') {
    accumulate.value = accumulate.value.slice(0, -1)
  } else if (keyup === '=') {
    resolveOperation()
  }
}

function handleNumber(keyup) {
  if (keyup === ' ') return

  if (isFirstTime) {
    accumulate.value = keyup
    isFirstTime = false
    return
  }
  accumulate.value += keyup
}

function catchInput(keyup) {

  if (isNaN(keyup)) {
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
  <h1>Calculadora</h1>
  <div class="container">
    <div class="display">
      {{accumulate}}
    </div>
    <div class="row" v-for="(row, index) in calculator" :key="index">
      <button class="keyup" @click="catchInput(keyup)" v-for="(keyup, idx) in row" :key="idx">
        {{ keyup }}
      </button>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.container {
  .display {
    padding: 20px;
    border-radius: 10px;
    border: 1px solid grey;
    box-sizing: border-box;
    margin-bottom: 20px;
    width: calc(90px * 4);
    display: flex;
    justify-content: flex-end;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(4, 90px);

    .keyup {
      padding: 20px 30px;
      border-radius: 10px;
      border: 1px solid grey;
      box-sizing: border-box;
    }
  }
}

</style>