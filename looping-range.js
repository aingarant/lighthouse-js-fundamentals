function range(start, end, step) {
  let output = [];

  if (!Number.isInteger(start) || !Number.isInteger(end) || !Number.isInteger(step)) {
    return output;
  }
  if (start > end) {
    return output;
  }

  if (step <= 0) {
    return output;
  }

  for (let i=start; i<=end; i=i+step) {
    output.push(i);
  }

  return output;
}

// console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
// console.log(range(5, 3, 3));
