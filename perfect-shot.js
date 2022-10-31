let position = [0, 0];
const moves = ["north", "north", "west", "west", "north", "east", "north"];

// function finalPosition(moves) {
//   for (let i = 0; i < moves.length; i++) {
//     switch (moves[i]) {
//     case "east":
//       position[0] = position[0] + 1;
//       break;

//     case "west":
//       position[0] = position[0] - 1;
//       break;

//     case "north":
//       position[1] = position[1] + 1;
//       break;

//     case "south":
//       position[1] = position[1] - 1;
//       break;
//     }
//   }
//   return position;
// }

function finalPosition(moves) {
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == "east") {
      position[0] = position[0] + 1;
    } else if (moves[i] == "west") {
      position[0] = position[0] - 1;
    } else if (moves[i] == "north") {
      position[1] = position[1] + 1;
    } else if (moves[i] == "south") {
      position[1] = position[1] - 1;
    }
  }
  return position;
}

console.log(finalPosition(moves));
