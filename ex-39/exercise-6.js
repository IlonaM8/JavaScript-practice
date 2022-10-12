class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

//my class
class AreaCalculator {
  // constructor(figure){
  //   this._figure = figure;
  //   //square
  //   this._side = side;
  //   //retangle
  //   this._width = width;
  //   this._height = height;
  //   //circle
  //   this._radius = radius;
  // }

  // //getter for figure
  // get figure(){
  //   return this._figure;
  // }

  // // getter for square 
  // get square(){
  //   return this._side;
  // }

  // set square(value){
  //   return this._side = value * value;

  // }

 //static method qui
  static calculate(inputFigure){

  if(inputFigure instanceof Square){
    return Math.pow(inputFigure.side, 2)
  } else if(inputFigure instanceof Rectangle){
    return inputFigure.height * inputFigure.width
  } else if(inputFigure instanceof Circle){
    return Math.PI * Math.pow(inputFigure.radius, 2)
  }

}


}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

