/// moving basket

let moveBasket = function (basketObject, left) {
  window.onkeydown = function (e) {
    if (e.key == "ArrowRight") {
      left += 20;
      basketObject.style.left = left + "px";
    } else if (e.key == "ArrowLeft") {
      left -= 20;
      basketObject.style.left = left + "px";
    }
  };
};

// falling egg

let eggFall = function (eggObject, top) {
  const randomNumber = () => {
    return (
      Math.random() *
      (window.innerWidth - eggObject.getBoundingClientRect().width)
    );
  };
  eggObject.style.left = randomNumber() + "px";
  let id = setInterval(() => {
    top += 10;
    if (top < window.innerHeight - eggObject.height) {
      eggObject.style.top = top + "px";
    } else {
      eggObject.src = "images/brocken.png";
      clearInterval(id);
      let fullAgain = setTimeout(() => {
        //falling egg again

        eggObject.src = "images/egg.jpg";

        eggFall(egg, 0);
      }, 500);
    }
  }, 50);
};

let compareFunc = function (eggObject, basketObj) {
  if (
    basketObj.getBoundingClientRect().left ==
    eggObject.getBoundingClientRect().left
  ) {
    eggObject.style.visibility = "hidden";
  }

  console.log(`basket left value: ${basketObj.getBoundingClientRect().left}`);
  console.log(`egg left value: ${eggObject.getBoundingClientRect().left}`);
};
