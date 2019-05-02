// Your code here
class Polygon {

	constructor(arr) {
		this.number = arr.length;
		this.arr = arr;

	}

	get getCount() {
		return this.number;
	}

	get perimeter() {
		return this.arr.reduce(Polygon.getSum)
	}

	static getSum(total, num) {
		return total + num;
	}
}

class Triangle extends Polygon{

	get isValid() {
		const side1 = this.arr[0];
		const side2 = this.arr[1];
		const side3 = this.arr[2];
		return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
	}
}

class Square extends Polygon{

	get area() {
		return this.arr[0] * this.arr[1];
	}

	get isValid() {
		const side1 = this.arr[0];
		const side2 = this.arr[1];
		const side3 = this.arr[2];
		const side4 = this.arr[3];
		return ((side1 === side2) && (side1 === side3) && (side1 === side4) && (side2 === side3) && (side3 === side4))
	}
}
