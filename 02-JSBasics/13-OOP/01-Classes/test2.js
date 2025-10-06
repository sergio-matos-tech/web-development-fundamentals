class Rectangle {
    constructor(height, width) { 
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
}

const square = new Rectangle(10, 10);
console.log(square.area);

const poster = new Rectangle(2, 3);
console.log(poster.area);

console.log(square.perimeter());
console.log(poster.perimeter());
console.log('-------------------');