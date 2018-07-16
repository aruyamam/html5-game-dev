import untangleGame from './drawing';

untangleGame.handleInput = function () {
   const $game = untangleGame.$game;

   $game.addEventListener('mousedown', handleDown);
   $game.addEventListener('touchstart', handleDown);

   function handleDown(e) {
      e.preventDefault();

      const touch = e.touches && e.touches[0];
      const pageX = (touch || e).pageX;
      const pageY = (touch || e).pageY;

      const canvasPosition = this.getBoundingClientRect();
      const mouseX = pageX - canvasPosition.left;
      const mouseY = pageY - canvasPosition.top;

      for (let i = 0; i < untangleGame.circles.length; i++) {
         const circleX = untangleGame.circles[i].x;
         const circleY = untangleGame.circles[i].y;
         const radius = untangleGame.circles[i].radius;
         if (Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2) < Math.pow(radius, 2)) {
            untangleGame.targetCircleIndex = i;
            break;
         }
      }
   }

   $game.addEventListener('mousemove', handleMove);
   $game.addEventListener('touchmove', handleMove);

   function handleMove(e) {
      if (untangleGame.targetCircleIndex !== undefined) {

         e.preventDefault();

         const touch = e.touches && e.touches[0];
         const pageX = (touch || e).pageX;
         const pageY = (touch || e).pageY;

         const canvasPosition = this.getBoundingClientRect();
         const mouseX = pageX - canvasPosition.left;
         const mouseY = pageY - canvasPosition.top;
         const circle = untangleGame.circles[untangleGame.targetCircleIndex];
         circle.x = mouseX;
         circle.y = mouseY;
      }
      untangleGame.connectCircles();
      untangleGame.updateLineIntersection();
   }

   $game.addEventListener('mouseup', handleUp);
   $game.addEventListener('touchend', handleUp);

   function handleUp(e) {
      untangleGame.targetCircleIndex = undefined;
   }
};

export default untangleGame;
