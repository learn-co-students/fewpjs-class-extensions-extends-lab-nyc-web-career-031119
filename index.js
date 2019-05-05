class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  get getCount() {
    return this.arr.length;
  }

  get perimeter() {
    function getSum(total, num) {
  return total + num;
}
    return this.arr.reduce(getSum);
  }
}

class Triangle extends Polygon{
  get isValid(){
    return (this.arr[0] > 0 && this.arr[0] + this.arr[1] > this.arr[2]);
  }

}

class Square extends Polygon{
  get isValid(){
    return this.perimeter/4 === this.arr[0];
  }
  get area(){
    return (this.arr[0] ** 2);
  }
}
