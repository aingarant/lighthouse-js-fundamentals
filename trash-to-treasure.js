const garbage = {
  waste: 4,
  recycling: 3,
  compost: 5
}

function smartGarbage(trash, bins) {
  if (trash === 'recycling') {
    bins.recycling = bins.recycling + 1
  }
  if (trash === 'waste') {
    bins.waste = bins.waste + 1
  }
  if (trash === 'compost') {
    bins.compost = bins.compost + 1
  }
  return bins;

}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))