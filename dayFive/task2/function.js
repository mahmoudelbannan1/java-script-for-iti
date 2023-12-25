// Create Track List
const createTrackList = function (trackId, parentElement) {
  const ulObject = document.createElement("ul");
  ulObject.id = trackId;
  parentElement.appendChild(ulObject);
  return ulObject; // Return the created UL element
};

// Add Course to Track List
function addCourse(courseName, listTrackElement) {
  const courseItem = document.createElement("li");
  courseItem.innerText = courseName;
  listTrackElement.appendChild(courseItem);
}

// Remove Course from Track List
function removeCourse(courseName, listTrackElement) {
  const courseItems = listTrackElement.getElementsByTagName("li");
  for (const i = 0; i < courseItems.length; i++) {
    if (courseItems[i].textContent === courseName) {
      listTrackElement.removeChild(courseItems[i]);
      break; // Stop the loop after removing the first occurrence
    }
  }
}
// move Course from Track List
const moveCourse = function (courseName, TargetListTrackElement) {
  const lis = document.querySelectorAll("ul li");
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].textContent == courseName) {
      TargetListTrackElement.appendChild(lis[i]);
    }
  }
};
