let employee_1 = new Employee(
  "mahmoud khaled",
  "male",
  "m.PNG",
  10000,
  "english"
);

createCard(employee_1); //call createCard to make object card on body
let employee_2 = new Employee("ali mohamed", "male", "m.PNG", 10000, "Arabic");
createCard(employee_2);
let employee_3 = new Employee(
  "habiba ahmed",
  "female",
  "f.PNG",
  10000,
  "frinch"
);
createCard(employee_3);
let employee_4 = new Employee(
  "renad ahmed",
  "female",
  "f.PNG",
  10000,
  "frinch"
);
createCard(employee_4);

console.log(`number of objects =${Person.couter}`); //////print number of objects
