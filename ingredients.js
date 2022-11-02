const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// function ingredientsForLoop(ingredients) {
//   let output = "The banana bread ingredients are: \n\n";
//   for (let i = 0; i < ingredients.length; i++) {
//     output += "* " + ingredients[i] + "\n";
//   }
//   return output;
// }

// function ingredientsWhileLoop(ingredients) {
//   let i = 0;
//   let output = "The banana bread ingredients are: \n\n";
//   while (i < ingredients.length) {
//     output += "* " + ingredients[i] + "\n";
//     i++
//   }
//   return output;
// }

// function ingredientsForLoopBackwards(ingredients) {
//   let output = "The banana bread ingredients are: \n\n";
//   for (let i = ingredients.length - 1; i >= 0; i--) {
//     output += "* " + ingredients[i] + "\n";
//   }
//   return output;
// }


function ingredientsWhileLoopBackwards(ingredients) {
  let output = "The banana bread ingredients are: \n\n";
  let i = ingredients.length - 1;
  while (i >= 0) {
    output += "* " + ingredients[i] + "\n";
    i--
  }
  return output;
}

// console.log(ingredientsForLoop(ingredients));
// console.log(ingredientsWhileLoop(ingredients));
// console.log(ingredientsForLoopBackwards(ingredients));
console.log(ingredientsWhileLoopBackwards(ingredients));
