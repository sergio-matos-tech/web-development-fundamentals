function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
};

// Example usage:
const shapes = [
    new Rectangle(10, 5),
    new Circle(7)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});