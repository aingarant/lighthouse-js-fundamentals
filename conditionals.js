// const raining = false;
// const cold = true;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");


// const temperature = 33;

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else if (temperature < 30) {
//   console.log("Short sleeves are fine.");
// } else {
//   console.log("Stay indoors. Risk of Heat Stroke");
// }

// console.log("Now you're ready to go outside!");


// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }

const raining  = false;
const temperature = 50;

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

raining ? console.log("it's raining") : console.log("it's not raining")