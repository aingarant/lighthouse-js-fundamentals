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

// function ingredientsForLoop() {
//   let output = "The banana bread ingredients are: \n\n";
//   for (let i = 0; i < ingredients.length; i++) {
//     output += "* " + ingredients[i] + "\n";
//   }
//   return output;
// }

function ingredientsWhileLoop()
{
  let i = 0;
  let output = "The banana bread ingredients are: \n\n";
  while (i < ingredients.length) {
    output += "* " + ingredients[i] + "\n";
    i++
  }
  return output;


}

// function ingredientsForLoopBackwards()
// {

// }

// function ingredientsWhileLoopBackwards()
// {

// }

// console.log(ingredientsForLoop(ingredients));
console.log(ingredientsWhileLoop(ingredients));
