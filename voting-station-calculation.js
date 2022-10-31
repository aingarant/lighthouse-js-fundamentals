let goodStations = [];

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

// const chooseStations = () => {
//   stations.map((station) => {
//     if (station[1] > 19 && station[2] != "restaurant") {
//       goodStations.push(station[0]);
//     }
//   });
//   console.log(goodStations);
// };

function chooseStations() {
  for (let station of stations) {
    if (station[1] > 19 && station[2] != "restaurant") {
      goodStations.push(station[0]);
    }
  }
  console.log(goodStations);
}

chooseStations(stations);