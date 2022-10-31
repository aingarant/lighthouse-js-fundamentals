const whichSchool = function (age) {

  if (age < 13) {
    return "Elementary School";
  }

  if (age < 18) {
    return "Secondary School";
  }

  if (age > 18) {
    return "Lighthouse Labs";
  }
};

console.log(whichSchool(5));
// console.log(whichSchool(15));
// console.log(whichSchool(75));