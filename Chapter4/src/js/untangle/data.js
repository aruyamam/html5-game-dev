import untangleGame from './drawing';

const circles = [],
   lines = [],
   thinLineThickness = 1,
   boldLineThickness = 5,
   $game = document.getElementById('game');

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
}

function isIntersect(line1, line2) {
   const a1 = line1.endPoint.y - line1.startPoint.y;
   const b1 = line1.startPoint.x - line1.endPoint.x;
   const c1 = a1 * line1.startPoint.x + b1 * line1.startPoint.y;

   const a2 = line2.endPoint.y - line2.startPoint.y;
   const b2 = line2.startPoint.x - line2.endPoint.x;
   const c2 = a2 * line2.startPoint.x + b2 * line2.startPoint.y;

   const d = a1 * b2 - a2 * b1;

   if (d === 0) {
      return false;
   }

   const x = (b2 * c1 - b1 * c2) / d;
   const y = (a1 * c2 - a2 * c1) / d;

   if (
      (isInBetween(line1.startPoint.x, x, line1.endPoint.x) ||
         isInBetween(line1.startPoint.y, y, line1.endPoint.y)) &&
      (isInBetween(line2.startPoint.x, x, line2.endPoint.x) ||
         isInBetween(line2.startPoint.y, y, line2.endPoint.y))
   ) {
      return true;
   }

   return false;
}

function isInBetween(a, b, c) {
   if (Math.abs(a - b) < 0.000001 || Math.abs(b - c) < 0.000001) {
      return false;
   }

   return (a < b && b < c) || (c < b && b < a);
}

function updateLineIntersection() {
   for (let i = 0; i < untangleGame.lines.length; i++) {
         for (let j = 0; j < i; j++) {
            const line1 = untangleGame.lines[i];
         const line2 = untangleGame.lines[j];

         if (isIntersect(line1, line2)) {
            line1.thickness = boldLineThickness;
            line2.thickness = boldLineThickness;
         }
      }
   }
}

export default {
   createRandomCircles,
   updateLineIntersection,
   Circle,
   Line,
   circles,
   lines,
   thinLineThickness,
   boldLineThickness,
   $game
};
