let carsArray = [{}]

function carPassing(cars, speed) {

  const newCar = {
    time: Date.now(),
    speed: speed
  }

  carsArray.push(newCar)
  
  return carsArray;

}
console.log(carPassing({}, 23))
