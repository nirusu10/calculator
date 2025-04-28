let a = ''
let aIsLogged = false
let b = ''
let operator = ''

const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operator-button')
const eqButton = document.querySelector('#eq')

numberButtons.forEach((button) =>
  button.addEventListener('click', (e) => {
    if (!aIsLogged) {
      a += e.target.dataset.number
      console.log('a: ' + a)
      console.log('b: ' + b)
    } else {
      b += e.target.dataset.number
      console.log('a: ' + a)
      console.log('b: ', b)
    }
  })
)

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (operator != '') {
      result = operate(operator, parseInt(a), parseInt(b))
      a = '' + result
      b = ''
      console.log(result)
    }
    operator = e.target.dataset.operator
    aIsLogged = true
    console.log('operator: ' + operator)
  })
})

eqButton.addEventListener('click', () => {
  result = operate(operator, parseInt(a), parseInt(b))
  a = '' + result
  b = ''
  operator = ''
  console.log(result)
})

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '*':
      return multiply(num1, num2)
    case '/':
      return divide(num1, num2)
    default:
      break
  }
}
