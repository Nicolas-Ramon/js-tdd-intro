// Rectangle.js
class Rectangle {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    isSquare() {
  
    }
  
    get getArea() {
      let area = (this.a * this.b);
      return area;
    }
  
    get getPerimeter() {
      let perimeter = (this.a*2) + (this.b*2);
      return perimeter;
    }
  }
  
module.exports = Rectangle;