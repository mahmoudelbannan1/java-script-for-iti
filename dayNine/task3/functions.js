window.addEventListener("load", function () {
  let name = document.querySelector("input[name = studentName]");
  let grade = document.querySelector("input[name = studentGrade]");
  let addButton = document.querySelector("input[value = Add]");
  // let filter = document.querySelector("input[name = searchTxt]");
  let container = document.querySelector(".container");

  let objArr = [];

  addButton.onclick = function () {
    let department = document.querySelector("input[name=Department]:checked");

    let departmentValue = department.value;

    let studentName = name.value;
    let studentGrade = grade.value;

    if (studentName != "" && isNaN(studentName)) {
      let myStudent = new Student(departmentValue, studentName, studentGrade);
      objArr.push(myStudent);
      console.log(objArr);
      addCourse(objArr[objArr.length - 1]);
    }
  };

  let addCourse = function (myStudent) {
    let tableRow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    console.log(objArr);
    cell1.textContent = objArr[objArr.length - 1].name;
    cell2.textContent = objArr[objArr.length - 1].grade;
    cell3.textContent = "x";
    tableRow.append(cell1, cell2, cell3);
    container.append(tableRow);
    tableRow.classList.add(objArr[objArr.length - 1].department);
  };
});
let search = document.querySelector("input[name = searchTxt]");

search.onblur = function () {
  objArr.filter((row) => {});
};
