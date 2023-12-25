//------------1-check winner-------------------

// function scoreAverage(sc1, sc2, sc3) {
//   let avarage = (sc1 + sc2 + sc3) / 3;
//   return avarage;
// }

// function checkWinner(avarage1, avarage2) {
//   if (avarage1 > avarage2) {
//     console.log(`The winner is : Tream One`);
//   } else if (avarage1 < avarage2) {
//     console.log(`The winner is : Tream Two`);
//   } else {
//     console.log(`No winner!`);
//   }
// }

// --------------2& 3 git num of user which need to be add and add it---------------------

// function getNumberInput(promptMessage) {
//   let userInput;
//   do {
//     userInput = prompt(promptMessage);
//   } while (userInput === null || isNaN(userInput));

//   return parseInt(userInput);
// }

// // Get the number of values to sum
// const numberOfValues = getNumberInput(
//   "Enter the number of values you want to sum:"
// );
// let sum = 0;

// // Take input for each value and calculate the sum
// for (let i = 0; i < numberOfValues; i++) {
//   const currentValue = getNumberInput(`Enter value ${i + 1}:`);
//   sum += currentValue;
// }

// // Display the result on the console
// console.log(`The sum of the entered values is: ${sum}`);

// ------------------------------testing----------------------
// printVariables(10, 2, 5); /* c.   work */
// console.log(printVariables(10, 2, 5));

// function printVariables(value_1, value_2, value_3) {
//   console.log(`the value one : ${value_1}`);
//   console.log(`the value two : ${value_2}`);
//   console.log(`the value three : ${value_3}`);

//   // ----------e  . ---------
//   console.log("arguments =");
//   console.log(arguments); /*test #e*/
// }

// -------------------------
// var value_4 = 3;
// value_5 = 5;

// console.log(`${value_4}`);

// ------------------test #f ----------
// console.log(`value_4 = ${value_4}`);
// console.log(`value_5 = ${value_5}`);
// printVariables(10, 20, 30);
// console.log(`value_4 = ${value_4}`); /*test g*/
// console.log(`value_5 = ${value_5}`);

// --------------------/*test #d */-----------
// printVariables(3, 5);

// ----------/*test #e */------------
// printVariables(3, 5, 10, 15);

// -------test g-- difine after the functin scope-------------
// printVariables(10, 20, 30);
// let value_4 = 90;

// -------test h- 4-3 -------------
// printVariables(10, 20, 30);
// value_4 = 90;
// -------test h- 4-2 -------------
// value_4 = 90;
// printVariables(10, 20, 30);
