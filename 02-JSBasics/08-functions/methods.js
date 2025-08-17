const square = {
  area: function (length) {
    return length ** 2;
  },

  perimeter: function (length) {
    return length * 4;
  },
};

console.log(square.area(10));
console.log(square.perimeter(10));
