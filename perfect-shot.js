// const moves = ["north", "north", "west", "west", "north", "east", "north"];

// function finalPosition(moves) {
//   let position = [0, 0];
//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i] == "east") {
//       position[0] = position[0] + 1;
//     } else if (moves[i] == "west") {
//       position[0] = position[0] - 1;
//     } else if (moves[i] == "north") {
//       position[1] = position[1] + 1;
//     } else if (moves[i] == "south") {
//       position[1] = position[1] - 1;
//     }
//   }
//   return position;
// }

// console.log(finalPosition(moves));



const moves = ["north", "north", "west", "west", "north", "east", "north"];

function finalPosition(moves) {
  let position = [0, 0];
  for (move of moves) {
    if (move === "east") {
      ++position[0];
    }
    if (move === "west") {
      --position[0];
    }
    if (move === "north") {
      ++position[1];
    }
    if (move === "south") {
      --position[1];
    }
  }
  return position;
}

console.log(finalPosition(moves));
