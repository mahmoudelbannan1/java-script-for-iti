let divObjects = document.querySelectorAll("div");
for (let i = 0; i < divObjects.length; i++) {
  divObjects[i].onclick = function () {
    let cloned = this.cloneNode(true);
    cloned.onclick = this.onclick;
    this.parentElement.append(cloned);
    this.onclick = null;
  };
}

// document.addEventListener("click", function (e) {
//   if (e.target.classList("clonedOneTime")) {
//     e.preventDefault();
//   } else {
//     let clone = e.target.cloneNode(true);
//     document.body.appendChild(clone);
//     console.log(e.target.classList.add("clonedOneTime"));
//   }
// });
