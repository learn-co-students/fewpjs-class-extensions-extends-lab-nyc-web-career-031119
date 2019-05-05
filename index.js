class Polygon {
  constructor(sides) {
    this.sides = sides.sort((a,b) => a-b);
  }

  get getCount(){
    return this.sides.length;
  }

  get perimeter(){
    return this.sides.reduce((acc, side) => acc + side);
  }
}

class Triangle extends Polygon {
  get isValid(){
    return (this.sides[0] > 0 && this.sides[0] + this.sides[1] > this.sides[2]);
  }
}

class Square extends Polygon {
  get isValid(){
    return (this.sides[0] === this.sides[3]);
  }

  get area(){
    return this.sides[0]**2;
  }
}
