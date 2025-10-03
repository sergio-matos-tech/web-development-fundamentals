
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  hex() {
    const { r, g, b } = this;
    return (
      '#' +
      ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()
    );
  }

  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

const red = new Color(255, 0, 0, "red");
console.log(red.rgb()); // "rgb(255, 0, 0)"
console.log(red.hex()); // "#FF0000"
console.log(red.rgba(0.5)); // "rgba(255, 0, 0, 0.5)"
console.log(red);