class Shape {
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}


class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage:
const shapes = [
    new Rectangle(10, 5),
    new Circle(7)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});

