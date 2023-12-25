let image = document.querySelector("img");
let i = 1;
setInterval(() => {
  image.src = `images/${i < 8 ? i++ : (i = 1)}.jpg`;
}, 1000);
