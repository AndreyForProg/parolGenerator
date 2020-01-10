
const rangeValue = document.querySelector('#numberOfRange')
const numValue = document.querySelector('#numberOfCurrent')
const uppercase = document.querySelector('#uppercase')
const numbers = document.querySelector('#numbers')
const symbol = document.querySelector('#symbol')
const passwordDisplay = document.querySelector('.password_display')

rangeValue.addEventListener('input', (e) => {
  const value = e.target.value
  numValue.value = value
})
numValue.addEventListener('input', (e) => {
  const value = e.target.value
  rangeValue.value = value
})

const btn = document.querySelector('.btn')
const LOWER_CHAR_CODES = arrayNumbers(97, 122)
const UPPERCASE_CHAR_CODES = arrayNumbers(65, 90)
const NUMBER_CHAR_CODES = arrayNumbers(47, 57)
const SYMBOL_CHAR_CODES = arrayNumbers(33, 47).concat(
  arrayNumbers(58, 64)
).concat(
  arrayNumbers(91, 96)
).concat(
  arrayNumbers(123, 126)
)

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let valueFoGeneration = numValue.value
  let upper = uppercase.checked
  let num = numbers.checked
  let symb = symbol.checked
  const password = passGenerate(valueFoGeneration, upper, num, symb)
  passwordDisplay.textContent = password
})

function passGenerate(a, b, c, d) {

  let arrayLetters = LOWER_CHAR_CODES
  if (b) arrayLetters = arrayLetters.concat(UPPERCASE_CHAR_CODES)
  if (c) arrayLetters = arrayLetters.concat(NUMBER_CHAR_CODES)
  if (d) arrayLetters = arrayLetters.concat(SYMBOL_CHAR_CODES)


  let generateArray = []
  for (let i = 0; i < a; i++) {
    let letter = arrayLetters[Math.floor(Math.random() * arrayLetters.length)]
    generateArray.push(String.fromCharCode(letter))
  }
  return generateArray.join('')
}

function arrayNumbers(min, max) {
  let array = []
  for( let i = min; i < max; i++) {
    array.push(i)
  }
  return array
}