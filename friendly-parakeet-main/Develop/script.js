// Assignment code here
const characterAmountRange = document.getElementById( 'characterAmountRange')
const characterAmountNumber = document.getElementById( 'characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumberElement = document.getElementById('includeNumbers')
const includeSymbolsElement =document.getElementById('includeSymbols')
const form = document.getElementById('checkboxes')
const password = document.getElementById('password')
/*I had to concat everything seperately according to the chart so that it would read the correct digit.*/ 
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126)
)
/*  I had to do multiple concats for the symbols bevcause on the cart they are spread out so i couldnt just put one. */



characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
/*i put e as the mouse event and had it prevent the screen from*/
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumber = includeNumberElement.checked
  const includeSymbols = includeSymbolsElement.checked

  password.innerText = generatePassword(
    characterAmount, 
    includeUppercase, 
    includeNumber, 
    includeSymbols
    )
})

function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols) {
  String.fromCharCode(65)
  /*using a charcode is waaay cleaner than putting every digit individually*/
  let charCodes = LOWERCASE_CHAR_CODES
  if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value

  
}
