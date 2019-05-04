  class Polygon {
    constructor (arr){
      this.arr = arr;
    }

    get getCount() {
      return this.arr.length;
    }

    get perimeter() {
      return this.arr.reduce((agg, elem) =>  agg + elem)
    }
  }

  class Triangle extends Polygon {
    get isValid() {
    const side1 = this.arr[0];
    const side2 = this.arr[1];
    const side3 = this.arr[2];
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      return true;
    } else {
      return false;
    }
   }
  }

  class Square extends Polygon {
    get area() {
      return (this.arr[0] ** 2);
    }

    get isValid() {
      return this.perimeter/4 === this.arr[0];
    }
  }
