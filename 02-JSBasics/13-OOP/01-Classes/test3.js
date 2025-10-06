class Shape {
    constructor(name) {
        this.name = name;
    }
}


class Rectangle extends Shape {
    constructor(height, width) { 
        super('Rectangle');
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return (this.height + this.width) * 2;
    }
    
    get area() {
        return this.calcArea();
    }
    
    calcArea() {
        return this.height * this.width;
    }

    static description() {
        return 'A rectangle is a quadrilateral with four right angles.';
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    static description() {
        return 'A circle is a shape with all points the same distance from its center.';
    }
}

const square = new Rectangle(10, 10);
console.log(Rectangle.description());
console.log(square.name);
console.log(square.area);

const circle = new Circle(10);
console.log(Circle.description());
console.log(circle.name);
console.log(circle.area);

console.log(square.perimeter());
console.log(circle.perimeter());
console.log('-------------------');
