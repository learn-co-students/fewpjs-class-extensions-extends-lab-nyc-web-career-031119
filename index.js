// Your code here
class Polygon {
  constructor(arr){
    this.arr = arr;
  }

  get getCount(){
    return this.arr.length;
  }

  get perimeter(){
    return this.arr.reduce((agg, el) => agg + el);
  }

}

class Triangle extends Polygon {
  get isValid(){
    let largestNum = Math.max(...this.arr);
    return (this.perimeter - largestNum) > largestNum;
  }
}

class Square extends Polygon {
  get isValid(){
    return this.perimeter/4 === this.arr[0];
  }
  get area(){
    return this.arr[0] ** 2
  }
}
