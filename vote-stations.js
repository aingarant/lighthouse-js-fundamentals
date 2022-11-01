const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
];

function chooseStations() {
  let goodStations = [];
  for (let station of stations) {
    const venueName = station[0];
    const venueCapacity = station[1];
    const venueType = station[2];

    if (venueCapacity >= 20) {
      if (venueType === "school" || venueType === "community centre") {
        goodStations.push(venueName);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
