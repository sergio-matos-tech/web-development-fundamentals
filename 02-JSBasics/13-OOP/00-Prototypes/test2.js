const rectanglePrototype = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};

function createRectangle(width, height) {
  const rectangle = Object.create(rectanglePrototype);
  rectangle.width = width;
  rectangle.height = height;
  return rectangle;
}

const circlePrototype = {
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
  circumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

function createCircle(radius) {
  const circle = Object.create(circlePrototype);
  circle.radius = radius;
  return circle;
}

// Example usage:
const shapes = [
  createRectangle(10, 5),
  createCircle(7)
];

shapes.forEach(shape => {
  console.log(`Area: ${shape.area()}`);
});