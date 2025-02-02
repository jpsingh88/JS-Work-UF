const cheese = ["Blue Cheese","Manchego","Provolone","Cheddar","Colby","Feta","Goat Cheese","Gorgonzola","Romano","Limburger","Brie","Ricota","Roquefort","Smoked Gouda"];
// First log the entire array
console.log(cheese)

//  Log "There are __ Cheeses"
let length = cheese.length
console.log(length)

 // Log if the array contains "Cheese" or "Colby" - TRUE/FALSE
 console.log(cheese.includes('Cheese'))
 console.log(cheese.includes('Colby'))

// let filterArray = cheese.filter(val => (val.cheese == "Cheese"))
// console.log(filterArray)

// figure out what the index of "Limburger" is
let indexLimburger = cheese.findIndex(val => val == "Limburger")
// function myFunction (val) {
//     return val == "Limburger"
// }
console.log("Index value of Limburger is:" + indexLimburger)
console.log ("Index Value of Limburger stored in variable: 'indexLimburger'")

// figure out what the index of "Limburger" is and store this information in a variable
const e1 = cheese.indexOf("Limburger");
console.log(e1);


// Use the previous variable to log the word "Limburger"
let el = cheese[9]
console.log (el)

// Remove "Smoked Gouda" from the array and log cheese again
let removeSmokedGouda = cheese.pop("SmokedGouda")
console.log(cheese)

// Remove "Blue Cheese" from the array and log cheese again
let removeBlueCheese = cheese.splice(0,1)
// or cheese.shift()
console.log(cheese)

// rearrange the array to be alphabetical and then log cheese again
const rearrange = cheese.sort()
console.log(cheese)

// rearrange the array to be reverse alphabetical order and then log cheese again
const reverse = cheese.reverse()
console.log(cheese)

// Add the following cheeses to the end of the array and then log cheese again: "Camembert" and "Muenster"
const addCheese = cheese.push("Camembert","Muenster")
console.log(cheese)

// add "Port de Salut" to the front of the array and then log the array
const addNewItem = cheese.unshift("Port de Salut")
console.log(cheese)

// Create a brand new array with the following types of bread and then log it
// "Rye", "Whole Wheat", "White"
let bread = ['Rye', 'Whole Wheat', 'White']
console.log(bread)

// Print cheese string with array values separated by commas.
console.log(cheese.toString())

// Create a brand new array for selected cheeses from cheeses 4 through 6(including 6) and then log it
const newCheese = cheese.copyWithin()
// Create a final new array for grilled cheese that combines the 3 breads and 3 selected cheeses. Then log it.

// Convert your grilled cheese into a stringCheese variable. Separate each item with a dash. Log it

// You received this string, convert it to an array and log the 2nd and 4th items _without_ removing them from the array
//   const items = "pickles,olives,spicy beans,clamato,japalenos,bacon"; -->