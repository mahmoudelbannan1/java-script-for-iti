let ball = {
  top: 10,
  left: 20,
  radius: 30,
  color: "red",
  area: () => 4 * 3.14 * ball.radius ** 2,

  toString() {
    return `top: ${this.top} left: ${this.left} radius: ${this.radius} coulor: ${this.color}`;
  },
};

console.log(ball.top);
console.log(ball["top"]);
console.log(ball.toString());
console.log(ball.area());
console.log(ball["toString"]());
console.log(ball);
ball.height = 3330;
ball.height_2 = 3330;
console.log(ball.height);
console.log(ball);
delete ball.height;

let balls = [
  {
    top: 10,
    left: 10,
    radius: 30,
    color: "red",
    area: function () {
      return 4 * 3.14 * this.radius ** 2;
    },
  },
  {
    top: 70,
    left: 20,
    radius: 80,
    color: "green",
    area: function () {
      return 4 * 3.14 * this.radius ** 2;
    },
  },
  {
    top: 70,
    left: 35,
    radius: 50,
    color: "black",
    area: function () {
      return 4 * 3.14 * this.radius ** 2;
    },
  },
];

for (let i = 0; i < balls.length; i++) {
  console.log(balls[i].color);
  console.log(balls[i].area());
}
for (let i = 0; i < balls.length; i++) {
  if (balls[i].top == balls[i + 1].top) {
    console.table(ball.sort((a, b) => a.left - b.left));
    break;
  } else {
    console.table(balls.sort((a, b) => a.top - b.top));
    break;
  }
}
