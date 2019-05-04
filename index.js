class Polygon{
  constructor(array){
    this.array = array;
  }

  get getCount(){
    return this.array.length;
  }

  get perimeter(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return this.array.reduce(reducer);
  }
}

class Triangle extends Polygon{
  get isValid(){
    //The sum of the lengths of any two sides of a triangle
    //is greater than the length of the third side
    let arr1 = this.array[0];
    let arr2 = this.array[1];
    let arr3 = this.array[2];
    if(arr1+arr2>arr3 && arr2+arr3>arr1 && arr1+arr3>arr2){
      return true;
    }else{
      return false;
    }
  }
}

class Square extends Polygon{
  get isValid(){
    let arr1 = this.array[0];
    let arr2 = this.array[1];
    let arr3 = this.array[2];
    let arr4 = this.array[3];
    if(arr1===arr2 && arr1===arr3 && arr1===arr4){
      return true;
    }else{
      return false;
    }
  }

  get area(){
   return Math.pow(this.array[0], 2);
  }
}
// Your code here
