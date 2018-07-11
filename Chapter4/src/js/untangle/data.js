import untangleGame from './drawing'

const circles = [],
      lines = [],
      thinLineThickness = 1;

function Circle(x, y, radius) {
   this.x = x;
   this.y = y;
   this.radius = radius;
}

function Line(startPoint, endPoint, thickness) {
   this.startPoint = startPoint;
   this.endPoint = endPoint;
   this.thickness = thickness;
}

function createRandomCircles(width, height) {
   const circleCount = 5;
   const circleRadius = 10;
   
   for (let i = 0; i < circleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      circles.push(new Circle(x, y, circleRadius));
      untangleGame.drawCircle(x, y, circleRadius);
   }
};

export default {
   createRandomCircles,
   Circle,
   Line,
   circles,
   lines,
   thinLineThickness,
};
