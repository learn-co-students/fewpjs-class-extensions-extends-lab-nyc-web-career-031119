// Your code here
class Polygon {
  constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers;
  }

  get getCount() {
    return this.arrayOfIntegers.length;
  }

  get perimeter() {
    let perimeter = 0;
    this.arrayOfIntegers.forEach(function(number) {
      perimeter += number;
    })
    return perimeter;
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.arrayOfIntegers[0] + this.arrayOfIntegers[1] > this.arrayOfIntegers[2] &&
    this.arrayOfIntegers[0] + this.arrayOfIntegers[2] > this.arrayOfIntegers[1] &&
    this.arrayOfIntegers[1] + this.arrayOfIntegers[2] > this.arrayOfIntegers[0]) {
      return true
    }
    else {
      return false
    }
  }

}

class Square extends Polygon {

  get isValid() {
    if (this.arrayOfIntegers[0] === this.arrayOfIntegers[1] &&
    this.arrayOfIntegers[0] === this.arrayOfIntegers[2] &&
    this.arrayOfIntegers[0] === this.arrayOfIntegers[3] &&
    this.arrayOfIntegers[1] === this.arrayOfIntegers[2] &&
    this.arrayOfIntegers[1] === this.arrayOfIntegers[3] &&
    this.arrayOfIntegers[2] === this.arrayOfIntegers[3]) {
      return true
    }
    else {
      return false
    }
  }

  get area() {
    return this.arrayOfIntegers[0] ** 2
  }
}
