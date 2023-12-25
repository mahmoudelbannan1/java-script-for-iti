// 1------------------------------------------

//a.Find all images in page by two ways--------------------------------------
document.getElementsByTagName("img");
console.log(document.getElementsByTagName("img"));
document.querySelectorAll("img");
console.log(document.querySelectorAll("img"));
//b- Find all options for City drop down list. --------------------------------------
console.log(document.querySelectorAll("select option"));
//c- Find all rows(tds) for second table in page.
console.log(document.querySelectorAll(".bGrey td"));
//d- Find all elements that contain class name fontBlue and BGrey.
console.log(document.querySelectorAll(".bGrey.fontBlue"));

////////////////////////////////////////////////////

// const createTrackList = function (trackId, parentElement) {
//   document.body.appendChild(parentElement);
//   document.querySelector(".trackId");
// };

// createTrackList(10, "div");

////3-change image--------------------------
