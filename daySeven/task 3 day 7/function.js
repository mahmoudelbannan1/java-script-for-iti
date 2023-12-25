let leftUl = document.querySelector(".one");
let rightUl = document.querySelector(".two");
let leftLis = document.querySelectorAll(".one li");
let rightLis = document.querySelectorAll(".two li");
let toRight = document.querySelector(".toRight");
let toLeft = document.querySelector(".toLeft");
let courseName = document.querySelector(".inputCorse");
let add = document.querySelector(".addBtn");

// move selected element to Right list

leftUl.onclick = function (e) {
  let target = e.target;
  if (target.tagName == "LI") {
    for (let i = 0; i < leftLis.length; i++) {
      leftLis[i].classList.remove("active");
    }
    target.classList.add("active");
  }
};

toRight.addEventListener("click", function () {
  rightUl.appendChild(document.querySelector(".active"));
});

// move selected element to Right list
rightUl.onclick = function (e) {
  let target = e.target;
  if (target.tagName == "LI") {
    for (let i = 0; i < rightLis.length; i++) {
      rightLis[i].classList.remove("active");
    }
    target.classList.add("active");
  }
};

toLeft.addEventListener("click", function () {
  leftUl.appendChild(document.querySelector(".active"));
});

// add course to left list
add.onclick = function () {
  let newCourse = courseName.value;
  if (newCourse != "") {
    let newLi = document.createElement("li");
    newLi.textContent = newCourse;

    leftUl.appendChild(newLi);
  }
};
