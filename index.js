class Polygon {
  constructor(array) {
    this.sides = array.sort((a,b) => a-b);
  }

  get getCount(){
    return this.sides.length;
  }

  get perimeter(){
    return this.sides.reduce((a,b) => a+b, 0);
  }
};

class Triangle extends Polygon {

  get isValid(){
    return this.getCount === 3 && this.sides[0] + this.sides[1] > this.sides[2] ? true : false ;
  }
}

class Square extends Polygon {

  get isValid(){
    return this.getCount === 4 && this.perimeter % 4 === 0 ? true : false;
  }

  get area(){
    return this.sides[0] * this.sides[1];
  }
}
