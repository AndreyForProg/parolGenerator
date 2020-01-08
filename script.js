const numberOfNum = document.getElementById('numberOfNum')
const numberOfRange = document.getElementById('numberOfRange')
const uppercase = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const symbol = document.getElementById('symbol')
console.log(symbol.checked)
const btnSub = document.querySelector('.btn')
const form = document.querySelector('.form')
const passwordDisplay = document.querySelector('.password_display')

numberOfNum.addEventListener('input', (e) => {chengeCurChar(e)})
numberOfRange.addEventListener('input', (e) => {chengeCurChar(e)})

function chengeCurChar(e) {
  let value = e.target.value
  numberOfNum.value = value
  numberOfRange.value = value
}

const LOWER_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(47, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

btnSub.addEventListener('click', (e) => {
  e.preventDefault()
  const characterAmount = numberOfNum.value
  const upper = uppercase.checked
  const num = numbers.checked
  const symv = symbol.checked
  const password = generatePassword(characterAmount, upper, num, symv)
  passwordDisplay.textContent = password
})

function generatePassword(characterAmount, upper, num, symv) {
  let charCodes = LOWER_CHAR_CODES
  if (upper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (num) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (symv) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  let array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}