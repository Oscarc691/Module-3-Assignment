// Assignment code here
const characterAmountRange = document.getElementById( 'characterAmountRange')
const characterAmountNumber = document.getElementById( 'characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolsElement =document.getElementById('includeSymbols')
const form =getElementById('checkBoxes')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumber = includeNumberElement.checked
  const includeSymbols = includeSymbolsElement.checked

  const password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols) {
  String.fromCharCode(65)
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
