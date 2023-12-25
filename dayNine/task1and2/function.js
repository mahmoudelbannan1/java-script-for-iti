class Person {
  ///class person
  static #couter = 0;
  #fullName;
  constructor(fullName, gender, profilePicture) {
    if (this.constructor != Person) {
      this.fullName = fullName;
      this.gender = gender;
      this.profilePicture = profilePicture;
      Person.#couter++;
    } else {
      throw new Error("can't make object form Person class");
    }
  }
  ///  get counter
  static get couter() {
    return this.#couter;
  }

  get fullName() {
    return this.#fullName;
  }

  set fullName(name) {
    if (name.split(" ").length > 1 && isNaN(name))
      this.#fullName = convertToPascalCase(name);
  }
}

//// convert to pascal case
const convertToPascalCase = function (fullName) {
  const words = fullName.split(" ");
  const pascalCaseString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return pascalCaseString;
};

class Employee extends Person {
  constructor(fullName, gender, profilePicture, salary, language) {
    super(fullName, gender, profilePicture);
    this.salary = salary;
    this.language = language;
  }

  toString() {
    return `The name : ${this.fullName}  Salary : ${this.salary}`;
  }
}

// let employee_4 = new Person("ali mohamed", "male", "pic");  /// thow error  cant mack object from Person class

//create html elements
let createCard = function (employeeObject) {
  let cardContainer = document.createElement("div");
  let empImage = document.createElement("img");
  let empName = document.createElement("p");
  let empGender = document.createElement("p");
  let empSalary = document.createElement("p");
  let empLanguage = document.createElement("p");
  empImage.src = employeeObject.profilePicture;
  empName.textContent = employeeObject.fullName;
  empGender.textContent = employeeObject.gender;
  empSalary.textContent = employeeObject.salary;
  empLanguage.textContent = employeeObject.language;
  cardContainer.append(empImage, empName, empGender, empSalary, empLanguage);
  document.body.append(cardContainer);
};

//tack objects of class
