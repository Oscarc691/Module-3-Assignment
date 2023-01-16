// Assignment code here
const characterAmountRange = document.getElementById( 'characterAmountRange')
const characterAmountNumber = document.getElementById( 'characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolsElement =document.getElementById('includeSymbols')
const form =document.getElementById('checkBoxes')
const passwrod = document.getElementById('password')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126)
)




characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumber = includeNumberElement.checked
  const includeSymbols = includeSymbolsElement.checked

  const password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols)
  password.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols) {
  String.fromCharCode(65)
  let charCodes = LOWERCASE_CHAR_CODES
  if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacter =[]
  for (let i =0; i< characterAmount, i++) {
    const characteCode = charCodes[Math.floor(Math.random() * characterAmount)]
      passwordCharacter.push(String.fromCharCode(characterCodes))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low <= high; i++) {
    arrayFromLowToHigh.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value

  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
