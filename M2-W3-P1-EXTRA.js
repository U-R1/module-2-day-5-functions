// Additional assignments for M2-W3-P1

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
const giveMeRandom = function (n) {
  const array12 = [];
  for (let i = 0; i <= n; i++) {
    array12.push(Math.floor(Math.random() * 10));
  }
  return array12;
};
console.log(giveMeRandom(5));

const checkArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i] + " is bigger than 5");
      sum = sum + arr[i];
    } else {
      console.log(arr[i] + " is not bigger than 5");
    }
  }
  console.log("the sum of the number greater than 5 is " + sum);
};

checkArray(giveMeRandom(5));

/* WRITE YOUR ANSWER HERE */

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart = [
  {
    Id: 5635,
    name: "Laptop",
    price: 600,
    quantity: 2,
  },
  {
    Id: 9905,
    name: "Keyboard",
    price: 50,
    quantity: 3,
  },
  {
    Id: 3005,
    name: "Speaker",
    price: 30,
    quantity: 4,
  },
  {
    Id: 9995,
    name: "Mouse",
    price: 30,
    quantity: 1,
  },
];

const shoppingCartTotal = function () {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total = total + shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
};

console.log(shoppingCartTotal());
/* WRITE YOUR ANSWER HERE */

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

const newItem = {
  id: 4564,
  name: "Headset",
  price: 50,
  quantity: 2,
};

const addToShoppingCart = function (itemToAdd) {
  const newLine = shoppingCart.push(itemToAdd);
  return newLine;
};

console.log(addToShoppingCart(newItem));

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

const maxShoppingCart = function (maxCart) {
  let mostExpensiveItem = maxCart[0];
  for (let i = 0; i < maxCart.length; i++) {
    if (maxCart[i].price > mostExpensiveItem.price) {
      mostExpensiveItem = maxCart[i];
    }
  }
  return mostExpensiveItem;
};

console.log(maxShoppingCart(shoppingCart));

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = function (cart) {
  let lastItem = cart[cart.length - 1];
  return lastItem;
};

console.log(latestShoppingCart(shoppingCart));
/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

const longest = function (arr) {
  let longestString = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
};

console.log(longest(["Laptop", "Keyboard", "Mouse", "Headset"]));
/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

const antiSpam = function (emailContent) {
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    return false;
  } else {
    return true;
  }
};

console.log(antiSpam("SPAM Mail"));
console.log(antiSpam("SCAM Mail"));
console.log(antiSpam("mail"));

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
