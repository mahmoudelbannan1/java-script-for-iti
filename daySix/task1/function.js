let counter = 1;

let image = document.querySelector("img");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let slideShow = document.querySelector(".slideShow");
let stop = document.querySelector(".stop");

// 1-next event
next.addEventListener("click", function () {
  image.setAttribute(
    "src",
    `images/${counter < 8 ? ++counter : (counter = 1)}.jpg`
  );
  console.log("lel");
  //console.log(image.getAttribute("src"));
});

// 2- previous event

previous.addEventListener("click", function () {
  image.setAttribute(
    "src",
    `images/${counter > 1 ? --counter : (counter = 8)}.jpg`
  );
  console.log("lel");
  //console.log(image.getAttribute("src"));
});

// 3- slide show event
let idInterval;
slideShow.addEventListener("click", function () {
  idInterval = setInterval(() => {
    console.log(counter);
    if (++counter <= 8) {
      image.src = `images/${counter}.jpg`;
      // //console.log(image.getAttribute("src"));
    } else {
      counter = 1;
    }
  }, 1000);
});

// 4- stop event
stop.addEventListener("click", function () {
  //console.log(image.getAttribute("src"));
  clearInterval(idInterval);
});
