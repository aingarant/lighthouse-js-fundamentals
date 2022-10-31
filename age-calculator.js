function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return name + " is " + age + " year old.";
}

console.log(ageCalculator("Suzie", 1983, 2015));
