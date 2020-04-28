// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowerAlphabet = "abdcefghijklmnopqrstuvwxyz".split("");
  var upperAlphabet = "abdcefghijklmnopqrstuvwxyz".toUpperCase().split("");
  console.log(lowerAlphabet);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var button = document.querySelector("#password");
  passwordText.value = password;
 console.log(password);

  var myNumber = "1234567890".split("");
  console,log(myNumber);

  
}


  var myString = "";
  for (let index = 0; index < 10; index++) {
    var currentRandomIndex = Math.floor(Math.random()*lowerAlphabet.length);
        myString = myString + lowerAlphabet[currentRandomIndex];
  }
  console.log(myString);

  var myString = "";
  for (let index = 0; index < 10; index++) {
    var currentRandomIndex = Math.floor(Math.random()*upperAlphabet.length);
        myString = myString + upperAlphabet[currentRandomIndex];
  }
  console.log(myString);


var myString = "";
  for (let index = 0; index < 10; index++) {
    var currentRandomIndex = Math.floor(Math.random()*myNumber.length);
        myString = myString + myNumber[currentRandomIndex];
  }
  console.log(myString);

  var myString = "";
  for (let index = 0; index < 10; index++) {
    var currentRandomIndex = Math.floor(Math.random()*lowerAlphabet.length);
        myString = myString + lowerAlphabet[currentRandomIndex];
  }
  console.log(myString);



button.onclick = function(){

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); }
