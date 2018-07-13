import untangleGame from './drawing';

untangleGame.handleInput = function () {
   const $game = untangleGame.$game;
   $game.addEventListener('mousedown', function (e) {
      const canvasPosition = this.getBoundingClientRect();
      const mouseX = e.pageX - canvasPosition.left;
      const mouseY = e.pageY - canvasPosition.top;

      for (let i = 0; i < untangleGame.circles.length; i++) {
         const circleX = untangleGame.circles[i].x;
         const circleY = untangleGame.circles[i].y;
         const radius = untangleGame.circles[i].radius;
         if (Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2) < Math.pow(radius, 2)) {
            untangleGame.targetCircleIndex = i;
            break;
         }
      }
   });

   $game.addEventListener('mousemove', function (e) {
      if (untangleGame.targetCircleIndex !== undefined) {
         const canvasPosition = this.getBoundingClientRect();
         const mouseX = e.pageX - canvasPosition.left;
         const mouseY = e.pageY - canvasPosition.top;
         const circle = untangleGame.circles[untangleGame.targetCircleIndex];
         circle.x = mouseX;
         circle.y = mouseY;
      }
      untangleGame.connectCircles();
   });

   $game.addEventListener('mouseup', function (e) {
      untangleGame.targetCircleIndex = undefined;
   });
};

export default untangleGame;
