// Your code here
class Polygon {
  constructor(array){
    this.array = array;
  }
  get getCount() {
    return this.array.length
  }
  get perimeter() {
    return this.array.reduce((a, b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    return this.getCount === 3 ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.getCount === 4 && this.perimeter % 4 === 0 ? true : false;
  }

  get area() {
    return this.array[1] * this.array[2];
  }
}
