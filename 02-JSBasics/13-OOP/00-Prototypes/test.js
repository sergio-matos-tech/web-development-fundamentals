function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

console.log(hex(255, 0, 255));
console.log(rgb(255, 0, 255));
console.log(hex(0, 51, 255));
console.log(rgb(0, 51, 255));


function makeColor(r, g, b, format) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        return `rgb(${this.r},${this.g},${this.b})`;
    };
    color.hex = function() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    };
    color.format = format;
    color.toString = function() {
        if (this.format === "rgb") {
            return this.rgb();
        } else if (this.format === "hex") {
            return this.hex();
        }
    };
    return color;
}

const firstColor = makeColor(35, 255, 150, "rgb");
const secondColor = makeColor(0, 51, 255, "hex");
console.log(firstColor.rgb());
console.log(firstColor.hex());
console.log(firstColor.toString());
console.log(secondColor.rgb());
console.log(secondColor.hex());
console.log(secondColor.toString());


const blackColor = makeColor(0, 0, 0, "rgb");
const whiteColor = makeColor(255, 255, 255, "hex");
const redColor = makeColor(255, 0, 0, "hex");
console.log(blackColor.toString());
console.log(whiteColor.toString());
console.log(redColor.toString());