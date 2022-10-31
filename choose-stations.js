let goodStations = [];

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];


// function #1
function chooseStations(stations) {
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] > 19) {
      goodStations.push(stations[i][0]);
    }
  }
  console.log(goodStations);
}


// function #2, using map.
// const chooseStations = (stations) => {
//   stations.map((station) => {
//     if (station[1] > 19) {
//       goodStations.push(station[0]);
//     }
//   });
//   console.log(goodStations);
// };



// function #3
// function chooseStations(stations) {
//   for (station of stations) {
//     if (station[1] > 19) {
//       goodStations.push(station[0]);
//     }
//   }
//   console.log(goodStations);
// }

chooseStations(stations);
