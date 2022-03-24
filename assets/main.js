// 1. Use the id-selector to get your inputs' and the output element from the DOM
//for each input, i'll need to repeat the following
const inputOne = document.querySelector(`#one`); //this creates a var of the element
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);







const output = document.querySelector(`.output`); // this is the div for the output
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `This is a story about ${inputOne.value}, a ${inputTwo.value} and ${inputThree.value} person. they are absoluety terrible at ${inputFour.value} and are often caught ${inputFive.value} ${inputSix.value}.
  Their biggest enemy is ${inputSeven.value} they fight over such topics like ${inputEight.value} this makes them both ${inputNine.value} and ${inputTen.value} people.`
  console.log(madlib);// instead of logging, we need t add HTML to the output object
  output.innerHTML = madlib
}

console.log(generateTemplate);
