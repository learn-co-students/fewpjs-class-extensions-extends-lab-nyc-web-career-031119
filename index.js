
class Polygon {
  constructor(sides) {
    this.sides = sides;
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
     let largestNum = Math.max(...this.arr);
   return (this.perimeter - largestNum) > largestNum;
  }

   get area(){
    return this.sides[0] * this.sides[1];
  }
}
