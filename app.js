// TO CALCULATE THE CIRCUMFRENCE OF A CIRCLE

function circumfrenceCircle(radius) {
  let circumfrence = 2*3.142*radius;
  return circumfrence;
}
console.log(circumfrenceCircle(8));

// COUNT NUMBERS OF CHARACTERS

function nameString(string) {
  return string.length;
}
console.log(nameString("Emmanuel"))

// let name = "Emmanuel"
// let nameChar = name.length;
// console.log(nameChar)

// AVERAGE NUMBERS IN A LIST

function average(num1, num2, num3, num4, num5) {
  let average = (num1 + num2 + num3 + num4 + num5) / 5
  return average;
}
console.log(average(23,44,21,56,27));

// TO CALCULATE AGE OF AN INDIVIDUAL

function ageCalculator(day, month, year) {
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth() + 1;
  let currentDay = date.getDay();

  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay

}