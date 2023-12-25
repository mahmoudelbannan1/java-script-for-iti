// let firstLitterCapital = function (fullName) {
//   let newName;
//   let word;
//   const words = fullName.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     word[i] = ` ${words[i].charAt(0).toUpperCase()}${words[i]
//       .slice(1)
//       .toLowerCase()}`;
//     newName += word[i];
//   }
//   return newName;
// };

// const convertToPascalCase = function (fullName) {
//   // Split the full name into words
//   const words = fullName.split(" ");

//   // Capitalize the first letter of the first word and convert the rest to lowercase
//   const firstWord =
//     words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

//   // Convert the remaining words to lowercase
//   const remainingWords = words.slice(1).map((word) => word.toLowerCase());

//   // Join the first word with the remaining words to form the Pascal Case string
//   const pascalCaseString = [firstWord, ...remainingWords].join(" ");

//   return pascalCaseString;
// };

/*-----------------1--------------------------*/

const convertToPascalCase = function (fullName) {
  // Split the full name into words
  const words = fullName.split(" ");

  // Capitalize the first letter of each word and convert the rest to lowercase
  const pascalCaseString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return pascalCaseString;
};

/*--------------------------2-----------------*/

let longestWord = function (sentence) {
  let words = sentence.split(" ");
  const theLongstWord = words.reduce((acc, current) => {
    return acc.length > current.length ? acc : current;
  });
  return theLongstWord;
};

/*--------------------------3-----------------*/
let sortingString = function (string) {
  const sortedString = string.split("").sort().join("");
  return sortedString;
};

/*--------------------------4-----------------*/
let getMonth = function () {
  let month = Date().split(" ")[1];
  return month;
};
/*--------------------------5.1-----------------*/
let randomArray = function () {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = Math.ceil(Math.random() * 10);
  }
  return arr;
};
/*--------------------------5.2-----------------*/
let a = "mahmoud khaled elbannan mohamed";

let theSubstring = a.substring(2, 8); // substring(start , end) no negative value-
console.log(theSubstring);

/*--------------------------5.2-----------------*/

let theSubstr = a.substr(2, 8); // substr(start , number of character)
console.log(theSubstr);
