// Your code here
class Polygon {
  constructor(sidesArr) {
    this.sides = sidesArr;
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    const sumNums = (accumulator, currentValue) => accumulator + currentValue;
    return this.sides.reduce(sumNums);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const side1 = this.sides[0];
    const side2 = this.sides[1];
    const side3 = this.sides[2];
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const side1 = this.sides[0];
    const side2 = this.sides[1];
    const side3 = this.sides[2];
    const side4 = this.sides[3];

    if (side1 === side2 && side3 === side4 && side1 === side3) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
