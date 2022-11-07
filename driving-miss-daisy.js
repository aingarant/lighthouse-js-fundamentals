function carPassing(cars, speed) {
  let carsArray = []

  const newCar = {
    time: Date.now(),
    speed: speed
  }

  carsArray.push(newCar)

  return carsArray;

}
console.log(carPassing({}, 23))
console.log(carPassing({}, 43))
console.log(carPassing({}, 65))
console.log(carPassing({}, 38))
