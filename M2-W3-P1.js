/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area = function (li, l2) {
  let result = li * l2;
  return result;
};

let arearesult = area(3, 5);
console.log(arearesult);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazysum = function (int1, int2) {
  if ((result = int1 === int2)) {
    console.log((int1 + int2) * 3);
  } else console.log(int1 + int2);

  return result;
};

let crazyresult = crazysum(2, 2);
let crazyresult2 = crazysum(2, 4);

console.log(crazyresult);
console.log(crazyresult2);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
};

console.log(crazyDiff(50));
console.log(crazyDiff(10));

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(150));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (str) {
  return str.startsWith("Strivers") ? str : "Strive " + str;
};

console.log(strivify("epicode"));
console.log(strivify("Strivers"));

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (a) {
  if (a % 3 === 0 || a % 7 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(check3and7(12));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

const reverseString = function (str) {
  return str.split("").reverse("").join("");
};
console.log(reverseString("Strive"));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(upperFirst("epicode"));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function (str) {
  return str.slice(1, -1);
};
console.log(cutString("epicode"));
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
  const array10 = [];
  for (let i = 0; i <= n; i++) {
    array10.push(Math.floor(Math.random() * 10));
  }
  return array10;
};

console.log(giveMeRandom(9));
/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
