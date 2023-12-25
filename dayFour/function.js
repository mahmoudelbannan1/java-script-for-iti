// const numbers = [2, 1, 3, 2, 7, 17, 2, 8, 4, 3, 6, 10, 9, 12];

// // 2. Sort descending
// const descendingSorted = function (nums) {
//   let sortedNums = nums.sort((a, b) => b - a);
//   return sortedNums;
// };
// console.log(descendingSorted(numbers));

// // 1. Sort ascending
// const ascendingSorted = function (nums) {
//   let sortedNums = nums.sort((a, b) => a - b);
//   return sortedNums;
// };
// console.log(ascendingSorted(numbers));
// // 3. Filter numbers larger than 5
// const filteredNumbers = function (nums) {
//   let neededNums = nums.filter((num) => num > 5);
//   return neededNums;
// };
// console.table(filteredNumbers(numbers));
// console.table(numbers);

// //4.  Display Max and Min Number
// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);
// console.table("Max Number:", maxNumber);
// console.table("Min Number:", minNumber);

// //5. Use Array.from to generate a copy multiplied by 5
// const multipliedBy5 = Array.from(numbers, (num) => num * 5);
// console.table("Array multiplied by 5:", multipliedBy5);

// // 6. Remove repeated numbers
// let uniqueNumbers = new Set(numbers);
// let arrayOfUniqueNumbers = Array.from(uniqueNumbers);
// console.table(`unique numbers ${arrayOfUniqueNumbers}`);

// //7.  Count even numbers
// const countEvenNumbers = numbers.filter((num) => num % 2 === 0).length;
// console.table("Number of even numbers:", countEvenNumbers);

// //8. to strning

// const arrayStringwith = numbers.join("*");
// console.log(arrayStringwith);

//------------------search-----------------

// //------------------1-reduce method----------------
// let sumAllNumbers = numbers.reduce((acc, current) => acc + current);
// console.log(`The sum of array number : ${sumAllNumbers}`);

// //------------------2-find method----------------
// const firstNumGreeterThanTen = numbers.find((num) => num > 10);
// console.log(`the first number greeter than 10 is: ${firstNumGreeterThanTen}`);

// //------------------3-findIndex method----------------
// const firstIndexForNumGreeterThanTen = numbers.findIndex((num) => num > 10);
// console.log(
//   `the first index of number greeter than 10 is: ${firstIndexForNumGreeterThanTen}`
// );
// ////////////////////
// console.log(numbers.includes(10));
// console.log(numbers.indexOf(10));
// ////////////////////
// //------------------4-slice method----------------

// console.log(numbers.slice(0, 3));
// // console.log(removeElementFromIndex2ToIndex4);
// console.log(numbers);

// //------------------5-splice method----------------
// // let spliceFromArray = numbers.splice(2, 2);
// console.log(numbers.splice(2, 2, ""));

// //------------------6-map method----------------
// let lis = document.getElementsByTagName("li");

// // lis.map((li) => console.log(li.innerhtml));
// console.log(lis);

//////////////////////////////////////

//// ---------------Assignment 2--------------

// function generateRandomArray(min, max, length) {
//   // Ensure length is even
//   if (length % 2 !== 0) {
//     length++;
//   }

//   // Create an array with unique random numbers
//   const uniqueNumbers = [];
//   while (uniqueNumbers.length < length / 2) {
//     const randomNumber = Math.floor(Math.random() * 10);

//     if (
//       !uniqueNumbers.includes(randomNumber) &&
//       randomNumber > min &&
//       randomNumber < max
//     ) {
//       uniqueNumbers.push(randomNumber);
//     }
//   }

//   // Duplicate the unique numbers to create the final array
//   const duplicatedNumbers = [...uniqueNumbers, ...uniqueNumbers];

//   return duplicatedNumbers;
// }

// // Example usage:
// const min = prompt("enter min number");
// const max = prompt("enter max number");
// const length = prompt("enter length must be even");

// ///////////////////////
// //---------------Assignment 3--------------

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

//---------------Assignment 4 ------2d array--------

function _2DArrayyOfStudentsGrades() {
  let arrayOfGradesCourses = [];
  //loop over each studernt
  for (let i = 0; i < 4; i++) {
    let arrayOfStudent = [];
    // loop over each course grade for specific student
    for (let j = 0; j < 5; j++) {
      let grade = prompt(
        `Enter the grade for Student ${i + 1} in Course ${j + 1} =`
      );
      if (isNaN(grade) || grade.trim() == "") {
        grade = prompt(
          `Please enter a valid number. Enter the grade for Student ${i++} in Course ${j++} = `
        );
      }
      arrayOfStudent.push(grade);
    }
    arrayOfGradesCourses.push(arrayOfStudent);
  }
  return arrayOfGradesCourses;
}

let result = _2DArrayyOfStudentsGrades();
console.table(result);
// console.log(result[0][1]);

function avrGradeForEachCourse(array) {
  for (let j = 0; j < array[0].length; j++) {
    let totalGrade = 0;
    for (let i = 0; i < array.length; i++) {
      totalGrade += array[i][j];
    }
    let averageGrade = totalGrade / array.length;
    console.log(`Average Grade for Course ${j + 1} =  ${averageGrade}`);
  }
}

avrGradeForEachCourse(result);

function totalGradeForEachStudent(array) {
  for (let i = 0; i < array.length; i++) {
    let totalGrade = 0;
    for (let j = 0; j < array[i].length; j++) {
      totalGrade += array[i][j];
    }
    console.log(`Total Grades for Student ${i++} = ${totalGrade}`);
  }
}

totalGradeForEachStudent(result);
