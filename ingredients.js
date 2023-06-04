const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("Contents of the ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// // // Write a for loop that prints out the contents of ingredients:

console.log("Contents of the ingredients:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Contents of the ingredients:");
let i = 7;
while (i < ingredients.length && i > -1) {
  console.log(ingredients[i]);
  i--;
}


// const reversed = [...ingredients].reverse(); 
// console.log("Contents of the ingredients: " + reversed);
