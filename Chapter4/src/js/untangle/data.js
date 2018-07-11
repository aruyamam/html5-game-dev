import untangleGame from './drawing'

function createRandomCircles(width, height) {
   const circleCount = 5;
   const circleRadius = 10;
   
   for (let i = 0; i < circleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      untangleGame.drawCircle(x, y, circleRadius);
   }
};

export default { createRandomCircles };
